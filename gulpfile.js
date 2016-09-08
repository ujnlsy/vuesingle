var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    sourcemap = require('gulp-sourcemaps');


gulp.task('less', function() {
    // 将你的默认的任务代码放在这
    gulp.src('src/assets/*.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(sourcemap.write())
        .pipe(gulp.dest('dist/css'));
});