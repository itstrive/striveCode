gulp用法：
1. gulp的安装
	npm install -g gulp 全局安装
	npm install gulp    全局安装完毕，每个项目单独安装
	如果想安装的时候把gulp写进，package.json文件里面，可以加上 --save-dev
	npm install --save-dev gulp
	
2. 使用gulp
a). 建立一个gulpfile.js,在gulpfile中定义任务
	eg:
	var gulp=require('gulp');

	gulp.task('default',function(){
		console.log('gulp default task');	
	});
b). 跑到当前gulp目录下，运行gulp命令，或者gulp default
3. gulp常用的api
	gulp.task()
	gulp.src();
	gulp.desc();
	gulp.watch();

gulp.src(['js/*.js','css/*.css','*.html']) 读取你需要操作的文件
	gulp.src(globs[, options])
gulp.desc(); 是用来写文件的
	gulp.dest(path[,options])

gulp.task(); 定义任务

gulp.watch()用来监视文件的变化，当文件发生变化后，我们可以利用它来执行相应的任务，例如文件压缩等


	