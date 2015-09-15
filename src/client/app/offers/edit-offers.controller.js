(function() {
    'use strict';

    angular
        .module('app.offers')
        .controller('EditOffersContoller', EditOffersContoller);

    EditOffersContoller.$inject = ['$location', '$filter', '$http', '$state'];

    /* @ngInject */
    function EditOffersContoller($location, $filter, $http, $state) {
        var vm = this;
        vm.title = 'editOffersContoller';
        vm.saveUser = saveUser;
        vm.user = {};
        /*Memo: Cities with Regions are hardcoded we will get them from backend in future */
        vm.regions = [{
            value: "Івано-Франківська область",
            text: 'Івано-Франківська область'
        }, {
            value: "Київська область‎",
            text: 'Київська область‎'
        }, ];

        vm.city = [{
            value: "Івано-Франківськ",
            text: ' Івано-Франківськ'
        }, {
            value: "Київ",
            text: 'Київ'
        }, ];
        /* End of Memo*/
        vm.user.size = 'S';
        vm.size = [{
            value: "S",
            text: 'S'
        }, {
            value: "M",
            text: 'M'
        }, {
            value: "L",
            text: 'L'
        }, {
            value: "XL",
            text: 'XL'
        }, ];

        vm.user.offer = "test title";
        vm.user.offerText = "Влад з Дніпропетровська з народження страждає на ДЦП: гідроцефалія, порок розвитку головного мозку.  Владика мучать сильні болі. Мама хлопчика спробувала вже чимало методів лікування, проте досі лікарі не змогли отримати бажаного результату.";
        vm.user.size = "S";
        vm.user.regions = "Київська область‎";
        vm.user.city = "Київ";
        vm.user.flat = "Номер квартири";
        vm.user.time = "Пн-Пт, 10:00 - 19:00";
        vm.user.street = "вул. Тараса Шевченка";
        vm.user.house = "Номер будинку";

        vm.user.status = 0;
        vm.userStatuses = [{
            value: 1,
            text: "Зможу забрати"
        }, {
            value: 0,
            text: "Не зможу забрати"
        }];

        activate();

        function activate() {};

        function saveUser() {
            /*      return $http.post('/saveUser', vm.user).error(function(err) {
                    console.log(vm.user); -----Logic for updating info on backend
                    });*/
            console.log(vm.user); /*edited info testing*/
        };

    }
})();
