(function () {
    'use strict';

    angular.module('app.profile', [

    ]).config(config);

    config.$inject = ['$translateProvider'];

    function config($translateProvider) {
        $translateProvider.translations('ua', {
            'profile': {
                'active': 'Активні',
                'finished': 'Завершені',
                'needs': 'Потреби',
                'projects': 'Проекти',
                'responded': 'Відгукнулись',
                'responds': 'Відгуків',
                'published': 'Опубліковано',
                'actualTo': 'Актуально до',
                'users': '{{count}} користувачів',
                'name': 'Назва',
                'userData': 'Дані користувача',
                'yourName': 'Ваше ім\'я',
                'email': 'Електронна пошта',
                'address': 'Адреса',
                'phone': 'Телефон',
                'role': 'Хто Ви',
                'author': 'Автор',

                'publishedNeeds': 'Опубліковані потреби',
                'publishedOffers': 'Опубліковані пропозиції',
                'control': 'Керування',
                'supportedNeeds': 'Підтримані потреби',
                'supportedOffers': 'Підтримані пропозиції',
                'edit': 'Редагувати',
                'delete': 'Видалити',
                'save': 'Зберегти',
                'cancel': 'Відмінити',
                'messages': 'Повідомлення',
                'messageHistory': 'Історія повідомлень',
                'date': 'Дата',
                'subject': 'Тема',
                'profile': 'Профіль'

            }
        });
    }
})();
