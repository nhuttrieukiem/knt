
/**
 * Directive multi collapsible
 * Created by kntrieu
 * Date created: March 20, 2017
 * Usage <k-multi-collapse></k-multi-collapse>
 */

angular.module('knt')

    .directive('kMultiCollapse', ['$translate', function ($translate) {
        return {
            restrict: "AE",
            scope: {
                data: "=",
                headerColor: "@?"
            },

            transclude: {
                'body': '?collapseBody',
            },
            templateUrl: "ui/views/common/templates/partials/k-multi-collapse.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */
                scope.headerColor = angular.isUndefined(scope.headerColor) ? "#29B6F6" : scope.headerColor;


                /**
                 * Functionality
                 */
                $(document).ready(function () {
                    $('.collapsible').collapsible();
                });

            }
        };
    }]);