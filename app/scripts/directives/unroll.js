"use strict";

angular.module("interactiveCvApp")
  .directive("unroll", function() {
    return {
      restrict: "A",
      template: "<section data-ng-transclude></section>",
      transclude: true,
      replace: true,
      link: function postLink(scope, element, attrs, ctrl, transclude) {
        scope.startUnrolling = function() {
          var children = element.children().not("#unroll");
          var hiddenChildren = children.not(":first");
          scope.showContent = true;

          function updateHiddenChildrenCount() {
            scope.hiddenChildren = hiddenChildren.length;
          }

          scope.unroll = function() {
            hiddenChildren.first().removeClass("hide");
            hiddenChildren = children.not(":visible");
            updateHiddenChildrenCount();
            if (scope.hiddenChildren === 0) {
              element.children("#unroll").addClass("hide");
            }
          };

          hiddenChildren.addClass("hide");
          updateHiddenChildrenCount();
        };
      }
    };
  });
