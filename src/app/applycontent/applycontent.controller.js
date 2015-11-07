/**
 * Created by youpeng on 15/11/7.
 */

(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('ApplycontentController', ApplycontentController);

  /** @ngInject */
  function ApplycontentController($scope, CONFIGS ,$stateParams) {
    var gameId = $stateParams.id;
    var vm = $scope.vm = {};

    $scope.myInterval = 5000;

    for (var i = 0; i < CONFIGS.gameList.length; i++) {
      if (CONFIGS.gameList[i].id === parseInt(gameId, 10)) {
        console.log(CONFIGS.gameList[i]);
        $scope.findOne = CONFIGS.gameList[i];
      }
    }


    // $scope.gameList = CONFIGS.gameList;
    // $scope.newEst = CONFIGS.newEst;
  }
})();
