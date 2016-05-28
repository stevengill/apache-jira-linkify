var test = require('tape');
var jiraLinker = require('../index');




function setUp() {
	var child_process = require('child_process');
	child_process.spawnSync("rm", ["-rf", "tmp"], {"cwd": __dirname});
	child_process.spawnSync("mkdir", ["tmp"], {"cwd": __dirname});
	process.chdir(__dirname + "/tmp");
	var sh = require("shelljs");
	var cwd = sh.pwd();
	console.log(cwd);
}

function cleanUp() {
	var child_process = require('child_process');
	child_process.spawn("rm", ["-rf", "tmp"], {"cwd": __dirname});
	process.chdir(__dirname + "/..");

}

test('single line', function (t) {
	var fs = require('fs');
	t.plan(1);
	setTimeout(function() {
		setUp();
		var sh = require("shelljs");
		fs.writeFile("test.md", "* [CB-1234] Testing line 1234", function(err) {
		    if(err) {
		        return t.error(err);
		    } else{
		    	jiraLinker("test.md", function(succeeded) {
		    		if (succeeded) {
				    	fs.readFile("test.md", 'utf8', function(err, contents) {
				    		t.equal(contents, 
				    			"* [CB-1234](https://issues.apache.org/jira/browse/CB-1234) Testing line 1234"); 
				    	});
				   	} else {
				   		t.fail("Error calling jiraLinker")
				   	}
		    	});
		    }
		});
	}, 200); 
});

test('one file in current folder, second file in deep folder', function (t) {
	var fs = require('fs');
	t.plan(2);
	
	setTimeout(function() {
		setUp();
		fs.writeFile("test.md", "* [CB-1234] Testing line 1234", function(err) {
		    if(err) {
		        return t.error(err);
		    } else{
		    	jiraLinker("test.md", function(succeeded) {
		    		if (succeeded) {
				    	fs.readFile("test.md", 'utf8', function(err, contents) {
				    		t.equal(contents, 
				    			"* [CB-1234](https://issues.apache.org/jira/browse/CB-1234) Testing line 1234"); 
				    	});
				   	} else {
				   		t.fail("Error calling jiraLinker on current level")
				   	}
		    	});
		    }
		});
		var child_process = require('child_process');
		child_process.spawnSync("mkdir", ["tmp/tmp1"], {"cwd": __dirname});
		fs.writeFile("tmp1/test.md", "* [CB-1234] Testing line 1234", function(err) {
		    if(err) {
		        return t.error(err);
		    } else{
		    	jiraLinker("tmp1/test.md", function(succeeded) {
		    		if (succeeded) {
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
	}, 400); 
});

test('calling on a file one level up', function (t) {
	var fs = require('fs');
	t.plan(1);
	setTimeout(function() {
		setUp();
		fs.writeFile("test.md", "* [CB-1234] Testing line 1234", function(err) {
		    if(err) {
		        return t.error(err);
		    } else{
		    	var child_process = require('child_process');
				child_process.spawn("mkdir", ["tmp/tmp1"], {"cwd": __dirname});
				process.chdir("tmp1");
		    	jiraLinker("../test.md", function(succeeded) {
		    		if (succeeded) {
				    	fs.readFile("../test.md", 'utf8', function(err, contents) {
				    		t.equal(contents, 
				    			"* [CB-1234](https://issues.apache.org/jira/browse/CB-1234) Testing line 1234"); 
				    	});
				   	} else {
				   		t.fail("Error calling jiraLinker on current level")
				   	}
		    	});
		    }
		});
	}, 400); 
});


test('Many lines', function (t) {

var linesIn = "* CB-8320 Setting up gradle so we can use CordovaLib as a standard Android Library\n\
* CB-8328 Allow plugins to handle certificate challenges (close #150)\n\
* CB-8329 Cancel outstanding ActivityResult requests when a new startActivityForResult occurs\n\
* CB-8378 Removed `hidekeyboard` and `showkeyboard` events (apps should use a plugin instead)";

var linesOut = "* [CB-8320](https://issues.apache.org/jira/browse/CB-8320) Setting up gradle so we can use CordovaLib as a standard Android Library\n\
* [CB-8328](https://issues.apache.org/jira/browse/CB-8328) Allow plugins to handle certificate challenges (close #150)\n\
* [CB-8329](https://issues.apache.org/jira/browse/CB-8329) Cancel outstanding ActivityResult requests when a new startActivityForResult occurs\n\
* [CB-8378](https://issues.apache.org/jira/browse/CB-8378) Removed `hidekeyboard` and `showkeyboard` events (apps should use a plugin instead)";

	var fs = require('fs');
	t.plan(1);
	setUp();
	setTimeout(function() {
		fs.writeFile("test.md", linesIn, function(err) {
		    if(err) {
		        return t.error(err);
		    } else{
		    	jiraLinker("test.md", function(succeeded) {
		    		if (succeeded) {
				    	fs.readFile("test.md", 'utf8', function(err, contents) {
				    		t.equal(contents, linesOut); 
				    	});
				   	} else {
				   		t.fail("Error calling jiraLinker")
				   	}
		    	});
		    }
		});
	}, 2000); 

});

//ToDo: Fix so that it doesn't replace not JIRA codes like CB-1234C
//ToDo: Should this replace all instances after the first one?
// test('two lines in one', function (t) {
// 	var fs = require('fs');
// 	t.plan(1);
//  setUp();
// 	setTimeout(function() {
// 		fs.writeFile("test.md", "* CB-1234 Testing line 1234 CB-1234C Testing line 1234 ", function(err) {
// 		    if(err) {
// 		        return t.error(err);
// 		    } else{
// 		    	jiraLinker("test.md", function(succeeded) {
// 		    		if (succeeded) {
// 				    	fs.readFile("test.md", 'utf8', function(err, contents) {
// 				    		t.equal(contents, 
// 				    			"* CB-1234(https://issues.apache.org/jira/browse/CB-1234) Testing line 1234 CB-1234C Testing line 1234 "); 
// 				    	});
// 				   	} else {
// 				   		t.fail("Error calling jiraLinker")
// 				   	}
// 		    	});
// 		    }
// 		});
// 	}, 200); 
// });

test('clean up [NOT A TEST]', function(t) {
	cleanUp();
	t.end();
});
