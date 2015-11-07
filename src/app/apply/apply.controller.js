/**
 * Created by youpeng on 15/11/7.
 */
(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('ApplyController', ApplyController);

  /** @ngInject */
  function ApplyController($scope, CONFIGS, $state) {
    var vm = $scope.vm = {};
    $scope.gameList = CONFIGS.gameList;
    $scope.newEst = CONFIGS.newEst;

    $scope.search = function(key) {
      $state.go('applysearch',{key: key});
    }
  }
})();
