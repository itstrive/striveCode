var gulp=require('gulp'),
	jshint=require('gulp-jshint');
	

gulp.task('jshint',function(){
	return gulp.src('src/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter())  //输出检查结果
});













