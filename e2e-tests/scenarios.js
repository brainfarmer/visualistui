'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('visualist app', function() {


  it('should automatically redirect to /project when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/project");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/project');
    });


    it('should render project view when user navigates to /project', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for project/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
