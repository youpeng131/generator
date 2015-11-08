(function () {
  'use strict';

  angular
    .module('angularApp')
    .factory('findAll', findAll)
    .factory('userLogin', userLogin)
    .factory('userRegiste', userRegiste)
    .factory('findByone', findByone)
    .factory('findSearch', findSearch);


  /** @ngInject */


  // 查询所有

  function findAll($log, $http, apiHost) {

    var service = {
      find: find
    };

    return service;

    function find(limit) {
      if (!limit) {
        limit = 30;
      }

      return $http.get(apiHost + '/contributors?per_page=' + limit)
        .then(getContributorsComplete)
        .catch(getContributorsFailed);

      function getContributorsComplete(response) {
        return response.data;
      }

      function getContributorsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }


  // 查询一个
  function findByone($log, $http, apiHost) {
    var service = {
      find_one: find_one
    };
    return service;

    function find_one(id) {
      console.log(id);
      return $http.get(apiHost + '/findOne/' + id + '/')
        .then(getContributorsComplete)
        .catch(getContributorsFailed);

      function getContributorsComplete(response) {
        return response.data;
      }

      function getContributorsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }


  // 搜索匹配

  function findSearch($log, $http, apiHost) {
    var service = {
      find: find
    };
    return service;

    function find(name) {
      console.log(name);
      return $http.get(apiHost + '/findOne/' + name + '/')
        .then(getContributorsComplete)
        .catch(getContributorsFailed);

      function getContributorsComplete(response) {
        return response.data;
      }

      function getContributorsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }


  // 登录
  function userLogin($log, $http, apiHost) {
    var service = {
      signIn: signIn
    };
    return service;

    function signIn(user) {
      console.log(user);
      return $http.post(apiHost + '/login/', user)
        .then(getContributorsComplete)
        .catch(getContributorsFailed);

      function getContributorsComplete(response) {
        return response.data;
      }

      function getContributorsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }

  // 注册
  function userRegiste($log, $http, apiHost) {
    var service = {
      registe: registe
    };
    return service;
    function registe(user) {
      console.log(user);
      return $http.post(apiHost + '/register/', user)
        .then(getContributorsComplete)
        .catch(getContributorsFailed);

      function getContributorsComplete(response) {
        return response.data;
      }

      function getContributorsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }

})();
