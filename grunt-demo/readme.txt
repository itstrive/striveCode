git忽略上传文件或者目录的命令：
	echo 'dest' > .gitignore

grunt简单实例：
1. 需要准备一个Gruntfile.js
   配置一个最简单的任务：
   module.exports=function(grunt){
	grunt.registerTask('default',function(){
		console.log('default test');	
	});
   };
2. grunt传参数
   module.exports=function(grunt){
	grunt.registerTask('default',function(name,age){
		//console.log('default test');	
		grunt.log.write('Hello '+name+' Everybody'+age);
	});
   };

   grunt default:1:2  
		grunt 任务名:参数1：参数2
3. 多任务组合
module.exports=function(grunt){
	grunt.registerTask('eat',function(name,age){
		for(var i=0; i<10; i++){
			console.log('eat '+i+' apple');
		}
	});
	grunt.registerTask('drink',function(){
		for(var i=0; i<3; i++){
			console.log('Drink'+i+' water')
		}	
	});
	grunt.registerTask('fuck',function(){
		console.log('A Fall ill');	
	});
	
	grunt.registerTask('default',['eat','drink','fuck']);
};
4. 读取config的值
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
5. 注册多个任务
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
6. 创建删除目录
module.exports=function(grunt){
	//创建一个目录
	grunt.registerTask('create',function(){
		grunt.file.mkdir('test');	
	});
	
	//删除一个目录
	grunt.registerTask('delete',function(){
		grunt.file.delete('test');	
	});
};
//grunt create
//grunt delete
7. 一个简单的demo演示copy，clean操作
'use strict';
/*
	grunt 小例子
*/
module.exports=function(grunt){
	require('load-grunt-tasks')(grunt);
	
	var config={
		app:'app',
		dest:'dest'	
	};
	
	grunt.initConfig({
		config:config,
		copy:{
			html:{
				src:'app/index.html',
				dest:'dest/index.html'	
			},
			css:{
				src:'app/style.css',
				dest:'dest/style.css'
			},
			js:{
				src:'app/index.js',
				dest:'dest/index.js'	
			}	
		},
		
		clean:{
			dest:{
				src:['app/index.html','app/style.css','app/index.js']	
			}	
		}
	});
	
	grunt.registerTask('default',['copy','clean']);
};
// 插件  load-grunt-tasks
// grunt-contrib-copy
// grunt-contrib-clean

