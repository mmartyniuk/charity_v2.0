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
                'addOffer': 'Додати Пропозицію',
                'aboutAs': 'Про нас',
                'logIn': 'Залогінитись',
                'logOut': 'Вийти',
                'myAccount': 'Мій кабінет'
            }
        });
        $translateProvider.translations('ru', {
            header: {
                'russian': 'Русский',
                'ukrainian': 'Украинский',
                'needs' : 'Потребности',
                'offers': 'Предложения',
                'addNeed': 'Добавить Потребность',
                'addOffer': 'Добавить Предложение',
                'aboutAs': 'Про нас',
                'logIn': 'Войти',
                'logOut': 'Выйти',
                'myAccount': 'Мой кабинет'
            }
        });
    }
})();
