(function () {
    'use strict';

    angular
        .module('app.profile')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'profile',
                config: {
                    url: '',
                    abstract: true,
                    template: '<ui-view/>',
                    title: 'profile'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'profile.home',
                config: {
                    url: '/profile/:id',
                    templateUrl: 'app/profile/my-my-profile.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'profile.user',
                config: {
                    url: '/profile/user/:id',
                    templateUrl: 'app/profile/user-my-profile.html',
                    title: 'userProfile',
                    controller: 'UserProfileController',
                    controllerAs: 'vm'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            }
        ];
    }

})();
