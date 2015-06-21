'use strict';

/* Controllers */

var iPartyControllers = angular.module('iPartyControllers', []);



iPartyControllers.controller('iPartyCtrl', ['$scope', 'iPartyList',
    function iPartyCtrl($scope, iPartyList) {
        $scope.iPartyList = [];
        iPartyList.get({},
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    $scope.iPartyList = response;

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
        );


    }]);

iPartyControllers.controller('iPartyViewCtrl', ['$scope', '$routeParams', 'nightclub',
    function iPartyViewCtrl($scope, $routeParams, nightclub) {
        var email = $scope.email;
        var pass = $scope.pass;
        $scope.blg = 1;
        nightclub.get({email: pass},
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    $scope.iPartyEntry = response;

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
        );

    }]);
