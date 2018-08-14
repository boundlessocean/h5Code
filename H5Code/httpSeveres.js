var http = require('http');
var fs = require('fs');
var mime = require('mime');

var server = http.createServer();

server.on( 'request',function(req,res){
	var fileName = __dirname + req.url;
	console.log(fileName);
	res.setHeader('Content-Type',mime.getType(fileName));	
	fs.readFile(fileName,function(err,data){
		res.end(data);
	});
});
	

server.listen(8080,function(){
		console.log("启动服务器");
});