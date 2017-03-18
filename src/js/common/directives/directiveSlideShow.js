
/**
 * Directive Slide show
 * Created by kntrieu
 * Date created: March 10, 2017
 * Usage <k-slideshow></k-slideshow>
 */

angular.module('knt')

    .directive('kSlideshow', ['$translate', function ($translate) {
        return {
            restrict: "AE",
            scope: {
                slideItems: "=",
            },
            templateUrl: "dist/views/common/templates/partials/k-slideshow.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */


                /**
                 * Functionality
                 */
                $(document).ready(function () {
                    $('.slider').slider({
                        indicators: false,
                    });
                });

            }
        };
    }]);