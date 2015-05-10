var fs=require('fs');
var http=require('http');

function fileName(){
	var oDate=new Date();
	return oDate.getFullYear()+''+(oDate.getMonth()+1)+oDate.getDate()+''+oDate.getHours()+''+oDate.getMinutes()+''+oDate.getSeconds()+''+oDate.getTime();
}

http.createServer(function(req,res){
	fs.readFile('www'+req.url,function(err,data){
		if(err){
			res.end('404');
		}else{
			res.writeHeader(200,{
				'content-disposition':'attachment;filename="'+fileName()+'.txt"'
			});
			res.end(data);
		}
	});
}).listen(8081);