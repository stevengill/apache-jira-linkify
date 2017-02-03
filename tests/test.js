var test = require('tape');

var child_process = require('child_process');
var fs = require('fs');
var Stream = require('stream');

var jiraLinker = require('../index').file;
var jiraFolderLinker = require('../index').folder;
var jiraStream = require('../index').stream;

// uncomment or move to different file for easy cmd testing: echo "test string" | node test.js
// var streamLinkifier = require("../streamLinkifier.js");
// process.stdin
// 	.pipe(streamLinkifier("CB"))
// 	.pipe(process.stdout)

// Test fixtures!
var linesIn = "* CB-8320 Setting up gradle so we can use CordovaLib as a standard Android Library\n\
* CB-8328 Allow plugins to handle certificate challenges (close #150)\n\
* CB-8329 Cancel outstanding ActivityResult requests when a new startActivityForResult occurs\n\
* CB-8378 Removed `hidekeyboard` and `showkeyboard` events (apps should use a plugin instead)";

var linesOut = "* [CB-8320](https://issues.apache.org/jira/browse/CB-8320) Setting up gradle so we can use CordovaLib as a standard Android Library\n\
* [CB-8328](https://issues.apache.org/jira/browse/CB-8328) Allow plugins to handle certificate challenges (close #150)\n\
* [CB-8329](https://issues.apache.org/jira/browse/CB-8329) Cancel outstanding ActivityResult requests when a new startActivityForResult occurs\n\
* [CB-8378](https://issues.apache.org/jira/browse/CB-8378) Removed `hidekeyboard` and `showkeyboard` events (apps should use a plugin instead)";

function setUp() {
	child_process.spawnSync("rm", ["-rf", "tmp"], {"cwd": __dirname});
	child_process.spawnSync("mkdir", ["tmp"], {"cwd": __dirname});
	process.chdir(__dirname + "/tmp");
}

test('single line', function (t) {
	t.plan(3);
    setUp();
    fs.writeFile("test.md", "* CB-1234 Testing line 1234", function(err) {
        if (err) {
            return t.error(err);
        } else {
            jiraLinker("test.md", function(err, file) {
                if (!err) {
                    fs.readFile("test.md", 'utf8', function(err, contents) {
                        t.equal(contents,
                            "* [CB-1234](https://issues.apache.org/jira/browse/CB-1234) Testing line 1234");
                    });
                } else {
                    t.fail("Error calling jiraLinker");
                }
            });
        }
    });
    fs.writeFile("test1.md", "* [CB-1234] Testing line 1234", function(err) {
        if (err) {
            return t.error(err);
        } else {
            jiraLinker("test1.md", function(err, file) {
                if (!err) {
                    fs.readFile("test1.md", 'utf8', function(err, contents) {
                        t.equal(contents,
                            "* [CB-1234](https://issues.apache.org/jira/browse/CB-1234) Testing line 1234");
                    });
                } else {
                    t.fail("Error calling jiraLinker");
                }
            });
        }
    });
    fs.writeFile("test2.md", "* CB-10096: Upgrading to Gradle Plugin 2.1.0", function(err) {
        if (err) {
            return t.error(err);
        } else {
            jiraLinker("test2.md", function(err, file) {
                if (!err) {
                    fs.readFile("test2.md", 'utf8', function(err, contents) {
                        t.equal(contents,
                            "* [CB-10096](https://issues.apache.org/jira/browse/CB-10096) Upgrading to Gradle Plugin 2.1.0");
                    });
                } else {
                    t.fail("Error calling jiraLinker");
                }
            });
        }
    });
});

test('one file in current folder, second file in deep folder', function (t) {
	t.plan(2);

    setUp();
    fs.writeFile("test.md", "* [AA-1234] Testing line 1234", function(err) {
        if (err) {
            return t.error(err);
        } else {
            jiraLinker("test.md", "AA", function(err, file) {
                if (!err) {
                    fs.readFile("test.md", 'utf8', function(err, contents) {
                        t.equal(contents,
                            "* [AA-1234](https://issues.apache.org/jira/browse/AA-1234) Testing line 1234");
                    });
                } else {
                    t.fail("Error calling jiraLinker on current level");
                }
            });
        }
    });
    child_process.spawnSync("mkdir", ["tmp/tmp1"], {"cwd": __dirname});
    fs.writeFile("tmp1/test.md", "* [CB-1234] Testing line 1234", function(err) {
        if (err) {
            return t.error(err);
        } else {
            jiraLinker("tmp1/test.md", "CB", function(err) {
                if (!err) {
                    fs.readFile("tmp1/test.md", 'utf8', function(err, contents) {
                        t.equal(contents,
                            "* [CB-1234](https://issues.apache.org/jira/browse/CB-1234) Testing line 1234");
                    });
                } else {
                    t.fail("Error calling jiraLinker on deeper level")
                }
            });
        }
    });
});

test('calling on a file one level up', function (t) {
	t.plan(1);
    setUp();
    fs.writeFile("test.md", "* [CB-1234] Testing line 1234", function(err) {
        if (err) {
            return t.error(err);
        } else {
            child_process.spawnSync("mkdir", ["tmp/tmp1"], {"cwd": __dirname});
            process.chdir(__dirname + "/tmp/tmp1");
            jiraLinker("../test.md", "CB", function(err, file) {
                if (!err) {
                    fs.readFile("../test.md", 'utf8', function(err, contents) {
                        t.equal(contents,
                            "* [CB-1234](https://issues.apache.org/jira/browse/CB-1234) Testing line 1234");
                    });
                } else {
                    t.fail("Error calling jiraLinker on current level");
                }
            });
        }
    });
});

test('Many lines', function (t) {
	t.plan(1);
	setUp();
    fs.writeFile("test.md", linesIn, function(err) {
        if (err) {
            return t.error(err);
        } else {
            jiraLinker("test.md", "CB", function(err, file) {
                if (!err) {
                    fs.readFile("test.md", 'utf8', function(err, contents) {
                        t.equal(contents, linesOut);
                    });
                } else {
                    t.fail("Error calling jiraLinker");
                }
            });
        }
    });
});

test('Stream w/ many lines', function (t) {
    var transformer = jiraStream('CB');
    // Set up basic read stream to pump input fixtures in
    var readable = new Stream.Readable();
    readable._read = function(){}; // noop
    readable.push(linesIn);
    readable.push(null);
    // Set up write output for verification on the other end
    var writable = new Stream.Writable();
    var data = '';
    writable._write = function(chunk, encoding, done) {
        data += chunk.toString();
        done();
    }
    writable.on('finish', function() {
        t.equal(data, linesOut, 'Stream output transforms input to markdown-style links appropriately');
    });
    t.plan(1);
    // Connect the streams up!
    readable.pipe(transformer).pipe(writable);
});

// Couldn't write tests :(
// test('files in a folder', function (t) {
// 	t.plan(3);

// 	setTimeout(function() {
// 		setUp();
// 		child_process.spawnSync("mkdir", ["tmp/tmp2"], {"cwd": __dirname});
// 		fs.writeFileSync("tmp2/test1.md", "* [CB-1234] Testing line 1234");
// 		fs.writeFileSync("tmp2/test2.md", "* [CB-1234] Testing line 1234");
// 		fs.writeFileSync("tmp2/test3.md", "* [CB-1234] Testing line 1234");
// 		jiraFolderLinker("tmp2", "CB", function(err, fileArray) {
// 					console.log(fileArray);
// 				    for (var i = 0; i < fileArray; i++) {
// 							fs.readFile(fileArray[i], 'utf8', function(err, contents) {
// 					    		t.equal(contents,
// 					    			"* [CB-1234](https://issues.apache.org/jira/browse/CB-1234) Testing line 1234");
// 					    	});
// 					}
// 		    	});

// 	}, 10000);
// });

test.onFinish(function() {
	child_process.spawn("rm", ["-rf", "tmp"], {"cwd": __dirname});
	process.chdir(__dirname + "/..");
});
