import gulp from 'gulp';
import { compileStyles, compileMinStyles } from './gulp/compileStyles.mjs';
import { compileHtml } from './gulp/compileHTML.mjs';
import { copy } from './gulp/copyAssets.mjs';
import { compileMainMinScripts, compileMainScripts } from './gulp/compileScripts.mjs';
import { createSprite, createWebp, optimizePng, optimizeJpg } from './gulp/optimizeImages.mjs';
import browserSync from 'browser-sync';
import del from 'del';

const server = browserSync.create();

const clean = () => del('build');

const syncServer = () => {
  server.init({
    server: 'build/',
    index: 'index.html',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('source/**/*.html', gulp.series(compileHtml, refresh));
  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series(compileStyles, refresh));
  gulp.watch('source/js/**/*.{js,json}', gulp.series(compileMainMinScripts, refresh));
  gulp.watch('source/data/**/*.{js,json}', gulp.series(copy, refresh));
  gulp.watch('source/images/**/*.svg', gulp.series(copy, createSprite, refresh));
  gulp.watch('source/images/**/*.{png,jpg,webp}', gulp.series(copy, refresh));
  gulp.watch('source/favicon/**', gulp.series(copy, refresh));
  gulp.watch('source/video/**', gulp.series(copy, refresh));
  gulp.watch('source/downloads/**', gulp.series(copy, refresh));
  gulp.watch('source/*.php', gulp.series(copy, refresh));
};

const refresh = (done) => {
  server.reload();
  done();
};

const build = gulp.series(
  clean,
  gulp.parallel(
    copy,
    createSprite,
    createWebp,
    optimizePng,
    optimizeJpg,
    compileMinStyles,
    compileMainMinScripts,
    compileHtml
  )
);

const dev = gulp.series(
  clean,
  gulp.parallel(
    copy,
    createSprite,
    createWebp,
    optimizePng,
    optimizeJpg,
    compileMinStyles,
    compileMainMinScripts,
    compileHtml
  ),
  syncServer
);

const start = gulp.series(
  clean,
  gulp.parallel(
    copy,
    createSprite,
    compileStyles,
    compileMainScripts,
    compileHtml
  ),
  syncServer
);

export { build, dev, start };
