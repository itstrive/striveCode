var gulp=require('gulp'),
	plugin=require('gulp-load-plugins')();
	

gulp.task('rename',function(){
	return gulp.src('src/a.js')
	.pipe(plugin.uglify())
	.pipe(plugin.rename('a.min.js'))
	.pipe(gulp.dest('dest'))
});













