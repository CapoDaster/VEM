/**
 * Created by sh on 04/01/15.
 */
"use strict";

var app = angular.module('app', ['ngRoute','app.overview','app.users','app.userEditView','app.pwChangeView']);

app.config (['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/overview'
    });
}]);

app.run( ['$user' ,function ($user){
    $user.whoami();

    //Just for testing purposes
    //$user.changePassword('c6b2b3b3f2f9574c8f2ccf520100ac13', 'abcde');
}]);