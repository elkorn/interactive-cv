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
    new Skill("JavaScript", 90, SKILL_TYPES.BOTH),
    new Skill("Node.js", 89, SKILL_TYPES.BOTH),
    new Skill("CSS", 89, SKILL_TYPES.BOTH),
    new Skill("HTML5", 80, SKILL_TYPES.BOTH),
    new Skill("ASP .NET (MVC, WebAPI)", 65, SKILL_TYPES.DAILY),
    new Skill("Golang", 72, SKILL_TYPES.DAILY),
    new Skill("C#", 66, SKILL_TYPES.DAILY),
    new Skill("Scrum", 65, SKILL_TYPES.DAILY),
    new Skill("Kanban", 45, SKILL_TYPES.DAILY),
    new Skill("SQL Server", 61, SKILL_TYPES.DAILY),
    new Skill("PostgreSQL", 63, SKILL_TYPES.DAILY),
    new Skill("AWS (EC2, DynamoDB, ELB)", 67, SKILL_TYPES.DAILY),
    new Skill("WCF", 40, SKILL_TYPES.DAILY),
    new Skill("C++", 25, SKILL_TYPES.DAILY),
    new Skill("Git", 65, SKILL_TYPES.DAILY),
    new Skill("TFS", 45, SKILL_TYPES.DAILY),
    new Skill("Atlassian JIRA", 45, SKILL_TYPES.DAILY),
    new Skill("Vagrant/Docker", 30, SKILL_TYPES.DAILY),
    new Skill("Scala", 51, SKILL_TYPES.DAILY),
    new Skill("Akka", 40, SKILL_TYPES.DAILY)
];

module.exports = function () {
    return SKILLS;
};
