'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .controller('ProfileCtrl', function ($scope) {
		$('#content-header').html('Profile');  

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
