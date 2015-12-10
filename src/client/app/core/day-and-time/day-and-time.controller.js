(function () {
    'use strict';

    angular
        .module('app.core')
        .controller('DayAndTimeController', DayAndTimeController);

    DayAndTimeController.$inject = ['$filter', '$scope'];

    function DayAndTimeController($filter, $scope) {
        var vm = this;
        vm.disabledInput = false;
        vm.convenientTime = {};
        vm.fromTimeBtnIsOpened = false;
        vm.toTimeBtnIsOpened = false;
        vm.selectFromTime = selectFromTime;
        vm.selectToTime = selectToTime;
        vm.toggleFromDate = toggleFromDate;
        vm.toggleToDate = toggleToDate;
        vm.fromTimeOfFocus = fromTimeOfFocus;
        vm.toTimeOfFocus = toTimeOfFocus;

        vm.convenientTime.timeFrom = vm.convenientTime.timeFrom ? vm.convenientTime.timeFrom :
            $filter('date')(_getDefaultTimeFrom(), 'HH:mm');
        vm.convenientTime.timeTo = vm.convenientTime.timeTo ? vm.convenientTime.timeTo :
            $filter('date')(_getDefaultTimeTo(), 'HH:mm');


        vm.timeFrom = vm.timeFrom ? vm.timeFrom : _getDefaultTimeFrom();
        vm.timeTo = vm.timeTo ? vm.timeTo :_getDefaultTimeTo();

        function _getDefaultTimeFrom() {
            var time = new Date();
            time.setHours(9);
            time.setMinutes(0);
            return time;
        }

        function _getDefaultTimeTo() {
            var time = new Date();
            time.setHours(18);
            time.setMinutes(0);
            return time;
        }

        function selectFromTime(time) {
            vm.convenientTime.timeFrom = $filter('date')(time, 'HH:mm');
        }

        function selectToTime(time) {
            vm.convenientTime.timeTo = $filter('date')(time, 'HH:mm');
        }

        function toggleFromDate() {
            vm.fromTimeBtnIsOpened = !vm.fromTimeBtnIsOpened;
            vm.toTimeBtnIsOpened = false;
        }

        function toggleToDate() {
            vm.toTimeBtnIsOpened = !vm.toTimeBtnIsOpened;
            vm.fromTimeBtnIsOpened = false;

        }

        function fromTimeOfFocus() {
            vm.fromTimeBtnIsOpened = true;
        }

        function toTimeOfFocus() {
            vm.toTimeBtnIsOpened = true;
        }


    }
})();
