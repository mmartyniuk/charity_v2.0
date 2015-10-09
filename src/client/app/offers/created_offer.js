/*jshint -W101, -W106*/
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

        vm.currentOffer = {}; // here we will store all data for offer, which is currently displayed
        vm.userCreated = {}; // here we will store all data for user, who have created this offer
        vm.authorizedUser = {}; // here we will store all data for user, who is authorized
        vm.category = {};
        vm.respondData = {}; // here we will store data for response
        vm.userRespondedToOffer = false; // user hasn't responded to this offer by default
        vm.responsesObj = {};
        vm.showResponsesToOwner = false;
        vm.waitingForHelp = false;
        vm.idResp = $stateParams.id;
        vm.userInfo = {};

        // applying data from successful response from API to user api to vm.userCreated variable
        // it will be an object with some data about user
        function succeedGetOwner(data) {
            vm.userCreated = data;
            if ($sessionStorage.token) {
                vm.userCreated.authorized = true;
            }
            vm.userCheck();
        }

        // categories
        function succeedGetMainCategory(data) {
            vm.mainCategory = data.name;
        }

        function succeedGetParentCategory(data) {
            vm.parentCategory = data.name;
            vm.tempAddressMainCategory = SharedFactory.sliceLink(data._links.parent.href);
            if (data._links.parent.href) {
                SharedFactory.getCategory(vm.tempAddressMainCategory,
                    succeedGetMainCategory, function() {
                        console.log('main category is already filled');
                    });
            }
        }

        function succeedGetCategory(data) {
            vm.category = data.name;
            vm.tempAddressParentCategory = SharedFactory.sliceLink(data._links.parent.href);
            SharedFactory.getCategory(vm.tempAddressParentCategory,
                succeedGetParentCategory, function() {
                    console.log('something wrong');
                });
        }

        // here we apply all data about this offer to vm.currentOffer variable
        // and make additional api call to user (who had written this offer) profile
        function successResponse(data) {
            vm.currentOffer = data;
            // parsing date here
            vm.currentOffer.dateCreated = new Date(Date.parse(vm.currentOffer.created));
            vm.currentOffer.dayCreated = vm.currentOffer.dateCreated.getDate();
            vm.currentOffer.monthCreated = vm.currentOffer.dateCreated.getMonth() + 1;
            vm.currentOffer.yearCreated = vm.currentOffer.dateCreated.getFullYear();

            vm.tempAddressUser = SharedFactory.sliceLink(vm.currentOffer._links.userCreated.href);
            vm.tempAddressCategory = SharedFactory.sliceLink(vm.currentOffer._links.category.href);
            // making here next call to api, to get user
            // this is needed to check if current user is owner of this offer
            // if so - edit and close buttons will be available and user will see responses from other users
            // if not - respond button will be available
            // api/core/api.core.shared.service.js - factory for reusable components for needs and offers
            // please use it when you'll work with offer

            SharedFactory.getOwner(vm.tempAddressUser, succeedGetOwner, function() {
                console.log('something wrong');
            });
            SharedFactory.getCategory(vm.tempAddressCategory, succeedGetCategory, function() {
                console.log('something wrong');
            });
            if (vm.currentOffer.pickup) {
                vm.currentOffer.pickup = 'Так';
            } else {
                vm.currentOffer.pickup = 'Ні';
            }
        }
        // important, getting data from API about this offer
        vm.currentOffer = function () {
            OffersFactory.getConcreteOffer($stateParams.id, successResponse, function() {
                console.log('something wrong');
            });
        };

        // getting data about user who is authorized
        function succeedGetAuthorizedUserInfo(data) {
            vm.authorizedUser = data;
            if (vm.authorizedUser.username === vm.userCreated.username) {
                vm.authorizedUser.ifOwner = true;
                // here actions for owner
                vm.getAllResponses();
                vm.showResponsesToOwner = true;
            } else {
                vm.authorizedUser.ifOwner = false;
            }
        }

        //  getting info about responses from API
        function currentResponses(data) {
            if (data._embedded.offer_response)   {
                vm.responsesObj = data._embedded.offer_response; // array with responses objects
                for (var i = 0, len = vm.responsesObj.length; i < len; i++) {
                    if (vm.responsesObj[i].userId === vm.authorizedUser.id) { // if user has already responded to this need
                        vm.userRespondedToOffer = true; // then we disable 'respond' button
                        vm.linkToMyResponse = vm.responsesObj[i]._links.self.href; // getting link to response
                        break;
                    }
                }
                return vm.responsesObj;
            }
        }

        // getting info about user
        vm.userCheck = function() {
            if ($sessionStorage.token) {
                SharedFactory.getAuthorizedUserInfo($sessionStorage.token,
                    succeedGetAuthorizedUserInfo, function() {
                        console.log('something wrong');
                    });
                OffersFactory.getReponsesForThisOffer(vm.idResp, currentResponses, function () {
                    console.log('error');
                });
            }
        };

        // action which is performed after respond
        function succeedWithRespond() {
            vm.userRespondedToOffer = true;
            vm.userCheck();
        }

        // sending response options to backend
        vm.respondToOffer = function() {
            vm.respondData.user = 'http://localhost:8088/api/users/' + vm.authorizedUser.id; // temporary hardcode
            vm.respondData.offer = vm.currentOffer._links.self.href;
            OffersFactory.respondToCurrentOffer(vm.respondData, succeedWithRespond, function () {
                console.log('respond is not send');
            });
        };

        // here are conditions when respond button will / will not be shown
        vm.allowResponse = function () {
            if (vm.userCreated.authorized &&
                !vm.authorizedUser.ifOwner && !vm.userRespondedToOffer) {
                return true;
            } else {
                return false;
            }
        };

        // after deleting the response we allow user to respond again
        function succeedWithDelete () {
            vm.userRespondedToOffer = false;
        }

        vm.cancelResponce = function () {
            vm.linkToRemoveResponse = SharedFactory.sliceLink(vm.linkToMyResponse);
            OffersFactory.cancelUserResponse(vm.linkToRemoveResponse,
                succeedWithDelete, function () {
                    console.log('respond is not send');
                });
        };
        function getContactUser(data) {
            vm.userInfo.name = data.name;
            vm.userInfo.address = data.address.phone;
            console.log(data);
        }

        function getResponses(responses) {
            if (responses._embedded.offer_response) {
                vm.currentResponses = responses._embedded.offer_response;
                for (var i = 0,len = vm.currentResponses.length;i < len;i++) {
                    if (vm.currentResponses[i].status === 'DELETED') {
                        var temp = vm.currentResponses[i];
                        vm.currentResponses = [];
                        vm.currentResponses.push(temp);
                        OffersFactory.getUserToContactWith(vm.currentResponses[0].id,
                            getContactUser, function () {
                                console.log('respond is not send');
                            });
                        vm.waitingForHelp = true;
                        break;
                    }
                }
            }
        }
        vm.getAllResponses = function() {
            OffersFactory.getReponsesForThisOffer(vm.idResp, getResponses, function () {
                console.log('error');
            });
        };
        function succeedAccept(data) {
            vm.waitingForHelp = true;
            vm.getAllResponses();
        }

        vm.accept = function (id) {
            vm.accept.status = 1;
            vm.accept.id = id;
            OffersFactory.patchResponse(vm.accept.id, vm.accept.status, succeedAccept, function() {
                console.log('something wrong');
            });
        };
        function succeedCompletedResponse() {
            vm.currentOffer.open = false;
        }
        vm.deleteCompletedResponse = function (id) {
            vm.accept.status = 2;
            vm.accept.id = id;
            OffersFactory.patchResponse(vm.accept.id,
                vm.accept.status, succeedCompletedResponse, function() {
                    console.log('something wrong');
                });
        };

        function refreshResponses() {
            vm.waitingForHelp = false;
            vm.getAllResponses();
        }

        vm.cancelGettingResponse = function(id) {
            vm.accept.status = 0;
            vm.accept.id = id;
            OffersFactory.patchResponse(vm.accept.id,
                vm.accept.status, refreshResponses, function() {
                    console.log('something wrong');
                });
        };

        function activate() {
            vm.currentOffer();
            vm.userCheck();
        }

        activate();
    }
})();
