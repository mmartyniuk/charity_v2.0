(function () {
    'use strict';

    angular.module('app.offers', []).config(config);
    config.$inject = ['$translateProvider'];

    function config($translateProvider) {
        $translateProvider.translations('ua', {
            offers: {
                offer: 'Пропозиція',
                offers: 'Пропозиції',
                author: 'Автор',
                published: 'Опубліковано',
                category: 'Категорія',
                offerDescription: 'Опис пропозиції',
                description: 'Опис',
                address: 'Адреса',
                convenientTime: 'Зручний час',
                canTake: 'Зможу забрати',
                edit: 'Редагувати',
                close: 'Закрити',
                delete: 'Видалити',
                respond: 'Відгукнутись',
                cancelResponse: 'Відмінити відгук',
                details: 'Деталі',
                typeDetailsPlaceholder: 'Введіть будь ласка деталі',
                submit: 'Підтвердити',
                userName: 'Ім\'я користувача',
                phoneNumber: 'Телефон',
                receive: 'Отримати',
                confirmAssistance: 'Підтвердити отримання допомоги',
                cancelGettingResponseFromUser: ' Відмовитись від допомоги цього користувача',
                offerIsClosed: 'Ця пропозиція закрита',

                editingOfOffer: 'Редагування пропозиції',
                offerName: 'Назва',
                save: 'Зберегти',

                newOffer: 'Нова пропозиція',
                nameOfOfferPlaceholder: 'Назва потреби',
                selectCategoryPlaceholder: 'Виберіть категорію',
                describeOfferPlaceholder: 'Опишіть вашу пропозицію',
                photo: 'Фото',
                selectRegion: 'Виберіть область',
                selectCity: 'Виберіть місто',
                dateTimePlaceholder: 'Пн-Пт, 10:00 - 19:00;',
                publishButton: 'Опублікувати',
                backButton: 'Назад',
                furtherButton: 'Далі',
                selectImageButton: 'Вибрати зображення',
                uploadButton: 'Завантажити',
                actuality: 'Актуальність',

                display: 'Відображати',
                firstPage: 'Перша',
                lastPage: 'Остання',
                previousPage: 'Попередня',
                nextPage: 'Наступна',
                lookingFor: 'Що ви шукаєте',

                offersPaginationLabel: 'пропозицій',
                allOffers: 'Усі пропозиції',
                offersFound: 'За Вашим запитом знайдено пропозицій: {{count}}',
                nothingFound: 'На жаль за Вашим запитом нічого не знайдено.'
            }
        });
        $translateProvider.translations('ru', {
            offers: {
                offer: 'Предложение',
                offers: 'Предложения',
                author: 'Автор',
                published: 'Опубликовано',
                category: 'Категория',
                offerDescription: 'Описание потребности',
                description: 'Описание',
                address: 'Адрес',
                convenientTime: 'Удобное время',
                canTake: 'Смогу забрать',
                edit: 'Редактировать',
                close: 'Закрыть',
                delete: 'Удалить',
                respond: 'Откликнуться',
                cancelResponse: 'Отменить отзыв',
                details: 'Детали',
                typeDetailsPlaceholder: 'Введите пожалуйста детали',
                submit: 'Подтвердить',
                userName: 'Имя пользователя',
                phoneNumber: 'Телефон',
                receive: 'Получить',
                confirmAssistance: 'Подтвердить получение помощи',
                cancelGettingResponseFromUser: 'Отказаться от помощи этого пользователя',
                offerIsClosed: 'Эта потребность закрыта',

                editingOfOffer: 'Редактирование предложения',
                offerName: 'Название',
                save: 'Сохранить',

                newOffer: 'Новое предложение',
                nameOfOfferPlaceholder: 'Название предложения',
                selectCategoryPlaceholder: 'Выберите категорию',
                describeOfferPlaceholder: 'Опишите ваше предложение',
                photo: 'Фото',
                selectRegion: 'Выберите область',
                selectCity: 'Выберите город',
                dateTimePlaceholder: 'Пн-Пт, 10:00 - 19:00;',
                publishButton: 'Опубликовать',
                backButton: 'Назад',
                furtherButton: 'Вперед',
                selectImageButton: 'Выбрать изображение',
                uploadButton: 'Загрузить',
                actuality: 'Актуальность',

                display: 'Отображать',
                firstPage: 'Первая',
                lastPage: 'Последняя',
                previousPage: 'Предыдущая',
                nextPage: 'Следующая',
                lookingFor: 'Что вы ищете',

                offersPaginationLabel: 'предложений',
                allOffers: 'Все предложения',
                offersFound: 'По Вашему запросу найдено предложений: {{count}}',
                nothingFound: 'К сожалению по вашему запросу ничего не найдено.'
            }
        })
    }
})();
