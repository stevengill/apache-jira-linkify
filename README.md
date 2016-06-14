This module formats any markdown files with references to Apache Jira issues to be hyperlinks to the issue itself. 

## Supports
	- individual markdown files relative to current working directory
	- folders (will format all markdown files within)
	- any Apache JIRA prefix; default is "CB"
	- bracketed, nonbracketed, and colon'ed Apache JIRA issues
		- i.e "[CB-1234]" and "CB-1234" and "CB-1234:"

## Usage
```javascript
var linkifier = require("jira-linkify");
linkifier.file("test.md");
linkifier.file("test.md", "AA"); //default callback does nothing
linkifier.file("test.md", "AA", function(err, filePath) {
	if (err) {
		//err is boolean
		throw Error("failed");
	} else {
		console.log(filePath);
	}
});
linkifier.file("test.md", function(err, filePath) {}); //default prefix is "CB"
```

## Beta Usage (not extensively tested yet)
```javascript
var linkifier = require("jira-linkify");
linkifier.folder("test"); //default JIRA code prefix is "CB"
linkifier.folder("test", "AA"); //default callback does nothing
linkifier.folder("test", "AA", function(err, filePaths) {
	if (err) {
		//err is boolean
		throw Error("failed");
	} else {
		console.log(filePaths);
	}
});
linkifier.folder("test", function(err, filePaths) {}); //default prefix is "CB"
```
### [GitHub](https://github.com/carynbear/apache-jira-linkify)
https://github.com/carynbear/apache-jira-linkify