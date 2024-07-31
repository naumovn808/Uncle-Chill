import browserify from 'browserify';
import babelify from 'babelify';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import vinylBuffer from 'vinyl-buffer';
import vinylSourceStream from 'vinyl-source-stream';

const compileMainMinScripts = () =>
  browserify('source/js/main.js', { debug: true })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(vinylSourceStream('main.js'))
    .pipe(vinylBuffer())
    .pipe(sourcemaps.init({ loadMaps: true })) // Инициализация sourcemaps здесь
    .pipe(concat('main.min.js')) // Не минифицируем здесь
    .pipe(sourcemaps.write('.')) // Запись sourcemaps в ту же папку
    .pipe(gulp.dest('build/js'));

const compileMainScripts = () =>
  browserify('source/js/main.js', { debug: true })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(vinylSourceStream('main.js'))
    .pipe(vinylBuffer())
    .pipe(sourcemaps.init({ loadMaps: true })) // Инициализация sourcemaps здесь
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write('.')) // Запись sourcemaps в ту же папку
    .pipe(gulp.dest('build/js'));

export { compileMainMinScripts, compileMainScripts };
