var http = require('http');
var fs = require('fs');
var Server;
var file = './index.html';
var buffer = new Buffer(2500);
fs.open(file, 'r', function(err, fd) 
{
   	if(err)
	{
	    throw " hi";	
	}	
    	fs.stat(file, function(err, stats) 
	{
       	 fs.read(fd,buffer,0,2500,0,function(err,bytesRead, buffer)
	  {
		 if(bytesRead>0)
		{
			buffer = buffer.slice(0,bytesRead);
		}
		 Server = http.createServer(function(request,response) {
		 response.writeHead(200, {"Content-Type": "text/html"});
		 response.write(buffer);
		 response.end();
 		});
		Server.listen(8080); 
        });  
    });
});              	                


