const express = require('express');
let app = express();
const vhost = require('vhost');

let www = express.Router();

www.get('/',function(req,res){
	res.send('欢迎来到主站点')
});

let bbs = express.Router();
bbs.get('/',function(req,res){
	res.send('欢迎来到论坛站')
});

app.use(vhost('a.com',www));
app.use(vhost('bbs.a.com',bbs));

let server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;

	console.log('服务器起启动 在 http://%s%s', host, port);
});