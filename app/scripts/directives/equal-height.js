"use strict";

angular.module("interactiveCvApp")
    .directive("equalHeightAs", function () {
        return {
            restrict: "A",
            link: function postLink(scope, element, attrs) {

                function equalizeHeight() {
                    var reference = angular.element(attrs.equalHeightAs);
                    if (reference.length) {
                        element.css({
                            height: reference.height()
                        });
                    }
                }

                equalizeHeight();
                scope.$on("ui.equalizeHeight", equalizeHeight);
            }
        };
    });