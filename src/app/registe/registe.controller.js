/**
 * Created by youpeng on 15/11/7.
 */
(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('RegisteController', RegisteController);

  /** @ngInject */
  function RegisteController($scope, $http, $state, userRegiste) {
    var vm = $scope.vm = {};
    $scope.yzm = '验证码';
    $scope.isAbled = false;
    angular.extend($scope, $http, {
      viewState: {
        register: function (form) {
          if (form.$valid === false) {
            return false;
          } else {
            userRegiste.registe(vm).then(function (data) {
              console.log(data);
              $state.go('apply');
            }).catch(function (err) {
              console.log(err);
            });
          }
        },
        getYzm: function () {
          var seconds = 60;
          var timer;
          var clock = function () {
            seconds--;
            $scope.yzm = '' + seconds + '秒后重新获取';
            $scope.isAbled = true;
            if (seconds === 0) {
              clearInterval(timer);
              $scope.yzm = '验证码';
              $scope.isAbled = false;
            }
          };
          timer = setInterval(function () {
            $scope.$apply(clock);
          }, 1000);
        }
      }
    });
  }
})();
