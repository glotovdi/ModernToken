'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    prefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-clean-css'),
    livereload = require('gulp-livereload'),
    reload = browserSync.reload;


gulp.task('html', function(){
    gulp.src('index.html')
        .pipe(reload({stream:true}));
});

gulp.task('css', function () {
    return gulp.src('./sass/styles.scss')
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(reload({stream:true}))
        .pipe(gulp.dest('./build'));

});

gulp.task('js', function () {
    return gulp.src(jsfiles, {base: 'js/'})
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/'))
        .pipe(reload({stream:true}))
        .on('error', gutil.log);
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['css']),
        gulp.watch(['./js/*.js'], ['js']),
        gulp.watch(['index.html'], ['html']);
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('default', ['watch', 'browserSync']);


