'use strict';

angular.module('visualistApp.project', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/project', {
    templateUrl: 'project/project.html',
    controller: 'ProjectController'
  });
}])

.controller('ProjectController', [ '$scope', '$http', function($scope, $http) {
  var projectId = '1389518',
      baseUrl = 'http://localhost:4000/api'

  $http({
    method: 'GET',
    url: baseUrl + '/projects/' + projectId
  }).success(function(data, status) {
    $scope.epics = data.epics;
    $scope.stories = data.stories;
  }).error(function(data,status) {
    $scope.epics = 'An error occured'
  });
}]);
