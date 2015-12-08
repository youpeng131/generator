(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('acmeMalarkey', acmeMalarkey)
    .directive('myCarousel', myCarousel)
    .directive('myScoller', myScoller);

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

  function  myScoller() {
    return {
      restrict: 'AE',
      link: function (scope, element) {
        if (scope.$last === true) {
          var bigDiv = angular.element(document.querySelector('.config-img-big'))[0];
          var oDiv = angular.element(document.querySelector('.config-img-little'))[0];
          var oImg = oDiv.children;
          oDiv.style.width = oImg[0].offsetWidth * oImg.length + 'px';
          for (var i = 0; i < oImg.length; i++) {
            (function(index) {
              oImg[index].onmousemove = function() {
                oImg[index].style.borderColor='red';
                oImg[index].style.borderWidth='1px';
                oImg[index].style.borderStyle='solid';
                bigDiv.innerHTML = '<img src="'+oImg[index].src+'" alt='+index+'>';
              };
              oImg[index].onmouseout = function() {
                oImg[index].style.borderColor='none';
                oImg[index].style.borderWidth='0';
                oImg[index].style.borderStyle='none';
              }
            })(i);
          }
        }
      }
    };
  }




})();
