This module formats any markdown files with references to Apache Jira issues to be hyperlinks to the issue itself. 

## Supports
	- individual markdown files relative to current working directory
	- folders (will format all markdown files within)
	- any Apache JIRA prefix
	- bracketed and nonbracketed Apache JIRA issues
		- i.e "[CB-1234]" and "CB-1234"

## Usage
```javascript
var linkifier = require("jira-linkify");
linkifier.file("test.md");
linkifier.file("test.md", "AA");
linkifier.file("test.md", "AA", function(err, filePath) {
	if (err) {
		//err is boolean
		throw Error("failed");
	} else {
		console.log(filePath);
	}
});
linkifier.file("test.md", function(err, filePath) {});
```

### [GitHub](https://github.com/carynbear/apache-jira-linkify)
