/* File: gulpfile.js */

// grab our gulp packages
var gulp        = require('gulp');
    gutil       = require('gulp-util');
    imagemin    = require('gulp-imagemin');
    del         = require('del');
    runSequence = require('run-sequence');
    consolidate = require('gulp-consolidate');
    iconfont    = require('gulp-iconfont');

// define paths
var paths = {
    dist        : 'dist/*',
    src         : 'src',
    iconSource  : 'src/icons/*.svg',
    iconDist    : 'dist/icons/',
    imagesSource: 'src/images/*',
    imagesDist  : 'dist/images/',
    imagesDistClean  : 'dist/images/*',
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
  return del(paths.imagesDist + "*");
});

gulp.task('iconfont', function () {
    return gulp.src(paths.iconSource)
        .pipe(iconfont({
            fontName: 'iconfont',
            formats: ['ttf', 'eot', 'woff', 'woff2'],
            appendCodepoints: true,
            appendUnicode: false,
            normalize: true,
            fontHeight: 1000,
            centerHorizontally: true
        }))
        .on('glyphs', function (glyphs, options) {
            gulp.src('src/icons/iconfont.css')
                .pipe(consolidate('underscore', {
                    glyphs: glyphs,
                    fontName: options.fontName,
                    fontDate: new Date().getTime()
                }))
                .pipe(gulp.dest(paths.iconDist));
            gulp.src('src/icons/index.html')
                .pipe(consolidate('underscore', {
                    glyphs: glyphs,
                    fontName: options.fontName
                }))
                .pipe(gulp.dest(paths.iconDist));
        })
        .pipe(gulp.dest(paths.iconDist));
});



