'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .controller('MainCtrl', function ($scope) {
		$('#content-header').html('Main');  
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
