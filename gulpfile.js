var gulp = require('gulp'),

    connect = require('gulp-connect'),

    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    sourcemap = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

gulp.task('server', ['less'], () => {
    connect.server({
        port: 8282,
        root: 'src',
        livereload: true
    })
});

gulp.task('html', () => {
    gulp.src('index.html')
        .pipe(connect.reload());
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

gulp.task('watch', () => {
    gulp.watch(['src/views/components/*.vue', 'src/views/components/common/*.vue'], ['html']);
    gulp.watch('src/assets/*.less', ['less'])
});

gulp.task('dev', ['server', 'watch']);