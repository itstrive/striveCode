
var fs=require('fs');
var http=require('http');

function fileName(){
	var oDate=new Date();
	return oDate.getFullYear()+''+(oDate.getMonth()+1)+oDate.getDate()+''+oDate.getHours()+''+oDate.getMinutes()+''+oDate.getSeconds()+''+oDate.getTime();
}


http.createServer(function(req,res){
	var path='www'+req.url;
	
	fs.exists(path,function(b){ //判断文件是否存在
		if(b){
			
			var rs=fs.createReadStream(path);
			
			res.writeHeader(200,{
				'content-disposition':'attachment;filename="'+fileName()+'".txt'
			});
			
			rs.pipe(res);
			
			rs.on('error',function(){
				console.log('404');	
			});
			
		}else{
			res.end('404');
		}
	});
	
}).listen(8081);