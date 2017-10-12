'use strict';

const del = require('del');
const gulp = require('gulp');
const merge = require('merge2');
const ts = require('gulp-typescript');
const tslint = require('gulp-tslint');

const tsProject = ts.createProject({
  declaration: true
});

gulp.task('lint', () => {
  return gulp.src('src/**/*.ts').pipe(tslint({
    formatter: "verbose"
  })).pipe(tslint.report({
    summarizeFailureOutput: true
  }));
});

gulp.task('compile', () => {
  const tsResult = gulp.src('src/**/*.ts').pipe(tsProject());

  return merge([
    tsResult.dts.pipe(gulp.dest('release/definitions')),
    tsResult.js.pipe(gulp.dest('release/js'))
  ]);
});

gulp.task('clean', (callback) => {
  del('release/**', callback);
});

gulp.task('watch', () => {
  gulp.watch([
    'src/**/*.ts'
  ], [
    'lint',
    'compile'
  ]);
});

gulp.task('default', [
  'lint',
  'compile'
]);
