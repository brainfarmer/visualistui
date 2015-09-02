'use strict';

describe('visualistApp.version module', function() {
  beforeEach(module('visualistApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
