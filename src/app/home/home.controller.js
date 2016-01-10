(function() {
  'use strict';

  angular
    .module('bomVizinhoWeb')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($timeout, webDevTec) {
    var vm = this;

    vm.awesomeThings = [];

    activate();

    function activate() {
      getWebDevTec();
    }

    function getWebDevTec() {
      webDevTec.getTec()
        .then(function (data) {
          angular.forEach(vm.data, function(awesomeThing) {
            awesomeThing.rank = Math.random();
          });

          vm.awesomeThings = data;
        });

    }
  }
})();
