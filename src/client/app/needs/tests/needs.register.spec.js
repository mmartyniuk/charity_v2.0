describe('NewNeedBeforeRegisterController', function() {
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
        controller = $controller('NewNeedBeforeRegisterController', {
            $scope: scope
        });

    });

    describe('NewNeedBefore RegisterController', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('NewNeedBeforeRegisterController');
        });

        it('should have animations enabled by default', function () {
            var vm = controller;
            expect(vm.animationsEnabled).to.be.ok;
        });
        it('should have empty object for needs to post them to another page', function () {
            var vm = controller;
            expect(vm.need).to.be.an('object');
            expect(vm.need).to.be.empty;
        });

    });
});
