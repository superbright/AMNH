'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('KioskApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('list of images should be', function () {
    expect(scope.images.length).toBe(3);
  });
});
