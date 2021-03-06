# gulp-archieml
![CircleCI](https://img.shields.io/circleci/project/github/DallasMorningNews/gulp-archieml.svg) [![npm](https://img.shields.io/npm/v/gulp-archieml.svg)](https://github.com/DallasMorningNews/gulp-archieml) [![GitHub license](https://img.shields.io/github/license/DallasMorningNews/gulp-archieml.svg)](https://github.com/DallasMorningNews/gulp-archieml/blob/master/LICENSE)

A Gulp plugin for parsing Archie Markup Language (ArchieML) files into JSON using [archieml-js](https://github.com/newsdev/archieml-js).

From [ArchieML.org](http://archieml.org/):

> ArchieML (or "AML") was created at The New York Times to make it easier to write and edit structured text on deadline that could be rendered in web pages, or more specifically, rendered in interactive graphics.

See the [ArchieML spec](http://archieml.org/spec/1.0/CR-20150306.html) and [ArchieML.org](http://archieml.org/) for more information if you're interested in learning more about the language.


## Install

```
$ npm install --save-dev gulp-archieml
```


## Usage

```js
const gulp = require('gulp');
const archieml = require('gulp-archieml');

gulp.task('test', () => gulp.src('./path/to/*.aml')
  .pipe(archieml())
  .pipe(gulp.dest('./path/to/json/output/')));
```

## Tests

Tests (written in [Mocha](https://mochajs.org/)) can be run using:

```
$ npm test
```

Coverage is calculated using Istanbul and output to the _coverage_ folder:

```
$ open coverage/index.html
```


## License

MIT ©2016 [The Dallas Morning News](https://github.com/DallasMorningNews)
