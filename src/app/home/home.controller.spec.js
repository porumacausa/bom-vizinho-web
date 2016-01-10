(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var $timeout;

    beforeEach(module('bomVizinhoWeb'));
    beforeEach(inject(function(_$controller_, _$timeout_, _webDevTec_) {
      spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);

      vm = _$controller_('HomeController');
      $timeout = _$timeout_;
    }));

    it('should define more than 5 awesome things', function() {
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length === 5).toBeTruthy();
    });
  });
})();
