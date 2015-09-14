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
                abstract: true,
                config: {
                    template: '<ui-view/>',
                    controller: 'ProfileController',
                    controllerAs: 'vm',
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
                    url: '/profile',
                    templateUrl: 'app/profile/profile.html',
                    title: 'profile'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },

        ];
    }

})();
