var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

//source file paths
var js = './src/Js/*.js'
var style = './src/styles/*.scss'

// output file paths
var bundleJs = './public/javascripts'
var bundleStyle = './public/stylesheets'

// Compile Sass
gulp.task('sass', function () {
    gulp.src('./src/styles/styles.scss')
        .pipe(concat('style.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(bundleStyle));
});

// combine javascript files
gulp.task('scripts', function () {
    gulp.src(js)
        .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(bundleJs));
});

// when run Gulp command default task will start
gulp.task('default', ['sass', 'scripts']);

//watching file changes 
gulp.task('watch', function () {
    gulp.watch(js, ['scripts']);
    gulp.watch(style, ['sass']);
});