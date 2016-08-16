var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var batch = require('gulp-batch');


gulp.task('default', function () {
    gulp.src([
        'AngularApp/src/app.js',
        'AngularApp/src/**/*.js'
    ])
        .pipe(concat('app.min.js'))
        //.pipe(uglify())  //commented for development mode
        .pipe(gulp.dest('AngularApp/build'));
});

gulp.task('watch', function () {

    watch('AngularApp/src/**/*.js', batch(function (events, done) {
        gulp.start('default', done);
    }));
});
