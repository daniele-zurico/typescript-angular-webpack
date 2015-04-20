/**
 * Created by danielezurico on 12/04/15.
 */
var angular = require('angular');
var Service = require("entry.Service");
var Controller = require("entry.Controller");

angular
    .module('app', ['ngResource', 'restangular'])
    .service('service', Service)
    .controller(Controller);
