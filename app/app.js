'use strict';

// Declare app level module which depends on views, and components
angular.module('visualistApp', [
  'ngRoute',
  'visualistApp.project',
  'visualistApp.view2',
  'visualistApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/project'});
}]);
