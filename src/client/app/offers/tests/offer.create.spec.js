/**
 * Created by mmartin on 10/18/2015.
 */
/*jshint expr: true, multistr: true*/
/*globals $state, SharedFactory, OffersFactory, $stateParams */
//CreatedOfferController
describe('CreatedOfferController', function() {

    var controller, scope, state, session, stateParams;

    beforeEach(function() {
        controller = undefined;
        scope = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.offers', 'app.auth');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope', '$state',
            'OffersFactory', 'SharedFactory', '$sessionStorage', '$stateParams');
        scope = $rootScope.$new();
        state = $state;
        stateParams = $stateParams;
        stateParams.id = $stateParams.id;
        session = $sessionStorage;
        session.token = '123';
        controller = $controller('CreatedOfferController', {
            $scope: scope
        });
    });

    //constants, initial testing
    describe('create offer controller functionality', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });
        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('CreatedOfferController');
        });
        it('should not show respond logic by default', function () {
            var vm = controller;
            expect(vm.userRespondedToNeed).not.to.be.ok;
            expect(vm.showResponsesToOwner).not.to.be.ok;
            expect(vm.waitingForHelp).not.to.be.ok;
        });
        it('should have some empty objects for filling in future', function () {
            var vm = controller;
            expect(vm.userCreated).to.be.an('object');
            expect(vm.userCreated).to.be.empty;
            expect(vm.authorizedUser).to.be.an('object');
            expect(vm.authorizedUser).to.be.empty;
            expect(vm.category).to.be.an('object');
            expect(vm.category).to.be.empty;
            expect(vm.respondData).to.be.an('object');
            expect(vm.respondData).to.be.empty;
            expect(vm.responsesObj).to.be.an('object');
            expect(vm.responsesObj).to.be.empty;
            expect(vm.userInfo).to.be.an('object');
            expect(vm.userInfo).to.be.empty;
        });
        it('page should have id when it is loading', function () {
            var vm = controller;
            expect(vm.idResp).to.equal(stateParams.id);
        });
        it('token is hardcoded for testing', function () {
            var vm = controller;
            if (session.token) {
                vm.userCreated.authorized = true;
            }
            expect(vm.userCreated.authorized).to.be.ok;
        });
        it('should have some methods from factory available', function () {
            expect(SharedFactory.getCategory).to.be.ok;
            expect(SharedFactory.sliceLink).to.be.ok;
            expect(SharedFactory.getOwner).to.be.ok;
            expect(SharedFactory.getAuthorizedUserInfo).to.be.ok;
            expect(OffersFactory.getConcreteOffer).to.be.ok;
            expect(OffersFactory.getReponsesForThisOffer).to.be.ok;
            expect(OffersFactory.respondToCurrentOffer).to.be.ok;
            expect(OffersFactory.cancelUserResponse).to.be.ok;
            expect(OffersFactory.getUserToContactWith).to.be.ok;
            expect(OffersFactory.patchResponse).to.be.ok;
        });
        it('should allow response if user is logged in, ' +
            'is not an owner of current offer and offer is not closed', function () {
            var vm = controller;
            vm.userCreated.authorized = true;
            vm.authorizedUser.ifOwner = false;
            vm.userRespondedToOffer = false;
            expect(vm.allowResponse()).to.be.ok;
        });
        it('respond should init some data for patching itself in database', function () {
            var vm = controller;
            vm.testId = 1;
            vm.accept(vm.testId);
            expect(vm.accept.status).to.equal(1);
            expect(vm.accept.id).to.equal(vm.testId);
        });
        it('respond should init some data to be deleted in database', function () {
            var vm = controller;
            vm.testId = 1;
            vm.deleteCompletedResponse(vm.testId);
            expect(vm.accept.status).to.equal(2);
            expect(vm.accept.id).to.equal(vm.testId);
        });
        it('user can cancel the response, some data for ' +
            'patching in database should be created', function () {
            var vm = controller;
            vm.testId = 1;
            vm.cancelGettingResponse(vm.testId);
            expect(vm.accept.status).to.equal(0);
            expect(vm.accept.id).to.equal(vm.testId);
        });
    });
});
