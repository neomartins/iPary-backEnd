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
                    controller: 'EventListCtrl'
                });

                $routeProvider.when('/event-list', {templateUrl: 'partials/event-list.html', controller: 'EventListCtrl'});
                $routeProvider.when('/event-detail/:name', {templateUrl: 'partials/event-detail.html', controller: 'EventDetailCtrl'});
                $routeProvider.when('/event-creation', {templateUrl: 'partials/event-creation.html', controller: 'EventCreationCtrl'});

        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);


