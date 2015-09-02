'use strict';

angular.module('visualistApp.version', [
  'visualistApp.version.interpolate-filter',
  'visualistApp.version.version-directive'
])

.value('version', '0.1');
