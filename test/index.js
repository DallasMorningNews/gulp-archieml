const fs = require('fs');

const assert = require('assert');
const vfs = require('vinyl-fs');

const archieml = require('../');


const ARCHIE_FIXTURES = ['./test/fixtures/*.aml'];

describe('grunt-archieml', () => {
  it('should convert test/fixtures in ArchieML to JSON', (done) => {
    vfs.src(ARCHIE_FIXTURES)
      .pipe(archieml())
      .on('data', (file) => {
        assert(file.isBuffer());

        // Load correct JSON from the test/expected folder
        const path = file.path.replace('/test/fixtures/', '/test/expected/');
        const expected = fs.readFileSync(path);

        assert.strictEqual(file.contents.toString('utf8'), expected.toString('utf8'));
      })
      .on('end', done);
  });

  it('should raise an error when passed a Node stream', (done) => {
    vfs.src(ARCHIE_FIXTURES, { buffer: false })
      .pipe(archieml())
      .on('error', (err) => {
        assert.strictEqual(err.plugin, 'gulp-archieml');
        assert.strictEqual(err.message, 'Streaming not supported');
        done();
      });
  });

  it('should handle null files', (done) => {
    vfs.src('./test/fixtures/')
      .pipe(archieml())
      .on('data', (file) => {
        assert.strictEqual(file.contents, null);
        done();
      });
  });
});
