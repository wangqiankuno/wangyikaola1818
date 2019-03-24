//(1)引包：require()：返回对象或者函数
let gulp = require('gulp');//得到对象
let sass = require('gulp-sass');//得到函数
//(2)创建任务
gulp.task('compileSass',function(){
	// （3）执行gulp工作流程
	return gulp.src(["./src/scss/*.scss"]) // 返回文件流（液体，文件在内存中的状态）
	.pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('./src/css'));
});
gulp.task("jt",function(){
    gulp.watch("./src/scss/*.scss",gulp.series("compileSass"))
})
gulp.task('minify-js', function () {
    gulp.src('js/*.js') // 要压缩的js文件
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest('dist/js')); //压缩后的路径
});

// outputStyle参数（gulp-sass）：
//     nested(默认）
//     expanded：展开
//     compact：单行
//     compressed：压缩
// on('error', sass.logError)：忽略错误，继续编译