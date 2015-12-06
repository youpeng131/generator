/**
 * Created by youpeng on 15/12/4.
 */
(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('ForgetPasswordController', ForgetPasswordController);

  /** @ngInject */
  function ForgetPasswordController($scope, $http, userLogin, $state) {
    var vm = $scope.vm = {};
    angular.extend($scope, $http, {
      viewState: {
        login: function (form) {
          if (form.$valid === false) {
            return false;
          } else {
            userLogin.signIn(vm).then(function (data) {
              console.log(data);
              $state.go('apply');
            }).catch(function (err) {
              console.log(err);
            });
          }
        }
      }
    });
  }
})();
