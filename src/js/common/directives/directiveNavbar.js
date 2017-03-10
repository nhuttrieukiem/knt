
/**
 * Directive nav bar
 * Created by kntrieu
 * Date created: March 09, 2017
 * Usage <k-navbar nav-list="navListObj"></k-navbar>
 */

angular.module('knt')

.directive('kNavbar', ['$translate', function($translate){
    return {
        restrict   : "AE",
        scope      : {
            navList: '=',
        },
        templateUrl: "../views/common/templates/partials/k-navbar.html",

        link       : function (scope, link, attrs) {
            /**
             * Define globle variables
             */



            /**
             * Functionality
             */
            $(".button-collapse").sideNav({
                draggable: true,
            });
        }
    };
}]);