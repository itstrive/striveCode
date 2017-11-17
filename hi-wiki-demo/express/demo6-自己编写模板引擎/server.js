const express = require('express');
let app = express();
const fs = require('fs');

//编写模板引擎
app.engine('hi',function(filePath, options, callback){
	fs.readFile(filePath,function(err,content){
		if(err) callback(new Error(err));

		//只是演示，写一个非常简单的模板引擎
		let reg=/\$\{(\w+)\}/g;
		let rendered=content.toString().replace(reg,function(s){
			//s  -> ${title}
			s=s.substring(2, s.length-1);
			//console.log(s);
			return options[s];
		});

		return callback(null, rendered);
	});
});

app.set('views','views');
app.set('view engine','hi');

app.get('/',(req,res)=>{
	res.render('index.hi',{title:'Strive',message:'我是message信息'});
});

app.use(express.static('www'));

let server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;

	console.log('服务器起启动 在 http://%s%s', host, port);
});