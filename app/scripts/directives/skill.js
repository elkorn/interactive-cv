"use strict";

angular.module("interactiveCvApp")
    .directive("skill", function () {
        return {
            templateUrl: "partials/skill.html",
            restrict: "A",
            skill: "=",
            replace: false
        };
    });
