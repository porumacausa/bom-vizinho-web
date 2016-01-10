(function() {
  'use strict';

  angular
    .module('bomVizinhoWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
