"use strict";

angular.module("interactiveCvApp")
    .controller("WorkExperienceCtrl", function ($scope, $http) {
        $http.get("/api/workExperience").success(function (workExperience) {
            $scope.workExperience = workExperience;
        });
    });