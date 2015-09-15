/* jshint -W117, -W030 */
describe('entities_directive', function(){
    /*var $compile,
        $scope;*/

    beforeEach(module('app.main'));

    /*beforeEach(inject(function(_$compile_, $rootScope){
        $compile = _$compile_;
        $scope = $rootScope.$new();
    }));*/

    beforeEach(function() {
        module('app.admin', bard.fakeToastr);
        bard.inject('$rootScope', '$compile');
    });

    it('Replaces the element with the appropriate content', function() {
        $rootScope.entities = [
            'dummydata1',
            'dummydata2',
            'dummydata3',
            'dummydata4',
            'dummydata5'
        ];

        var element = $compile('<user-entities list="entities"></user-entities>')($rootScope);

        $rootScope.$digest();

        expect(element.find('ul').find('li').length).to.equal(0);
    });
});
