
var streamLinkifier = require("./streamLinkifier.js");
process.stdin
	.pipe(streamLinkifier("CB"))
	.pipe(process.stdout)


process.stdout.on('error', process.exit);