(function(){
  'use strict';

  angular
    .module('bomVizinhoWeb')
    .controller('ModalInstanceController', ModalInstanceController);

  /* @ngInject */
  function ModalInstanceController ($uibModalInstance) {
    var vm = this;

    vm.ok = ok;
    vm.cancel = cancel;
    function ok() {
      $uibModalInstance.close();
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }
  }

})();
