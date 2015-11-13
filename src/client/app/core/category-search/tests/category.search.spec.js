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
        bard.inject(this, '$controller', '$rootScope', 'CategoryFactory', 'SharedFactory');
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

        it('should have some methods from factory available', function () {
            expect(CategoryFactory.getCategories).to.be.ok;
            expect(CategoryFactory.getSubCategories).to.be.ok;
            expect(CategoryFactory.getSubSubCategories).to.be.ok;
            expect(SharedFactory.sliceLink).to.be.ok;
        });

        describe('categories array', function() {

            it('should be defined', function () {
                var vm = controller;
                expect(vm.categories).to.be.defined;
            });

            it('should be empty', function () {
                var vm = controller;
                expect(vm.categories).to.be.an('array');
                expect(vm.categories).to.be.empty;
            });
        });

        describe('showSubCategories() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.showSubCategories).to.be.a('function');
            });
        });

        describe('showSubSubCategories() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.showSubSubCategories).to.be.a('function');
            });

            it('current subcategory should be undefined by default', function () {
                var vm = controller;
                expect(vm.currentSubCategory).to.be.undefined;
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

            it('category should be set with passed value', function () {
                var vm = controller;
                vm.setCategory('test');
                expect(vm.category).to.equal('test');
            });

        });
    });
});
