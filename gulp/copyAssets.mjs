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

const copyFonts = () =>
  gulp.src('source/fonts/**')
    .pipe(gulp.dest('build/fonts'));

const copyAssets = () =>
  gulp.src([
    'source/favicon.ico',
    'source/manifest.json'
  ])
    .pipe(gulp.dest('build'));

const copy = gulp.series(
  gulp.parallel(
    copyImages,
    copyFonts,
    copySvg,
    compileHtml,
    copyAssets
  ),
  cleanComponents
);

export { copy };
