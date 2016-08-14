(function () {
    'use strict';

    angular
        .module('Blurbiz.socket')
        .factory('socket', Service);

    function Service(socketFactory) {
        var socket = io.connect('http://52.27.133.78:3040');
        return socketFactory({
            ioSocket: socket
        });
    }

})();