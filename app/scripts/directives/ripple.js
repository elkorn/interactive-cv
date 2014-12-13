"use strict";

angular.module("interactiveCvApp")
  .directive("ripple", function() {
    return {
      restrict: "A",
      link: function postLink(scope, element, attrs) {
        element.addClass("ripple");

        element.bind("click", function(event) {
          var btnOffset = angular.element(this).offset();
          var xPos = event.pageX - btnOffset.left;
          var yPos = event.pageY - btnOffset.top;
          var $this = angular.element(this);
          var height = $this.height();

          var $ripple = angular.element("<div/>");
          $ripple.addClass("ripple-effect");
          $ripple.addClass(attrs.ripple);

          $ripple.css("height", height);
          $ripple.css("width", height);

          $ripple
            .css({
              top: yPos - (height / 2),
              left: xPos - (height / 2)
            })
            .appendTo($this);

          window.setTimeout(function() {
            $ripple.remove();
            $ripple = null;
          }, 2000);
        });
      }
    };
  });
