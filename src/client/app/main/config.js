(function () {
    'use strict';

    angular
        .module('app.main')
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
                    url: '/index/profile',
                    templateUrl: 'app/main/profile.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm',
                    title: 'profile',
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            },
            {
                state: 'about_us',
                config: {
                    url: '/index/about_us',
                    templateUrl: 'app/main/about_us.html',
                    controller: 'AboutUSController',
                    controllerAs: 'vm',
                    title: 'about us'
                }
            }
        ];
    }
    
})();