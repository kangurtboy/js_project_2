const gulp = require('gulp');
const browserSync = require('browser-sync');

function browSerReload() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
};
exports.default = browSerReload;

