(function () {
    'use strict';

    angular
        .module('Blurbiz')
        .controller('IndexController', Controller);

    function Controller($window, $scope, $rootScope, $uibModal, socket, ProjectService, FlashService, LocalStorageService) {

        $scope.user = {
            name: 'Aaron Wagner'
        };

        $scope.toggleSidebar = function() {
            
        }
    }

})();