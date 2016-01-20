// (function() {
//   'use strict';
//
//   describe('controllers', function(){
//     var vm;
//     var $rootScope;
//
//     beforeEach(module('bomVizinhoWeb'));
//     beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _webDevTec_) {
//       spyOn(_webDevTec_, 'getTec').and.returnValue(_$q_.when([{}, {}, {}, {}, {}]));
//
//       vm = _$controller_('HomeController');
//       $rootScope = _$rootScope_;
//     }));
//
//     it('should define more than 5 awesome things', function () {
//       $rootScope.$apply();
//       expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
//       expect(vm.awesomeThings.length >= 5).toBeTruthy();
//     });
//   });
// })();
