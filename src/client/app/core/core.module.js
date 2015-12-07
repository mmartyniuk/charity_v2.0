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
                unknown: 'Невідомо',
                selectImageButton: 'Вибрати зображення',
                uploadButton: 'Завантажити',
                specifyCity: 'Вкажіть місто',
                canTake: 'Зможу забрати',
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
                unknown: 'Неизвестно',
                selectImageButton: 'Выбрать изображение',
                uploadButton: 'Загрузить',
                specifyCity: 'Укажите город',
                canTake: 'Смогу забрать',
                before: 'до'
            }
        });
    }
})();
