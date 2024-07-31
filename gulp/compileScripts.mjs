import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import browserify from 'browserify';
import uglify from 'gulp-uglify';
import vinylBuffer from 'vinyl-buffer';
import vinylSourceStream from 'vinyl-source-stream';
import babelify from 'babelify';

const compileMainMinScripts = () => {
  return browserify('source/js/main.js', { debug: true })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(vinylSourceStream('main.js'))
    .pipe(vinylBuffer())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('build/js'));
};

const compileMainScripts = () => {
  return browserify('source/js/main.js', { debug: true })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(vinylSourceStream('main.js'))
    .pipe(vinylBuffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'));
};

export { compileMainMinScripts, compileMainScripts };
