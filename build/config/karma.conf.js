// Karma configuration
// Generated on Wed Sep 11 2013 12:39:59 GMT-0700 (PDT)

module.exports = function(config) {
	"use strict";

	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '../../',

		// frameworks to use
		frameworks: [ 'mocha', 'commonjs' ],

		// list of files / patterns to load in the browser
		files: [
			'src/client/**/*.js',
			'src/shared/**/*.js',
			{ pattern: 'src/client/content/vendor/normalize-3.0.2.css', included: false },
			{ pattern: 'src/client/content/screen.css', included: false },
			{ pattern: 'src/client/content/index.html', included: false },
			{ pattern: 'src/client/content/404.html', included: false }
		],

		// list of files to exclude
		exclude: [],

		// preprocessors
		preprocessors: {
			'src/client/content/*.js': [ 'commonjs' ],
			'src/client/ui/*.js': [ 'commonjs' ],
			'src/client/network/*.js': [ 'commonjs' ],
			'src/client/network/vendor/async-1.5.2.js': [ 'commonjs' ],
			'src/client/content/vendor/quixote-0.9.0.js': [ 'commonjs' ],
			'src/shared/vendor/proclaim-2.0.0.js': [ 'commonjs' ],
			'src/shared/*.js': [ 'commonjs' ]
		},

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: [ 'dots' ],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: [],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false
	});
};
