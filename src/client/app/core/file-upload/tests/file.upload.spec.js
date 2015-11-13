/*jshint expr: true, -W117*/
describe('FileUploadController', function() {
    var controller, scope;
    beforeEach(function() {
        controller = undefined;
    });

    beforeEach(function() {
        module('app.core');
    });

    beforeEach(function () {
        bard.inject('$controller', '$rootScope');
        scope = $rootScope.$new();
        controller = $controller('FileUploadController', {
            $scope: scope
        });
    });

    describe('file upload controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('images array', function() {

            it('should be defined', function () {
                var vm = controller;
                expect(vm.images).to.be.defined;
            });

            it('should be empty', function () {
                var vm = controller;
                expect(vm.images).to.be.an('array');
                expect(vm.images).to.be.empty;
            });
        });

        describe('addImage() function', function() {
            it('should add image to images array', function() {
                // test for adding image functionality
            });
        });

        describe('removeImage() function', function() {
            it('should remove image from images array', function() {
                var vm = controller;
                vm.images = ['image1', 'image2', 'image3'];
                vm.removeImage(1);
                expect(vm.images).to.deep.equal(['image1', 'image3']);
            });
        });
    });
});
