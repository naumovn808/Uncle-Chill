import browserify from 'browserify';
import babelify from 'babelify';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import vinylBuffer from 'vinyl-buffer';
import vinylSourceStream from 'vinyl-source-stream';

const compileMainMinScripts = () => {
  console.log('Compiling main.min.js...');
  return browserify('source/js/main.js', { debug: true, cache: {}, packageCache: {} })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(vinylSourceStream('main.js'))
    .pipe(vinylBuffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'));
};

const compileMainScripts = () => {
  console.log('Compiling main.js...');
  return browserify('source/js/main.js', { debug: true, cache: {}, packageCache: {} })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(vinylSourceStream('main.js'))
    .pipe(vinylBuffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'));
};
export { compileMainMinScripts, compileMainScripts };
