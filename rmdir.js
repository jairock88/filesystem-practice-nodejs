const fs = require("fs");

rmDir = fs.rmdirSync("./directory_test/test");

console.log("Directory './directory_test' has removed");