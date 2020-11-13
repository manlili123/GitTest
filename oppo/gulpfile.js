const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require('node-sass');
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");

gulp.task("copy-html", function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})

gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

gulp.task("scss",function(){
    return gulp.src("stylesheet/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function(path){
        path.basename += ".min"
    }))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

gulp.task("scripts", function(){
    return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

gulp.task("images", function(){
    return gulp.src("images/*.{png,jpg}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

gulp.task("icon",function(){
    return gulp.src("iconfont/*")
    .pipe(gulp.dest("dist/iconfont"))
    .pipe(connect.reload());
})

gulp.task("build",["copy-html", "scss", "data", "scripts", "images","icon"], function(){
    console.log("项目建立成功");
})

gulp.task("watch", function(){
    gulp.watch("*.html", ['copy-html']);
    gulp.watch("stylesheet/*.scss", ["scss"]);
    gulp.watch(["*.json", "!package.json"], ['data']);
    gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
    gulp.watch("images/*.{png,jpg}", ["images"]);
    gulp.watch("iconfont/*", ["icon"]);
})

const connect = require("gulp-connect");
//启动临时服务器
gulp.task("server", function(){
    connect.server({
        root: "dist",
        port: 8889,
        livereload: true
    })
})

gulp.task("default", ['server', 'watch']);




