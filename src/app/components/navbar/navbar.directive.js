(function() {
  'use strict';

  angular
    .module('bomVizinhoWeb')
    .directive('acmeNavbar', acmeNavbar)
    .controller('LoginModalController', LoginModalController);

    /** @ngInject */
  function LoginModalController () {}

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      link: link,
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /* @ngInject */
    function link(vm, $uibModal) {

      // TODO: internationalize this
      vm.labels = {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        login: 'Login'
      };

      // vm.openModal = openModal;
      vm.items = [1, 2];

      activate();

      ///////////

      function activate() {

      }
      //
      // function openModal (size) {
      //   vm.items = ['item1', 'item2', 'item3'];
      //   vm.animationsEnabled = true;
      //   var modalInstance = $uibModal.open({
      //     animation: true,
      //     templateUrl: 'login-modal/login-modal.html',
      //     controller: 'ModalInstanceController',
      //     size: size,
      //     resolve: {
      //       items: function () {
      //         return vm.items;
      //       }
      //     }
      //   });
      //
      //   modalInstance.result.then(function (selectedItem) {
      //     vm.selected = selectedItem;
      //   }, function () {
      //     // $log.info('Modal dismissed at: ' + new Date());
      //   });
      // }
    }

    /* @ngInject */
    function NavbarController() {}
  }

})();
