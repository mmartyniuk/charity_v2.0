(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngAnimate', 'ngSanitize',
            'blocks.exception', 'blocks.logger', 'blocks.router',
            'ui.router', 'ngplus', 'ui.bootstrap', 'flow', 'xeditable',
            'ngStorage', 'angular-loading-bar', 'ngCookies', 'pascalprecht.translate'
        ]).config(config);

    config.$inject = ['$translateProvider'];

    function config($translateProvider) {
        $translateProvider.useCookieStorage();

        $translateProvider.translations('ua', {
            'core': {
                selectCategoryPlaceholder: 'Виберіть категорію',
                actuality: 'Актуальність',
                deleteNeed: 'Ви справді хочете видалити дану потребу?',
                deleteOffer: 'Ви справді хочете видалити дану пропозицію?',
                yesButton: 'Так',
                noButton: 'Ні',
                cancelButton: 'Відмінити',
                close: 'Закрити',
                delete: 'Видалити',
                unknown: 'Невідомо',
                selectImageButton: 'Вибрати зображення',
                uploadButton: 'Завантажити',
                specifyCity: 'Вкажіть місто',
                canTake: 'Зможу забрати',
                days: {
                    monday: 'Понеділок',
                    tuesday: 'Вівторок',
                    wednesday: 'Середа',
                    thursday: 'Четвер',
                    friday: 'П\'ятниця',
                    saturday: 'Субота',
                    sunday: 'Неділя'
                },
                timeFrom:'від',
                timeTo: 'по',
                before: 'до'
            }
        });

        $translateProvider.translations('ru', {
            'core': {
                selectCategoryPlaceholder: 'Выберите категорию',
                actuality: 'Актуальность',
                deleteNeed: 'Вы действительно хотите удалить данную потребность?',
                deleteOffer: 'Вы действительно хотите удалить данное предложение?',
                yesButton: 'Да',
                noButton: 'Нет',
                cancelButton: 'Отменить',
                close: 'Закрыть',
                delete: 'Удалить',
                unknown: 'Неизвестно',
                selectImageButton: 'Выбрать изображение',
                uploadButton: 'Загрузить',
                specifyCity: 'Укажите город',
                canTake: 'Смогу забрать',
                days: {
                    monday: 'Понедельник',
                    tuesday: 'Вторник',
                    wednesday: 'Среда',
                    thursday: 'Четверг',
                    friday: 'Пятница',
                    saturday: 'Суббота',
                    sunday: 'Воскресенье'
                },
                timeFrom:'c',
                timeTo: 'до',
                before: 'до'
            }
        });
    }
})();
