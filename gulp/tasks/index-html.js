var includes = require("../../config/includes.js");
var inject = require('gulp-inject');
var watch = require('gulp-watch');

var injectApp = function() {
  var appStream = gulp.src(includes.app, {read: false});
  var target = gulp.src('public/index.html');
  target.pipe(inject(appStream, {relative: true}))
    .pipe(gulp.dest('public'));
  watch(includes.app, {verbose:true}, function(stream) {
    if (stream.event == "add" || stream.event == "unlink") {
      injectApp();
    }
  });
};

var injectLib = function() {
  var target = gulp.src('./public/index.html');
  var vendorsStream = gulp.src(includes.npmlib, { base: './node_modules' })
    .pipe(gulp.dest('./public/lib'));
  target.pipe(inject(vendorsStream, {relative: true, name:"vendors"}))
    .pipe(gulp.dest('./public'));
};

module.exports.injectApp = injectApp;

module.exports.injectLib = injectLib;