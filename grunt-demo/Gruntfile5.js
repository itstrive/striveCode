module.exports=function(grunt){
	//初始化配置信息，可以定义属性和值
	grunt.initConfig({
		eat:{ //eat 是一个task，
			apple:4, //里面是一个target的名称 目标
			pear:10,
			banana:90,
			orange:100
		}	
	});
	
	//多个任务
	grunt.registerMultiTask('eat',function(){
		for(var i=0; i<10; i++){
			console.log('I am eating'+i+' of '+this.target+','+this.data);
		}	
	});
};

//grunt eat