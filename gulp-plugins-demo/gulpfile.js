var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),  //CSS压缩
    concat = require('gulp-concat'),         // 文件合并
    uglify = require('gulp-uglify'),         //js压缩插件
    rename = require('gulp-rename'),         // 重命名
    del = require('del');
	

gulp.task('clean', function(cb) {
    del(['dest/css', 'dest/js'], cb)
});
gulp.task('minifycss', function() {
    return gulp.src('src/*.css')                  //压缩的文件
         .pipe(minifycss())                       //执行压缩
         .pipe(gulp.dest('dest/css'));        //输出文件夹
});
gulp.task('minifyjs', function() {
    return gulp.src('src/*.js')
        .pipe(concat('main.js'))                  //合并所有js到main.js
        .pipe(gulp.dest('dest/js'))           //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))           //rename压缩后的文件名
        .pipe(uglify())                           //压缩
        .pipe(gulp.dest('dest/js'));          //输出
});



gulp.task('default',  function() {
    gulp.start('clean','minifycss', 'minifyjs');  // 要执行的任务
});












