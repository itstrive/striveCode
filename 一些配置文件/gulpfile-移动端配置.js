const gulp = require('gulp');
const less = require('gulp-less');
const px2rem = require('gulp-px3rem');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');  //编译报错，不会中断程序

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

var sourceFiles = [ 'public/images/*','public/images/*/*', 'public/mp3/*', 'public/index.html' ];


//打包需要的模块
const uglifyJs = require('gulp-uglify');
const cssmin = require('gulp-cssmin');
const gulpCopy = require('gulp-copy');
const through = require('through2');

gulp.task('less', function () {
    gulp.src('public/less/*.less')
        .pipe(plumber())
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
        port: '80',
        livereload: true
    })
});

gulp.task('watch', function () {
    gulp.watch('public/less/*.less', ['less']);
    gulp.watch('public/*.html',['html']);
});

//构建 压缩js，css，html，合并
function toDou(n){
    return n<10?'0'+n:''+n;
}
let oDate = new Date();
const distDir = 'dist'+oDate.getFullYear()+toDou(oDate.getMonth()+1)+toDou(oDate.getDate());

gulp.task('uglifyJs',function(){
    return gulp.src('public/js/*.js')
    .pipe(uglifyJs())
    .pipe(gulp.dest('public/'+distDir+'/js'));
});
gulp.task('cssmin',function(){
    return gulp.src('public/css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('public/'+distDir+'/css'))
});
gulp.task('copy', function(){
    return gulp
    .src(sourceFiles)
    .pipe(gulpCopy('public/'+distDir, { prefix: 1 }))
    .pipe(verify());
});

function verify ()
{
    var options = { objectMode: true };
    return through(options, write, end);

    function write (file, enc, cb)
    {
        console.log('file', file.path);
        cb(null, file);
    }

    function end (cb)
    {
        console.log('done');
        cb();
    }
}

gulp.task('default', ['connect','watch', 'less','html']);
gulp.task('build',['uglifyJs','cssmin','copy']);


