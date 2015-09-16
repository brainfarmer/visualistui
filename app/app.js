'use strict';

// Declare app level module which depends on views, and components
angular.module('visualistApp', [
  'ngRoute',
  'ngMaterial',
  'visualistApp.project',
  'visualistApp.view2',
  'visualistApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/project'});
}])

.controller('AppController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
  $scope.toggleSidenav = function() {
    // $mdSidenav(menuId).toggle();
    $mdSidenav('left').toggle();
  };
}]);
