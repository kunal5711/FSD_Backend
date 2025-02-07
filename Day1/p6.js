// Creating directory

const fs = require('fs')
const path = fs.mkdir("MyFolder", {recursive: true}, (err) => {
    if (err) console.log("An error occured", err);
})

console.log(path)