"use strict";

var yaml = require("js-yaml");
var fs = require("fs");

module.exports = function fromYaml(filePath) {
  return yaml.safeLoad(fs.readFileSync(filePath));
};
