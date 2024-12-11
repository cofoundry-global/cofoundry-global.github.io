const gulp = require('gulp');

// Task to copy reports from src to dist
gulp.task('copy-reports', function() {
    return gulp.src('src/reports/**/*')
        .pipe(gulp.dest('dist/reports'));
});

// Default task to run all tasks
gulp.task('default', gulp.series('copy-reports'));
