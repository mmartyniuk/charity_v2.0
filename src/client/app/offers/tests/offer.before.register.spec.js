//NewOfferStep1Controller
describe('NewOfferStep1Controller', function() {

    var controller, scope;

    beforeEach(function() {
        controller = undefined;
        scope = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.offers');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope');
        scope = $rootScope.$new();
        controller = $controller('NewOfferStep1Controller', {
            $scope: scope
        });
        $rootScope.$apply();
    });

    //constants, initial testing
    describe('new offer first step controller', function() {

        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('NewOfferStep1Controller');
        });

        it('should have animations enabled by default', function () {
            var vm = controller;
            expect(vm.animationsEnabled).to.be.ok;
        });

        it('should have empty object for needs to post them to another page', function () {
            var vm = controller;
            expect(vm.offer).to.be.an('object');
            expect(vm.offer).to.be.empty;
        });

        it('category should be array, should not be empty and it values must be name, id and parent id', function () {
            var vm = controller;
            expect(vm.categories).to.be.an('array');
            expect(vm.categories).to.have.length.above(0);
            vm.categories.forEach(function(item) {
                expect(item).to.have.all.keys('name', 'id', 'parent_id');
            });
        });

        //open() functionality should be just initially checked, 3rd party function, angular bootstrap
        describe('open() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.open).to.be.a('function');
            });

        });

        //toggleAnimation functionality should be just initially checked, 3rd party function, angular bootstrap
        describe('toggleAnimation function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.toggleAnimation).to.be.a('function');
            });

        });

        //setCurrentCategory functionality
        describe('setCurrentCategory function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCurrentCategory).to.be.a('function');
            });

            it('currentCategory should be undefined initially, until user clicks on category field', function () {
                var vm = controller;
                expect(vm.currentCategory).to.be.an('undefined');
             });

            it('checkChild should be false initially, until we pass an sub category id to setCurrentCategory', function () {
                var vm = controller;
                expect(vm.checkChild).not.to.be.ok;
            });

        });

        //setCurrentSubCategory functionality
        describe('setCurrentSubCategory function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCurrentSubCategory).to.be.a('function');
            });
            it('currentSubCategory should be undefined initially, until user clicks on category field', function () {
                var vm = controller;
                expect(vm.currentSubCategory).to.be.an('undefined');
            });
        });

        //setCurrentSubSubCategory functionality
        describe('setCurrentSubSubCategory function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCurrentSubSubCategory).to.be.a('function');
            });

        });

        //submitOffer functionality
        describe('submitOffer function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.submitOffer).to.be.a('function');
            });

        });
    });
});
