/*jshint -W101*/
(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('CreatedNeedController', CreatedNeedController);

    CreatedNeedController.$inject = ['$location', 'NeedsFactory', '$sessionStorage',
        'SharedFactory'];

    function CreatedNeedController($location, NeedsFactory, $sessionStorage,
                                   SharedFactory) {

        var vm = this;
        vm.title = 'CreatedNeedController';

        vm.currentNeed = {};
        vm.userCreated = {};
        vm.authorizedUser = {};
        vm.category = {};

        // applying data from successful response to user api to vm.userCreated variable
        // it will be an object with some data about user
        function succeedGetOwner(data) {
            vm.userCreated = data;
        }

        // here we apply all data about this need to vm.currentNeed variable
        // and make additional api call to user (who had written this need) profile
        function successResponse(data) {
            vm.currentNeed = data;

            // parsing date here
            vm.currentNeed.dateCreated = new Date(Date.parse(vm.currentNeed.created));
            vm.currentNeed.dayCreated = vm.currentNeed.dateCreated.getDate();
            vm.currentNeed.monthCreated = vm.currentNeed.dateCreated.getMonth() + 1;
            vm.currentNeed.yearCreated = vm.currentNeed.dateCreated.getFullYear();

            vm.tempAddressUser =
                vm.currentNeed._links.userCreated.href.slice
                (vm.currentNeed._links.userCreated.href.search('/api'),
                    vm.currentNeed._links.userCreated.href.length);
            vm.tempAddressCategory =
                vm.currentNeed._links.category.href.slice
                (vm.currentNeed._links.category.href.search('/api'),
                    vm.currentNeed._links.category.href.length);
            // making here next call to api, to get user
            // this is needed to check if current user is owner of this need
            // if so - edit and close buttons will be available and user will see responses from other users
            // if not - respond button will be available

            // api/core/api.core.shared.service.js - factory for reusable components for needs and offers
            // please use it when you'll work with offer
            SharedFactory.getOwner(vm.tempAddressUser, succeedGetOwner, function () {
                console.log('something wrong');
            });
            SharedFactory.getCategory(vm.tempAddressCategory, succeedGetCategory, function () {
                console.log('something wrong');
            });
            if (vm.currentNeed.pickup) {
                vm.currentNeed.pickup = 'Так';
            } else {
                vm.currentNeed.pickup = 'Ні';
            }
        }

        vm.currentNeed = function () {
            // hardcoded data for testing
            var needId = 1;
            NeedsFactory.getConcreteNeed(needId, successResponse, function () {
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
            vm.tempAddressMainCategory =
                data._links.parent.href.slice(data._links.parent.href.search('/api'),
                    data._links.parent.href.length);
            if (data._links.parent.href) {
                SharedFactory.getCategory(vm.tempAddressMainCategory, succeedGetMainCategory,
                    function () {
                    console.log('main category is already filled');
                });
            }
        }

        function succeedGetCategory(data) {
            vm.category = data.name;
            vm.tempAddressParentCategory =
                data._links.parent.href.slice(data._links.parent.href.search('/api'),
                    data._links.parent.href.length);
            SharedFactory.getCategory(vm.tempAddressParentCategory, succeedGetParentCategory,
                function () {
                console.log('something wrong');
            });
        }

        vm.userCheck = function () {
            if ($sessionStorage.token) {
                vm.userCreated.authorized = true;
                SharedFactory.getAuthorizedUserInfo($sessionStorage.token,
                    succeedGetAuthorizedUserInfo, function () {
                    console.log('something wrong');
                });
            }
        };
        activate();

        function activate() {
            vm.currentNeed();
            vm.userCheck();
        }
    }
})();
