// (function(){
//   'use strict';
//   angular
//     .module('bomVizinhoWeb', ['ngAnimate', 'ui.bootstrap'])
//     .controller('LoginModalController', LoginModalController);
//
//   /** @ngInject */
//   function LoginModalController ($uibModal, $log) {
//     var vm = this;
//
//     vm.items = ['item1', 'item2', 'item3'];
//
//     vm.animationsEnabled = true;
//
//     vm.open = function (size) {
//
//       var modalInstance = $uibModal.open({
//         animation: true,
//         templateUrl: 'login-modal/login-modal.html',
//         controller: 'ModalInstanceController',
//         size: size,
//         resolve: {
//           items: function () {
//             return vm.items;
//           }
//         }
//       });
//
//       modalInstance.result.then(function (selectedItem) {
//         vm.selected = selectedItem;
//       }, function () {
//         $log.info('Modal dismissed at: ' + new Date());
//       });
//     };
//
//     vm.toggleAnimation = function () {
//       vm.animationsEnabled = !vm.animationsEnabled;
//     };
//
//   }
// })();
//
// // TODO: put in separate file
//
// (function(){
//   'use strict';
//
//   // Please note that $modalInstance represents a modal window (instance) dependency.
//   // It is not the same as the $uibModal service used above.
//
//   angular
//     .module('bomVizinhoWeb')
//     .controller('ModalInstanceController', ModalInstanceController);
//
//   /** @ngInject */
//   function ModalInstanceController ($uibModalInstance, items) {
//     var vm = this;
//     vm.items = items;
//     vm.selected = {
//       item: vm.items[0]
//     };
//
//     vm.ok = function () {
//       $uibModalInstance.close(vm.selected.item);
//     };
//
//     vm.cancel = function () {
//       $uibModalInstance.dismiss('cancel');
//     };
//   }
// })();
