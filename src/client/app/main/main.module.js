(function () {
    'use strict';

    angular.module('app.main', [

    ]).config(config);

    config.$inject = ['$translateProvider'];

    function config($translateProvider) {
        $translateProvider.translations('ua', {
            main: {
                'whatAreYouLookingFor': 'Що ви шукаєте...',
                'needs': 'Потреби',
                'offers': 'Пропозиції',
                'lastNeeds': 'Останні потреби',
                'lastOffers': 'Останні пропозиції',
                'author': 'Автор:'
            }
        });
        $translateProvider.translations('ru', {
            main: {
                'whatAreYouLookingFor': 'Что вы ищете...',
                'needs' : 'Потребности',
                'offers': 'Предложения',
                'lastNeeds': 'Последние потребности',
                'lastOffers': 'Последние предложения',
                'author': 'Автор:'            }
        });
    }
})();
