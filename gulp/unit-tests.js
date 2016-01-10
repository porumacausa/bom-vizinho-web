'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var karma = require('karma');

var pathSrcHtml = [
  path.join(conf.paths.src, '/**/*.html')
];

var pathSrcJs = [
  path.join(conf.paths.src, '/**/!(*.spec).js')
];

function runTests (singleRun, done) {
  var reporters = ['dots'];
  var preprocessors = {};
  var coverageReporter = {};

  pathSrcHtml.forEach(function(path) {
    preprocessors[path] = ['ng-html2js'];
  });

  if (singleRun) {
    pathSrcJs.forEach(function(path) {
      preprocessors[path] = ['coverage'];
    });
    reporters.push('coverage');
	
	coverageReporter = {
      reporters: [
		{ type: 'text-summary' },
		{ type: 'html' }
	  ],
	  dir: 'coverage/'
    };
  }

  var localConfig = {
    configFile: path.join(__dirname, '/../karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun,
    reporters: reporters,
	coverageReporter: coverageReporter,
    preprocessors: preprocessors
  };

  var server = new karma.Server(localConfig, function(failCount) {
    done(failCount ? new Error("Failed " + failCount + " tests.") : null);
  })
  server.start();
}

gulp.task('test', ['scripts'], function(done) {
  runTests(true, done);
});

gulp.task('test:auto', ['scripts'], function(done) {
  runTests(false, done);
});
