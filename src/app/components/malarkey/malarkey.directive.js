(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('acmeMalarkey', acmeMalarkey)
    .directive('myCarousel', myCarousel);

  /** @ngInject */
  function acmeMalarkey(malarkey) {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var watcher;
      var typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });

      el.addClass('acme-malarkey');

      angular.forEach(scope.extraValues, function (value) {
        typist.type(value).pause().delete();
      });

      watcher = scope.$watch('vm.contributors', function () {
        angular.forEach(vm.contributors, function (contributor) {
          typist.type(contributor.login).pause().delete();
        });
      });

      scope.$on('$destroy', function () {
        watcher();
      });
    }

    /** @ngInject */
    function MalarkeyController($log, githubContributor) {
      var vm = this;

      vm.contributors = [];

      activate();

      function activate() {
        return getContributors().then(function () {
          $log.info('Activated Contributors View');
        });
      }

      function getContributors() {
        return githubContributor.getContributors(10).then(function (data) {
          vm.contributors = data;

          return vm.contributors;
        });
      }
    }

  }


  function myCarousel() {
    return {
      restrict: 'AE',
      link: function (scope, element) {
        if (scope.$last === true) {
          var oDiv = angular.element(document.querySelector('.picScroll'));
          var oUl = oDiv[0].children[0].children[0];
          var aLi = oUl.children;
          var aLeft = oDiv[0].children[1];
          var aRight = oDiv[0].children[2];
          var iNow = 0;
          oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';
          aLeft.onclick = function() {
            iNow--;
            if (iNow < 0) {
              iNow = aLi.length - (oDiv[0].clientWidth / aLi[0].clientWidth);
            }
            oUl.style.left=-iNow*aLi[0].clientWidth+'px';
          };
          aRight.onclick = function() {
            iNow++;
            if (iNow > aLi.length - (oDiv[0].clientWidth / aLi[0].clientWidth)) {
              iNow = 0;
            }
            oUl.style.left=-iNow*aLi[0].clientWidth+'px';
          }
        }
      }
    };
  }


})();
