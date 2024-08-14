import gulp from 'gulp';
import rigger from 'gulp-rigger';

export const compileHtml = () => {
  return gulp
    .src('source/**/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('build'));
};
