'use strict';

/**
* @ngdoc function
* @name bbiqApp.controller:ProfileCtrl
* @description
* # ProfileCtrl
* Controller of the bbiqApp
*/
angular.module('bbiqApp')
 .controller('ProfileCtrl', ['$scope','$http','$rootScope','dataFactory', function ($scope, $http, $rootScope, dataFactory) {
               $('#content-header').html('Profile');  

   getUser(1);

   function getUser(id) {
       dataFactory.getUser(id)
           .success(function (custs) {
               $scope.user = custs;
           })
           .error(function (error) {
               $scope.status = 'Unable to load user data: ' + error.message;
           });
   }


   $scope.awesomeThings = [
     'HTML5 Boilerplate',
     'AngularJS',
     'Karma'
   ];
 }]);
