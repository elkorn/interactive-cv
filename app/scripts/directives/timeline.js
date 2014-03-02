"use strict";

angular.module("interactiveCvApp")
    .directive("timeline", function () {
        return {
            templateUrl: "partials/timeline.html",
            restrict: "AE",
            scope: {
                timeline: "="
            },
            link: function postLink(scope) {
                console.log(scope.timeline);
            }
        };
    });