"use strict";
var Education = require("./timelineEntry");
var fromYaml = require("../services/yaml");

function asEducation(parsedYaml) {
  return new Education(
    parsedYaml.from,
    parsedYaml.to,
    parsedYaml.at,
    parsedYaml.degree,
    parsedYaml.description);
}

module.exports = function() {
  return fromYaml(__dirname + "/../../data/education.yaml").map(asEducation);
};
