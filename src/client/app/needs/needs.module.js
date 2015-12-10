(function () {
    'use strict';

    angular.module('app.needs', []).config(config);

    config.$inject = ['$translateProvider'];

    function config($translateProvider) {
        $translateProvider.translations('ua', {
            needs: {
                lookingFor: 'Що ви шукаєте',
                needsTitle: 'Потреби',
                author: 'Автор',
                category: 'Категорія',
                edit: 'Редагувати',
                display: 'Відображати',
                firstPage: 'Перша',
                lastPage: 'Остання',
                previousPage: 'Попередня',
                nextPage: 'Наступна'
            },
            createdNeed: {
                need: 'Потреба',
                author: 'Автор',
                published: 'Опубліковано',
                category: 'Категорія',
                needDescription: 'Опис потреби',
                description: 'Опис',
                actuality: 'Актуальність',
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
                recieve: 'Отримати',
                confirmAssistance: 'Підтвердити отримання допомоги',
                cancelAssistanceFromUser: 'Відмовитися від допомоги цього користувача',
                needIsClosed: 'Ця потреба закрита'
            },
            removeNeed: {
                deleteNeed: 'Ви справді хочете видалити дану потребу?',
                yesButton: 'Так',
                cancelButton: 'Відмінити'
            },
            editNeed: {
                editingOfNeed: 'Редагування потреби',
                needName: 'Назва',
                category: 'Категорія',
                needDescription: 'Опис потреби',
                photo: 'Фото',
                selectRegion: 'Виберіть область',
                selectCity: 'Виберіть місто',
                address: 'Адреса',
                convenientTime: 'Зручний час',
                edit: 'Редагувати',
                save: 'Зберегти',
                cancel: 'Відмінити',
                requiredField:'Обов\'язкове поле'
            },
            newNeedRegister: {
                newNeed: 'Нова потреба',
                name: 'Назва',
                nameOfNeedPlaceholder: 'Назва потреби',
                selectCategoryPlaceholder: 'Виберіть категорію',
                category: 'Категорія',
                newNeedDescription: 'Опис потреби',
                describeNeedPlaceholder: 'Опишіть вашу потребу',
                photo: 'Фото',
                selectRegion: 'Виберіть область',
                selectCity: 'Виберіть місто',
                address: 'Адреса',
                convenientTime: 'Зручний час',
                dateTimePlaceholder: 'Пн-Пт, 10:00 - 19:00;',
                canTake: 'Зможу забрати',
                yesRButton: 'Так',
                noRButton: 'Ні',
                cancel: 'Відмінити',
                publishButton: 'Опублікувати',
                backButton: 'Назад',
                furtherButton: 'Далі',
                selectImageButton: 'Вибрати зображення',
                uploadButton: 'Завантажити',
                actuality: 'Актуальність'
            },
            newProject: {
                newProjectTitle: 'Новий проект',
                name: 'Назва',
                textPlaceholder: 'Благодійна акція на день святого Миколая',
                projectDescription: 'Опис проекту',
                describeProjectPlaceholder: 'Опишіть ваш проект',
                photo: 'Фото',
                backButton: 'Назад',
                furtherButton: 'Далі'
            }
        });
        $translateProvider.translations('ru', {
            needs: {
                lookingFor: 'Что вы ищете',
                needsTitle: 'Потребности',
                author: 'Автор',
                category: 'Категория',
                edit: 'Редактировать',
                display: 'Отображать',
                firstPage: 'Первая',
                lastPage: 'Последняя',
                previousPage: 'Предыдущая',
                nextPage: 'Следующая'
            },
            createdNeed: {
                need: 'Потребность',
                author: 'Автор',
                published: 'Опубликовано',
                category: 'Категория',
                needDescription: 'Описание потребности',
                description: 'Описание',
                actuality: 'Актуальность',
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
                recieve: 'Получить',
                confirmAssistance: 'Подтвердить получение помощи',
                cancelAssistanceFromUser: 'Отказаться от помощи этого пользователя',
                needIsClosed: 'Эта потребность закрыта'

            },
            removeNeed: {
                deleteNeed: 'Вы действительно хотите удалить данную потребность?',
                yesButton: 'Да',
                cancelButton: 'Отменить'
            },
            editNeed: {
                editingOfNeed: 'Редактирование потребности',
                needName: 'Название',
                category: 'Категория',
                needDescription: 'Описание потребности',
                photo: 'Фото',
                selectRegion: 'Выберите область',
                selectCity: 'Выберите город',
                address: 'Адрес',
                convenientTime: 'Удобное время',
                edit: 'Редактировать',
                save: 'Cохранить',
                cancel: 'Отменить',
                requiredField:'Обязательное поле'

            },
            newNeedRegister: {
                newNeed: 'Новая потребность',
                name: 'Название',
                nameOfNeedPlaceholder: 'Название потребности',
                selectCategoryPlaceholder: 'Выберите категорию',
                category: 'Категория',
                newNeedDescription: 'Описание потребности',
                describeNeedPlaceholder: 'Опишите вашу потребность',
                photo: 'Фото',
                selectRegion: 'Выберите область',
                selectCity: 'Выберите город',
                address: 'Адрес',
                convenientTime: 'Удобное время',
                dateTimePlaceholder: 'Пн-Пт, 10:00 - 19:00;',
                canTake: 'Смогу забрать',
                yesRButton: 'Да',
                noRButton: 'Нет',
                cancel: 'Отменить',
                publishButton: 'Опубликовать',
                backButton: 'Назад',
                furtherButton: 'Далее',
                selectImageButton: 'Выбрать изображение',
                uploadButton: 'Загрузить',
                actuality: 'Актуальность'
            },
            newProject: {
                newProjectTitle: 'Новый проект',
                name: 'Название',
                textPlaceholder: 'Благотворительная акция в день святого Николая',
                projectDescription: 'Описание проекта',
                describeProjectPlaceholder: 'Опишите ваш проект',
                photo: 'Фото',
                backButton: 'Назад',
                furtherButton: 'Далее'
            }
        });
    }
})();
