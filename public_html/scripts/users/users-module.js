/**
 * Created by sh on 08/01/15.
 */
"use strict";

(function () {
    var users = angular.module('app.users',[]);

    users.provider ('$user', function (){
        var endpointWhoami = 'users/whoami';
        var endpointChangePassword = 'users/changePassword'

        this.$get = ['$http', '$log', '$rootScope', function ($http,$log,$rootScope){

            return {
                whoami : function (){

                    var config = {
                        url: endpointWhoami,
                        method: 'GET'
                    };

                    var promise = $http( config )
                        .success( function(data){
                            $rootScope.user = data;
                            $log.debug('successfull ', endpointWhoami, ' call with result ', data);
                        })
                        .error(function (data) {
                            $log.debug('failure in ', endpointWhoami, ' call with error ', data);
                        });

                    return promise;
                },
                changePassword: function (_id, newpass) {
                    var config = {
                        url: endpointChangePassword,
                        method: 'POST',
                        data: {
                            "_id" : _id,
                            "password" : newpass
                        }
                    };

                    var promise = $http(config)
                        .success( function(data){
                            $log.debug('successfull ', endpointChangePassword, ' call with result ', data);
                        })
                        .error(function (data) {
                            $log.debug('failure in ', endpointChangePassword, ' call with error ', data);
                        });

                    return promise;
                }
            }
        }];
    })


})();