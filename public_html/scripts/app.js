/**
 * Created by sh on 04/01/15.
 */
"use strict";

var app = angular.module('app', ['app.users']);

app.run( function () {
    console.log ("run");
});

app.config ( function () {
    console.log ("config");
});
