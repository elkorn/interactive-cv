"use strict";

var fromYaml = require("../services/yaml.js");

module.exports = function () {
    return fromYaml(__dirname + "/../../data/worked-with.yaml");
};
