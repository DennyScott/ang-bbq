'use strict';

/**
* @ngdoc function
* @name bbiqApp.controller:ProfileCtrl
* @description
* # ProfileCtrl
* Controller of the bbiqApp
*/
angular.module('bbiqApp')
 .controller('ProfileCtrl', ['$scope','$rootScope','dataFactory', function ($scope, $rootScope, dataFactory) {
               $('#content-header').html('Profile');  

   getUser(1);

   function getUser(id) {
       dataFactory.getUser(id)
           .success(function (custs) {
               $scope.tempuser = custs;
           })
           .error(function (error) {
               $scope.status = 'Unable to load user data: ' + error.message;
           });
   }
 }]);
