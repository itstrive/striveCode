module.exports=function(grunt){
	//初始化配置信息，可以定义属性和值
	grunt.initConfig({
		eat:{
			apple:4
		}	
	});
	
	grunt.registerTask('a',function(){
		var count=grunt.config.get('eat.apple');
		
		console.log(count);	
	});
};

//grunt a