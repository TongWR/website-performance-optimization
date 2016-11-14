var gulp = require('gulp');

gulp.task('default', ['html', 'css', 'js', 'images', 'pizza-images'], function() {

});

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function() {
  return gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img'));
})

gulp.task('pizza-images', function() {
  return gulp.src('src/views/images/*')
    .pipe(gulp.dest('dist/views/images'));
});