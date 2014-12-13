"use strict";
var SKILL_TYPES = {
  DAILY: 1,
  NIGHTLY: 2,
  BOTH: 3
};

var fromYaml = require("../services/yaml");

function Skill(name, level, type) {
  this.name = name;
  this.level = level;
  this.type = type;
}

Skill.create = function(parsedYaml) {
  return new Skill(parsedYaml.name, parsedYaml.lvl, SKILL_TYPES.BOTH);
};

module.exports = function() {
  return fromYaml(__dirname + "/../../data/skills.yaml")
    .map(Skill.create);
};
