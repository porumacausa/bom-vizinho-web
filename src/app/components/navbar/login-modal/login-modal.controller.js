(function(){
  'use strict';

  angular
    .module('bomVizinhoWeb')
    .controller('ModalInstanceController', ModalInstanceController);

  /* @ngInject */
  function ModalInstanceController ($uibModalInstance) {
    var vm = this;

    vm.labels = {
      forgotPassword: 'Forgot Password ?',
      emailPlaceholder: 'Email',
      passwordPlaceHolder: 'Password',
      rememberMe: 'Remember me',
      facebookLogin: 'Login with Facebook',
      noAccount: 'Don\'t have account?',
      signUp: 'Sign Up Here',
      signIn: 'Sign In'
    };

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
