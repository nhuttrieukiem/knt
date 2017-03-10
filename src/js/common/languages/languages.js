
/**
 * Language file
 * Supported Languages: 
 * 1. Vietnamese (vi)
 * 2. English (en)
 */

angular.module('knt')

.config(function ($translateProvider) {
    
  $translateProvider.translations('en', {
      MENU_ITEM: {
          HOME: "Home",
          CONTACT: "Contact"
      }
  });

  $translateProvider.preferredLanguage('en');
});