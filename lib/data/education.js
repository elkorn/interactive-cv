"use strict";
var Education = require("./timelineEntry");
var fromYaml = require("../services/yaml");
var date = require("../services/date");

function asEducation(parsedYaml) {
  return new Education(
    date.tryDate(parsedYaml.from),
    date.tryDate(parsedYaml.to),
    parsedYaml.at,
    parsedYaml.degree,
    parsedYaml.description);
}

module.exports = function() {
  return fromYaml(__dirname + "/../../data/education.yaml").map(asEducation);
};
