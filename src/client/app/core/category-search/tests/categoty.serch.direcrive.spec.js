describe('categorySearch directive Test: ', function () {
    var scope,
        compile,
        element,
        $rootScope,
        $httpBackend;

    beforeEach(module('app.core'));

    beforeEach(inject(function ($injector) {
        compile = $injector.get('$compile');
        $httpBackend = $injector.get('$httpBackend');
        var $rootScope = $injector.get('$rootScope');
        scope = $rootScope.$new();

        $httpBackend.when('GET', '/app/core/category-search/view/category-search.html')
            .respond(200);

        element = angular.element('<category-search category="category"></category-search>');
        element = compile(element)(scope);
        scope.$digest();
    }));

    it('directive element should be defined', function () {
        expect(element).to.be.define;
    });

    it('directive element should be defined', function () {
        expect(element[0].tagName).to.eql('CATEGORY-SEARCH');
    });

});
