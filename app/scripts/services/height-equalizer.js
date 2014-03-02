"use strict";

var subviewsToLoad = 3,
    loadedSubViews = 0;

angular.module("interactiveCvApp")
    .service("HeightEqualizer", function HeightEqualizer($rootScope) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.equalizeHeight = function () {
            if (++loadedSubViews >= subviewsToLoad) {
                $rootScope.$broadcast("ui.equalizeHeight");
            }
        };
    });