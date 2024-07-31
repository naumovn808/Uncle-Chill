import gulp from 'gulp';
import sass from 'gulp-sass';
import * as sassModule from 'sass';  // Импортируем sass как модуль
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';

// Устанавливаем sass компилятор для gulp-sass
const compileSass = sass(sassModule);

const compileStyles = () => {
  return gulp.src('source/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(compileSass().on('error', compileSass.logError))  // Используем gulp-sass с новым компилятором
    .pipe(sourcemaps.write('.'))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'));
};

const compileMinStyles = () => {
  return gulp.src('source/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(compileSass().on('error', compileSass.logError))  // Используем gulp-sass с новым компилятором
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'));
};

export { compileStyles, compileMinStyles };
