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
    new Skill("JavaScript", 89, SKILL_TYPES.BOTH),
    new Skill("Foosball", 100, SKILL_TYPES.BOTH),
    new Skill("Node.js", 85, SKILL_TYPES.BOTH),
    new Skill("CSS", 87, SKILL_TYPES.BOTH),
    new Skill("HTML5", 80, SKILL_TYPES.BOTH),
    new Skill("ASP .NET MVC", 75, SKILL_TYPES.DAILY),
    new Skill("C#", 70, SKILL_TYPES.DAILY),
    new Skill("Scrum", 65, SKILL_TYPES.DAILY),
    new Skill("WCF", 40, SKILL_TYPES.DAILY),
    new Skill("C++", 25, SKILL_TYPES.DAILY),
    new Skill("SVN", 55, SKILL_TYPES.DAILY),
    new Skill("Git", 45, SKILL_TYPES.DAILY),
    new Skill("TFS", 45, SKILL_TYPES.DAILY),
    new Skill("Atlassian JIRA", 45, SKILL_TYPES.DAILY),
    new Skill("Vagrant/Chef", 15, SKILL_TYPES.DAILY),
    new Skill("Scala", 10, SKILL_TYPES.DAILY)
];

module.exports = function () {
    return SKILLS;
};