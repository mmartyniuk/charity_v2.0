/*jshint expr: true, -W117*/
describe('CategorySearchController', function() {
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
        controller = $controller('CategorySearchController', {
            $scope: scope
        });
    });

    describe('category search controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('CategorySearchController');
        });

        describe('setCurrentCategory() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCurrentCategory).to.be.a('function');
            });

        });

        describe('setCurrentSubCategory() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCurrentSubCategory).to.be.a('function');
            });

        });

        describe('setCurrentSubSubCategory() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCurrentSubSubCategory).to.be.a('function');
            });

        });

        describe('setCategory() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCategory).to.be.a('function');
            });

        });

        describe('categoryPopover object', function() {

            it('should be an object', function () {
                var vm = controller;
                expect(vm.categoryPopover).to.be.an('object');
            });

        });

    });
});
