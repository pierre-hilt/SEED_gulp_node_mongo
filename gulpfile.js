gulp = require('gulp');
var nodemon = require('gulp-nodemon'),
  inject = require('gulp-inject'),
  watch = require('gulp-watch'),
  child_process = require('child_process');
  //config = require('./gulp')(['inject:app', 'inject:lib', 'livereload', 'jshint', 'watch:app']);

var requireDir = require("require-dir");
requireDir("./tasks");

gulp.task('build:dev', ['build:index']);

gulp.task('watch:dev',['watch:app', 'watch:livereload', 'watch:jshint'], function(cb) {
  cb();
});

gulp.task('startServer:dev', ['build:dev', 'livereload'], function() {
  // Start nodemon and ignore client files and gulpfile 
  nodemon({
    script: 'server.js', 
    ignore: ['public', 'gulpfile.js'], 
    ext: 'js css', 
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('dev', ['build:dev', 'watch:dev', 'startServer:dev']);

gulp.task('default', ['dev']);