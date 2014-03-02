"use strict";

angular.module("interactiveCvApp")
    .directive("skill", function () {
        return {
            templateUrl: "tempates/skill/skill.html",
            replace: true,
            //restrict: "E",
            // link: function postLink(scope, element) {
            //     element.text("this is the skill directive");
            // }
        };
    });