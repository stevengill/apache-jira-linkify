#!/usr/bin/env bash

#OLD CODE took in a directory and processed all markdown files in the directory.
# if [[ ! -z "$1" ]]; then
#     cd $1
# fi
# for f in *.md; do
#   echo Processing: $f
#   perl -pi -e 's/ (CB-[0-9]+)/ [$1](https:\/\/issues.apache.org\/jira\/browse\/$1)/g' "$f"
#   perl -pi -e 's/ \[(CB-[0-9]+)\] / [$1](https:\/\/issues.apache.org\/jira\/browse\/$1) /g' "$f"
# done


#Takes in markdown file path and reformats any cordova JIRA issues as a link
if [[ ! -z "$1" ]]; then
    echo Processing: $1
    perl -pi -e 's/ (CB-[0-9]+)/ [$1](https:\/\/issues.apache.org\/jira\/browse\/$1)/g' "$1"
    perl -pi -e 's/ \[(CB-[0-9]+)\] / [$1](https:\/\/issues.apache.org\/jira\/browse\/$1) /g' "$1"
fi