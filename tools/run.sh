set -e
rm -rf out
node convert.js
node split.js
node split.js
node guides.js
node convert-ex.js
node convert-legacy.js
node split.js
node fixlinks.js
cp -r ../field-notes out/      # hand-written; after fixlinks, so a dead link in them fails check.js
node index.js
ROOT=out node concepts.js
node index.js                  # again, so readme.js counts concepts.md
node readme.js
node index.js
node check.js
