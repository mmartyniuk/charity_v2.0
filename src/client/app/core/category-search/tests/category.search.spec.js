/*
/!*jshint expr: true, -W117*!/
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

        describe('categories array', function() {

            it('categories array should be defined', function () {
                var vm = controller;
                expect(vm.categories).to.be.defined;
            });

            it('should be an array', function () {
                var vm = controller;
                expect(vm.categories).to.be.an('array');
            });

        });

        describe('setCurrentCategory() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCurrentCategory).to.be.a('function');
            });

            it('current category should be undefined by default', function () {
                var vm = controller;
                expect(vm.currentCategory).to.be.undefined;
            });

        });

        describe('setCurrentSubCategory() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCurrentSubCategory).to.be.a('function');
            });

            it('current subcategory should be undefined by default', function () {
                var vm = controller;
                expect(vm.currentSubCategory).to.be.undefined;
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

            it('category should be undefined by default', function () {
                var vm = controller;
                expect(vm.category).to.be.undefined;
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
*/
