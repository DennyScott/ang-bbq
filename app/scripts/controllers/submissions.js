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
		$('#content-header').html('Entries');  
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.productDetails = function () {
		$location.path('/submissions/details');
    };

		 new WOW().init();

	$( ".upVote" ).click(function() {
		if($(this).parent().hasClass("blue")){
			$(this).parent().removeClass("blue animated pulse");
		} else {
			$(this).parent().addClass("blue animated pulse");
		}
	});

  });
