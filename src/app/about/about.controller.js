(function() {
  'use strict';

  angular
    .module('bomVizinhoWeb')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController(technologies) {
    var vm = this;

    vm.technologies = technologies;
  }
})();
