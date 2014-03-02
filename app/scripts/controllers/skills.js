"use strict";

angular.module("interactiveCvApp")
    .controller("SkillsCtrl", function ($scope, $http) {
        $http.get("/api/skills").success(function (skills) {
            $scope.skills = skills;
        });

        $scope.getSkillsByType = function getSkillsByType(type) {
            return $scope.skills.filter(function (skill) {
                return skill.type === type;
            });
        };

        $scope.getLevelNameFor = function getLevelNameFor(skill) {
            var level = skill.level;
            return level === 100 ?
                "Master" :
                level > 90 ? "Expert" :
                level > 70 ? "Proficient" :
                level > 50 ? "Competent" :
                level > 30 ? "Adv. beginner" :
                "Novice";
        };
    });