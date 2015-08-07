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

