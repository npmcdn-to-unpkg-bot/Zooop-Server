"use strict";

const gulp = require("gulp");
const requireDir = require("require-dir");
/*eslint-disable */
const _tasks = requireDir('./gulp_tasks');
/*eslint-enable */

gulp.task('default',["browser-sync","test","styles","images","build-js"],()=>{
  gulp.watch("tests/**/*.js",["test"]);
  gulp.watch("app/**/*",["test"]);
  gulp.watch("front_end_src/scss/**/*.scss",["styles"]);
  gulp.watch("front_end_src/scripts/**/*.js",["watch-js"]);
  gulp.watch("front_end_src/images/*",["clean:public/images","images"]);
});

gulp.task('prod',["styles","images"],()=>{});
