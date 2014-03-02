"use strict";

angular.module("interactiveCvApp")
    .controller("MainCtrl", function ($scope, $rootScope, $http) {
        $http.get("/api/awesomeThings").success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        var subviewsToLoad = 2,
            loadedSubViews = 0;

        $scope.equalizeHeight = function () {
            if (++loadedSubViews === subviewsToLoad) {
                $rootScope.$broadcast("ui.equalizeHeight");
            }
        };
    });