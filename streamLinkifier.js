var Transform = require('stream').Transform,
	split = require('char-split'),
	join = require('join-stream'),
	EOL = require('os').EOL;

//Helper returns a function that takes in a word and apache-linkifies it if it is linkifyable
function linkifier(apachePrefix) {
	//Strips brackets and colons as necessary; will linkify [CB-XXX] OR CB-XXX: OR CB-XXX
	function strip(word) {
		if (word[0] == "[" && word[word.length - 1] == "]") {
			return word.slice(1, word.length - 1);
		} else if (word[word.length - 1] == ":") {
			return word.slice(0, word.length - 1);
		} else {
			return word;
		}
	}
	//Checks if word begins with a certain prefix (i.e "CB-") followed by some number
	function isPrefixAndNum(input, prefix) {
		if (input.startsWith(prefix)) {
			num = input.slice(prefix.length, input.length)
			if (Number(num)) return true;
			else return false;
		} else {
			return false;
		}
	}
	return function(word){
		if (isPrefixAndNum(strip(word), apachePrefix.toUpperCase()+"-")) {
			return "[" + strip(word) + "]" + "(https://issues.apache.org/jira/browse/" + strip(word) + ")";
		} else {
			return word;
		}
	}
}

/**
 * Returns a transform stream that replaces all instances of JIRA issues
 *	with a markdown formatted hyperlink to the issue.
 * @example
 * var streamLinkifier = require('./streamLinkifer.js')
 * inputStream.pipe(streamLinkifier("CB")).pipe(outputStream)
 * @param  {String} optional JIRA prefix to be searched for, default is "CB"
 * @return {none} instance of Stream.Transform
 */
module.exports = function(apachePrefix) {
	var linkify= new Transform();
	linkify._transform = function(data, encoding, done) {
        var data = data.toString();
        //Grab whatever was left behind from the last read
        if (this._lastLineData) data = this._lastLineData + data;
        //Split by end of line
        var lines = data.split(EOL);
        //Save the last line for processing later because it might be cut off
        this._lastLineData = lines.splice(lines.length-1,1)[0];

        //Split and map linkifier on as words; Combine and push to pipeline
		for (var i = 0; i < lines.length; i++) {
			var wordsIn = lines[i].split(' ');
			var wordsOut = wordsIn.map(linkifier(apachePrefix)).join([separator = " "]);
			this.push(wordsOut+EOL);
		}
		done();
	}
	//Called to flush the output for the very last line
	linkify._flush = function (done) {
        if (this._lastLineData) {
            var wordsIn = this._lastLineData.split(' ');
			var wordsOut = wordsIn.map(linkifier(apachePrefix)).join([separator = " "]);
			this.push(wordsOut);
        }
        this._lastLineData = null;
        done();
	}
	return linkify;
}

//Credit to: https://strongloop.com/strongblog/practical-examples-of-the-new-node-js-streams-api/
