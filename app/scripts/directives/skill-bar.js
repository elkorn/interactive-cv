"use strict";

angular.module("interactiveCvApp")
    .directive("skillBar", function () {
        return {
            skill: "@",
            restrict: "E",
            replace: true,
            templateUrl: "templates/bar.html",
            postLink: function (scope, element) {
                element.css("width", scope.skill.level + "%");
            }
        };
    });