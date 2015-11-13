/*jshint expr: true*/
describe('EditOffersController', function() {
    var controller;
    beforeEach(function() {
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.offers');
    });

    beforeEach(function() {
        bard.inject(this, '$controller', '$rootScope');
        controller = $controller('EditOffersController', {});
    });

    describe('EditOffersController', function() {

        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should be a function', function () {
            var vm = controller;
            expect(vm.saveEditedOffer).to.be.a('function');
        });

        it('should have object with information from other page we edit', function () {
            var vm = controller;
            expect(vm.editedOffer).to.be.an('object');
            expect(vm.date).to.be.empty;
        });
    });

    describe('setRegion() function', function() {

        it('should be a function', function () {
            var vm = controller;
            expect(vm.setRegion).to.be.a('function');
        });
    });
});
