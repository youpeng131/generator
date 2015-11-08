/**
 * Created by youpeng on 15/11/7.
 */

(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('ApplySearchController', ApplySearchController);

  /** @ngInject */
  function ApplySearchController($scope, CONFIGS, $stateParams, findSearch) {
    var key = $stateParams.key;
    var vm = $scope.vm = {};

    // 真数据
    findSearch.find(key).then(function (data) {
      console.log(data);
    }).catch(function(err) {
      console.log(err);
    });

    // 模拟数据
    var searchResult = [];
    for (var i = 0; i < CONFIGS.gameList.length; i++) {
      if (CONFIGS.gameList[i].name.indexOf(key) !== -1) {
        searchResult.push(CONFIGS.gameList[i]);
      }
    }
    $scope.searchResult = searchResult;
  }
})();

