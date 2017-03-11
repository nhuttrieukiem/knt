
angular.module('knt')
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
            url  : "/",
            subMenu: [],
            id: "menu-home"
        },
        
        {
            label: $translate.instant('MENU_ITEM.ABOUT'),
            url  : "/about",
            subMenu: [
                {
                    label: $translate.instant('MENU_ITEM.ABOUT_SCHOOL'),
                    url  : "/about/about-school",
                    id   : "menu-about"
                },
                {
                    label: $translate.instant('MENU_ITEM.ABOUT_HISORY'),
                    url  : "/about/school-history",
                    id   : "menu-about"
                },

                {
                    label: $translate.instant('MENU_ITEM.ABOUT_FACILITIES'),
                    url  : "/about/school-facilities",
                    id   : "menu-about"
                }
            ],
            id: "menu-about" 
        },

        {
            label: $translate.instant('MENU_ITEM.CONTACT'),
            url  : "/contact",
            subMenu: [],
            id: "menu-contact"
        },
    ];

    $scope.slideItems = [
        {
            src:  "images/1.jpg",
            align: "center-align",
            title: "Welcome to K-UI",
            caption: "Here's our small slogan.",
        },
        {
            src:  "images/2.jpg",
            align: "left-align",
            title: "This is a Content Management System",
            caption: "Here's our small slogan.",
        },
        {
            src:  "images/3.jpg",
            align: "right-align",
            title: "Easy to manage your articles",
            caption: "Here's our small slogan.",
        },
        {
            src:  "images/4.jpg",
            align: "center-align",
            title: "Easy to develop",
            caption: "Here's our small slogan.",
        }
    ];


}]);