(function (window, moment, undefined) {
    "use strict";

    angular.module("interactiveCvApp")
        .controller("PersonalCtrl", function ($scope, $http) {

            $http.get("/api/workingSince").success(function (workingSince) {
                $scope.inBusinessFor = moment(workingSince.date).fromNow();
            });
        });
})(window, window.moment);