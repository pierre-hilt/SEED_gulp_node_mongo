var vendors = [
  "./node_modules/angular/angular.min.js",
  "./node_modules/angular/angular.min.js.map",
  "./node_modules/bootstrap/dist/css/bootstrap.min.css"
];

var app = ['public/**/*.js', 'public/**/*.css', '!public/lib/**/*.*'];

module.exports = {
  npmlib: vendors,
  app: app
};