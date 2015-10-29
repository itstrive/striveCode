var gulp=require('gulp'),
	imagemin=require('gulp-imagemin'),
	pngquant=require('imagemin-pngquant');
	

gulp.task('imagemin',function(){
	return gulp.src('src/*.png')
	.pipe(imagemin({
		progressive: true,
        use:[pngquant()] //使用pngquant来压缩png图片	
	}))
	.pipe(gulp.dest('dest/image')) 
});













