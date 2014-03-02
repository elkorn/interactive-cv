"use strict";

function setWidth(element, width) {
    if (element) {
        element.css({
            width: width
        });
    }
}

function show(element) {
    element.removeClass("hidden");
    element.addClass("visible");
}

angular.module("interactiveCvApp")
    .directive("skillBar", function ($timeout, HeightEqualizer) {
        return {
            skill: "=",
            restrict: "A",
            replace: true,
            templateUrl: "partials/skill-bar.html",
            link: function (scope, element) {

                var meter = angular.element(".meter", element);
                var level = angular.element(".skill-level", meter);
                var name = angular.element(".skill-name", meter);
                if(scope.skill.level <= 20) {
                    level.remove();
                }

                setWidth(meter, "0%");
                $timeout(function () {
                    setWidth(meter, scope.skill.level + "%");
                    show(level);
                    show(name);
                }, 500);

                HeightEqualizer.equalizeHeight();
            }
        };
    });