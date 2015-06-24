'use strict';

/* Services */

var blogServices = angular.module('blogServices', ['ngResource']);

blogServices.factory('BlogPost', ['$resource',
    function($resource) {
        return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blog/:id", {}, {
            get: {method: 'GET', cache: false, isArray: false},
            save: {method: 'POST', cache: false, isArray: false},
            update: {method: 'PUT', cache: false, isArray: false},
            delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }]);

blogServices.factory('BlogList', ['$resource',
    function($resource) {
        return $resource("http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blogList", {}, {
            get: {method: 'GET', cache: false, isArray: true}
        });
    }]);


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