"use strict";

angular.module("interactiveCvApp")
    .directive("unroll", function () {
        return {
            restrict: "A",
            template: "<section data-ng-transclude></section>",
            transclude: true,
            replace: true,
            link: function postLink(scope, element) {
                var children = element.children().not("#unroll");
                var hiddenChildren = children.not(":first");

                function updateHiddenChildrenCount() {
                    scope.hiddenChildren = hiddenChildren.length;
                }

                scope.unroll = function () {
                    hiddenChildren.first().show();
                    hiddenChildren = children.not(":visible");
                    updateHiddenChildrenCount();
                    if (scope.hiddenChildren === 0) {
                        element.children("#unroll").hide();
                    }
                };

                hiddenChildren.hide();
                updateHiddenChildrenCount();
            }
        };
    });