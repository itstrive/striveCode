const express = require('express');
let app = express();
const cookieParser = require('cookie-parser');
const session = require('cookie-session');

app.use(cookieParser());

app.use(session({
	name:'hi-sessid', //session的名字
	keys:['aa','bb','ccc'],
	maxAge:20*60*1000
}));


app.post(/^\/user/,(req,res)=>{
	req.session.views=(req.session.views || 0)+1;
	res.send(req.session.views+'次');
});

app.use(express.static('www'));

let server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;

	console.log('服务器起启动 在 http://%s%s', host, port);
});