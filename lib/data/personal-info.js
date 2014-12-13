"use strict";

var fromMarkdown = require("../services/markdown");

module.exports = function personalInfo() {
  return fromMarkdown(__dirname + "/../../data/personal.md");
};
