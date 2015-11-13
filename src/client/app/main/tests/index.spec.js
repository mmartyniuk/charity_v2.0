/*jshint expr: true, -W117*/
describe('IndexController', function() {
    var controller, scope;
    beforeEach(function() {
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.main', 'app.needs', 'app.offers');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope', 'NeedsFactory', 'OffersFactory');
        scope = $rootScope.$new();
        controller = $controller('IndexController', {
            $scope: scope
        });
    });

    describe('index controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('IndexController');
        });

        it('by default content type should be \'Needs\'', function () {
            var vm = controller;
            expect(vm.contentType).to.be.equal('Потреби');
        });

        it('offers should be an empty object', function () {
            var vm = controller;
            expect(vm.offers).to.be.an('object');
            expect(vm.offers).to.be.empty;
        });

        it('needs should be an empty object', function () {
            var vm = controller;
            expect(vm.needs).to.be.an('object');
            expect(vm.needs).to.be.empty;
        });

        it('search value should be undefined by default', function () {
            var vm = controller;
            expect(vm.searchValue).to.be.undefined;
        });

        it('category should be undefined by default', function () {
            var vm = controller;
            expect(vm.category).to.be.undefined;
        });

        it('location should be undefined by default', function () {
            var vm = controller;
            expect(vm.location).to.be.undefined;
        });

        describe('setContentType() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setContentType).to.be.a('function');
            });

            it('should set content type with passed value', function () {
                var vm = controller;
                vm.setContentType('test');
                expect(vm.contentType).to.be.equal('test');
            });

        });

        describe('submitCategorySearch() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.submitCategorySearch).to.be.a('function');
            });

            it('should set search parameters', function () {
                var vm = controller;
                vm.submitCategorySearch('searchValue', 'category', 'location');
                expect(vm.searchValue).to.be.equal('searchValue');
                expect(vm.category).to.be.equal('category');
                expect(vm.location).to.be.equal('location');
            });

            it('should add search parameters to needs object', function () {
                var vm = controller;
                vm.submitCategorySearch('searchValue', 'category', 'location');
                expect(vm.needs).not.to.be.empty;
                expect(vm.needs).to.have.all.keys('searchValue', 'category', 'location');
            });

            it('should add search parameters to offers object', function () {
                var vm = controller;
                vm.contentType = 'Пропозиції';
                vm.submitCategorySearch('searchValue', 'category', 'location');
                expect(vm.offers).not.to.be.empty;
                expect(vm.offers).to.have.all.keys('searchValue', 'category', 'location');
            });

        });

        describe('filterCategoryNeeds() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.filterCategoryNeeds).to.be.a('function');
            });

            it('property \'category\' of needs object should ' +
            'be undefined by default', function () {
                var vm = controller;
                expect(vm.needs.category).to.be.undefined;
            });

            it('should set category with passed value', function () {
                var vm = controller;
                vm.filterCategoryNeeds('test');
                expect(vm.category).to.equal('test');
            });

        });

        describe('filterCategoryOffers() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.filterCategoryOffers).to.be.a('function');
            });

            it('property \'category\' of offers object should ' +
            'be undefined by default', function () {
                var vm = controller;
                expect(vm.offers.category).to.be.undefined;
            });

            it('should set category with passed value', function () {
                var vm = controller;
                vm.filterCategoryOffers('test');
                expect(vm.category).to.equal('test');
            });

        });

    });
});
