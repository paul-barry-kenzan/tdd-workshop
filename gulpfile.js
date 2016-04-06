'use strict';

var gulp = require('gulp');
var validateJsPipeline = require('pipeline-validate-js');
var validateCssPipeline = require('pipeline-validate-css');
var taskListing = require('gulp-task-listing');
var distArchivePipeline = require('webui-pipeline-archive-dist');
var testPipeline = require('webui-pipeline-test-tdd');
var less = require('pipeline-compile-less');
var handyman = require('pipeline-handyman');
var ngHtml2Js = require('gulp-ng-html2js');
var wiredep = require('wiredep');

gulp.task('lint:js', function () {
  return gulp.src([
      './*.js',
      './src/modules/**/*.js',
      './src/modules/**/*.spec.js'
    ])
    .pipe(validateJsPipeline.validateJS());
});

gulp.task('lint:css', function () {
  return gulp.src('./src/modules/**/less/*.less')
    .pipe(less({addSourceMaps: false}).compileLESS())
    .pipe(validateCssPipeline().validateCSS());
});

gulp.task('test', ['lint:js'], function () {
  var depFiles = wiredep({devDependencies: true}).js;
  var appFiles = [
    './src/modules/**/*-module.js',
    './src/modules/**/*.js',
    './src/modules/**/*.spec.js',
    './src/modules/**/*.html'
  ];

  var ttdTestOptions = {
    options: {
      files: [].concat(depFiles, appFiles),
      preprocessors: {
        './src/modules/**/*.html': ['ng-html2js']
      },
      ngHtml2JsPreprocessor: {
        stripPrefix: 'src/',
        moduleName: 'microui-templates'
      }

    }
  };
  var tddTestServer = new testPipeline.Server(ttdTestOptions);

  tddTestServer.start();
});

/*** DIST TASKS ***/
gulp.task('dist:js', ['lint:js', 'dist:templates'], function () {
  var uiJsFiles = [
    './src/modules/**/*-module.js',
    './src/modules/**/**/*.js',
    '!./src/modules/**/**/*.spec.js',
    './tmp/**/**/*.js'
  ];

  gulp.src(uiJsFiles)
    .pipe(distArchivePipeline.distributeScripts())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dist:css', ['lint:css'], function () {
  return gulp.src('./src/modules/**/less/*.less')
    .pipe(less({addSourceMaps: false}).compileLESS())
    .pipe(distArchivePipeline.distributeStyles())
    .pipe(gulp.dest('./dist'));
});

gulp.task('dist:templates', ['clean:tmp'], function () {
  return gulp.src('./src/modules/**/*.html')
    .pipe(ngHtml2Js({
      prefix: 'modules/',
      declareModule: true,
      moduleName: 'microui-templates'
    }))
    .pipe(gulp.dest('./tmp'));
});

/*** CLEAN UP ***/
gulp.task('dist:clean', function () {
  handyman.clean(['./dist/']);
});

gulp.task('clean:tmp', function () {
  handyman.clean(['./tmp']);
});

/*** MAIN TASKS ***/
gulp.task('lint', ['lint:js', 'lint:css']);
gulp.task('dist', ['dist:clean', 'dist:js', 'dist:css']);
gulp.task('help', taskListing);
gulp.task('build', ['test']);
gulp.task('default', ['help']);
