/**
 * This is a Gulp task.
 */
var path = require('path');
var wrap = require('gulp-wrap');
var concat = require('gulp-concat');

var ngFixturesTplPath = './gulp-templates/';
var ngFixtureTpl = ngFixturesTplPath + 'fixture.tpl';
var ngFixturesTpl = ngFixturesTplPath + 'fixtures.tpl';

module.exports = function gulpTask(gulp) {
	// feed default fixture data
	return function wrapFixtures(opts) {
	  return function() {
	  	return gulp.src(opts.src)
		    .pipe(wrap({ src: ngFixtureTpl }, { path: path}))
		    .pipe(concat(opts.filename))
		    .pipe(wrap({ src: ngFixturesTpl }, { moduleName: opts.module || 'fixtures' }))
		    .pipe(concat(opts.filename))
		    .pipe(gulp.dest(opts.dest));
		};
	};
};