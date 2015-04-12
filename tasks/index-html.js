var includes = require("../config/includes.js");
var inject = require('gulp-inject');
var watch = require('gulp-watch');


var injectApp = function() {
  var appStream = gulp.src(includes.app, {read: false});
  var target = gulp.src('public/index.html');
  return target.pipe(inject(appStream, {relative: true}))
    .pipe(gulp.dest('public'));
};

var injectLib = function() {
  var target = gulp.src('./public/index.html');
  var vendorsStream = gulp.src(includes.npmlib, { base: './node_modules' })
    .pipe(gulp.dest('./public/lib'));
  return target.pipe(inject(vendorsStream, {relative: true, name:"vendors"}))
    .pipe(gulp.dest('./public'));
};

gulp.task("inject:lib", function() {
  return injectLib();
});

gulp.task("inject:app", function() {
  return injectApp();
});

gulp.task("watch:app", ["build:index"], function() {
  watch(includes.app, {verbose:true}, function(stream) {
    if (stream.event == "add" || stream.event == "unlink") {
      injectApp();
    }
  });
});

gulp.task("build:index", ["inject:app", "inject:lib"]);