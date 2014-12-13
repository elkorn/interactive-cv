"use strict";

angular.module("interactiveCvApp")
  .directive("heading", function() {
    return {
      restrict: "A",
      replace: true,
      scope: {
        name: "@",
        heading: "@",
        model: "="
      },
      templateUrl: "views/partials/heading.html"
    };
  });
