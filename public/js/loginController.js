'use strict';


function loginController($scope, $http) {
    $scope.results = [];
    $scope.email = "";
    $scope.pass = "";
    $scope.doLogin = function() {
        var httpRequest = $http({
            method : 'GET',
            url : "/nightclub/" + $scope.input + "/"+ $scope.input,
        }).success(function(data, status) {
            $scope.results = data;
        }).error(function(arg) {
            alert("error ");
        });
    };
}