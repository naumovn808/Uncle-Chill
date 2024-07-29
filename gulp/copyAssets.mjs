import gulp from 'gulp';


const copyImages = () =>
    gulp.src('source/images/**/*.{png,jpg,jpeg,svg}')
        .pipe(gulp.dest('build/images'));

const copySvg = () =>
    gulp.src('source/images/**/*.svg')
        .pipe(gulp.dest('build/images'));



const copy = () =>
  gulp.src([
    'source/**.html',
    'source/fonts/**',
    'source/img/**',
    'source/favicon.ico',
    'source/manifest.json'
  ], {
    base: 'source',
  })
    .pipe(gulp.dest('build'));

export { copy, copyImages, copySvg };
