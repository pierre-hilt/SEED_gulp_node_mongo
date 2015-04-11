var jshint = require('gulp-jshint');
var watch = require('gulp-watch');

module.exports.jshint = function() {
  run();
  watch(['**/*.js', '!node_modules/**/*.js', '!public/lib/**/*.js'], function() {
    run();
  });
};

function run() {
  gulp.src(['**/*.js', '!node_modules/**/*.js', '!public/lib/**/*.js'])
      .pipe(watch(['**/*.js', '!node_modules/**/*.js', '!public/lib/**/*.js']))
      .pipe(jshint())
      // You can look into pretty reporters as well, but that's another story
      .pipe(jshint.reporter('default'));
}