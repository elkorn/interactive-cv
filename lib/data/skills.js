"use strict";
var SKILL_TYPES = {
    DAILY: 1,
    NIGHTLY: 2,
    BOTH: 3
};

function Skill(name, level, type) {
    this.name = name;
    this.level = level;
    this.type = type;
}

var SKILLS = [
    new Skill("Foosball", 100, SKILL_TYPES.BOTH),
    new Skill("JavaScript", 80, SKILL_TYPES.BOTH),
    new Skill("ASP .NET MVC", 70, SKILL_TYPES.DAILY)
];

module.exports = function () {
    return SKILLS;
};