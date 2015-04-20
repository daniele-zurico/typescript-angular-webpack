/**
 * Created by daniele on 18/04/15.
 */

angular.module('e2e-mocks', ['ngMockE2E'])
  .run(function($httpBackend) {
    var colors = [{ "id" : 0, "name" : "red"},
      { "id" : 1, "name" : "green"},
      { "id" : 2, "name" : "blue"}
    ];
    $httpBackend.whenGET('/portal/users').respond(200, colors);
  });
angular.module('app').requires.push('e2e-mocks');
