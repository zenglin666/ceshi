/*
 * @Description: In User Settings Editgu
 * @Author: your name
 * @Date: 2019-08-22 11:07:20
 * @LastEditTime: 2019-08-29 15:59:17
 * @LastEditors: Please set LastEditors
 *  * 1 必须建一个文是gulpfile.js 不能自定义
 * 2 执行 npm init
 * 3 执行 npm install gulp -g
 * 4 执行 npm install gulp 
 * 5 压缩 js文件 执行 gulp init
 * 6 压缩 img文件 执行 gulp img
 * 7 压缩 html文件 执行 gulp html
 * 8 压缩 css文件 执行 gulp css
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');//用于js代码压缩
var load = require('gulp-load-plugins')();//自动加载插件
var browser = require('browser-sync').create();
var babel = require('gulp-babel');
var dohtml = require('gulp-minify-html');
//es6必须下载以下的包
//npm install --save-dev gulp-babel @babel/core @babel/preset-env
// load.babel() ==> babel() 这两个是等价的 前者只用引一个load.XX()方法(适合各种多个用) 后者还要引 babel的包单个用 
gulp.task('js', function (done) {
    gulp.src('./js/*.js')
    .pipe(load.babel({ //es6语法压缩不了的玩法(要加这句)
        presets: ['@babel/env']
    }))
    .pipe(load.uglify())
    .pipe(gulp.dest('./dist/js'))

    done();
})
gulp.task('css', function (done) {
    gulp.src('./css/*.')
    .pipe(load.minifyCss())//放开压缩css
    .pipe(load.sass())
    .pipe(gulp.dest('./dist/css'))
    done();
})
gulp.task('img',function(done){
	//该任务完成图片压缩
	gulp.src("./img/*")
	// .pipe(imagemin())//和底下的等价
	.pipe(load.imagemin())
	.pipe(gulp.dest('./dist/img/'));
	done()
})
gulp.task('html',function(done){
	//该任务用于压缩html
	gulp.src("./*.html")
	// .pipe(load.minifyHtml())
	.pipe(dohtml())
	.pipe(gulp.dest('./dist/'));
	done()
})
// 
// gulp.task('save', gulp.parallel('js','img','html', 'css', function (done) { 
gulp.task('save', gulp.series(gulp.parallel('js', 'img', 'html', 'css'),function(done) { 
    browser.reload();
  done();
    
}))
    

// browser-sync
gulp.task('server',function(done){
	browser.init({
		server:"./dist",
		port:9988
    })
    //观测当这个文件夹下有文件发生变化 那就执行 gulp save 把所有的东西再压缩
    //服务器自动刷新的玩法
    gulp.watch('./src',gulp.series('save'))
})
