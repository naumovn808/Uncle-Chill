import gulp from 'gulp';
import del from 'del';
import { compileHtml } from './compileHTML.mjs';

const cleanComponents = () => {
  return del('build/components');
};

const copyImages = () =>
  gulp.src('source/images/**/*.{png,jpg,jpeg,svg}')
    .pipe(gulp.dest('build/images'));

const copySvg = () =>
  gulp.src('source/images/**/*.svg')
    .pipe(gulp.dest('build/images'));

const copy = gulp.series(
  gulp.parallel(
    copyImages,
    copySvg,
    compileHtml
  ),
  cleanComponents 
);

export { copy };
