// modules.js

// Import modules
const os = require("os");
const path = require("path");
const url = require("url");

// OS Module
console.log("Operating System:", os.platform());
console.log("Total Memory:", os.totalmem());

// Path Module
const filePath = path.join("folder", "file.txt");
console.log("Joined Path:", filePath);

// URL Module
const myUrl = new URL("https://example.com/about?name=Shubham");
console.log("Host:", myUrl.host);
console.log("Pathname:", myUrl.pathname);
