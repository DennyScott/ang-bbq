'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .controller('LoginCtrl', [ '$scope', '$rootScope', 'location', 'dataFactory', function ($scope, $rootScope, $location, dataFactory) {
		$('#content-header').html('Login');  
   
     $scope.submitLogin = function () {
			  getUser(1);
     }

		 function getUser(email) {
       dataFactory.getUser(id)
           .success(function (custs) {
               $rootScope.user = custs;
							 $location.path("/dashboard");
           })
           .error(function (error) {
               $scope.status = 'Unable to load user data: ' + error.message;
           });
   }


  }]);
