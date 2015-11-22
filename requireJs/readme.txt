一、requirejs和jquery的简单配合

	require.config({
		baseUrl:'./', //相对的目录
		paths:{
			jquery:[ //优先访问第一个，第一个不能访问，访问第二个
				'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js',
				'lib/jquery-1.7.2'
			]	
		}	
	});

	require(['jquery'],function($){ //require() requirejs() 都可以
		$('body').css('background','red');
	});

二、r.js的简单使用：
1. 下载r.js
   http://requirejs.org/docs/download.html#rjs
	放到要打包的目录
2. 使用(不推荐)
   node r.js -o baseUrl=./ name=main out=main-build.js
3. 除了直接在命令行提供参数设置，也可以将参数写入一个文件，假定文件名为build.js.
  ({
    baseUrl: "js",  /*当前相对的路径*/
    name: "main", /* 程序的主入口文件*/
    out: "dest/main-build.js"  /*打包完的文件可以加目录*/
   })
   然后直接运行：node r.js -o build.js

