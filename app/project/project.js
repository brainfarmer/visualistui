'use strict';

angular.module('visualistApp.project', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/project', {
    templateUrl: 'project/project.html',
    controller: 'ProjectCtrl'
  });
}])

.controller('ProjectCtrl', [function() {

}]);
