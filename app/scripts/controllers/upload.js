'use strict';

/**
 * @ngdoc function
 * @name bbiqApp.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the bbiqApp
 */
angular.module('bbiqApp')
  .controller('UploadCtrl', function ($scope) {
		$('#content-header').html('Upload');  
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
