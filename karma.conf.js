// Karma configuration
// Generated on Fri Apr 08 2016 01:24:41 GMT-0400 (EDT)
var wiredep = require('wiredep');

module.exports = function(config) {

  var bowerFiles = wiredep({devDependencies:true}).js;
  var appFiles = [
    './src/modules/**/*-module.js',
    './src/modules/**/**/*.js',
    './src/modules/**/**/*.spec.js'
  ];

  config.set({
    basePath: './',
    frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai', 'dirty-chai'],
    files: [].concat(bowerFiles, appFiles),
    preprocessors: {
      './src/modules/**/!(*.spec).js': ['coverage']
    },
    reporters: ['dots', 'coverage'],
    coverageReporter: {
      type: 'text-summary'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
