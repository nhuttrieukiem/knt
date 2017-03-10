// define list of modules (pages) here

angular.module('k-ui.common', []);

//module of page sample
angular.module('k-ui.sample', []);



// Define a global guard app which includes the above

var knt = angular.module('knt', [
    'pascalprecht.translate',
    'ngRoute',
    'k-ui.common'
])

/**
 * This controller was created for handling some function in master page
 */
.controller('baseCtrl', ['$scope', '$translate', function($scope, $translate){
    /**
     * Define variables
     */
    
    $scope.navList = [
        {
            label: $translate.instant('MENU_ITEM.HOME'),
            url  : "/" 
        },

        {
            label: "Contact",
            url  : "/contact" 
        },
    ];


}]);