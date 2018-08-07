const fs = require('fs');

const assert = require('assert');
const vfs = require('vinyl-fs');

const archieml = require('../');


describe('grunt-archieml', () => {
  it('should convert test/fixtures in ArchieML to JSON', (done) => {
    vfs.src(['./test/fixtures/*.aml'])
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
});
