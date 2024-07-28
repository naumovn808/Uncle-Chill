import gulp from 'gulp';

const copy = () =>
    gulp.src('source/**/*.{html,php,json,webp}')
        .pipe(gulp.dest('build'));

const copyImages = () =>
    gulp.src('source/images/**/*.{png,jpg,jpeg,svg}')
        .pipe(gulp.dest('build/images'));

const copySvg = () =>
    gulp.src('source/images/**/*.svg')
        .pipe(gulp.dest('build/images'));

export { copy, copyImages, copySvg };
