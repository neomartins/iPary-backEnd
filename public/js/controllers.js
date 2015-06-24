'use strict';

/* Controllers */

var blogControllers = angular.module('blogControllers', []);
var loginController = angular.module('loginController', []);
var formController = angular.module('formController', []);

blogControllers.controller('EventListCtrl', ['$scope', 'EventsFactory', 'EventFactory', '$location',
    function ($scope, EventsFactory, EventFactory, $location) {

        // callback for ng-click 'editUser':
        $scope.editUser = function (name) {
            $location.path('/event-detail/' + name);
        };

        // callback for ng-click 'deleteUser':
        $scope.deleteUser = function (name) {
            EventFactory.delete({ name: name });
            $scope.events = EventsFactory.query();
        };

        // callback for ng-click 'createUser':
        $scope.createNewUser = function () {
            $location.path('/event-creation');
        };

        $scope.events = EventsFactory.query();
    }]);


blogControllers.controller('EventDetailCtrl', ['$scope', '$routeParams', 'EventFactory', '$location',
    function ($scope, $routeParams, EventFactory, $location) {

        // callback for ng-click 'updateUser':
        $scope.updateUser = function () {
            EventFactory.update($scope.event);
            $location.path('/event-list');
        };

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
            $location.path('/event-list');
        };

        $scope.event = EventFactory.show({id: $routeParams.id});
    }]);

blogControllers.controller('EventCreationCtrl', ['$scope', 'EventsFactory', '$location',
    function ($scope, EventsFactory, $location) {

        // callback for ng-click 'createNewUser':
        $scope.createNewUser = function () {
        console.log("Error:" + JSON.stringify($scope.event));
            EventsFactory.create(JSON.stringify($scope.event));
            $location.path('/event-list');
        }
         // callback for ng-click 'cancel':
             $scope.cancel = function () {
             $location.path('/event-list');
         };
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


