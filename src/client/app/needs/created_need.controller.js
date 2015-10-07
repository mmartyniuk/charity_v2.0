/*jshint -W101*/
(function () {
    'use strict';

    angular
        .module('app.needs')
        .controller('CreatedNeedController', CreatedNeedController);

    CreatedNeedController.$inject = ['$stateParams', 'NeedsFactory', '$sessionStorage', 'SharedFactory', '$state'];

    function CreatedNeedController($stateParams, NeedsFactory, $sessionStorage, SharedFactory, $state) {

        var vm = this;
        vm.title = 'CreatedNeedController';

        vm.currentNeed = {}; // here we will store all data for need, which is currently displayed
        vm.userCreated = {}; // here we will store all data for user, who have created this need
        vm.authorizedUser = {}; // here we will store all data for user, who is authorized
        vm.category = {};
        vm.respondData = {}; // here we will store data for response
        vm.userRespondedToNeed = false; // user hasn't responded to this need by default
        vm.responsesObj = {};
        vm.showResponsesToOwner = false;
        vm.waitingForHelp = false;

        // applying data from successful response from API to user api to vm.userCreated variable
        // it will be an object with some data about user
        function succeedGetOwner(data){
            vm.userCreated = data;
            if ($sessionStorage.token){
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
            vm.tempAddressMainCategory = data._links.parent.href.slice(data._links.parent.href.search('/api'), data._links.parent.href.length);
            if (data._links.parent.href){
                SharedFactory.getCategory(vm.tempAddressMainCategory, succeedGetMainCategory, function(){
                    console.log('main category is already filled');
                });
            }
        }

        function succeedGetCategory(data) {
            vm.category = data.name;
            vm.tempAddressParentCategory = data._links.parent.href.slice(data._links.parent.href.search('/api'), data._links.parent.href.length);
            SharedFactory.getCategory(vm.tempAddressParentCategory, succeedGetParentCategory, function(){
                console.log('something wrong');
            });
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

            vm.tempAddressUser = vm.currentNeed._links.userCreated.href.slice(vm.currentNeed._links.userCreated.href.search('/api'), vm.currentNeed._links.userCreated.href.length);
            vm.tempAddressCategory = vm.currentNeed._links.category.href.slice(vm.currentNeed._links.category.href.search('/api'), vm.currentNeed._links.category.href.length);
            // making here next call to api, to get user
            // this is needed to check if current user is owner of this need
            // if so - edit and close buttons will be available and user will see responses from other users
            // if not - respond button will be available
            // api/core/api.core.shared.service.js - factory for reusable components for needs and offers
            // please use it when you'll work with offer

            SharedFactory.getOwner(vm.tempAddressUser, succeedGetOwner, function(){
                console.log('something wrong');
            });
            SharedFactory.getCategory(vm.tempAddressCategory, succeedGetCategory, function(){
                console.log('something wrong');
            });
            if (vm.currentNeed.pickup) {
                vm.currentNeed.pickup = 'Так';
            } else {
                vm.currentNeed.pickup = 'Ні';
            }
        }
        // important, getting data from API about this need
        vm.currentNeed = function () {
            NeedsFactory.getConcreteNeed($stateParams.id).then(function(response) {
                console.log(response);
            }).catch(function() {
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
                console.log('user is owner of this need');
            } else {
                vm.authorizedUser.ifOwner = false;
                console.log('user is not owner of this need and can respond to it');
            }
        }

        //  getting info about responses from API
        function currentResponses(data){
            if (data._embedded.needs_responses){
                console.log(data);
               vm.responsesObj = data._embedded.needs_responses; // array with responses objects
                for (var i = 0, len = vm.responsesObj.length; i < len; i++){
                    if(vm.responsesObj[i].userId === vm.authorizedUser.id){ // if user has already responded to this need
                        vm.userRespondedToNeed = true; // then we disable 'respond' button
                        vm.linkToMyResponse = vm.responsesObj[i]._links.self.href; // getting link to response
                        break;
                    }
                }
                return vm.responsesObj;
            }
        }

        // getting info about user
        vm.userCheck = function(){
            if($sessionStorage.token){
                SharedFactory.getAuthorizedUserInfo($sessionStorage.token, succeedGetAuthorizedUserInfo, function(){
                    console.log('something wrong');
                });
                vm.idResp = 1; // temp hack, till we have correct previous page
                NeedsFactory.checkIfNeedRespondAlreadyExists(vm.idResp, currentResponses, function () {
                    console.log('error');
                });
            }
        };

        // action which is performed after respond
        function succeedWithRespond() {
            vm.userRespondedToNeed = true;
            vm.userCheck();
        }

        // sending response options to backend
        vm.respondToNeed = function(){
            vm.respondData.user = 'http://localhost:8088/api/users/' + vm.authorizedUser.id; // temporary hardcode
            vm.respondData.need = vm.currentNeed._links.self.href;
            NeedsFactory.respondToCurrentNeed(vm.respondData, succeedWithRespond, function () {
                console.log('respond is not send');
            });
        };

        // here are conditions when respond button will / will not be shown
        vm.allowResponse = function () {
            if (vm.userCreated.authorized && !vm.authorizedUser.ifOwner && !vm.userRespondedToNeed){
                return true;
            } else {
                return false;
            }
        };

        // after deleting the response we allow user to respond again
        function succeedWithDelete () {
            return vm.userRespondedToNeed = false;
        }

        vm.cancelResponce = function () {
            vm.linkToRemoveResponse = vm.linkToMyResponse.slice(vm.linkToMyResponse.search('/api'), vm.linkToMyResponse.length);
            NeedsFactory.cancelUserResponse(vm.linkToRemoveResponse, succeedWithDelete, function () {
                console.log('respond is not send');
            });
        };

        vm.getAllResponses = function() {
            vm.currentResponses = vm.responsesObj;
            for(var i = 0, len = vm.currentResponses.length;i<len;i++){
                if (vm.currentResponses[i].status === 'DELETED'){
                    vm.waitingForHelp = true;
                    vm.currentResponses = vm.currentResponses[i];
                }
            }
        };
        function succeedAccept(){
            console.log('ok');
            vm.waitingForHelp = true;
        }
        vm.accept = function (id) {
            vm.accept.status = 1;
            vm.accept.id = id;
            SharedFactory.patchResponse(vm.accept.id, vm.accept.status, succeedAccept, function(){
                console.log('something wrong');
            });
        };
        function succeedCompletedResponse(){
            console.log('Need can be deleted');
        }
        vm.deleteCompletedResponse = function (id) {
            vm.accept.status = 2;
            vm.accept.id = id;
            SharedFactory.patchResponse(vm.accept.id, vm.accept.status, succeedCompletedResponse, function(){
                console.log('something wrong');
            });
        };
        function activate() {
            vm.currentNeed();
            vm.userCheck();
        }

        activate();
    }
})();
