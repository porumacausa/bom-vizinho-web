(function() {
  'use strict';

  angular
    .module('bomVizinhoWeb')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
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
    function NavbarController($uibModal) {
      var vm = this;

      // TODO: internationalize this
      vm.labels = {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        login: 'Login'
      };

      vm.openModal = openModal;
      vm.items = [1, 2];

      function openModal (size) {
        vm.items = ['item1', 'item2', 'item3'];

        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'app/components/navbar/login-modal/login-modal.html',
          controller: 'ModalInstanceController',
          controllerAs: 'vm',
          bindToController: true,
          size: size,
          keyboard: true,
          resolve: {
            items: function () {
              return vm.items;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          vm.selected = selectedItem;
        }, function () {
          // $log.info('Modal dismissed at: ' + new Date());
        });
      }

    }
  }

})();
