var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var inlinesource = require('gulp-inline-source');

gulp.task('default', ['html', 'css', 'js', 'assets'], function() {

});

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(inlinesource())
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true, minifyJS: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src('src/css/print.css')
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('assets', ['images', 'pizza-images', 'fonts'], function() {

});

gulp.task('images', function() {
  return gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img'));
})

gulp.task('pizza-images', function() {
  return gulp.src('src/views/images/*')
    .pipe(gulp.dest('dist/views/images'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});