// http_server.js

const http = require("http");

// Create Server
const server = http.createServer((req, res) => {
    res.write("Server is running successfully!");
    res.end();
});

// Listen on port 8080
server.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
});
