/*jshint expr: true, -W117*/
describe('LocationSearchController', function() {
    var controller, scope;
    beforeEach(function() {
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope', 'LocationFactory');
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

        it('should have some methods from factory available', function () {
            expect(LocationFactory.getRegions).to.be.ok;
            expect(LocationFactory.getCities).to.be.ok;
        });

        describe('regions array', function() {

            it('regions array should be defined', function () {
                var vm = controller;
                expect(vm.regions).to.be.defined;
            });

            it('should be an empty array', function () {
                var vm = controller;
                expect(vm.regions).to.be.an('array');
                expect(vm.regions).to.be.empty;
            });

        });

        describe('cities array', function() {

            it('cities array should be defined', function () {
                var vm = controller;
                expect(vm.cities).to.be.defined;
            });

            it('should be an empty array', function () {
                var vm = controller;
                expect(vm.cities).to.be.an('array');
                expect(vm.cities).to.be.empty;
            });

        });

        describe('enableShowCities() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.enableShowCities).to.be.a('function');
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

            it('should set location with passed value', function () {
                var vm = controller;
                vm.setLocation('test');
                expect(vm.location).to.equal('test');
            });

        });

        describe('enableShowRegions() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.enableShowRegions).to.be.a('function');
            });

            it('should set showRegions to true', function () {
                var vm = controller;
                vm.showRegions = false;
                vm.enableShowRegions();
                expect(vm.showRegions).to.be.true;
            });

        });
    });
});
