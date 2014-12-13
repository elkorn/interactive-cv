"use strict";
var getSkills = require("../data/skills");
var getEducation = require("../data/education");
var getWorkExperience = require("../data/workExperience");
var getWorkedWith = require("../data/workedWith");
var pkgInfo = require("../../package");

delete pkgInfo.dependencies;
delete pkgInfo.devDependencies;
delete pkgInfo.engines;

exports.workingSince = function (req, res) {
    res.json({
        date: new Date("Jul 4, 2011")
    });
};

exports.skills = function (req, res) {
    res.json(getSkills());
};

exports.education = function (req, res) {
    res.json(getEducation());
};

exports.workExperience = function (req, res) {
    res.json(getWorkExperience());
};

exports.workedWith = function (req, res) {
    res.json(getWorkedWith());
};

exports.appInfo = function(req, res) {
    res.json(pkgInfo);
};
