'use strict';

var vfs = require('vinyl-fs'),
    fs = require('fs'),
    assert = require('assert'),
    archieml = require('../');

/*jshint -W117 */

describe('grunt-archieml', function() {
    it('should convert test/fixtures in ArchieML to JSON', function(done) {
        vfs.src(['./test/fixtures/*.aml'])
            .pipe(archieml())
            .on('data', function(file) {
                assert(file.isBuffer());

                // Load correct JSON from the test/expected folder
                var path = file.path.replace('/test/fixtures/', '/test/expected/'),
                    expected = fs.readFileSync(path);

                assert.strictEqual(file.contents.toString('utf8'), expected.toString('utf8'));
            })
            .on('end', function() {
                done();
            });
    });
});
