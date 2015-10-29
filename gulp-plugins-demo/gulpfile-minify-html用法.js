var gulp=require('gulp'),
	uglifyHtml=require('gulp-minify-html');
	

gulp.task('uglify-html',function(){
	return gulp.src('src/*.html')
	.pipe(uglifyHtml())
	.pipe(gulp.dest('dest/html'))
});













