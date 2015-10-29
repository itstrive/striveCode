var gulp=require('gulp'),
	uglify=require('gulp-uglify');
	

gulp.task('uglify',function(){
	return gulp.src('src/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dest/js'))
});













