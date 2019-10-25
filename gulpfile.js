var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()

gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', gulp.parallel('browserSync', 'sass', () => {
  gulp.watch('app/scss/**/*.scss', gulp.series('sass'))
  gulp.watch('app/*.html').on('change', browserSync.reload)
  gulp.watch('app/js/**/*.js').on('change', browserSync.reload)
}))
