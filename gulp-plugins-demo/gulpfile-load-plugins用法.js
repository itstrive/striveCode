var gulp=require('gulp'),
	plugin=require('gulp-load-plugins')();
	

gulp.task('concat',function(){
	return gulp.src('src/*.js')
	.pipe(plugin.concat('all.js'))
	.pipe(gulp.dest('dest'))
});













