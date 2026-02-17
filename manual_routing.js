

const http = require("http");

const server = http.createServer((req, res) => {

    switch (req.url) {

        case "/home":
            res.end("Welcome to Home Page");
            break;

        case "/login":
            res.end("Login Page");
            break;

        case "/data":
            res.end("Data Page");
            break;

        default:
            res.end("404 Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
