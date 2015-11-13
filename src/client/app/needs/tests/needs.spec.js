/*jshint expr: true, -W117*/
describe('NeedsController', function() {
    var controller, scope;
    beforeEach(function() {
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.needs');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope', '$state');
        scope = $rootScope.$new();
        stateparams = {title: 'title', category: 'category'};
        state = $state;
        state.params = {prefilled: null};
        state.params.prefilled = {title: 'title', category: 'category'};
        controller = $controller('NeedsController', {
            $scope: scope
        });
    });

    describe('needs controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('NeedsController');
        });

        it('should contain an empty needs object', function () {
            var vm = controller;
            expect(vm.needs).to.be.an('object');
            expect(vm.needs).to.be.empty;
        });

        describe('getSearchData() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.getSearchData).to.be.a('function');
            });

        });

        describe('setSearch() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setSearch).to.be.a('function');
            });

            it('should reset current page, so search results will appear', function () {
                var vm = controller;
                expect(vm.currentPage).to.equal(0);
            });

        });

        describe('setCategory() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCategory).to.be.a('function');
            });

            it('should set category with passed value and reset location and ' +
                'search value', function () {
                var vm = controller;
                vm.setCategory('test');
                expect(vm.category).to.equal('test');
                expect(vm.location).to.equal('');
                expect(vm.searchValue).to.equal('');
            });
        });
    });
});
