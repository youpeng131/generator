(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController'
      })
      .state('developlogin', {
        url: '/develop_login',
        templateUrl: 'app/developlogin/develop_login.html',
        controller: 'DevelopLoginController'
      })
      .state('forgetpassword', {
        url: '/forget_password',
        templateUrl: 'app/forgetpassword/forget_password.html',
        controller: 'ForgetPasswordController'
      })
      .state('applycontent', {
        url: '/applycontent/:id/',
        templateUrl: 'app/applycontent/apply_content.html',
        controller: 'ApplycontentController'
      })
      .state('registe', {
        url: '/registe',
        templateUrl: 'app/registe/registe.html',
        controller: 'RegisteController'
      })
      .state('applysearch', {
        url: '/applysearch/:key/',
        templateUrl: 'app/applysearch/apply_search.html',
        controller: 'ApplySearchController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
