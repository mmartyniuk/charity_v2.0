/*jshint expr: true*/
describe('EditNeedsContoller', function() {
    var controller;
    beforeEach(function() {
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.needs');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope');
        controller = $controller('EditNeedsContoller', {
        });
    });

    describe('EditNeedsContoller', function() {

        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.user.offer).to.equal('Хвора дитина');
        });
        it('should be a function', function () {
            var vm = controller;
            expect(vm.saveUser).to.be.a('function');
        });
        it('should have object with information from other page we edit', function () {
            var vm = controller;
            expect(vm.user).to.be.an('object');
            expect(vm.need).to.be.empty;
        });
    });
});
