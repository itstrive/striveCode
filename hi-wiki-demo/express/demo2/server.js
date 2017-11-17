const express = require('express');
const fs = require('fs');
let app = express();

app.get('/ajax.html', function (req, res) {
	fs.readFile('www/ajax.html',(err,data)=>{
		res.set('Content-Type','text/html');
		res.send(data.toString());
	});
});

app.get('/user',(req,res)=>{
	res.send(req.query);
});

let server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;

	console.log('服务器起启动 在 http://%s%s', host, port);
});