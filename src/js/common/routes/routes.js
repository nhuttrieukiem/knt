
/**
 * Routes
 * Created by kntrieu
 * Date created: March 09, 2017
 */
angular.module('knt')

.config(function($routeProvider, $locationProvider) {
   $routeProvider
    .when("/", {
        templateUrl: '../views/sample/templates/index.html'
    })
    .otherwise({
        templateUrl: '../views/sample/templates/index.html'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});