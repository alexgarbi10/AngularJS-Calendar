'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'myApp.directives',
])

.config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}])

.controller('FormController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
  $scope.master = {};
  $scope.show = false;
  $scope.holidays = [];
  $scope.html = '';

  $scope.display = function(calendar) {
    var year = '&year='+calendar.start.getFullYear();
    var country = '&country='+calendar.code;
    $http({
      method: 'GET',
      url: 'https://holidayapi.com/v1/holidays?key=cc6dd9c3-fb04-41a1-8f36-db16d7d5a153'+year+country
    }).then(function successCallback(response) {
      $scope.holidays = response.data.holidays;
      console.log($scope.holidays);
      $scope.html = $sce.trustAsHtml(renderHTML(calendar.start, calendar.number, []));
      $scope.show = true;
    }, function errorCallback(error) {
      console.log(error);
      if (error.status == -1) console.log('Error: HTTP connection issue.');
      if (error.status == 400) console.log('Error: HTTP 400 (Bad Request). Something went wrong on the client-side.');
      if (error.status == 401) console.log('Error: HTTP 401 (Unauthorized). The API key is missing.');
      if (error.status == 402) console.log('Error: HTTP 402 (Payment Required). Only historical data available is free.');
      if (error.status == 403) console.log('Error: HTTP 403 (Forbidden). The API is HTTPS-only.');
      if (error.status == 429) console.log('Error: HTTP 429 (Too Many Requests). Rate limit exceeded.');
      if (error.status == 500) console.log('Error: HTTP 500 (Internal Server Error). Something went wrong on the server-side.');
    });
  };

  $scope.reset = function() {
    $scope.show = false;
    $scope.calendar = angular.copy($scope.master);
  };

  $scope.reset();
}]);
