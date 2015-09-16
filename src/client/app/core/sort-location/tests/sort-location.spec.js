/*jshint expr: true*/
describe('SortLocationController', function() {
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
        controller = $controller('SortLocationController', {
            $scope: scope
        });

    });

    describe('SortLocation Controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('SortLocationController');
        });

        it('filter should be empty when the page loads', function () {
            var vm = controller;
            expect(vm.setlocation).to.equal('');
        });

        it('should check if the filter was reset', function () {
            var vm = controller;
            expect(vm.resetFilter).not.to.change(vm, 'setlocation');
        });

        it('should check if the filter was set', function () {
            var vm = controller;
            expect(vm.setFilter).to.change(vm, 'setlocation');
        });

    });
});
