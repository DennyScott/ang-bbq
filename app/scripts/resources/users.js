'use strict';

/**
* @ngdoc function
* @name bbiqApp.controller:ProfileCtrl
* @description
* # ProfileCtrl
* Controller of the bbiqApp
*/
angular.module('bbiqApp')
   .factory('dataFactory', ['$http', function($http) {

   var urlBase = 'http://104.131.250.11/user';
   var dataFactory = {};

   dataFactory.getUsers = function () {
       return $http.get(urlBase);
   };

   dataFactory.getUser = function (id) {
       return $http.get(urlBase + '/' + id);
   };

   dataFactory.insertUser = function (cust) {
       return $http.post(urlBase, cust);
   };

   dataFactory.updateUSer = function (cust) {
       return $http.put(urlBase + '/' + cust.ID, cust)
   };

   dataFactory.deleteUser = function (id) {
       return $http.delete(urlBase + '/' + id);
   };

   console.log(dataFactory);
   return dataFactory;
}]);
