'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var UltimateGenerator = module.exports = function UltimateGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(UltimateGenerator, yeoman.generators.Base);

UltimateGenerator.prototype.askFor = function askFor() {
  // have Yeoman greet the user.
  console.log(this.yeoman);
};

UltimateGenerator.prototype.app = function app() {
  this.expandFiles('**/*', { cwd: this.sourceRoot(), dot: true }).forEach(function (file) {
    if ([
      '.git'
    ].indexOf(file) !== -1) {
      return;
    }
    this.copy(file, file);
  }, this);
};

UltimateGenerator.prototype.projectfiles = function projectfiles() {
};
