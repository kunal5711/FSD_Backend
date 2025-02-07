const fs = require('fs');
const data = "Hello World";
fs.writeFile("data.txt", data, (err) => {
    if (err){
        console.log("Error writing data", err)
    }
});