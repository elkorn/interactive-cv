"use strict";

// Module dependencies.
var express = require("express");

var app = express();

// Express Configuration
require("./lib/config/express")(app);

// Controllers
var api = require("./lib/controllers/api"),
    index = require("./lib/controllers");

// Server Routes
app.get("/api/workingSince", api.workingSince);
app.get("/api/skills", api.skills);
app.get("/api/education", api.education);
app.get("/api/appInfo", api.appInfo);
app.get("/api/workExperience", api.workExperience);
app.get("/api/workedWith", api.workedWith);

// Angular Routes
app.get("/partials/personal-info-content", index.personalInfo);
app.get("/partials/*", index.partials);
app.get("/*", index.index);

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Express server listening on port %d in %s mode", port, app.get("env"));
});

// Expose app
exports = module.exports = app;
