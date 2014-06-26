'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
