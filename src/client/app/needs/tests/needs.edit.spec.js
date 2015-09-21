/*jshint expr: true*/
describe('EditNeedsController', function() {
    var controller;
    beforeEach(function() {
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.needs');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope');
        controller = $controller('EditNeedsController', {
        });
    });

    describe('EditNeedsController', function() {

        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('EditNeedsController');
        });
        it('should be a function', function () {
            var vm = controller;
            expect(vm.saveEditedNeed).to.be.a('function');
        });
        it('should have object with information from other page we edit', function () {
            var vm = controller;
            expect(vm.editedNeed).to.be.an('object');
            expect(vm.date).to.be.empty;
        });
    });
});
