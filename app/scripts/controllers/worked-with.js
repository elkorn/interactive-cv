"use strict";

angular.module("interactiveCvApp")
    .controller("WorkedWithCtrl", function ($scope, $http) {
        $http.get("/api/workedWith").success(function (workedWith) {
            $scope.workedWith = workedWith;
        });
    });