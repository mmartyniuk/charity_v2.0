/*jshint expr: true, multistr: true */
//NewOfferBeforeRegisterController
describe('NewOfferBeforeRegisterController', function() {

    var controller, scope, state, session;

    beforeEach(function() {
        controller = undefined;
        scope = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.offers');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope', '$state', '$sessionStorage');
        scope = $rootScope.$new();
        state = $state;
        session = $sessionStorage;
        session.token = '123';
        controller = $controller('NewOfferBeforeRegisterController', {
            $scope: scope
        });
        $rootScope.$apply();
    });

    //constants, initial testing
    describe('new offer before register controller', function() {

        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('NewOfferBeforeRegisterController');
        });

        it('should have empty object for needs to post them to another page', function () {
            var vm = controller;
            expect(vm.offer).to.be.an('object');
            expect(vm.offer).to.be.empty;
        });

        it('category should be array, should not be empty ' +
        'and it values must be name, id and parent id', function () {
            var vm = controller;
            expect(vm.categories).to.be.an('array');
            expect(vm.categories).to.have.length.above(0);
            vm.categories.forEach(function(item) {
                expect(item).to.have.all.keys('name', 'id', 'parentId');
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
