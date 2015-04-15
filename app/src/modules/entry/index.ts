/**
 * Created by danielezurico on 12/04/15.
 */
var angular = require('angular');
var Service = require("entry.Service");
var Controller = require("entry.Controller");

import mock = require("../../../../test/mock/Mocks");

angular
    .module('app', ['ngMockE2E','ngResource', 'restangular'])
    .service('service', Service)
    .controller(Controller)
    .run(mock);

