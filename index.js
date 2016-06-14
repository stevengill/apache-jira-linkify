var path = require('path');
var fs = require('fs');
var streamLinkifier = require("./streamLinkifier.js");

module.exports.file = file;
module.exports.folder = folder;

/**
 *	Takes a markdown file and replaces all instances of JIRA issue 
 *	with a markdown formatted hyperlink to the issue.
 * 
 * @param  {String} path of md file relative to your working directory
 * @param  {String} optional Apache prefix to be searched for, default is "CB"
 * @param  {Function} optional callback with signature function(err, filepath)
 * @return {none}	none
 */
function file(markdownFile, apachePrefix, callback){
	if (arguments.length == 2) {
		if (typeof apachePrefix === "function") {
			callback = apachePrefix;
			apachePrefix = "CB";
		}
	}
	markdownFile = path.resolve(markdownFile);
	apachePrefix = apachePrefix || "CB"; //optional; default = "CB"
	callback = callback || function(error, filepath){}; //optional
	try {
    	fs.accessSync(markdownFile, fs.F_OK);
    	if (path.extname(markdownFile) != ".md") {
			console.error("Expecting .md file. Got: " + markdownFile);
			callback(true, markdownFile);
		} else {
			try {
				var stream = fs.createReadStream(markdownFile).pipe(streamLinkifier(apachePrefix)).pipe(fs.createWriteStream(markdownFile+".txt"));
				stream.on('finish', function () {
					fs.unlink(markdownFile, function (err) {
						if (err) { 
							callback(true, markdownFile);
							throw err;
						}
						fs.rename(markdownFile+".txt", markdownFile, function (err) {
							if (err) { 
								callback(true, markdownFile);
								throw err;
							}
							console.log("Done formatting JIRA links for: " + markdownFile);
							callback(false, markdownFile);
						});
					});
				});
			} catch (e) {
				console.error("Failed to linkify: " + markdownFile);
				callback(e, markdownFile);
			}
		}
	} catch (e) {
	    console.error("Failed to Linkify; file does not exist: " + markdownFile);
	    callback(true, markdownFile);
	}
}

/**
 *	Takes a folder and replaces all instances of JIRA issue code 
 *	in any markdown files in the folder
 *	with a markdown formatted hyperlink to the issue.
 *	No working tests, but manual tests work.
 * 
 * @param  {String} path of folder relative to your working directory
 * @param  {String} optional Apache prefix to be searched for, default is "CB"
 * @param  {Function} optional callback with signature function(err, filepathArray) 
 * where filepathArray is an array of the relative files that were succesfully formated
 * @return {none}	none
 */
function folder(dir, apachePrefix, callback) {
	if (arguments.length == 2) {
		if (typeof apachePrefix === "function") {
			callback = apachePrefix;
			apachePrefix = "CB";
		}
	}
	apachePrefix = apachePrefix || "CB"; //optional; default = "CB"
	callback = callback || function(error, filepathArray){}; 
	var fs = require('fs');
	var path = require('path');
	var counter = 0;
	var files = [];
	dir = path.resolve(dir); 
	fs.readdir(dir, 
		function callback(err, list) {
			if (err) {
				console.error("Failed to linkify folder: " + dir);
				callback(true, []);
			} else {
				console.log("Formatting JIRA links for all files in: " + dir);
				for (var i = 0; i < list.length; i++) {
					if (path.extname(list[i]) == ".md") {
						file(dir+"/"+list[i], apachePrefix, function(err, filepath) {
							counter++;
							if (!err) {
								files.push(dir+"/"+list[i])
							}
							if (counter = list.length) {
								callback(false, files);
							}
						});
					}
				}		
			}
		}
	)
}