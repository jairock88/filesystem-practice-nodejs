const fs = require ("node:fs");

read = fs.readFileSync('./package.json', 'utf8');

console.log(read);