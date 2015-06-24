'use strict';

/* App Module */

var blogApp = angular.module('blogApp', [
    'ngRoute',
    'blogControllers',
    'loginController',
    'formController',
    'blogServices'

]);


blogApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'LoginCtrl'
                }).when('/menu', {
                    templateUrl: 'partials/blogPost.html',
                    controller: 'BlogViewCtrl'
                });

        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);


