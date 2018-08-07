const archieml = require('archieml');
const PluginError = require('plugin-error');
const replaceExt = require('replace-ext');
const through = require('through2');


module.exports = () => through.obj(function archieToJson(file, enc, cb) {
  if (file.isNull()) {
    cb(null, file);
    return;
  }

  if (file.isStream()) {
    cb(new PluginError('gulp-archieml', 'Streaming not supported'));
    return;
  }

  try {
    const parsed = archieml.load(file.contents.toString());
    const jsonFile = Object.assign(file, {
      contents: Buffer.from(JSON.stringify(parsed)),
      path: replaceExt(file.path, '.json'),
    });
    this.push(jsonFile);
  } catch (err) {
    cb(new PluginError('gulp-archieml', err));
    return;
  }

  cb();
});
