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
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$( "#signup-form" ).submit(function(evt) {
 			// alert('hello');
            $location.path('#/home');
    });
 });
