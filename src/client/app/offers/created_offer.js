/*jshint -W101*/
(function () {
    'use strict';

    angular
        .module('app.offers')
        .controller('CreatedOfferController', CreatedOfferController);

    CreatedOfferController.$inject = ['$stateParams', 'OffersFactory',
        '$sessionStorage', 'SharedFactory'];

    function CreatedOfferController($stateParams, OffersFactory,
                                    $sessionStorage, SharedFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'CreatedOfferController';

        vm.currentOffer = {};
        vm.userCreated = {};
        vm.authorizedUser = {};
        vm.category = {};

        // applying data from successful response to user api to vm.userCreated variable
        // it will be an object with some data about user
        function succeedGetOwner(data) {
            vm.userCreated = data;
        }

        // here we apply all data about this offer to vm.currentOffer variable
        // and make additional api call to user (who had written this offer) profile
        function successResponse(data) {
            vm.currentOffer = data;
            console.log(vm.currentOffer);

            // parsing date here
            vm.currentOffer.dateCreated = new Date(Date.parse(vm.currentOffer.created));
            vm.currentOffer.dayCreated = vm.currentOffer.dateCreated.getDate();
            vm.currentOffer.monthCreated = vm.currentOffer.dateCreated.getMonth() + 1;
            vm.currentOffer.yearCreated = vm.currentOffer.dateCreated.getFullYear();

            vm.tempAddressUser =
                vm.currentOffer._links.userCreated.href.slice
                (vm.currentOffer._links.userCreated.href.search('/api'),
                vm.currentOffer._links.userCreated.href.length);
            vm.tempAddressCategory =
                vm.currentOffer._links.category.href.slice
                (vm.currentOffer._links.category.href.search('/api'),
                vm.currentOffer._links.category.href.length);
            // making here next call to api, to get user
            // this is needed to check if current user is owner of this offer
            // if so - edit and close buttons will be available and user will see responses from other users
            // if not - respond button will be available

            // api/core/api.core.shared.service.js - factory for reusable components for offers and offers
            // please use it when you'll work with offer
            SharedFactory.getOwner(vm.tempAddressUser, succeedGetOwner, function() {
                console.log('something wrong');
            });
            SharedFactory.getCategory(vm.tempAddressCategory, succeedGetCategory, function() {
                console.log('something wrong');
            });
            if (vm.currentOffer.pickup) {
                vm.currentOffer.pickup = 'Так';
                console.log(vm.currentOffer.pickup);
            } else {
                vm.currentOffer.pickup = 'Ні';
                console.log(vm.currentOffer.pickup);
            }
        }
        vm.currentOffer = function () {
            OffersFactory.getConcreteOffer($stateParams.id).then(function(response) {
                console.log(response);
            }).catch(function() {
                console.log('something wrong');
            });
        };

        function succeedGetAuthorizedUserInfo(data) {
            vm.authorizedUser.username = data.username;
            if (vm.authorizedUser.username === vm.userCreated.username) {
                vm.authorizedUser.ifOwner = true;
            } else {
                vm.authorizedUser.ifOwner = false;
            }
        }

        function succeedGetMainCategory(data) {
            vm.mainCategory = data.name;
        }

        function succeedGetParentCategory(data) {
            vm.parentCategory = data.name;
            vm.tempAddressMainCategory = data._links.parent.href.slice
            (data._links.parent.href.search('/api'),
                data._links.parent.href.length);
            if (data._links.parent.href) {
                SharedFactory.getCategory(vm.tempAddressMainCategory,
                    succeedGetMainCategory, function() {
                    console.log('main category is already filled');
                });
            }
        }

        function succeedGetCategory(data) {
            vm.category = data.name;
            vm.tempAddressParentCategory = data._links.parent.href.slice
            (data._links.parent.href.search('/api'),
                data._links.parent.href.length);
            SharedFactory.getCategory(vm.tempAddressParentCategory,
                succeedGetParentCategory, function() {
                console.log('something wrong');
            });
        }

        vm.userCheck = function() {
            if ($sessionStorage.token) {
                vm.userCreated.authorized = true;
                SharedFactory.getAuthorizedUserInfo($sessionStorage.token,
                    succeedGetAuthorizedUserInfo, function() {
                    console.log('something wrong');
                });
            }
        };
        activate();

        function activate() {
            vm.currentOffer();
            vm.userCheck();
        }
    }
})();
