'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
