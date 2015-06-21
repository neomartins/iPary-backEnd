'use strict';

/* Services */

var iPartyServices = angular.module('iPartyServices', ['ngResource']);

iPartyServices.factory('iPartyPost', ['$resource',
    function($resource) {
        return $resource("http://localhost:9000/nightclub", {}, {
            list: {method: 'GET', cache: false, isArray: true},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);
