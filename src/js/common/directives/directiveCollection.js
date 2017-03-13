
/**
 * Directive cpllections
 * Created by kntrieu
 * Date created: March 13, 2017
 * Usage <k-collection></k-collection>
 */

angular.module('knt')

    .directive('kCollection', ['$translate', 'COLLECTION_TYPE', function ($translate, COLLECTION_TYPE) {
        return {
            restrict: "AE",
            scope: {
                data:      "=",
                type:      "=?",
                direction: "@?",
                id:        "@"
            },
            templateUrl: "../views/common/templates/partials/k-collections.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */
                var directions = ["up", "down", "left", "right"];
                scope.COLLECTION_TYPE = COLLECTION_TYPE;

                /**
                 * Functionality
                 */
                $(document).ready(function () {
                    if(scope.direction && directions.indexOf(scope.direction) > -1) {
                        $('.' + scope.id).marquee({
                            duration: 5000,
                            direction: "up",
                            duplicated: true,
                            gap: "10px",
                            allowCss3Support: true,
                            pauseOnHover: true,
                            startVisible: true
                        });
                    }
                });

            }
        };
    }]);