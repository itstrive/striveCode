const express = require('express');
let app = express();
const consolidate = require('consolidate');

//ejs调用
app.engine('ejs', consolidate.ejs);
app.set('views','views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
	res.render('index',{title:'Strive',arr:['apple','banana','orange','tomato']});
});
app.use('/user',require('./router/user'));

app.use(express.static('www'));

let server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;

	console.log('服务器起启动 在 http://%s%s', host, port);
});