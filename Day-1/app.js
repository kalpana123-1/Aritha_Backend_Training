// function sayHello(name){
//     console.log("Hello "+name);
// }

//  sayHello("Andre");

var http = require('http');

http.createServer(function(req, res){
    res.write("Welcome back!");
    // res.writeHead(200, {'Content-Type':'text/html'});
    // res.end("Welcome");
    res.end();
}).listen(3000);
