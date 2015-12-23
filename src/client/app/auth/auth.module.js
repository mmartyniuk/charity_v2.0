(function () {
    'use strict';

    angular.module('app.auth', [

    ]).config(config);

    config.$inject = ['$translateProvider'];

    function config($translateProvider) {
        $translateProvider.translations('ua', {
            'auth': {
                'loginTitle': 'Увійти',
                'login': 'Логін',
                'email': 'Електронна пошта',
                'password': 'Пароль',
                'register': 'Зареєструватись',

                'registerTitle': 'Зареєструватися',
                'mandatory': 'обов\'язкове поле для заповнення',
                'mandatoryError': 'Деякі обов\'язкові поля не заповнені!',
                'emailError': 'Дана електронна адреса вже використовується!',
                'name': 'Ім\'я Прізвище',
                'phone': 'Телефон',
                'region': 'Область',
                'city': 'Місто',
                'address': 'Адреса',
                'post': 'Пошта',
                'registerSubmit': 'Створити'
            }
        });

        $translateProvider.translations('ru', {
            'auth': {
                'loginTitle': 'Войти',
                'login': 'Логин',
                'email': 'Электронная почта',
                'password': 'Пароль',
                'register': 'Зарегестрироваться',

                'registerTitle': 'Зарегестрироваться',
                'mandatory': 'поле обязательное для заполнения',
                'mandatoryError': 'Некоторые обязательные поля не заполненны!',
                'emailError': 'Данный электронный адрес уже используется!',
                'name': 'Имя Фамилия',
                'phone': 'Телефон',
                'region': 'Область',
                'city': 'Город',
                'address': 'Адрес',
                'post': 'Почта',
                'registerSubmit': 'Создать'
            }
        });
    }
})();
