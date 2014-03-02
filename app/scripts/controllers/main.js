"use strict";

angular.module("interactiveCvApp")
    .controller("MainCtrl", function ($scope, $rootScope, $http) {

        $http.get("/api/awesomeThings").success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $http.get("/api/appInfo").success(function (appInfo) {
            $scope.appInfo = appInfo;
        });
    });