(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, userLogin, $state) {
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
