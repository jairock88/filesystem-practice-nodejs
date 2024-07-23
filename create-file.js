const fs = require ("node:fs");
//const fs = require ("fs"); es lo mismo
fs.writeFileSync("nuevo_archivo.txt", "contenido del archivo 22", "utf8");