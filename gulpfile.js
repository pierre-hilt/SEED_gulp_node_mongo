gulp = require('gulp');
var nodemon = require('gulp-nodemon'),
  inject = require('gulp-inject'),
  watch = require('gulp-watch'),
  child_process = require('child_process'),
  config = require('./gulp')(['injectApp', 'injectLib', 'livereload', 'jshint']);

gulp.task('buildIndex',['injectApp', 'injectLib']);

gulp.task('startServer', function() {
  // Start nodemon and ignore client files and gulpfile 
  nodemon({
    script: 'server.js', 
    ignore: ['public', 'gulpfile.js'], 
    ext: 'js css', 
    env: { 'NODE_ENV': 'development' }
  });
});
gulp.task('dev', ['jshint', 'buildIndex', 'livereload', 'startServer']);

gulp.task('default', ['dev']);