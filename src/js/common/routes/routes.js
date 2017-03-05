angular.module('knt')

.config(function($routeProvider, $locationProvider) {
   $routeProvider
    .when("/", {
        template : "<h1>What</h1><p>Home page</p>"
    })
    .when("/banana", {
        template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
    })
    .when("/tomato", {
        template : "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
    })
    .otherwise({
        template : "<h1>None</h1><p>Nothing has been selected</p>"
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});