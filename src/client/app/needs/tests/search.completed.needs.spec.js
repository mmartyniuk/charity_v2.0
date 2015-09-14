﻿describe('SearchCompletedNeedsController', function() {
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
        controller = $controller('SearchCompletedNeedsController', {
            $scope: scope
        });

    });

    describe('SearchCompletedNeeds Controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('SearchCompletedNeedsController');
        });

        it('should have an array with completed needs received from factory', function () {
            var vm = controller;
            expect(vm.data).to.be.an('array');
            expect(vm.data).to.not.be.empty;
        });

    });
});
