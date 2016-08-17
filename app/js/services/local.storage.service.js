(function () {
    'use strict';

    angular
        .module('Blurbiz')
        .factory('LocalStorageService', Service);

    function Service($window) {
        var service = {};
        service.put = put;
        service.get = get;
        service.saveToken = saveToken;
        service.getToken = getToken;

        return service;

        function put(key, value) {
            $window.localStorage[key] = value;
        }

        function get(key) {
            return $window.localStorage[key];
        }

        function saveToken(token) {
            put('jwtToken', token)
        }

        function getToken() {
            return get('jwtToken');
        }

    }

})();