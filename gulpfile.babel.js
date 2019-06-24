var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

//source file paths
var js = './Js/*.js'
var style = './src/styles/*.scss'

// output file paths
var bundleJs = './public/javascripts'
var bundleStyle = './public/stylesheets'

// Compile Sass
gulp.task('sass', function () {
    gulp.src(style)
        .pipe(concat('style.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(bundleStyle));
});

// combine javascript files
gulp.task('scripts', function () {
    gulp.src('./src/Js/*.js')
        .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(bundleJs));
});

gulp.task('default', ['sass', 'scripts']);

gulp.task('watch', function () {
    gulp.watch(js, ['scripts']);
    gulp.watch(style, ['sass']);
});