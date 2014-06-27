'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .factory('userFactory', function($http, $resource){
		$http.defaults.useXDomain = true;
		return $resource('http://104.131.250.11/user/:id', { id:'@_id' });
	});