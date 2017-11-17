const express = require('express');
const fs = require('fs');
let app = express();

app.get('/user',(req,res)=>{
	res.send(req.query);
});

app.use(express.static('www'));

let server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;

	console.log('服务器起启动 在 http://%s%s', host, port);
});