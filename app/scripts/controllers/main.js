'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
