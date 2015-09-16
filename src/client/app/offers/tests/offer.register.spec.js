/*jshint expr: true, multistr: true*/
/*globals $state, CreateOfferFactory */
//NewOfferRegisterController
describe('NewOfferRegisterController', function() {
    //constants for defining controller
    var controller, scope, state, stateparams;

    beforeEach(function() {
        controller = undefined;
        scope = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.offers');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope', '$state', 'CreateOfferFactory');
        scope = $rootScope.$new();
        stateparams = {title: 'title', category: 'category'};
        state = $state;
        state.params = {prefilled: null};
        state.params.prefilled = {title: 'title', category: 'category'};
        controller = $controller('NewOfferRegisterController', {
            $scope: scope
        });
        $rootScope.$apply();
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

        it('regions should return object with defined properties', function () {
            var vm = controller;
            vm.regions.forEach(function(item) {
                expect(item).to.have.all.keys('name', 'id');
            });
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

        //setCity functionality
        describe('setCity function', function() {
            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCity).to.be.a('function');
            });

            it('setCity should have region and current region ' +
            'params undefined by default, cities should return ' +
            'object with defined params', function () {
                var vm = controller;
                expect(vm.offer.region).to.equal(undefined);
                expect(vm.currentRegion).to.equal(undefined);

                //defining fake data
                vm.cities = CreateOfferFactory.getCities(1);
                //end

                vm.cities.forEach(function(item) {
                    expect(item).to.have.all.keys('name', 'id', 'parentId');
                });
            });

        });
    });
});
