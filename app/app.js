'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'myApp.directives'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}])

.controller('FormController', ['$scope', function($scope) {
  $scope.master = {};

  $scope.display = function(calendar) {
    console.log(calendar);
  };

  $scope.reset = function() {
    $scope.calendar = angular.copy($scope.master);
  };

  $scope.reset();
}]);
