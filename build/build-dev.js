const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
const { src, dest, task, watch, parallel } = require('gulp');

// 处理css文件
task('compile-css', () => {
  return src(['../src/**/*.less'])
      .pipe(less())
      .pipe(cssmin())
      .pipe(rename((path) => {
        path.extname = '.wxss';
      }))
      .pipe(dest('../dist/'));
});

// 处理js文件
task('compile-js', () => {
  return src(['../src/**/*.js'])
      .pipe(dest('../dist/'));
});

// 处理json文件
task('compile-json', () => {
  return src(['../src/**/*.json'])
      .pipe(dest('../dist/'));
});

// 处理wxml文件
task('compile-wxml', () => {
  return src(['../src/**/*.wxml'])
      .pipe(dest('../dist/'));
});

task('auto', () => {
  watch(['../src/**/*.less'], parallel('compile-css'));
  watch(['../src/**/*.js'], parallel('compile-js'));
  watch(['../src/**/*.json'], parallel('compile-json'));
  watch(['../src/**/*.wxml'], parallel('compile-wxml'));
});

task('default', parallel('compile-css', 'compile-js', 'compile-json', 'compile-wxml', 'auto'));