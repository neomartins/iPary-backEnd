'use strict';

/* Services */

var blogServices = angular.module('blogServices', ['ngResource']);

blogServices.factory('EventsFactory', function ($resource) {
    return $resource('/event', {}, {
        query: { method: 'GET', isArray: true },
        update: { method: 'POST'},
        create: { method: 'PUT' }
    })
});

blogServices.factory('EventFactory', function ($resource) {
    return $resource('/event/:name', {}, {
        show: { method: 'GET' },
        delete: { method: 'DELETE' }
    })
});

blogServices.factory('NightClubLogin', ['$resource',
    function($resource) {
        return $resource("/nightclub/:email/:pass", {}, {
            get: {method: 'GET', cache: true, isArray: false}
        });
    }]);

blogServices.factory('NightClub', ['$resource',
    function($resource) {
        return $resource("/nightclub", {}, {
            get: {method: 'GET', cache: true, isArray: true},
            save: {method: 'PUT', cache: true, isArray: false},
        });
    }]);