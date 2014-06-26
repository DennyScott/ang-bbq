'use strict';

describe('Controller: SubmissionsCtrl', function () {

  // load the controller's module
  beforeEach(module('bbiqApp'));

  var SubmissionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmissionsCtrl = $controller('SubmissionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
