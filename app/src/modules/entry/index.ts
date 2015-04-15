/**
 * Created by danielezurico on 12/04/15.
 */
var angular = require('angular');
var Service = require("entry.Service");
var Controller = require("entry.Controller");
var colors = [{ "id" : 0, "name" : "red"},
    { "id" : 1, "name" : "green"},
    { "id" : 2, "name" : "blue"}
];
angular
    .module('app', ['ngMockE2E','ngResource', 'restangular'])
    .service('service', Service)
    .controller(Controller)
    .run(function($httpBackend) {
        $httpBackend.whenGET('/portal/users').respond(200, colors);
    });
