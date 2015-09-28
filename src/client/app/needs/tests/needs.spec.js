/*jshint expr: true*/
describe('NeedsController', function() {
    var controller, scope;
    beforeEach(function() {
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.needs');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope');
        scope = $rootScope.$new();
        controller = $controller('NeedsController', {
            $scope: scope
        });

    });

    describe('Needs Controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('NeedsController');
        });

        describe('loadPage() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.loadPage).to.be.a('function');
            });

        });

    });
});
