(function () {
    'use strict';

    angular.module('app.header', []).config(config);

    config.$inject = ['$translateProvider'];

    function config($translateProvider) {
        $translateProvider.translations('ua', {
            header: {
                'russian': 'Російська',
                'ukrainian': 'Українська',
                'needs' : 'Потреби',
                'offers': 'Пропозиції',
                'addNeed': 'Додати Потребу',
                'addOffer': 'Додати Пропозицію'
            }
        });
        $translateProvider.translations('ru', {
            header: {
                'russian': 'Русский',
                'ukrainian': 'Украинский',
                'needs' : 'Потребности',
                'offers': 'Предложения',
                'addNeed': 'Добавить Потребность',
                'addOffer': 'Добавить Предложение'
            }
        });
    }
})();
