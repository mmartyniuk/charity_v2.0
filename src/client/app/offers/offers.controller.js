(function() {
    'use strict';

    angular
        .module('app.offers')
        .controller('editOffersContoller', editOffersContoller);

    editOffersContoller.$inject = ['$location', '$filter', '$http', '$state'];

    /* @ngInject */
    function editOffersContoller($location, $filter, $http, $state) {
        console.log($state);
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
        vm.user.offerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eum quos distinctio, aspernatur ut porro. Voluptatibus culpa cumque distinctio deleniti, nam itaque accusamus ipsum vero illo eligendi voluptates velit consequuntur facere eaque asperiores minus fugit, debitis, nisi officia, maiores optio quos. Ut rerum cumque porro recusandae at, natus facilis quas!";
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
