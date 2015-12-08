/**
 * Created by youpeng on 15/11/7.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('ApplycontentController', ApplycontentController);

  /** @ngInject */
  function ApplycontentController($scope, APP, DETAIL, $stateParams, findByone) {
    var AppId = parseInt($stateParams.id, 10);
    var vm = $scope.vm = {};


    /**************************正式环境**********************/

    //查询findByone  @地址 'app/components/service/apModel.service.js' @方法 findByone

    findByone.find_one(AppId).then(function (res) {
      console.log(res);
      $scope.detail = res.app;
    }).catch(function (err) {
      console.log(err);
    });


    /**************************测试环境**********************/
    console.log(APP);
    // 查询findOneById

    if (DETAIL.app.id === AppId) {
      $scope.detail = DETAIL.app;
    }

    // 联想应用

    $scope.findfootApps = APP.foot_apps.apps.data;


  }
})();
