// Karma configuration
// Generated on Fri Apr 08 2016 01:24:41 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['mocha'],
    files: [
      './src/modules/**/*-module.js',
      './src/modules/**/**/*.js'
    ],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
