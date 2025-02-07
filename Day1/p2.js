const fs = require('fs');
const data = "I'm the file man";
fs.writeFileSync("data.txt", data);