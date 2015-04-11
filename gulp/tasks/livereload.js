var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var inject = require('gulp-inject');

module.exports.livereload = function() {
  var source = gulp.src("./client/**/livereload.html");
  var target = gulp.src('./public/index.html');
  target.pipe(inject(source, {
    starttag: '<!-- inject:head:{{ext}} -->',
    transform: function (filePath, file) {
      // return file contents as string 
      return file.contents.toString('utf8');
    }
  }))
    .pipe(gulp.dest('./public'));
  livereload.listen(35729, function() {
      console.log('... Listening on 35729 ...');
  });
  watch(['./public/**.*', './server/**.*'], {verbose:true}, function() {
    console.log("reload browser");
    livereload.reload();
  });
};