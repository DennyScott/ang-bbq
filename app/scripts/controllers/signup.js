'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the bbiqApp
 */
 angular.module('bbiqApp')
 .controller('SignupCtrl', function ($scope, $location) {
	 $('#content-header').html('Signup');  
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.submitCreate = function () {
     	$location.path("/home");
     }
 });
