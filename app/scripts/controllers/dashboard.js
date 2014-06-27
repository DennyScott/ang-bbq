'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
		$('#content-header').html('Dashboard');  
  });
