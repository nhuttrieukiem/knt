angular.module('knt')

.config(function($routeProvider, $locationProvider) {
   $routeProvider
    .when("/", {
        template : "<h5>What</h5><p>Home page</p>"
    })
    .when("/banana", {
        template : "<h5>Banana</h5><p>Bananas contain around 75% water.</p>"
    })
    .when("/tomato", {
        template : "<h5>Tomato</h5><p>Tomatoes contain around 95% water.</p>"
    })
    .otherwise({
        template : "<h5>None</h5><p>Nothing has been selected</p>"
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});