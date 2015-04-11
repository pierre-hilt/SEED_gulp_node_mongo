var a = require("./tasks/index-html");
var requireDir = require("require-dir");
var tasks = requireDir("./tasks");

module.exports = function(tasksList) {
  tasksList.forEach(function(name) {
    for (var task in tasks) {
      if (typeof tasks[task][name] !== "undefined") {
        gulp.task(name, tasks[task][name]);
      }
    }
  });
};