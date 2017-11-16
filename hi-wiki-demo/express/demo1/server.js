const express = require('express');
let app = express();

app.get('/', function(req, res) {
	res.send('welcome express demo');
});

app.post('/', function(req, res) {
	res.send('一个post请求')
});

app.put('/user', function(req, res) {
	res.send('一个put请求')
});

app.delete('/user', function(req, res) {
	res.send('一个delte请求')
})

app.use(express.static('www')); //静态文件，都放到www里面，比如ajax.html属于静态文件

let server = app.listen(3000, function() {
	let host = server.address().address;
	let port = server.address().port;

	console.log('服务器起启动 在 http://%s%s', host, port);
});