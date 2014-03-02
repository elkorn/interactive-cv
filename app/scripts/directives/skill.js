"use strict";

angular.module("interactiveCvApp")
    .directive("skill", function () {
        return {
            templateUrl: "partials/skill.html",
            restrict: "E",
            skill: "=",
            replace: false
        };
    });