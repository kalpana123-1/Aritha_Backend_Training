const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Success");
        res.send(200);
        res.end();
    } else{
        res.send("Bad Request");
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.send(200);
        res.end();   
    }
    else{
        res.send("Bad Request");
    }
})

server.listen(3000);

console.log("Listening on 3000 port");