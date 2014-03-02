(function (window, moment, undefined) {
    "use strict";

    angular.module("interactiveCvApp")
        .controller("PersonalCtrl", function ($scope, $http) {
            $scope.workingSince = moment("Jul 4, 2010");

            $http.get("/api/workingSince").success(function (workingSince) {
                $scope.workingSince = moment(workingSince.date);
            });

            $scope.getYearsWorking = function () {
                return $scope.workingSince.fromNow();
            };
        });
})(window, window.moment);