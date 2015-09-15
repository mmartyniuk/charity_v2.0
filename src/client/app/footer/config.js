(function () {
    'use strict';

    angular
        .module('app.footer')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'contacts',
                config: {
                    url: '/footer/contacts',
                    templateUrl: 'app/footer/views/contacts.html',
                    title: 'contacts',
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'privacy',
                config: {
                    url: '/footer/privacy',
                    templateUrl: 'app/footer/views/privacy.html',
                    title: 'privacy',
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'sitemap',
                config: {
                    url: '/footer/sitemap',
                    templateUrl: 'app/footer/views/site_map.html',
                    title: 'Site Map',
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'termsofuse',
                config: {
                    url: '/footer/termsofuse',
                    templateUrl: 'app/footer/views/terms_of_use.html',
                    title: 'Terms of Use',
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            }
        ];
    }

})();
