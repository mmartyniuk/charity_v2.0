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
        bard.inject(this, '$controller', '$rootScope', '$state',
            'CreateNeedFactory', '$sessionStorage');
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

        it('should have animations enabled by default', function () {
            var vm = controller;
            expect(vm.animationsEnabled).to.be.ok;
        });

        it('should have empty object for needs to post them to another page', function () {
            var vm = controller;
            expect(vm.need).to.be.an('object');
            expect(vm.need).to.be.empty;
        });

        it('category should be array, should not be empty and ' +
        'it values must be name, id and parent id', function () {
            var vm = controller;
            expect(vm.categories).to.be.an('array');
            expect(vm.categories).to.have.length.above(0);
            vm.categories.forEach(function(item) {
                expect(item).to.have.all.keys('name', 'id', 'parentId');
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

            it('currentCategory should be undefined initially, until ' +
            'user clicks on category field', function () {
                var vm = controller;
                expect(vm.currentCategory).to.be.an('undefined');
            });

            it('checkChild should be false initially, until we pass ' +
            'an sub category id to setCurrentCategory', function () {
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
            it('currentSubCategory should be undefined initially, ' +
            'until user clicks on category field', function () {
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
        bard.inject(this, '$controller', '$rootScope', '$state',
            'CreateNeedFactory', 'CreateNeedAddressFactory', '$sessionStorage');
        scope = $rootScope.$new();
        stateparams = {title: 'title', category: 'category'};
        state = $state;
        session = $sessionStorage;
        session.token = '123';
        state.params = {prefilled: null};
        state.params.prefilled = {title: 'title', category: 'category'};
        controller = $controller('NewNeedRegisterController', {
            $scope: scope
        });
        $rootScope.$apply();
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
            expect(vm.need).to.have.all.keys('title', 'category');
        });

        it('getChecked should be false by default', function () {
            var vm = controller;
            expect(vm.getChecked).not.to.be.ok;
        });

        it('regions should return object with defined properties', function () {
            var vm = controller;
            vm.regions.forEach(function(item) {
                expect(item).to.have.all.keys('name', 'id');
            });
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

        //setCity functionality
        describe('setCity function', function() {
            it('should be a function', function () {
                var vm = controller;
                expect(vm.setCity).to.be.a('function');
            });

            it('setCity should have region and current region params undefined ' +
            'by default, cities should return object with defined params', function () {
                var vm = controller;
                expect(vm.need.region).to.equal(undefined);
                expect(vm.currentRegion).to.equal(undefined);

                //defining fake data
                vm.cities = CreateNeedFactory.getCities(1);
                //end

                vm.cities.forEach(function(item) {
                    expect(item).to.have.all.keys('name', 'id', 'parentId');
                });
            });

        });
    });
});
