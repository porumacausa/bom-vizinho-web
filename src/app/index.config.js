(function () {
  'use strict';

  angular
    .module('bomVizinhoWeb')
    .config(config)
    .config(configTranslations)
    .config(configSatellizer);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

  /** @ngInject */
  function configSatellizer($authProvider) {
    $authProvider.facebook({
      clientId: '1691283711115807'
    });
  }

  function configTranslations($translateProvider) {
    $translateProvider.useLocalStorage();
    $translateProvider.preferredLanguage('pt-PT');
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider.useStaticFilesLoader({
      prefix: 'app/languages/',
      suffix: '.json'
    });
  }

})();
