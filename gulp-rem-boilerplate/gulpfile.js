/**
 * Author: Strive
 */
const gulp = require('gulp');
const less = require('gulp-less');
const px2rem = require('gulp-px3rem');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');  //编译报错，不会中断程序
const fileinclude  = require('gulp-file-include');


const babel = require('gulp-babel');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

var sourceFiles = [ 'public/images/*','public/images/*/*', 'public/mp3/*','public/conf/*'];

//打包需要的模块
//const uglifyJs = require('gulp-uglify');
let uglifyJs = require('gulp-uglify-es').default;
const cssmin = require('gulp-cssmin');
const gulpCopy = require('gulp-copy');
const through = require('through2');
const htmlmin = require('gulp-htmlmin');
const minJs = require('uglify-es');
//防止缓存
const rev = require('gulp-rev');
const revCollector = require('gulp-rev-collector');
const del = require('del');


/**
 * 
 * 以下是 dev 需要的配置
 * 
*/

gulp.task('compileJs', () =>
    gulp.src(['public/js_es6/*.js'])
    .pipe(babel({
        presets: ['env'],
        plugins: ['transform-object-rest-spread']
    }))
    .pipe(gulp.dest('public/js'))
    .pipe(connect.reload())
);

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
        .pipe(postcss([ autoprefixer() ]))
        //.pipe(cleanCSS({compatibility: 'ie8'})) //最后压缩，打开重新运行 gulp 即可
        .pipe(gulp.dest('public/css'))
        .pipe(connect.reload());
});

// gulp.task('js',function(){
//     gulp.src(['public/js/*.js'])
//     .pipe(connect.reload());
// });

gulp.task('html',function(){
    gulp.src(['public/page/**/*.html','!public/page/include/**.html'])
        .pipe(plumber())
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('public/html'))
    .pipe(connect.reload());
});

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: '80',
        livereload: true,
        host:'0.0.0.0',
    })
});

gulp.task('watch', function () {
    gulp.watch('public/less/*.less', ['less']);
    gulp.watch('public/page/**/*.html',['html']);
    gulp.watch('public/js_es6/*.js',['compileJs']);
});

/**
 * 
 * 以下是 build需要的配置
 * 
*/
//构建 压缩js，css，html，合并
function toDou(n){
    return n<10?'0'+n:''+n;
}
let oDate = new Date();
//const distDir = 'dist'+oDate.getFullYear()+toDou(oDate.getMonth()+1)+toDou(oDate.getDate());
const distDir = '../dist';
const revDir = '../rev';

gulp.task('uglifyJs',function(cb){
    return gulp.src('public/js/*.js')
    .pipe(uglifyJs({mangle:false}))
    .pipe(rev())
    .pipe(gulp.dest('public/'+distDir+'/js'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('public/'+revDir+'/js'));
});
gulp.task('cssmin',function(){
    return gulp.src('public/css/*.css')
    .pipe(cssmin())
    .pipe(rev())
    .pipe(gulp.dest('public/'+distDir+'/css'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('public/'+revDir+'/css'));
});

gulp.task('htmlmin',['uglifyJs','cssmin'],function(){
    return gulp.src(['public/'+revDir+'/**/*.json','public/html/*.html'])
    .pipe(revCollector({ //从manifest中读取hash文件，替换
        replaceReved: true,
        dirReplacements: {
            'css': 'css',
            'js': 'js'
        }
    }) )
    .pipe(htmlmin({ 
        removeComments:true,
        collapseWhitespace: true,
        minifyCSS:true,
        minifyJS:function(text){
            return minJs.minify(text,{
                mangle:false
            }).code;
        }
    }))
    .pipe(gulp.dest('public/'+distDir+'/html'))
    .pipe(verify());
});

gulp.task('clean:dev',['htmlmin'],function(cb){
    del([
        'rev',
        'rev/*'
    ], cb);
});

gulp.task('copy', function(){
    return gulp
    .src(sourceFiles)
    .pipe(gulpCopy('public/'+distDir, { prefix: 1 }))
    //.pipe(verify());
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
        console.log('Build Success ^_^');
        cb();
    }
}

gulp.task('default', ['connect','watch', 'less','html','compileJs']);
gulp.task('build',['clean:dev','copy']);