(function () {
    'use strict';

    angular.module('app.main', [

    ]).config(config);

    config.$inject = ['$translateProvider'];

    function config($translateProvider) {
        $translateProvider.translations('ua', {
            main: {
                'whatAreYouLookingFor': 'Що ви шукаєте...'
            }
        });
        $translateProvider.translations('ru', {
            main: {
                'whatAreYouLookingFor': 'Что вы ищете...'
            }
        });
    }
})();
