var gulp=require('gulp'),
	uglifyCss=require('gulp-minify-css');
	

gulp.task('uglify-css',function(){
	return gulp.src('src/*.css')
	.pipe(uglifyCss())
	.pipe(gulp.dest('dest/css'))
});













