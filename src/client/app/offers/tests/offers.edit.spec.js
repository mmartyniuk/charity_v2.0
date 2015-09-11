describe('EditOffersContoller', function() {
    var controller;
    beforeEach(function() {
        console.log("Hello im gonna test this");
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.offers');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope');
        controller = $controller('EditOffersContoller', {
        });
    });

    describe('EditOffersContoller', function() {
        before(function() {
            console.log("here im gonna test EditOffersContoller controller");
        });
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.user.offer).to.equal("test title");
        });
/*        it('should use exeditable lib default', function () {
            var vm = controller;
            expect(xeditable).to.be.ok;
        });*/
        /*  it('should have empty object for needs to post them to another page', function () {
            var vm = controller;
            expect(vm.need).to.be.an('object');
            expect(vm.need).to.be.empty;
        });*/

    });
});
