import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import svgstore from 'gulp-svgstore';
import cheerio from 'gulp-cheerio';
import rename from 'gulp-rename';

const createSprite = () => {
  return gulp.src('source/images/sprite/*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(cheerio({
      run: ($) => {
        $('svg').attr('style', 'display:none');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(rename('sprite.html'))
    .pipe(gulp.dest('source/components'));
};


const createWebp = () =>
  gulp.src('source/images/**/*.{png,jpg,jpeg}')
    .pipe(webp())
    .pipe(gulp.dest('build/images'));

const optimizePng = () =>
  gulp.src('source/images/**/*.png')
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 5 })
    ]))
    .pipe(gulp.dest('build/images'));

const optimizeJpg = () =>
  gulp.src('source/images/**/*.{jpg,jpeg}')
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 75, progressive: true })
    ]))
    .pipe(gulp.dest('build/images'));

export { createSprite, createWebp, optimizePng, optimizeJpg };
