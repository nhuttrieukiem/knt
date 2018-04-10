/**
 * Directive carousel
 * Created by kntrieu
 * Date created: March 18, 2017
 * Usage <k-carousel></k-cảousel>
 */

angular.module('knt')

    .directive('kCarousel', ['$translate', function ($translate) {
        return {
            restrict: "EA",
            scope: {
                data: "=",
            },

            templateUrl: "ui/views/common/templates/partials/k-carousel.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */



                /**
                 * Functionality
                 */
                $(document).ready(function () {
                    $('.carousel.carousel-slider').carousel({ fullWidth: true });
                    setInterval(function(){ 
                        $('.carousel.carousel-slider').carousel('next');
                    }, 5000);
                });

            }
        };
    }]);