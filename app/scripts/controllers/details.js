'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .controller('DetailsCtrl', function ($scope) {
		$('#content-header').html('Details');  
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
