DONE 1) create module that runs linkify-bugs.sh script on a file that was passed in.

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


