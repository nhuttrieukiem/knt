
/**
 * Language file
 * Supported Languages: 
 * 1. Vietnamese (vi)
 * 2. English (en)
 * 3. Khmer (km)
 */

angular.module('knt')

.config(function ($translateProvider) {
    
  $translateProvider.translations('en', {
      MENU_ITEM: {
          HOME: "Home",
          CONTACT: "Contact",
          ABOUT  : "About",
          ABOUT_SCHOOL: "About school",
          ABOUT_HISORY: "School history",
          ABOUT_FACILITIES: "School facilities"
      }
  });

  $translateProvider.translations('vi', {
      MENU_ITEM: {
          HOME: "Trang chủ",
          CONTACT: "Liên hệ",
          ABOUT  : "Giới thiệu",
          ABOUT_SCHOOL: "Giới thiệu về trường",
          ABOUT_HISORY: "Lịch sử của trường",
          ABOUT_FACILITIES: "Cơ sở vật chất"
      }
  });

  $translateProvider.translations('km', {
      MENU_ITEM: {
          HOME: "ទំព័រដើម",
          CONTACT: "បាន​ភ្ជាប់"
      }
  });

  $translateProvider.preferredLanguage('en'); 
  $translateProvider.useSanitizeValueStrategy('escape');
});