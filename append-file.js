const fs = require ("node:fs");
append = fs.appendFileSync('./nuevo_archivo.txt', 'test data to append', 'utf8');