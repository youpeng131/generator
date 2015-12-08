/**
 * Created by youpeng on 15/11/7.
 */

(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('ApplySearchController', ApplySearchController);

  /** @ngInject */
  function ApplySearchController($scope, $stateParams, APP, searchApps, $state, $log) {
    var key = $stateParams.key;
    var vm = $scope.vm = {};

    $scope.totalItems = 64;
    $scope.currentPage = 4;
    $scope.maxSize = 5;
    $scope.bigTotalItems = $scope.totalItems;
    $scope.bigCurrentPage = 1;

    var totalItemArr = [];
    for (var i = 0; i < $scope.totalItems; i++) {
      totalItemArr.push(i+1)
    }

    console.log(totalItemArr);
    $scope.totalItemArr = totalItemArr;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      console.log($scope.bigTotalItems);
      $log.log('Page changed to: ' + $scope.currentPage);
    };


    /**************************正式环境**********************/

    // 查询searchApps  @地址 'app/components/service/apModel.service.js' @方法 searchApps
    var page = 10;
    searchApps.find(key, page).then(function (res) {
      console.log(res);
      var searchResult = [];
      angular.forEach(res.apps.data, function(val) {
        if (val.name.indexOf(key) !== -1) {
          searchResult.push(val);
        }
      });
      $scope.searchResult = searchResult;

    }).catch(function (err) {
      console.log(err);
    });

    /**************************测试环境**********************/



    // 搜索
    var searchResult = [];
    angular.forEach(APP.apps.data, function(val) {
      if (val.name.indexOf(key) !== -1) {
        searchResult.push(val);
      }
    });
    $scope.searchResult = searchResult;

  }
})();

