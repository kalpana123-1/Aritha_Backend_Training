const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.readFile('index.html', function(err, data) {
        if(err) {
            res.write(404);
            res.write("Error: File not found");
        } else {
            res.write(data);
        }
    })
    res.write("Hello");
    res.end();
})

server.listen(port, function(err) {
    if(err) {
        console.log("error: "+ err);
    } else {
        console.log("server is listening on port" + port);
    }
})