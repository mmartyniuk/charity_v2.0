/*jshint expr: true, -W117*/
describe('OffersController', function() {
    var controller, scope;
    beforeEach(function() {
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.offers');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope', '$state');
        scope = $rootScope.$new();
        stateparams = {title: 'title', category: 'category'};
        state = $state;
        state.params = {prefilled: null};
        state.params.prefilled = {title: 'title', category: 'category'};
        controller = $controller('OffersController', {
            $scope: scope
        });
    });

    describe('offers controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('OffersController');
        });

        describe('loadPage() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.loadPage).to.be.a('function');
            });

        });

        describe('setSearch() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setSearch).to.be.a('function');
            });

        });

        describe('setCategory() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCategory).to.be.a('function');
            });

        });

        describe('needs object', function() {

            it('should be an object', function () {
                var vm = controller;
                expect(vm.offers).to.be.an('object');
            });

            it('should not be empty', function () {
                var vm = controller;
                expect(vm.offers).not.to.be.empty;
            });

            it('should have \'category\' and \'location\' properties', function () {
                var vm = controller;
                expect(vm.offers).to.have.all.keys('category', 'location');
            });

        });

    });
});
