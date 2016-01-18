// (function() {
//   'use strict';
//
//   describe('service webDevTec', function () {
//     var $rootScope;
//     var $timeout;
//     var webDevTec;
//
//     beforeEach(module('bomVizinhoWeb'));
//     beforeEach(inject(function (_$rootScope_, _$timeout_, _webDevTec_) {
//       $rootScope = _$rootScope_;
//       $timeout = _$timeout_;
//       webDevTec = _webDevTec_;
//     }));
//
//     it('should be registered', function() {
//       expect(webDevTec).not.toEqual(null);
//     });
//
//     describe('getTec function', function() {
//       it('should exist', function() {
//         expect(webDevTec.getTec).not.toEqual(null);
//       });
//
//       it('should return promise', function() {
//         var promise = webDevTec.getTec();
//         expect(promise).toEqual(jasmine.any(Object));
//         expect(promise.then).toBeDefined();
//         expect(promise.then).toEqual(jasmine.any(Function));
//       });
//
//       it('should resolve promise with array of objects', function(done) {
//         webDevTec.getTec()
//           .then(function (data) {
//             expect(data).toEqual(jasmine.any(Array));
//             expect(data[0]).toEqual(jasmine.any(Object));
//             expect(data.length > 5).toBeTruthy();
//
//             done();
//           });
//
//         $timeout.flush();
//         $rootScope.$apply();
//       });
//     });
//   });
// })();
