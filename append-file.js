const fs = require ("node:fs");
append = fs.appendFileSync('./nuevo_archivo.txt', '\ntest data to append', 'utf8');