angular
    .module('app.needs')
    .directive('needModalDirective', needModal);

function needModal() {
    return {
        restrict: 'E',
        templateUrl: '/app/needs/views/need-modal.html',
        scope: {
            category: '=category'
        },
        bindToController: true
    };
}