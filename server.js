// server.js

const http = require("http");

// Set port (from environment variable or default 3000)
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.end("Server running on port " + PORT);
});

server.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
