/*jshint expr: true, multistr: true*/
/*globals $state, CreateOfferFactory */
//NewOfferRegisterController
describe('NewOfferRegisterController', function() {
    //constants for defining controller
    var controller, state, stateparams, session;

    beforeEach(function() {
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.offers', 'app.auth');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$state',
            'CreateOfferFactory', '$sessionStorage', 'SharedFactory');
        stateparams = {title: 'title', category: 'category'};
        state = $state;
        session = $sessionStorage;
        session.token = '123';
        state.params = {prefilled: null};
        state.params.prefilled = {title: 'title', category: 'category'};
        controller = $controller('NewOfferRegisterController', {
        });
    });

    //constants, initial testing
    describe('new offer register controller functionality', function() {

        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have defined title', function () {
            var vm = controller;
            expect(vm.title).to.be.equal('NewOfferRegisterController');
        });

        it('should have defined offer object, which must ' +
        'be prefilled with data from previous page', function () {
            var vm = controller;
            expect(vm.offer).to.be.an('object');
            expect(vm.offer).not.to.be.empty;
            expect(vm.offer).to.have.all.keys('title', 'category');
        });

        it('getChecked should be false by default', function () {
            var vm = controller;
            expect(vm.getChecked).not.to.be.ok;
        });

        //submitOffer functionality
        describe('submitOffer function', function() {
            it('should be a function', function () {
                var vm = controller;
                expect(vm.submitOffer).to.be.a('function');
            });

            it('date should be in string format', function () {
                var vm = controller;
                //passing some fake data to test output
                var d = new Date();
                vm.offer.actualDate = d.getDate() + '/' +
                parseInt(d.getMonth() + 1) + '/' + d.getFullYear();
                //end of fake data
                expect(vm.offer.actualDate).to.be.a('string');
            });

            //these two params should be equal to undefined by default
            it('should be a function', function () {
                var vm = controller;
                expect(vm.offer.get).to.equal(undefined);
                expect(vm.offer.images).to.equal(undefined);

                //here should be REST api test, TBD in future
            });
        });
    });
});
