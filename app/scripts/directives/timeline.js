"use strict";

angular.module("interactiveCvApp")
  .directive("timeline", function() {
    return {
      templateUrl: "partials/timeline.html",
      restrict: "AE",
      scope: {
        timeline: "="
      },
      controller: function timelineCtrl($scope) {
        $scope.isPresent = function(item) {
          var endingDate = new Date(item.endingDate);
          return isNaN(endingDate.getTime()) || endingDate >= new Date();
        };
      }
    };
  });
