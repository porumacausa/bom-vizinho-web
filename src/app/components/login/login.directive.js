(function () {
    'use strict';

    angular
        .module('bomVizinhoWeb')
        .directive('loginForm', loginForm);

    /** @ngInject */
    function loginForm() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/login/login.html',
            scope: {
            },
            controller: LoginController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function LoginController($auth) {
            var vm = this;

            vm.isSignUp = false;
            vm.errorMsg = '';
            vm.user = {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                rememberMe: false
            };

            vm.forgotPassword = function () {

            };

            vm.login = function () {
                $auth.login(vm.user)
                    .then(function (res) {
                        // Redirect user here after a successful log in.
                    })
                    .catch(function (err) {
                        // Handle errors here, such as displaying a notification
                        // for invalid email and/or password.
                    });
            };

            vm.authenticate = function (provider) {
                $auth.authenticate(provider);
            };

            vm.toggleSignUp = function () {
                vm.isSignUp = !vm.isSignUp;
            }

            vm.signUp = function () {
                $auth.signup(vm.user)
                    .then(function (res) {
                        // Redirect user here to login page or perhaps some other intermediate page
                        // that requires email address verification before any other part of the site
                        // can be accessed.
                    })
                    .catch(function (err) {
                        // Handle errors here.
                    });
            };
        }
    }

})();