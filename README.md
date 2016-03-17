# gulp-archieml

[![Circle CI](https://circleci.com/gh/DallasMorningNews/gulp-archieml.svg?style=svg)](https://circleci.com/gh/DallasMorningNews/gulp-archieml)

A Gulp plugin for parsing Archie Markup Language (ArchieML) files into JSON using [archieml-js](https://github.com/newsdev/archieml-js).

From [ArchieML.org](http://archieml.org/):

> ArchieML (or "AML") was created at The New York Times to make it easier to write and edit structured text on deadline that could be rendered in web pages, or more specifically, rendered in interactive graphics.

See the [ArchieML spec](http://archieml.org/spec/1.0/CR-20150306.html) and [ArchieML.org](http://archieml.org/) for more information if you're interested in learning more about the language.


## Install

```
$ npm install --save-dev https://github.com/DallasMorningNews/gulp-archieml/tarball/master
```


## Usage

```js
var gulp = require('gulp'),
    archieml = require('gulp-archieml');

gulp.task('test', function() {
	return gulp.src('./path/to/*.aml')
		.pipe(archieml())
		.pipe(gulp.dest('./path/to/json/output/'));
});
```

## Tests

Tests (written in [Mocha](https://mochajs.org/)) can be run using:

```
$ npm test
```


## License

MIT ©2016 [The Dallas Morning News](https://github.com/DallasMorningNews)
