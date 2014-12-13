"use strict";

var md = require("markdown").markdown;
var fs = require("fs");

module.exports = function fromMarkdown(filePath) {
  var file = fs.readFileSync(filePath);
  return md.toHTML(file.toString());
};
