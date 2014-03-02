"use strict";

angular.module("interactiveCvApp")
    .controller("MainCtrl", function ($scope, $rootScope, $http, HeightEqualizer) {
        $http.get("/api/awesomeThings").success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $scope.equalizeHeight = function () {
            HeightEqualizer.equalizeHeight();
        };
    });