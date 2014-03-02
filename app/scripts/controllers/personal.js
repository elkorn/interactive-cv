(function (window, moment, undefined) {
    "use strict";

    angular.module("interactiveCvApp")
        .controller("PersonalCtrl", function ($scope, $http) {
            $scope.inBusinessFor = "a few years";
            $http.get("/api/workingSince").success(function (workingSince) {
                $scope.inBusinessFor = moment(workingSince.date).fromNow();
            });
        });
})(window, window.moment);