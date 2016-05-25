var http = require("http");

var app = http.createServer(function (req, res) {
    res.end(JSON.stringify(req.headers));

});

app.listen(1337);
console.log("Server running at http://localhost:1337/");
console.log("lol");
