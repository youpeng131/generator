(function () {
  'use strict';

  angular
    .module('angularApp')
    .factory('findAllApps', findAllApps)
    .factory('headApps', headApps)
    .factory('footApps', footApps)
    .factory('filterApps', filterApps)
    .factory('charactersFilter', charactersFilter)
    .factory('userLogin', userLogin)
    .factory('userRegiste', userRegiste)
    .factory('findByone', findByone)
    .factory('searchApps', searchApps);


  /** @ngInject */


  // 查询所有

  function findAllApps($log, $http, apiHost) {

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


  //head_apps查询
  function headApps($log, $http, apiHost) {

    var service = {
      find: find
    };

    return service;

    function find(limit) {
      if (!limit) {
        limit = 30;
      }

      return $http.get(apiHost + '/head_apps?per_page=' + limit)
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


  //foot_apps
  function footApps($log, $http, apiHost) {
    var service = {
      find: find
    };

    return service;

    function find(limit) {
      if (!limit) {
        limit = 30;
      }

      return $http.get(apiHost + '/foot_apps?per_page=' + limit)
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

  // 筛选
  function filterApps($log, $http, apiHost) {
    var service = {
      filter: filter
    };
    return service;

    function filter(id) {
      console.log(id);
      return $http.get(apiHost + '/filter/' + id + '/')
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


  // 分类筛选
  function charactersFilter($log, $http, apiHost) {
    var service = {
      filter: filter
    };
    return service;

    function filter(arr) {
      console.log(arr);
      return $http.post(apiHost + '/characters_filter/', arr)
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


  // findByone
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


  // 搜索
  function searchApps($log, $http, apiHost) {
    var service = {
      find: find
    };
    return service;

    function find(name, limit) {
      if (!limit) {
        limit = 30;
      }
      console.log(name);
      return $http.get(apiHost + '/findOne/' + name + '/?page=' + limit + '')
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
