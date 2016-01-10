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
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
