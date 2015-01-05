"use strict";

var overView = angular.module('app.overview', []);

overView.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/overview',{
            templateUrl : './scripts/overView/overView-temp.html'
        });
}]);

