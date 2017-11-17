const express = require('express');
let app = express();

const consolidate = require('consolidate');

/* 
//ejs调用
app.engine('ejs', consolidate.ejs);
app.set('views','views');
app.set('view engine', 'ejs');
*/

//jade
/* app.engine('jade', consolidate.jade);  //第一个参数为模板文件 后缀
app.set('views','views');
app.set('view engine', 'jade'); */

//swig
app.engine('swig', consolidate.swig); //以 swig结尾的模板，其实swig是以html结尾的
app.set('views','views');
app.set('view engine', 'swig');

app.get('/',(req,res)=>{
	res.render('index.jade',{title:'Strive',arr:['apple','banana','orange','tomato']});
});

app.use(express.static('www'));

let server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;

	console.log('服务器起启动 在 http://%s%s', host, port);
});