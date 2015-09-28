﻿/*jshint expr: true*/
describe('OffersController', function() {
    var controller, scope;
    beforeEach(function() {
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core', 'app.offers');
    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope');
        scope = $rootScope.$new();
        controller = $controller('OffersController', {
            $scope: scope
        });

    });

    describe('Offers Controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('OffersController');
        });

        describe('loadPage() function', function() {

            it('should be a function', function () {
                var vm = controller;
                expect(vm.loadPage).to.be.a('function');
            });

        });

    });
});
