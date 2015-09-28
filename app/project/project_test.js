'use strict';

describe('visualistApp.project module', function() {
  beforeEach(module('visualistApp.project'));

  describe('project controller', function(){
    var theController, scope, httpMock, createController;

    beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
      scope = $rootScope.$new();
      // theController = $controller('ProjectController', { $scope: scope });
      httpMock = $httpBackend;

      createController = function() {
        return $controller('ProjectController', { $scope: $rootScope });
      };
    }));

    it('should ....', function() {
      //spec body
      theController = createController();
      expect(theController).toBeDefined();
    });

    it('should call /api/project/:project_id to get the proejct', function() {
      httpMock.expectGET("http://localhost:4000/api/projects/1389518")
        .respond(200, {epics: [], stories: {}});
      theController = createController();
      httpMock.flush();
    });

    xit('should display epics in a flex-grid', function() {
    });

    xit('should hyperlink the epic titles', function() {
    });

    xit('should display the full json in a collapsable element', function() {
    });




  });
});
