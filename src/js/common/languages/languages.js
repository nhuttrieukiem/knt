
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
      },

      SIDE_BAR_WIDGET: {
          NEWS: "News",
          WORKING_SCHEDULE: "Working schedule",
          STUDENT_SCHEDULE: "Student schedule",
          SCHOOL_NEWS: "School news",
          TEACHER_DOCS: "Teacher documents",
          STUDENT_DOCS: "Student documents",
          DOCS: "Documents",
          YOUTH_GROUP: "Youth group information",
          EXAM_RESULT: "Exam result"
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
      },

      SIDE_BAR_WIDGET: {
          NEWS: "Tin tức - sự kiện",
          WORKING_SCHEDULE: "Working schedule",
          STUDENT_SCHEDULE: "Student schedule",
          SCHOOL_NEWS: "Tin tức nhà trường",
          TEACHER_DOCS: "Thông tin giáo viên",
          STUDENT_DOCS: "Thông tin học sinh",
          DOCS: "Tài liệu",
          YOUTH_GROUP: "Thông tin đoàn thanh niên",
          EXAM_RESULT: "Kết quả thi"
      }
  });

  $translateProvider.translations('km', {
      MENU_ITEM: {
          HOME: "ទំព័រដើម",
          CONTACT: "បាន​ភ្ជាប់"
      }
  });

  $translateProvider.preferredLanguage('vi'); 
  $translateProvider.useSanitizeValueStrategy('escape');
});