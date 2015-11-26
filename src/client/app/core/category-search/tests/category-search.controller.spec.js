/*jshint expr: true, -W117*/
describe('CategorySearchController', function () {
    var controller,
        scope,
        CategoryFactory,
        params;

    beforeEach(function () {
        module('app.core');

        params = {
            categories: [
                {
                    id: 1,
                    name: 'foo',
                    children: [{}, {}]
                },
                {
                    id: 1,
                    name: 'boo',
                    children: []
                }
            ]
        };

        CategoryFactory = {
            getCategories: function () {
                return {
                    then: function (callback) {
                        return callback(params);
                    }
                };
            }
        };

    });

    beforeEach(function () {
        bard.inject(this, '$controller', '$rootScope', 'CategoryFactory', 'SharedFactory');
        scope = $rootScope.$new();
        controller = $controller('CategorySearchController', {
            $scope: scope,
            CategoryFactory: CategoryFactory
        });
    });

    describe('category search controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have name', function () {
            var vm = controller;
            expect(vm.title).to.equal('CategorySearchController');
        });
    });

    describe('should call functions', function () {
        it('selected category should have a subcategory', function () {
            var vm = controller;
            var param = {
                name: 'boofoo',
                children: [{}, {}]
            };
            vm.showSubcategory(param);
            expect(vm.selectedCategory).to.eql([{}, {}]);
        });

        it('selected category should NOT have a subcategory', function () {
            var vm = controller;
            var param = {
                name: 'boo foo',
                children: []
            };
            vm.showSubcategory(param);
            expect(vm.selectedCategory).to.be.null;
        });

    });
})
;
