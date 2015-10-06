/*
/!*jshint expr: true, -W117*!/
describe('LocationSearchController', function() {
    var controller, scope;
    beforeEach(function() {
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope');
        scope = $rootScope.$new();
        controller = $controller('LocationSearchController', {
            $scope: scope
        });
    });

    describe('location search controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('LocationSearchController');
        });

        describe('regions array', function() {

            it('regions array should be defined', function () {
                var vm = controller;
                expect(vm.regions).to.be.defined;
            });

            it('should be an array', function () {
                var vm = controller;
                expect(vm.regions).to.be.an('array');
            });

        });

        describe('cities array', function() {

            it('cities array should be defined', function () {
                var vm = controller;
                expect(vm.cities).to.be.defined;
            });

            it('should be an array', function () {
                var vm = controller;
                expect(vm.cities).to.be.an('array');
            });

        });

        describe('enableShowCities() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.enableShowCities).to.be.a('function');
            });

            it('region id should be undefined by default', function () {
                var vm = controller;
                expect(vm.setRegionId).to.be.undefined;
            });

        });

        describe('setLocation() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setLocation).to.be.a('function');
            });

            it('location should be undefined by default', function () {
                var vm = controller;
                expect(vm.location).to.be.undefined;
            });

        });

        describe('enableShowRegions() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.enableShowRegions).to.be.a('function');
            });

            it('showRegions should be true by default', function () {
                var vm = controller;
                expect(vm.showRegions).to.be.true;
            });

        });

        describe('locationPopover object', function() {

            it('should be an object', function () {
                var vm = controller;
                expect(vm.locationPopover).to.be.an('object');
            });

        });

    });
});
*/
