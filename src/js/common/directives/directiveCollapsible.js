
/**
 * Directive collapsible
 * Created by kntrieu
 * Date created: March 12, 2017
 * Usage <k-collapse></k-collapse>
 */

angular.module('knt')

    .directive('kCollapse', ['$translate', function ($translate) {
        return {
            restrict: "AE",
            scope: {
                data: "=",
            },

            transclude: {
                'body': '?collapseBody',
            },
            templateUrl: "../views/common/templates/partials/k-collapse.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */


                /**
                 * Functionality
                 */
                $(document).ready(function () {
                    $('.collapsible').collapsible();
                });

            }
        };
    }]);