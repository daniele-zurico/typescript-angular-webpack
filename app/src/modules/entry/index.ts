/**
 * Created by danielezurico on 12/04/15.
 */
var angular = require('angular');
var Service = require("entry.Service");
var Controller = require("entry.Controller");
var phones = [{name: 'phone1'}, {name: 'phone2'}];
angular
    .module('app', ['ngMockE2E','ngResource'])
    .service('service', Service)
    .controller(Controller)
    .run(function($httpBackend) {


        $httpBackend.whenGET('/portal/users').respond(phones)

    });
