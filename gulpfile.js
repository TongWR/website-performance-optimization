var gulp = require('gulp');
var htmlMin = require('gulp-htmlmin');
var inlineSource = require('gulp-inline-source');
var imageMin = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  runSequence('clean:dist', ['index', 'pizza']);
});

gulp.task('index', ['html', 'css', 'js', 'images', 'fonts'], function() {

});

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(inlineSource())
    .pipe(htmlMin({collapseWhitespace: true, removeComments: true, minifyJS: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src('src/css/print.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(csso())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function() {
  return gulp.src('src/img/*')
    .pipe(imageMin())
    .pipe(gulp.dest('dist/img'));
})

gulp.task('pizza', ['pizza-html', 'pizza-css', 'pizza-js', 'pizza-images'], function() {

});

gulp.task('pizza-html', function() {
  return gulp.src('src/views/pizza.html')
    .pipe(htmlMin({collapseWhitespace: true, removeComments: true, minifyJS: true}))
    .pipe(gulp.dest('dist/views'));
});

gulp.task('pizza-css', function() {
  return gulp.src('src/views/css/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(csso())
    .pipe(gulp.dest('dist/views/css'));
});

gulp.task('pizza-js', function() {
  return gulp.src('src/views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/views/js'))
});

gulp.task('pizza-images', function() {
  return gulp.src('src/views/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('dist/views/images'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
})