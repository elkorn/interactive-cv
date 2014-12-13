"use strict";
var Education = require("./timelineEntry");

var EDUCATION = [
    new Education(
        new Date("Oct 1, 2010"),
        new Date("Jan 1, 2013"),
        "Silesian University of Technology",
        "BSc in Computer Science",
        "Thesis: Web access layer to the free version of the GeoAdvert system, GPA 5.0"),
    new Education(
        new Date("Feb 1, 2013"),
        new Date("Nov 1, 2014"),
        "Silesian University of Technology",
        "MSc in Computer Science",
        "Thesis: Parameterized algorithm complexity through kernelizeation, based on the vertex cover problem, GPA 5.0")
];

module.exports = function () {
    return EDUCATION;
};
