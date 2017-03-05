// define list of modules (pages) here

angular.module('k-ui.common', []);

//module of page sample
angular.module('k-ui.sample', []);



// Define a global guard app which includes the above

var knt = angular.module('knt', [
    'ngRoute',
    'k-ui.common'
]);