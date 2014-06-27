'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .controller('ProfileCtrl', function ($scope, $location, userFactory) {
		$('#content-header').html('Profile');  
		$scope.users = userFactory.query();
		alert($scope.users);
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
