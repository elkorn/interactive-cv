"use strict";
var WorkExperience = require("./timelineEntry");
var date = require("../services/date");
var fromYaml = require("../services/yaml.js");

function presentOrDate(str) {
  if (str.toLowerCase() === "present") {
    return str;
  } else {
    return date.tryDate(str);
  }
}

function asWorkExperience(parsedYaml) {
  return new WorkExperience(
    presentOrDate(parsedYaml.from),
    presentOrDate(parsedYaml.to),
    parsedYaml.at,
    parsedYaml.as,
    parsedYaml.description
  );
}

module.exports = function() {
  return fromYaml(__dirname + "/../../data/work-experience.yaml")
    .map(asWorkExperience);
};
