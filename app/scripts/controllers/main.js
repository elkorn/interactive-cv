"use strict";

angular.module("interactiveCvApp")
    .controller("MainCtrl", function ($scope, $rootScope, $http) {

        $http.get("/api/appInfo").success(function (appInfo) {
            $scope.appInfo = appInfo;
        });
    });
