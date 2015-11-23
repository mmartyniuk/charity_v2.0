(function () {
    'use strict';

    angular.module('app.needs', []).config(config);

    config.$inject = ['$translateProvider'];

    function config($translateProvider) {
        $translateProvider.translations('ua', {
            createdNeed: {
                'need': 'Потреба',
                'author': 'Автор',
                'published': 'Опубліковано',
                'category': 'Категорія',
                'needDescription': 'Опис потреби',
                'description': 'Опис',
                'actuality': 'Актуальність',
                'address': 'Адреса',
                'convenientTime': 'Зручний час',
                'canTake': 'Зможу забрати',
                'edit': 'Редагувати',
                'close': 'Закрити',
                'delete': 'Видалити',
                'respond': 'Відгукнутись',
                'cancelResponse': 'Відмінити відгук',
                'details': 'Деталі',
                'typeDetailsPlaceholder': 'Введіть будь ласка деталі',
                'submit': 'Підтвердити',
                'userName': 'Ім\'я користувача',
                'phoneNumber': 'Телефон',
                'recieve': 'Отримати',
                'confirmAssistance': 'Підтвердити отримання допомоги',
                'cancelAssistanceFromUser': 'Відмінити підтримання допомоги від цього користувача',
                'needIsClosed': 'Ця потреба закрита'
            },
            removeNeed: {
                'deleteNeed': 'Ви справді хочете видалити дану потребу?',
                'yesButton': 'Так',
                'cancelButton': 'Відмінити'
            }
        });
        $translateProvider.translations('ru', {
            createdNeed: {
                'need': 'Потребность',
                'author': 'Автор',
                'published': 'Опубликовано',
                'category': 'Категория',
                'needDescription': 'Описание потребности',
                'description': 'Описание',
                'actuality': 'Актуальность',
                'address': 'Адрес',
                'convenientTime': 'Удобное время',
                'canTake': 'Могу забрать',
                'edit': 'Редактировать',
                'close': 'Закрыть',
                'delete': 'Удалить',
                'respond': 'Откликнуться',
                'cancelResponse': 'Отменить отзыв',
                'details': 'Детали',
                'typeDetailsPlaceholder': 'Введите пожалуйста детали',
                'submit': 'Подтвердить',
                'userName': 'Имя пользователя',
                'phoneNumber': 'Телефон',
                'recieve': 'Получить',
                'confirmAssistance': 'Подтвердить получение помощи',
                'cancelAssistanceFromUser': 'Отменить поддержания помощи от пользователя',
                'needIsClosed': 'Эта потребность закрыта'

            },
            removeNeed: {
                'deleteNeed': 'Вы действительно хотите удалить данную потребность?',
                'yesButton': 'Да',
                'cancelButton': 'Отменить'
            }
        });
    }
})();
