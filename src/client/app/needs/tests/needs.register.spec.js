/*jshint expr: true, multistr: true*/
/*globals $state, CreateNeedFactory */
//NewNeedBeforeRegisterController
describe('NewNeedBeforeRegisterController', function() {

    var controller, scope, state, session;

    beforeEach(function() {
        controller = undefined;
        scope = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.needs', 'app.auth');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope', '$state', '$sessionStorage');
        scope = $rootScope.$new();
        state = $state;
        session = $sessionStorage;
        session.token = '123';
        controller = $controller('NewNeedBeforeRegisterController', {
            $scope: scope
        });
        $rootScope.$apply();
    });

    //constants, initial testing
    describe('new need before register controller functionality', function() {

        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('NewNeedBeforeRegisterController');
        });

        it('should have empty object for needs to post them to another page', function () {
            var vm = controller;
            expect(vm.need).to.be.an('object');
            expect(vm.need).to.be.empty;
        });

        //submitNeed functionality
        describe('submitNeed function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.submitNeed).to.be.a('function');
            });

        });
    });
});

//NewNeedRegisterController
describe('NewNeedRegisterController', function() {
    //constants for defining controller
    var controller, scope, state, stateparams, session;

    beforeEach(function() {
        controller = undefined;
        scope = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.needs', 'app.auth');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$state', 'CreateNeedFactory', '$sessionStorage');
        stateparams = {title: 'title', category: 'category'};
        state = $state;
        session = $sessionStorage;
        session.token = '123';
        state.params = {prefilled: null};
        state.params.prefilled = {title: 'title', category: 'category'};
        controller = $controller('NewNeedRegisterController', {
            $scope: scope
        });
    });

    //constants, initial testing
    describe('new need register controller functionality', function() {

        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have defined title', function () {
            var vm = controller;
            expect(vm.title).to.be.equal('NewNeedRegisterController');
        });

        it('should have defined need object, which must be' +
        'prefilled with data from previous page', function () {
            var vm = controller;
            expect(vm.need).to.be.an('object');
            expect(vm.need).not.to.be.empty;
            expect(vm.need).to.have.all.keys('title', 'categories');
        });

        it('getChecked should be false by default', function () {
            var vm = controller;
            expect(vm.getChecked).not.to.be.ok;
        });

        //submitNeed functionality
        describe('submitNeed function', function() {
            it('should be a function', function () {
                var vm = controller;
                expect(vm.submitNeed).to.be.a('function');
            });

            it('date should be in string format', function () {
                var vm = controller;
                //passing some fake data to test output
                var d = new Date();
                vm.need.actualDate = d.getDate() + '/' +
                parseInt(d.getMonth() + 1) + '/' + d.getFullYear();
                //end of fake data
                expect(vm.need.actualDate).to.be.a('string');
            });

            //these two params should be equal to undefined by default
            it('should be a function', function () {
                var vm = controller;
                expect(vm.need.get).to.equal(undefined);
                expect(vm.need.images).to.equal(undefined);

                //here should be REST api test, TBD in future
            });
        });
    });
});
