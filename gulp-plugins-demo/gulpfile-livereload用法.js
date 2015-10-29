var gulp=require('gulp'),
	livereload=require('gulp-livereload')
	

gulp.task('reload',function(){
	var server=livereload();
	
	gulp.watch('src/*.html',function(file){
		server.change(file.path);
	});
});













