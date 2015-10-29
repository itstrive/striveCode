var gulp=require('gulp'),
	concat=require('gulp-concat');
	

gulp.task('concat',function(){
	return gulp.src('src/*.js')
	.pipe(concat('all.js'))
	.pipe(gulp.dest('dest/js')) 
});













