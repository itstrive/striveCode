const express = require('express');
let app = express();
const fs = require('fs');
const jade = require('jade');

app.engine('jade', require('jade').__express);

app.set('views','views');
app.set('view engine', 'jade');

app.get('/',(req,res)=>{
	res.render('index.jade',{title:'Strive',message:'我是message信息'});
});

app.use(express.static('www'));

let server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;

	console.log('服务器起启动 在 http://%s%s', host, port);
});