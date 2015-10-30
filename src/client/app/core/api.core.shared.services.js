/* Created by mmartin on 10/1/2015.*/
/* jshint multistr: true, -W117 */
// this factory will be used for needs and offers, their logic is the same
(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('SharedFactory', SharedFactory);

    SharedFactory.$inject = ['$http', '$q'];

    function SharedFactory($http, $q) {
        return {
            getOwner: function(href, success, error) {
                $http.get(href).success(success).error(error);
            },
            getAuthorizedUserInfo: function(token, success, error) {
                $http.get('api/users/current', {
                    headers: {
                        'x-auth-token': token
                    }
                }).success(success).error(error);
            },
            getCategory: function(link, success, error) {
                $http.get(link).success(success).error(error);
            },
            getRegions: function() {
                return $q(function(resolve, reject) {
                    $http.get('/api/regions').success(function (data) {
                        resolve(data._embedded.regions);
                    }).error(reject);
                });
            },
            sliceLink: function(link) {
                return link.slice(link.search('/api'), link.length);
            },
            postItem: function(uploadUrl, data) {
                var fd = new FormData();
                for(var key in data) {
                    fd.append(key, data[key]);
                }
                $http.post(uploadUrl, fd, {
                    transformRequest: angular.indentity,
                    headers: { 'Content-Type': undefined }
                });
            }
        };
    }

})();
