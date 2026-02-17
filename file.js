// file.js

const fs = require("fs");

// 1. Create & Write data to file
fs.writeFileSync("studentLog.txt", "this is shubham\n");

// 2. Append data to file
fs.appendFileSync("studentLog.txt", "persuing btech cse\n");

// 3. Read data from file
const data = fs.readFileSync("studentLog.txt", "utf8");
console.log(data);


