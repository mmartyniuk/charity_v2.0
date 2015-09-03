(function() {
    'use strict';

    angular
        .module('app.offers')
        .controller('OffersController', OffersController);

    OffersController.$inject = ['$location', '$filter', '$http'];

    /* @ngInject */
    function OffersController($location, $filter, $http) {
        var vm = this;
        vm.title = 'OffersController';
        vm.showStatus = showStatus;
        vm.saveUser = saveUser;
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
        vm.user = {
            status: 0
        };

        vm.statuses = [{
            value: 1,
            text: 'Так'
        }, {
            value: 2,
            text: 'Ні'
        }];
        vm.user.offer = "test title"
        vm.user.offerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eum quos distinctio, aspernatur ut porro. Voluptatibus culpa cumque distinctio deleniti, nam itaque accusamus ipsum vero illo eligendi voluptates velit consequuntur facere eaque asperiores minus fugit, debitis, nisi officia, maiores optio quos. Ut rerum cumque porro recusandae at, natus facilis quas!";

        activate();

        function activate() {};

        function showStatus() {
            var selected = $filter('filter')(vm.statuses, {
                value: vm.user.status
            });
            return (vm.user.status && selected.length) ? selected[0].text : 'Невідомо';
        };

        function saveUser() {
            /*      return $http.post('/saveUser', vm.user).error(function(err) {
                    console.log(vm.user); -----Logic for updating info on backend
                    });*/
            console.log(vm.user); /*edited info testing*/
        };

    }
})();
