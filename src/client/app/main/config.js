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
                state: 'messages',
                config: {
                    url: '/index/messages',
                    templateUrl: 'app/main/messages.html',
                    controller: 'MessagesController',
                    controllerAs: 'vm',
                    title: 'Messages'
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin' - tbd
                    }*/
                }
            },
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
            }
        ];
    }
    
})();