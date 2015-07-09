/*
	常见问题：
	Cannot find module 'gulp-imagemin'  找不到xxx模块
	这时候一般要
		npm install --save-dev gulp-imagemin  这样安装会自动更新package.json文件

*/


var gulp=require('gulp'),
	rename=require('gulp-rename'),  //重命名
	uglify=require('gulp-uglify'),  //压缩js
	minifyCss=require('gulp-minify-css'), //压缩css
	minifyHtml=require('gulp-minify-html'), //压缩html
	jshint=require('gulp-jshint'),  //js代码检查
	concat=require('gulp-concat'),  //文件合并
	imagemin=require('gulp-imagemin'),
	pngquant=require('imagemin-pngquant');  //png图片压缩插件
	
/*js代码检查*/
gulp.task('js-hint',function(){
	gulp.src('src/js/*')
	.pipe(jshint())
	.pipe(jshint.reporter());	
});

/*css或者js合并*/
gulp.task('concat',function(){
	gulp.src('src/css/*')  //要合并的文件
	.pipe(concat('main.css'))  //合并匹配到的css文件，并命名为main.css
	.pipe(gulp.dest('src/css'));
});

/*js压缩*/
gulp.task('minify-js',function(){
	gulp.src('src/js/*')
	.pipe(uglify())
	//.pipe(rename('jquery.min.js'))
	.pipe(gulp.dest('dest/js'));
});
/*css压缩*/
gulp.task('minify-css',['concat'],function(){  //minify-css 依赖于concat
	gulp.src('src/css/*')
	.pipe(minifyCss())
	.pipe(gulp.dest('dest/css'));	
});
/*压缩html*/
gulp.task('minify-html',function(){
	gulp.src('src/html/*')
	.pipe(minifyHtml())
	.pipe(gulp.dest('dest/html'));	
});

/*压缩图片*/
gulp.task('image-min',function(){
	return gulp.src('src/images/*')
	.pipe(imagemin({
            progressive: true,
            use: [pngquant()]  //使用pngquant来压缩png图片
        })
	)
	.pipe(gulp.dest('dest/images'));
});


gulp.task('default',['js-hint','concat','minify-js','minify-css','minify-html','image-min']);


gulp.watch('src/js/*',['minify-js']);  //监听 src/js/下面所有js文件的改动，只要改动就执行 minify-js任务 


/*
gulp-imagemin 的插件： https://www.npmjs.com/browse/keyword/imageminplugin
		      项目主页： https://github.com/sindresorhus/gulp-imagemin
*/