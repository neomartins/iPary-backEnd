'use strict';

/* App Module */

var iPartyApp = angular.module('iPartyApp', [
    'ngRoute',     
    'iPartyControllers',
    'iPartyServices'
    
]);


/*iPartyApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        /*$routeProvider.
                when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'iPartyCtrl'
                }).when('/iPartyPost/:id', {
                    templateUrl: 'partials/iPartyPost.html',
                    controller: 'iPartyViewCtrl'
                });*/

        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);*/


/*
helloWorldApp.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/main.html',
    controller: 'MainCtrl'
  }).when('/show', {
    templateUrl: 'partials/show.html',
    controller: 'ShowCtrl'
  }).when('/customer', {
    templateUrl: 'partials/customer.html',
    controller: 'CustomerCtrl'
  }).when('/addCustomer', {
    templateUrl: 'partials/newCustomer.html',
    controller: 'AddCustomerCtrl'
  }).when('/addedCustomer/:customer/:city', {
    templateUrl: 'partials/addedCustomer.html',
    controller: 'AddedCustomerCtrl'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');
}]);*/
