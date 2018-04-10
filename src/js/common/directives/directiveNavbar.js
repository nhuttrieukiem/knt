
/**
 * Directive nav bar
 * Created by kntrieu
 * Date created: March 09, 2017
 * Usage <k-navbar nav-list="navListObj"></k-navbar>
 */

angular.module('knt')

    .directive('kNavbar', ['$translate', function ($translate) {
        return {
            restrict: "AE",
            scope: {
                navList: '=',
            },
            templateUrl: "ui/views/common/templates/partials/k-navbar.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */

                scope.subNavList = [];
                scope.lang = "vi";

                angular.forEach(scope.navList, function (item, index) {
                    if (item.subMenu.length > 0) {
                        scope.subNavList.push(item.subMenu);
                    }
                });

                /**
                 * Functionality
                 */
                $(document).ready(function () {

                    // set up side nav
                    $(".button-collapse").sideNav({
                        draggable: true,
                    });

                    // dropdown toggle
                    $(".dropdown-button").dropdown({
                        hover: true,
                        belowOrigin: true,
                        constrainWidth: false,
                        gutter: 1
                    });
                });

                scope.changeLanguage = function () {
                    scope.lang = scope.lang === "vi" ? "en" : "vi";
                    $translate.use(scope.lang);
                };

            }
        };
    }]);