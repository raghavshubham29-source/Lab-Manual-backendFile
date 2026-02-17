

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    
    const parsedUrl = url.parse(req.url, true);

   
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:", req.headers);
    console.log("Query:", parsedUrl.query);
    console.log("----------------------");

   
    if (req.method === "GET") {
        res.end("This is a GET request");
    } 
    else if (req.method === "POST") {
        res.end("This is a POST request");
    } 
    else {
        res.end("Other request method");
    }
});

server.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
