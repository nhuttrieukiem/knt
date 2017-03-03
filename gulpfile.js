/* File: gulpfile.js */

// grab our gulp packages
var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    imagemin    = require('gulp-imagemin'),
    del         = require('del'),
    runSequence = require('run-sequence'),
    consolidate = require('gulp-consolidate'),
    iconfont    = require('gulp-iconfont'),
    watch       = require('gulp-watch'),
    sequence    = require('gulp-watch-sequence'),
    gulpMerge   = require('gulp-merge'),
    concat      = require('gulp-concat');

// define paths
var paths = {
    dist        : 'dist/*',
    src         : 'src',
    iconSource  : 'src/icons/*.svg',
    iconDist    : 'dist/icons/',
    imagesSource: 'src/images/*',
    imagesDist  : 'dist/images/',
    imagesDistClean  : 'dist/images/*',
    scriptLibDist  : 'dist/js/',
    templateSource: 'src/templates/'
};

// library paths
var lib = [
    'node_modules/angular/angular.js', // => for debug
    //'node_modules/angular/angular.min.js'
];

// create default gulp task 
gulp.task('default', function(callback){
    runSequence('clean', 'image-compress','iconfont', 'build-js-lib', 'copy-master-page', 'watch', callback);
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

// clean all content of dist/icons
gulp.task('clean-icons', function() {
    return del(paths.iconDist + "*");
});

// clean all content of dist/js
gulp.task('clean-js', function() {
    return del(paths.scriptLibDist + "*");
});

// watch 
gulp.task('watch', function () {
  var queue = sequence(300);

  //watch images
  watch(paths.imagesSource, {
    name      : 'IMAGES',
    emitOnGlob: false
  }, queue.getHandler('clean-images', 'image-compress'));

  //watch icons
  watch(paths.iconSource, {
    name      : 'ICONS',
    emitOnGlob: false
  }, queue.getHandler('clean-icons', 'iconfont'));

  //wath master page
   watch("src/index.html", {
    name      : 'MASTER PAGE',
    emitOnGlob: false
  }, queue.getHandler('copy-master-page'));
 
});

// build iconfont
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
        .pipe(gulp.dest(paths.iconDist).on('finish', function(){
            console.log("Iconfont was generated successfully!!");
        }));
});

// Build js lib
gulp.task('build-js-lib', function () {
  return gulpMerge(
     gulp.src(lib)
    )
    .pipe(concat('knt-lib.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('copy-master-page', function () {
    return gulp.src("src/index.html").pipe(gulp.dest("dist"));
});



