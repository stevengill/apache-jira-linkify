var child_process = require('child_process');
var path = require('path');
var fs = require('fs');
require('shelljs/global');

/**
 * No return value. Rewrites any Apache Cordova RELEASENOTES.md file, replacing
 * all instances of JIRA Issue Codes as a markdown hyperlink to the issue online at
 * https://issues.apache.org/jira/. 
 * Intended usage in cordova-coho/src/update-release-notes.js
 *
 * @param  markdownFile  a relative (to the current working dir) PATH giving the 
 *                       location of the RELEASENOTES.md file to be processed
 * @param  callback(optional argument) signature is function(boolean); 
 *                       used for testing (see tests/test.js)
 *                       the boolean is true if linkify is successful and false otherwise
 *
 */
module.exports = function(markdownFile, callback){
	var callback = callback || function(success){};
	var sh = require("shelljs");
	var cwd = sh.pwd();	
	try {
    	fs.accessSync(markdownFile, fs.F_OK);
    	if (path.extname(markdownFile) != ".md") {
			console.error("Expecting .md file. Got: " + markdownFile);
			callback(false);
		} else {
			
			var output = child_process.spawnSync("./linkify-bugs.sh", [cwd+"/"+markdownFile], {'cwd':__dirname, 'timeout':10000});
			if (output.error) {
				callback(false);
				console.error("Failed to linkify: " + markdownFile);
			} else {
				console.log("Done formatting JIRA links for: " + markdownFile);
				callback(true);
			}
		}
	} catch (e) {
		console.log(cwd);
		callback(false);
	    console.error("File does not exist: " + markdownFile);
	}
}


//ToDo:
//*** Add promises (or throw error)
//** Operate on dir
//** prefix to project as arg (optional def: CB)
//* in coho .then
