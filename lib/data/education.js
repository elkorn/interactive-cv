"use strict";

function Education(startingDate, endingDate, location, title, miscInfo) {
    this.startingDate = startingDate;
    this.endingDate = endingDate;
    this.location = location;
    this.title = title;
    this.miscInfo = miscInfo;
}

var EDUCATION = [
    new Education(
        new Date("Oct 1, 2010"),
        new Date("Feb 1, 2013"),
        "Silesian University of Technology",
        "BSc in Computer Science", "GeoAdvert, GPA 5.0"),
    new Education(
        new Date("Oct 1, 2013"),
        new Date("Jul 1, 2014"),
        "Silesian University of Technology",
        "MSc in Computer Science", "Parameterized algorithm complexity through kernelizeation, based on the vertex cover problem, expected graduation date: July 2014")
];

module.exports = function () {
    return EDUCATION;
};