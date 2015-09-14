describe('statusCtrl', function() {
    var controller;

    beforeEach(function() {
        controller = undefined;
        scope = undefined;
    });

    beforeEach(function() {
        module('app.core');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope');
        scope = $rootScope.$new();
        controller = $controller('statusCtrl', {
            $scope: scope
        });
        $rootScope.$apply();
    });

    describe('statusCtrl', function() {
        before(function() {
            console.log("testing of statusCtrl controller");
        });
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });
        it('should be a function', function () {
            var vm = controller;
            expect(vm.showStatus).to.be.a('function');
        });
        it('status should say undefined initially, until user clicks on edit button', function () {
            var vm = controller;
            expect(vm.status).to.be.an('undefined');
        });
    });
});
