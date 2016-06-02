var child_process = require('child_process');
var path = require('path');
var fs = require('fs');
require('shelljs/global');
var streamLinkifier = require("./streamLinkifier.js");

module.exports.file = file;
module.exports.folder = folder;

function file(markdownFile, apachePrefix, callback){
	apachePrefix = apachePrefix || "CB";
	callback = callback || function(success){};
	try {
    	fs.accessSync(markdownFile, fs.F_OK);
    	if (path.extname(markdownFile) != ".md") {
			console.error("Expecting .md file. Got: " + markdownFile);
			callback(false);
		} else {
			try {
				var stream = fs.createReadStream(markdownFile).pipe(streamLinkifier(apachePrefix)).pipe(fs.createWriteStream(markdownFile+".txt"));
				stream.on('finish', function () {
					fs.unlink(markdownFile, function () {
						fs.rename(markdownFile+".txt", markdownFile, function () {
							console.log("Done formatting JIRA links for: " + markdownFile);
							callback(true);
						});
					});
				});
			} catch (e) {
				console.log(e);
				callback(false);
				console.error("Failed to linkify: " + markdownFile);
			}
		}
	} catch (e) {
		console.log(cwd);
		callback(false);
	    console.error("File does not exist: " + markdownFile);
	}
}

function folder(folder, callback) {
	for each filename in the folder:
		file(filename)
}