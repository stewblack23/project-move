//https://www.sitepoint.com/simple-gulpy-workflow-sass/
//https://quickleft.com/blog/setting-up-a-clientside-javascript-project-with-gulp-and-browserify/

//to install all dependies for project based on package JSON file type npm install in node command promt

'use strict';

//Set Variables
//------------------------------------------------------------

//Gulp Dependencies
var gulp = require('gulp');

//SASS Dependencies
var sassInput = 'sass/**/*.scss'; //input path
var sassOutput = 'css'; //output path
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');



//Create Tasks
//------------------------------------------------------------

//SASS Task
gulp.task('sass', function () {
    return gulp
        .src(sassInput)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('../css/sourcemaps')) //put the sourcemap in the same folder as the css
        .pipe(gulp.dest(sassOutput));
});

gulp.task('watch', function() {
    gulp.watch(sassInput, ['sass']);
});


//Run everything
//------------------------------------------------------------
gulp.task('default', ['watch', 'sass']);
