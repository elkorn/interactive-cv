"use strict";

angular.module("interactiveCvApp")
    .controller("EducationCtrl", function ($scope, $http) {
        $http.get("/api/education").success(function (education) {
            $scope.education = education;
        });
    });