var gulp = require('gulp'),

    connect = require('gulp-connect'),

    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    sourcemap = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

gulp.task('server', () => {
    connect.server({
        port: 8282,
        livereload: true
    })
});

gulp.task('less', () => {
    // 将你的默认的任务代码放在这
    gulp.src('src/assets/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(cssmin())
        .pipe(sourcemap.write())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watchLess', () => {
    gulp.watch('src/assets/*.less', ['less'])
});

gulp.task('dev', ['server', 'watchLess']);