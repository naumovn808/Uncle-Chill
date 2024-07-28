import gulp from 'gulp';
import sass from 'gulp-sass';
import dartSass from 'sass';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';

sass.compiler = dartSass;

const compileStyles = () =>
    gulp.src('source/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'));

const compileMinStyles = () =>
    gulp.src('source/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/css'));

export { compileStyles, compileMinStyles };
