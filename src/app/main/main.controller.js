(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $rootScope, $state, APP, headApps, footApps, filterApps, charactersFilter) {
    var vm = $scope.vm = {};

    /**************************正式环境**********************/


    // 只有主页显示上面广告
    $rootScope.isIndex = true;
    $scope.$on('$destroy', function () {
      $rootScope.isIndex = false;
    });

    // 查询findAllApps  @地址 'app/components/service/apModel.service.js' @方法 findAllApps

    // 查询head_apps  @地址 'app/components/service/apModel.service.js' @方法 findHeadApps

    var page = 6;
    headApps.find(page).then(function (res) {
      $scope.findHeadApps = res.head_apps.apps.data;
    }).catch(function (err) {
      console.log(err);
    });

    // 查询foot_apps  @地址 'app/components/service/apModel.service.js' @方法 findFootApps
    var page = 6;
    footApps.find(page).then(function (res) {
      $scope.findfootApps = res.foot_apps.apps.data;
    }).catch(function (err) {
      console.log(err);
    });

    // 筛选
    $scope.activeTab = function (id) {
      filterApps.filter(id).then(function (res) {
        $scope.findHeadApps = res.head_apps.apps.data;
      }).catch(function (err) {
        console.log(err);
      });
    };

    //// 分类筛选 characters
    //$scope.chk = false;
    //var arr = [];
    //// @searchApp 搜索跳转
    //// @characters 分类筛选提交
    //angular.extend($rootScope, {
    //  Handel: {
    //    searchApp: function (name) {
    //      console.log(name);
    //      $state.go('applysearch', {key: name});
    //    },
    //    characters: function (val, id) {
    //      if (!arr.length) {
    //        arr.push(id);
    //      }
    //      if (val === true && arr.length) {
    //        for (var i = 0; i < arr.length; i++) {
    //          if (arr.indexOf(id) === -1) {
    //            arr.push(id);
    //          }
    //        }
    //      } else {
    //        Array.prototype.indexOf = function (val) {
    //          for (var i = 0; i < this.length; i++) {
    //            if (this[i] == val) return i;
    //          }
    //          return -1;
    //        };
    //
    //        Array.prototype.remove = function (val) {
    //          var index = this.indexOf(val);
    //          if (index > -1) {
    //            this.splice(index, 1);
    //          }
    //        };
    //
    //        for (var i = 0; i < arr.length; i++) {
    //          if (arr.indexOf(id) !== -1) {
    //            arr.remove(id);
    //          }
    //        }
    //      }
    //      console.log(arr);
    //      charactersFilter.filter(arr).then(function (res) {
    //        $scope.findHeadApps = res.head_apps.apps.data;
    //      }).catch(function (err) {
    //        console.log(err);
    //      });
    //    }
    //  }
    //});






    /**************************测试环境**********************/

    //查询findAllApps
    $scope.findAllApps = APP;


    // 查询head_apps
    $scope.findHeadApps = APP.head_apps.apps.data;
    $rootScope.UserMainPageTopImage = APP.setting[0].img;
    $rootScope.UserMainPageMiddleImage = APP.setting[1].img;

    // 查询foot_apps

    $scope.findfootApps = APP.foot_apps.apps.data;

    // 筛选
    $scope.activeTab = function (id) {
      if (id === 1) {
        $scope.orderFilter = ['download_count', 'name'];
      }
      if (id === 2) {
        $scope.orderFilter = ['avg_score', 'name'];
      }
      if (id === 3) {
        $scope.orderFilter = ['name', 'name'];
      }
      if (id === 4) {
        $scope.orderFilter = ['download_count', 'name'];
      }
    };


    // 分类筛选 characters
    $scope.chk = false;
    var arr = [];

    // 搜索
    angular.extend($rootScope, {
      Handel: {
        searchApp: function (name) {
          console.log(name);
          $state.go('applysearch', {key: name});
        },
        characters: function (val, id) {
          if (!arr.length) {
            arr.push(id);
          }
          if (val === true && arr.length) {
            for (var i = 0; i < arr.length; i++) {
              if (arr.indexOf(id) === -1) {
                arr.push(id);
              }
            }
          } else {
            Array.prototype.indexOf = function (val) {
              for (var i = 0; i < this.length; i++) {
                if (this[i] == val) return i;
              }
              return -1;
            };

            Array.prototype.remove = function (val) {
              var index = this.indexOf(val);
              if (index > -1) {
                this.splice(index, 1);
              }
            };

            for (var i = 0; i < arr.length; i++) {
              if (arr.indexOf(id) !== -1) {
                arr.remove(id);
              }
            }
          }
          console.log(arr);
        }
      }
    });

  }
})();
