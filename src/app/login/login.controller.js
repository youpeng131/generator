/**
 * Created by youpeng on 15/12/4.
 */
(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $http, userLogin, $state, $location) {
    var vm = $scope.vm = {};
    angular.extend($scope, $http, {
      viewState: {
        login: function (form) {
          if (form.$valid === false) {
            return false;
          } else {
            userLogin.signIn(vm).then(function (data) {
              console.log(data);
              $location.path('/');
            }).catch(function (err) {
              console.log(err);
            });
          }
        }
      }
    });
  }
})();
