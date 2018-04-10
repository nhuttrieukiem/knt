/**
 * Directive card tab
 * Created by kntrieu
 * Date created: March 13, 2017
 * Usage <k-card-tab></k-card-tab>
 */

angular.module('knt')

    .directive('kCardTab', ['$translate', function ($translate) {
        return {
            restrict: "EA",
            scope: {
                data: "=",
            },

            templateUrl: "ui/views/common/templates/partials/k-card-tab.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */



                /**
                 * Functionality
                 */
                $(document).ready(function () {
                    $('ul.tabs').tabs({
                        swipeable: true,
                    });
                });

            }
        };
    }]);