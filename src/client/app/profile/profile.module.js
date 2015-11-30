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

        $translateProvider.translations('ru', {
            'profile': {
                'active': 'Активные',
                'finished': 'Завершенные',
                'needs': 'Потребности',
                'projects': 'Проекты',
                'responded': 'Отозвались',
                'responds': 'Отзывов',
                'published': 'Опубликовано',
                'actualTo': 'Актуально до',
                'users': '{{count}} пользователей',
                'name': 'Название',
                'userData': 'Данные пользователя',
                'yourName': 'Ваше имя',
                'email': 'Электронная почта',
                'address': 'Адрес',
                'phone': 'Телефон',
                'role': 'Кто Вы',
                'author': 'Автор',

                'publishedNeeds': 'Опубликованные потребности',
                'publishedOffers': 'Опубликованные предложения',
                'control': 'Управление',
                'supportedNeeds': 'Поддержанные потребности',
                'supportedOffers': 'Поддержанные предложения',
                'edit': 'Редактировать',
                'delete': 'Удалить',
                'save': 'Сохранить',
                'cancel': 'Отменить',
                'messages': 'Сообщения',
                'messageHistory': 'История сообщений',
                'date': 'Дата',
                'subject': 'Тема',
                'profile': 'Профиль'
            }
        });
    }
})();
