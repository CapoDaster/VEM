/**
 * Created by sh on 04/01/15.
 */
"use strict";

(function () {
    var users = angular.module('app.users',[])

        .controller('userCtrl',['$scope', function($scope){
                $scope.username = "Simon";
                console.log("init User Ctrl");
            }])
    ;

})();