'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .controller('LoginCtrl', function ($scope, $location) {
		$('#content-header').html('Login');  
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.submitLogin = function () {
     	$location.path("/home");
     }

  });
