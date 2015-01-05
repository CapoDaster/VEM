/**
 * Created by sh on 04/01/15.
 */
"use strict";

(function () {
    var users = angular.module('app.users',[])

        .controller('userCtrl',['$scope', '$http', function($scope,$http){
                $http.get('users/whoami')
                    .success(function (data, status, headers, config) {
                        $scope.user = data;
                    })
                    .error(function (data, status, headers, config) {

                    })

                console.log("init User Ctrl");
            }])
    ;

})();