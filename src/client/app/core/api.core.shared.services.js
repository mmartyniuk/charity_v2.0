/* Created by mmartin on 10/1/2015.*/
/* jshint multistr: true, -W117 */
// this factory will be used for needs and offers, their logic is the same
(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('SharedFactory', SharedFactory);

    SharedFactory.$inject = ['$http'];

    function SharedFactory($http, $q) {
        return {
            getOwner: function(href, success, error){
                $http.get(href).success(success).error(error);
            },
            getAuthorizedUserInfo: function(token, success, error){
                $http.get('api/users/current', {
                    headers: {
                        'x-auth-token': token
                    }
                }).success(success).error(error);
            },
            getCategory: function(link, success, error){
                $http.get(link).success(success).error(error);
            },
            patchResponse: function(id, accept, success, error){
                $http.patch('/api/needResponses/'+id, {'status': accept}).success(success).error(error);
            }
        };
    }

})();
