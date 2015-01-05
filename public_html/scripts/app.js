/**
 * Created by sh on 04/01/15.
 */
"use strict";

var app = angular.module('app', ['ngRoute','app.overview','app.users']);

app.config (['$routeProvider', function ($routeProvider) {
    console.log ("config");
    $routeProvider.otherwise({
        redirectTo: '/overview'
    });
}]);

