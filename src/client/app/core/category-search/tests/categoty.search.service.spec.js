describe('CategoryFactory service Test: ', function(){
   var CategoryFactory,
       httpBackend,
       http,
       q;
    beforeEach(module('app.core'));

    beforeEach(inject(function (_CategoryFactory_, $http, $q, $httpBackend) {
        CategoryFactory = _CategoryFactory_;
        httpBackend = $httpBackend;
        http = $http;
        q = $q;
    }));

    it('service should be defined', function () {
        expect(CategoryFactory).to.be.define;
    });

    it('should make call backend', function () {
        CategoryFactory.getCategories();
        httpBackend.expectGET('/api/category/root').respond({children:[]});
        httpBackend.flush();
    });
});
