(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('Users', Users);

    Users.$inject = ['$http', '$q'];

    function Users($http, $q){
        return {
            getUsers: function() {
                //return $http.get("/api/users");

                return $q(function(resolve, reject) {
                    resolve({
                        "name": "NAME",
                        "phone": "666",
                        "email": "mail",
                        "status": "user",
                        "supportedNeeds":
                        [
                            "dummydata1",
                            "dummydata2",
                            "dummydata3",
                            "dummydata4",
                            "dummydata5"
                        ],
                        "offers":
                        [
                             "dummydata12",
                             "dummydata22",
                             "dummydata32",
                             "dummydata42",
                             "dummydata52"
                         ],
                        "needs":
                        [
                             "dummydata13",
                             "dummydata23",
                             "dummydata33",
                             "dummydata43",
                             "dummydata53"
                        ],
                        "supportedOffers":
                        [
                             "dummydata14",
                             "dummydata24",
                             "dummydata34",
                             "dummydata44",
                             "dummydata54"
                        ]
                    });
                });
            }
        }
    }

})();
