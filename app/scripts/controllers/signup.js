'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
.controller('SignupCtrl',['$scope', '$rootScope', '$location', 'dataFactory', function ($scope, $rootScope, $location, dataFactory) {
	$('#content-header').html('Signup');  


	$scope.submitCreate = function () {
		addUser({
			address: $scope.address,
			age: parseInt($scope.age),
			city: $scope.city,
			country: "Canada",
			confirmation: $scope.password,
			email: $scope.email,
			firstName: $scope.firstName,
			lastName: $scope.lastName,
			password: $scope.password,
			picturePath: "path",
			postalCode: "R2H0V1",
			provence: $scope.province,
			sex: "male"
		});

	}

	function addUser(cust) {
		dataFactory.insertUser(JSON.stringify(cust))
		.success(function (custs) {
			$rootScope.user = cust;
			$location.path('/dashboard');			
		})
		.error(function (error) {
			$scope.status = 'There was an issue, please try again.';
		});
	}
}]);
