'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:RecipesCtrl
 * @description
 * # RecipesCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .controller('RecipesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		$('#content-header').html('Recipes');  
  });
