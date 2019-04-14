var gulp = require('gulp');
var gutil = require('gulp-util');
var rsp = require('remove-svg-properties').stream;

gulp.task('remove-svg-properties', function () {
    gulp.src('./src/**/*.svg')
    .pipe(rsp.remove({
        properties: [rsp.PROPS_FILL, rsp.PROPS_STROKE, 'color']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.svg', ['js']);
});

gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});

gulp.task('default', ['log', 'remove-svg-properties', 'watch']);
