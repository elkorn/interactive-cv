"use strict";
var WorkExperience = require("./timelineEntry");

var WORK_EXPERIENCE = [
    new WorkExperience(
        new Date("May 1, 2013"),
        "Present",
        "Future Processing Sp. z o.o.",
        "Software Engineer",
        "Full-stack JavaScript web development (node.js + AngularJS)"),
    new WorkExperience(
        new Date("Feb 1, 2012"),
        new Date("May 1, 2013"),
        "Future Processing Sp. z o.o.",
        "Lead front-end engineer of GeoAdvert.pl",
        "Developing a Web Access layer for the service, using ASP .NET MVC3, jQuery and Google Maps."),
    new WorkExperience(
        new Date("Jul 4, 2011"),
        new Date("Feb 1, 2012"),
        "Future Processing Sp. z o.o.",
        "Software Engineer",
        "Creating intranet enterprise websites in ASP .NET WebForms with MS AJAX.")
];

module.exports = function () {
    return WORK_EXPERIENCE;
};
