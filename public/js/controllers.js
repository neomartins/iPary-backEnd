'use strict';

/* Controllers */

var blogControllers = angular.module('blogControllers', []);
var loginController = angular.module('loginController', []);
var formController = angular.module('formController', []);



blogControllers.controller('BlogCtrl', ['$scope', 'BlogList',
    function BlogCtrl($scope, BlogList) {
        $scope.blogList = [];
        BlogList.get({},
                function success(response) {
                    //alert($scope.challenge.question);
                    console.log("Success:" + JSON.stringify(response));
                    $scope.blogList = response;

                },
                function error(errorResponse) {
                    console.log("Error:" + JSON.stringify(errorResponse));
                }
        );


    }]);

blogControllers.controller('BlogViewCtrl', ['$scope', '$routeParams', 'BlogPost',
    function BlogViewCtrl($scope, $routeParams, BlogPost) {
        var blogId = $routeParams.id;
        $scope.blg = 1;

    }]);

loginController.controller('LoginCtrl', ['$scope', '$location' , '$routeParams', 'NightClubLogin',
    function LoginCtrl($scope, $location, $routeParams, NightClubLogin) {

         $scope.update = function(user) {
                NightClubLogin.get({email: user.name, pass: user.pass},
                                function success(response) {
                                    //alert($scope.challenge.question);
                                    console.log("Success:" + JSON.stringify(response));
                                    $location.path('/menu');
                                },
                                function error(errorResponse) {
                                    console.log("Error:" + JSON.stringify(errorResponse));
                                }
                );
         };



    }]);

formController.controller('FormCtrl',
    function FormCtrl($scope, $http) {
        $scope.form = {
            email: "email",
            cnpj: "CNPJ",
            password: "",
            clubName: "Nome do CLub",
            telephone: "Telefone",
            cep: "CEP",
            city: "Cidade",
            state: "Estado",
            address: "Endereço"
        };
        $scope.submit = function() {
            console.log("posting data...." +  JSON.stringify($scope.form));
            $http.put('http://localhost:9000/nightclub', JSON.stringify($scope.form)).success(function(){/*success callback*/});
        };
});


