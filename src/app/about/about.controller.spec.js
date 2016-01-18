// (function() {
//   'use strict';
//
//   describe('controllers', function(){
//     var vm;
//
//     beforeEach(module('bomVizinhoWeb', function (_$provide_) {
//       var data = [
//         {
//           'title': 'AngularJS',
//           'url': 'https://angularjs.org/',
//           'description': 'HTML enhanced for web apps!',
//           'logo': 'angular.png'
//         },
//         {
//           'title': 'BrowserSync',
//           'url': 'http://browsersync.io/',
//           'description': 'Time-saving synchronised browser testing.',
//           'logo': 'browsersync.png'
//         },
//         {
//           'title': 'GulpJS',
//           'url': 'http://gulpjs.com/',
//           'description': 'The streaming build system.',
//           'logo': 'gulp.png'
//         }
//       ];
//       _$provide_.value('technologies', data);
//     }));
//     beforeEach(inject(function (_$controller_, _$timeout_) {
//       vm = _$controller_('AboutController');
//     }));
//
//     it('should define 3 awesome technologies', function() {
//       expect(angular.isArray(vm.technologies)).toBeTruthy();
//       expect(vm.technologies.length === 3).toBeTruthy();
//     });
//   });
// })();
