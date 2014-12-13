'use strict';

var path = require('path');
var personalInfo = require("../data/personal-info");

exports.partials = function(req, res) {
  var stripped = req.url.split('.')[0];
  var requestedView = path.join('./', stripped);
  res.render(requestedView, function(err, html) {
    if(err) {
      res.render('404');
    } else {
      res.send(html);
    }
  });
};

exports.personalInfo = function(req, res) {
  res.send(personalInfo());
};

exports.index = function(req, res) {
  res.render('index');
};
