(function() {
  'use strict';

  angular
    .module('bomVizinhoWeb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('site', {
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('site.home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('site.about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'vm',
        resolve: {
          technologies: function (webDevTec) {
            return webDevTec.getTec();
          }
        }
      });

    $urlRouterProvider.otherwise(function($injector) {
      var $state = $injector.get('$state');
      $state.go('site.home');
    });
  }

})();
