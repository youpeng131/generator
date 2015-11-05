/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angularApp')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
