const gulp = require('gulp');
const less = require('gulp-less');
const px2rem = require('gulp-px3rem');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const cleanCSS = require('gulp-clean-css');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('less', function () {
    gulp.src('public/less/*.less')
        .pipe(less())
        .pipe(px2rem({
            remUnit: 40,
            remPrecision: 6
        }))
        .pipe(rename(function (path) {
            var s = path.basename.replace('.debug', '');

            path.basename = s;
        }))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        //.pipe(cleanCSS({compatibility: 'ie8'})) //最后压缩，打开重新运行 gulp 即可
        .pipe(gulp.dest('public/css'))
        .pipe(connect.reload());
});

gulp.task('html',function(){
    gulp.src('public/*.html')
    .pipe(connect.reload())
});

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: '8000',
        livereload: true
    })
});

gulp.task('watch', function () {
    gulp.watch('public/less/*.less', ['less']);
    gulp.watch('public/*.html',['html']);
});

gulp.task('default', ['connect','watch', 'less','html']);