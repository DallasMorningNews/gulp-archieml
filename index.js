'use strict';

var archieml = require('archieml'),
		PluginError = require('plugin-error'),
		replaceExt = require('replace-ext'),
		through = require('through2');


module.exports = function () {
	return through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-archieml', 'Streaming not supported'));
			return;
		}

		try {
			var parsed = archieml.load(file.contents.toString());
			file.contents = new Buffer(JSON.stringify(parsed));
			file.path = replaceExt(file.path, '.json');
			this.push(file);
		} catch (err) {
			this.emit('error', new PluginError('gulp-archieml', err));
		}

		cb();
	});
};
