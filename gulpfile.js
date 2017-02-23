/* File: gulpfile.js */

// grab our gulp packages
var gulp     = require('gulp');
    gutil    = require('gulp-util');
    imagemin = require('gulp-imagemin');
    del      = require('del');
    runSequence = require('run-sequence');

// define paths
var paths = {
    dist        : 'dist/*',
    src         : 'src',
    imagesSource: 'src/images/*',
    imagesDist  : 'dist/images/',
    scriptSource: '',
    scriptDist  : '',
};

// create default gulp task 
gulp.task('default', function(callback){
    runSequence('clean', 'image-compress', callback);
});

// image compression
gulp.task('image-compress', function() {
    gulp.src(paths.imagesSource)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.imagesDist));
});

// clean all content dist folder
gulp.task('clean', function() {
  return del(paths.dist);
});

// clean all content of dist/images
gulp.task('clean-images', function() {
  return del(paths.imagesSource);
});
