"use strict";

var editView = angular.module('app.userEditView', []);

overView.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/userEditView',{
            templateUrl : './scripts/userEditView/userEditView-temp.html'
        });
}]);

