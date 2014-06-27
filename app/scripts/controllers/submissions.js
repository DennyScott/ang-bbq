'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:SubmissionsCtrl
 * @description
 * # SubmissionsCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .controller('SubmissionsCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.productDetails = function () {
		$location.path('/submissions/details');
    };

	$( ".upVote" ).click(function() {
		if($(this).hasClass("btn-primary")){
			$(this).removeClass("btn-primary").addClass("btn-danger").html("Remove Vote");
		} else {
			$(this).removeClass("btn-danger").addClass("btn-primary").html("Up Vote");
		}
	});

  });
