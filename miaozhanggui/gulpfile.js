var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('minsass', function() {
        return gulp.src('./src/scss/index.scss')
            .pipe(sass())
            .pipe(gulp.dest('./src/css/'))
    })
    //监听
gulp.task('watch', function() {
    return gulp.watch('./src/scss/index.scss', gulp.series('minsass'))
})