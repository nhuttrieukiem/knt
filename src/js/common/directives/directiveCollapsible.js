
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
                headerColor: "@?"
            },

            transclude: {
                'body': '?collapseBody',
            },
            templateUrl: "ui/views/common/templates/partials/k-collapse.html",

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