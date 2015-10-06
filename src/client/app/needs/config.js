(function () {
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
                state: 'needs',
                config: {
                    url: '/needs',
                    abstract: true,
                    template: '<ui-view/>',
                    title: 'Needs'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'needs.home',
                config: {
                    url: '',
                    templateUrl: 'app/needs/needs.html',
                    params: {prefilled: ''},
                    controller: 'NeedsController',
                    controllerAs: 'vm'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'needs.edit',
                config: {
                    url: '/edit/:id',
                    templateUrl: 'app/needs/edit_need.html',
                    controller: 'EditNeedsController',
                    controllerAs: 'vm',
                    title: 'editNeed'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'needs.created',
                config: {
                    url: '/createdneed',
                    templateUrl: 'app/needs/created_need.html',
                    controller: 'CreatedNeedController',
                    controllerAs: 'vm',
                    title: 'CreatedNeed'
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            },
            {
                state: 'createdproject',
                config: {
                    url: '/createdproject',
                    templateUrl: 'app/needs/createdproject.html',
                    controller: 'CreatedProjectController',
                    controllerAs: 'vm',
                    title: 'CreatedProject'
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            },
            {
                state: 'newneed.register',
                config: {
                    url: '/newneedregister',
                    templateUrl: 'app/needs/new_need_register.html',
                    controller: 'NewNeedRegisterController',
                    controllerAs: 'vm',
                    title: 'NewNeedRegisterController',
                    params: {prefilled: null}
                }
            },
            {
                state: 'newneed',
                config: {
                    url: '/newneed',
                    abstract: true,
                    template: '<ui-view/>',
                    title: 'NewNeed'
                    /*settings: {
                     nav: 2,
                     content: '<i class="fa fa-lock"></i> Admin'
                     }*/
                }
            },
            {
                state: 'newneed.home',
                config: {
                    url: '',
                    templateUrl: 'app/needs/new_need_step_1.html',
                    controller: 'NewNeedBeforeRegisterController',
                    controllerAs: 'vm',
                    title: 'NewNeedBeforeRegisterController'
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            },
            {
                state: 'newproject',
                config: {
                    url: '/new_project.html',
                    templateUrl: 'app/needs/new_project.html',
                    controller: 'NewProjectController',
                    controllerAs: 'vm',
                    title: 'NewProject'
                    /*settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }*/
                }
            }
        ];
    }

})();
