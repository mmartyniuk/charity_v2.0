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

        describe('setContentType() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setContentType).to.be.a('function');
            });

            it('by default content type should be \'Needs\'', function () {
                var vm = controller;
                expect(vm.contentType).to.be.equal('Потреби');
            });

        });

        describe('submitCategorySearch() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.submitCategorySearch).to.be.a('function');
            });

            it('category should be undefined by default', function () {
                var vm = controller;
                expect(vm.category).to.be.undefined;
            });

            it('location should be undefined by default', function () {
                var vm = controller;
                expect(vm.location).to.be.undefined;
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

        });

    });
});
