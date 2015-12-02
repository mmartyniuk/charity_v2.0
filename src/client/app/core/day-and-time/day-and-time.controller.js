(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('DayAndTimeController', DayAndTimeController);

    DayAndTimeController.$inject = ['$filter', '$scope'];

    function DayAndTimeController($filter, $scope) {
        var vm = this;
        var d = new Date();
        d.setHours( 9 );
        d.setMinutes( 0 );
        var b = new Date();
        b.setHours(18 );
        b.setMinutes( 0 );

        vm.convinientTime = {};

        vm.fromTimeBtnIsOpened = false;
        vm.toTimeBtnIsOpened = false;
        vm.days = ['Понеділок', 'Вівторок', 'Середа', 'Червер', 'П\'ятниця', 'Субота', 'Неділя'];
        vm.convinientTime.timeFrom = vm.convinientTime.timeFrom ? vm.convinientTime.timeFrom :
            $filter('date')(d, 'HH:mm');
        vm.convinientTime.timeTo = vm.convinientTime.timeTo ? vm.convinientTime.timeTo :
            $filter('date')(b, 'HH:mm');



        vm.timeFrom = vm.timeFrom ? vm.timeFrom : d;
        vm.timeTo = vm.timeTo ? vm.timeTo : b;

        vm.convinientTime.dayFrom = vm.days[0];
        vm.convinientTime.dayTo = vm.days[6];

        vm.selectFromTime = function (time) {
            vm.convinientTime.timeFrom = $filter('date')(time, 'HH:mm');
        };

        vm.selectToTime = function (time) {
            vm.convinientTime.timeTo = $filter('date')(time, 'HH:mm');
        };

        vm.toggleFromDate = function () {
            vm.fromTimeBtnIsOpened = !vm.fromTimeBtnIsOpened;
        };

        vm.toggleToDate = function () {
            vm.toTimeBtnIsOpened = !vm.toTimeBtnIsOpened;
        };

        vm.fromTimeOfFocus = function () {
            vm.fromTimeBtnIsOpened = true;
        };

        vm.toTimeOfFocus = function () {
            vm.fromTimeBtnIsOpened = true;
        };

    }
})();
