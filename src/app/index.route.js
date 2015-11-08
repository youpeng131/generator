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
      .state('apply', {
        url: '/apply',
        templateUrl: 'app/apply/apply.html',
        controller: 'ApplyController'
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
