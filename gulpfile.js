var gulp = require('gulp');
var sass = require('gulp-sass');
//编译sass任务
gulp.task('bycss', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});

//自动执行编译
gulp.task('auto', function() {
    return gulp.watch('./src/scss/**/*.scss', gulp.series('bycss'))
})