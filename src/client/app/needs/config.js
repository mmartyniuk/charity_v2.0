﻿(function () {
    'use strict';

    angular
        .module('app.needs')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'createdneed',
                config: {
                    url: '/needs/createdneed',
                    templateUrl: 'app/needs/created_need.html',
                    controller: 'CreatedNeedController',
                    controllerAs: 'vm',
                    title: 'CreatedNeed',
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            },
            {
                state: 'createdproject',
                config: {
                    url: '/needs/createdproject',
                    templateUrl: 'app/needs/createdproject.html',
                    controller: 'CreatedProjectController',
                    controllerAs: 'vm',
                    title: 'CreatedProject',
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            },
            {
                state: 'newneedregister',
                config: {
                    url: '/needs/newneedregister',
                    templateUrl: 'app/needs/new_need_register.html',
                    controller: 'NewNeedRegisterController',
                    controllerAs: 'vm',
                    title: 'NewNeedRegisterController',
                    params: {prefilled: null}
                }
            },
            {
                state: 'newneedstep1',
                config: {
                    url: '/needs/newneedstep1',
                    templateUrl: 'app/needs/new_need_step_1.html',
                    controller: 'NewNeedBeforeRegisterController',
                    controllerAs: 'vm',
                    title: 'NewNeedBeforeRegisterController',
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            },
            {
                state: 'newproject',
                config: {
                    url: '/needs/new_project.html',
                    templateUrl: 'app/needs/new_project.html',
                    controller: 'NewProjectController',
                    controllerAs: 'vm',
                    title: 'NewProject',
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            }
        ];
    }

})();
