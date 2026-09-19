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
node index.js
node readme.js
node index.js
node check.js
