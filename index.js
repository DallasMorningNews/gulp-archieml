'use strict';

var gutil = require('gulp-util'),
	through = require('through2'),
	archieml = require('archieml');

module.exports = function () {
	return through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-archieml', 'Streaming not supported'));
			return;
		}

		try {
			var parsed = archieml.load(file.contents.toString());
			file.contents = new Buffer(JSON.stringify(parsed));
			file.path = gutil.replaceExtension(file.path, '.json');
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-archieml', err));
		}

		cb();
	});
};
