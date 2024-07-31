import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import uglify from 'gulp-uglify';
import vinylBuffer from 'vinyl-buffer';
import vinylSourceStream from 'vinyl-source-stream';
import babelify from 'babelify';
import rename from 'gulp-rename';

// Функция для минификации скриптов
const compileMainMinScripts = () =>
  browserify('source/js/main.js', { debug: true })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(vinylSourceStream('main.js'))
    .pipe(vinylBuffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(rename({ basename: 'main', extname: '.min.js' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'));

const compileMainScripts = () =>
  browserify('source/js/main.js', { debug: true })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(vinylSourceStream('main.js'))
    .pipe(vinylBuffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(rename({ basename: 'main', extname: '.js' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'));

export { compileMainMinScripts, compileMainScripts };
