/**
 * Created by youpeng on 15/11/7.
 */
(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('ApplyController', ApplyController);

  /** @ngInject */
  function ApplyController($scope, CONFIGS, $state, findAll) {
    var vm = $scope.vm = {};
    var limit = 10;

    // 真数据
    findAll.find(limit).then(function (data) {
      console.log(data);
    }).catch(function (err) {
      console.log(err);
    });

    // 假数据
    $scope.gameList = CONFIGS.gameList;
    $scope.newEst = CONFIGS.newEst;

    $scope.search = function (key) {
      $state.go('applysearch', {key: key});
    }
  }
})();
