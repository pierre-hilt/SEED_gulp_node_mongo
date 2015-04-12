var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var inject = require('gulp-inject');

gulp.task('livereload', ['build:dev'], function() {
  var source = gulp.src("./client/**/livereload.html");
  var target = gulp.src('./public/index.html');
  livereload.listen(35729, function() {
      console.log('... Listening on 35729 ...');
  });
  return target.pipe(inject(source, {
    starttag: '<!-- inject:head:{{ext}} -->',
    transform: function (filePath, file) {
      // return file contents as string 
      return file.contents.toString('utf8');
    }}))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch:livereload', ['livereload'], function() {
  watch(['./public/**.*', './server/**.*'], {verbose:true}, function() {
    console.log("reload browser");
    livereload.reload();
  });
});