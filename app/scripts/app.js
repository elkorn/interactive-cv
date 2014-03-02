"use strict";

angular.module("interactiveCvApp", [
    "ngCookies",
    "ngResource",
    "ngSanitize",
    "ngRoute",
    "ui.gravatar"
])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "partials/main",
                controller: "MainCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });
        $locationProvider.html5Mode(true);
    });