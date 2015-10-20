var SockServer=require('ws').Server;

var ws=new SockServer({port:8081});

ws.on('connection',function(s){
	//s 客户端的 sock对象
	s.on('message',function(msg){
		console.log('接收:',msg);
		
		s.send(msg+10); //给客户端返回东西
	});	
});
ws.on('error',function(err){
	console.log(err);
});