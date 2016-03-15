

var http = require('http')

var fs = require('fs')

var call12 = fs.readFileSync('./index.html')

var Server = http.createServer(function(request,response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(call12);
    response.end();
});

Server.listen(8081);

