var http = require('http')
var fs = require('fs')
var Server
fs.readFile('./index.html', function read(err, data) 
{
    if (err) 
    {
        throw err;
    }
    content = data;
    Server = http.createServer(function(request,response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(data);
    response.end();
}); 
Server.listen(8080);               	                // Or put the next step in a function and invoke it
});

