/**
 * Created by youpeng on 15/11/7.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('ApplycontentController', ApplycontentController);

  /** @ngInject */
  function ApplycontentController($scope, CONFIGS, $stateParams, findByone) {
    var gameId = $stateParams.id;
    var vm = $scope.vm = {};

    // 真数据
    findByone.find_one(gameId).then(function (data) {
      console.log(data);
    }).catch(function (err) {
      console.log(err);
    });

    // 模拟数据
    for (var i = 0; i < CONFIGS.gameList.length; i++) {
      if (CONFIGS.gameList[i].id === parseInt(gameId, 10)) {
        $scope.findOne = CONFIGS.gameList[i];
      }
    }
  }
})();
