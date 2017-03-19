
angular.module('knt')
    /**
     * This controller was created for handling some function in master page
     */
    .controller('baseCtrl', ['$scope', '$translate', 'COLLECTION_TYPE', function ($scope, $translate, COLLECTION_TYPE) {
        /**
         * Define variables
         */

        $scope.navList = [
            {
                label: $translate.instant('MENU_ITEM.HOME'),
                rawLabel: "MENU_ITEM.HOME",
                url: "/",
                subMenu: [],
                id: "menu-home"
            },

            {
                label: $translate.instant('MENU_ITEM.ABOUT'),
                rawLabel: "MENU_ITEM.ABOUT",
                url: "/about",
                subMenu: [
                    {
                        label: $translate.instant('MENU_ITEM.ABOUT_SCHOOL'),
                        rawLabel: "MENU_ITEM.ABOUT_SCHOOL",
                        url: "/about/about-school",
                        id: "menu-about"
                    },
                    {
                        label: $translate.instant('MENU_ITEM.ABOUT_HISORY'),
                        rawLabel: "MENU_ITEM.ABOUT_HISORY",
                        url: "/about/school-history",
                        id: "menu-about"
                    },

                    {
                        label: $translate.instant('MENU_ITEM.ABOUT_FACILITIES'),
                        rawLabel: "MENU_ITEM.ABOUT_FACILITIES",
                        url: "/about/school-facilities",
                        id: "menu-about"
                    }
                ],
                id: "menu-about"
            },

            {
                label: $translate.instant('MENU_ITEM.CONTACT'),
                rawLabel: "MENU_ITEM.CONTACT",
                url: "/contact",
                subMenu: [],
                id: "menu-contact"
            },
        ];

        $scope.slideItems = [
            {
                src: "dist/images/1.jpg",
                align: "center-align",
                title: "Welcome to K-UI",
                caption: "Here's our small slogan.",
            },
            {
                src: "dist/images/2.jpg",
                align: "left-align",
                title: "This is a Content Management System",
                caption: "Here's our small slogan.",
            },
            {
                src: "dist/images/3.jpg",
                align: "right-align",
                title: "Easy to manage your articles",
                caption: "Here's our small slogan.",
            },
            {
                src: "dist/images/4.jpg",
                align: "center-align",
                title: "Easy to develop",
                caption: "Here's our small slogan.",
            }
        ];

        $scope.newsWidget = {
            header: $translate.instant('SIDE_BAR_WIDGET.NEWS'),
            rawHeader: "SIDE_BAR_WIDGET.NEWS",
            header_icon: "icon-star",
            is_active: true,
        };

        $scope.docsWidget = {
            header: $translate.instant('SIDE_BAR_WIDGET.DOCS'),
            rawHeader: "SIDE_BAR_WIDGET.DOCS",
            header_icon: "icon-collections_bookmark",
            is_active: true,
        };

        $scope.schoolNewsWidget = {
            header: $translate.instant('SIDE_BAR_WIDGET.SCHOOL_NEWS'),
            rawHeader: "SIDE_BAR_WIDGET.SCHOOL_NEWS",
            header_icon: "icon-description",
            is_active: true,
        };

        $scope.videoWidget = {
            header: $translate.instant('SIDE_BAR_WIDGET.VIDEO'),
            rawHeader: "SIDE_BAR_WIDGET.VIDEO",
            header_icon: "icon-featured_video",
            is_active: true,
        };

        $scope.teacherDocsWidget = {
            header: $translate.instant('SIDE_BAR_WIDGET.TEACHER_DOCS'),
            rawHeader: "SIDE_BAR_WIDGET.TEACHER_DOCS",
            header_icon: "icon-keyboard_arrow_right",
            is_active: true,
        };

        $scope.studentDocsWidget = {
            header: $translate.instant('SIDE_BAR_WIDGET.STUDENT_DOCS'),
            rawHeader: "SIDE_BAR_WIDGET.STUDENT_DOCS",
            header_icon: "icon-keyboard_arrow_right",
            is_active: true,
        };

        $scope.searchWidget = {
            header: $translate.instant('SEARCH'),
            rawHeader: "SEARCH",
            header_icon: "icon-keyboard_arrow_right",
            is_active: true,
        };

        $scope.basicCollections = [
            {
                title: "Lorem ipsum dolor sit amet 2",
                url: "/",
                icon_class: "icon-star",
                thumb: "dist/images/av1.jpg",
                short_content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit...",
                date_created: moment(),
            },

            {
                title: "Lorem ipsum dolor sit amet",
                url: "/",
                icon_class: "icon-star",
                thumb: "dist/images/av2.jpg",
                short_content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit...",
                date_created: moment(),
            },

            {
                title: "Lorem ipsum dolor sit amet",
                url: "/",
                icon_class: "icon-star",
                thumb: "dist/images/av3.jpg",
                short_content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit...",
                date_created: moment(),
            },

            {
                title: "Lorem ipsum dolor sit amet",
                url: "/",
                icon_class: "icon-star",
                thumb: "dist/images/av4.jpg",
                short_content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit...",
                date_created: moment(),
            }
        ];

        $scope.tabWidget = [
            {
                header: 'SIDE_BAR_WIDGET.STUDENT_SCHEDULE',
                tabId : 'student_schedule_tab',
                isActive: true,
                element: [
                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    },

                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    },

                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    },

                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    }
                ]
            },

            {
                header: 'SIDE_BAR_WIDGET.WORKING_SCHEDULE',
                tabId : 'teacher_schedule_tab',
                isActive: false,
                element: [
                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    },

                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    },

                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    },

                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    }
                ]
            }
        ];

        $scope.tab2Widget = [
            {
                header: 'SIDE_BAR_WIDGET.TEACHER_DOCS',
                tabId : 'teacher_docs_tab',
                isActive: true,
                element: [
                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    },

                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    },

                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    },

                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    }
                ]
            },

            {
                header: 'SIDE_BAR_WIDGET.STUDENT_DOCS',
                tabId : 'student_docs_tab',
                isActive: false,
                element: [
                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    },

                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    },

                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    },

                    {
                        title: "Lorem ipsum dolor sit amet",
                        url: "/",
                        icon_class: "icon-date_range",
                    }
                ]
            }
        ];


    }]);