// Reading a file asynchronously

const fs = require("fs");
fs.readFile("data.txt", "utf-8", (err, data)=>{
    if (err){
        console.log("Error reading file", err);
    }
    console.log(data);
})