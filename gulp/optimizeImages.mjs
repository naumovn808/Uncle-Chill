import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';

const optimizeSvg = () =>
    gulp.src('source/images/**/*.svg')
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('build/images'));

const sprite = () =>
  gulp
    .src('source/images/sprite/*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/images'));

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

export { optimizeSvg, sprite, createWebp, optimizePng, optimizeJpg };
