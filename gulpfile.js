/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    runSequence = require('run-sequence'),
    consolidate = require('gulp-consolidate'),
    iconfont = require('gulp-iconfont'),
    watch = require('gulp-watch'),
    sequence = require('gulp-watch-sequence'),
    gulpMerge = require('gulp-merge'),
    exec = require('child_process').exec,
    concat = require('gulp-concat'),
    data = require('gulp-data'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps');

// define paths
var paths = {
    dist: 'dist/*',
    src: 'src',
    iconSource: 'src/icons/*.svg',
    iconDist: 'dist/icons/',
    imagesSource: 'src/images/*',
    imagesDist: 'dist/images/',
    imagesDistClean: 'dist/images/*',
    scriptLibDist: 'dist/js/',
    templateSource: 'src/js/*/templates/**/*',
    templateDist: 'dist/views/',
    scriptCommon: 'src/js/common/*/*js',
    scriptApp: 'src/js/app.js',
    scriptPages: ['src/js/sample/*js'],
    fontSource: 'src/fonts/*/*',
    fontDist: 'dist/fonts/',
    styleSource: 'src/style/',
    styleDist: 'dist/css/'
};

// library paths
var lib = [
    'node_modules/angular/angular.js',                     // => for debug
    //'node_modules/angular/angular.min.js',
    'node_modules/angular-route/angular-route.js',         // => for debug
    //node_modules/angular-route/angular-route.min.js',
    'node_modules/jquery/dist/jquery.js',                       // => for debug
    //node_modules/jquery/dist/jquery.min.js',
    'node_modules/materialize-css/dist/js/materialize.js', // => for debug
    //'node_modules/materialize-css/dist/js/materialize.min.js', 
    'node_modules/angular-translate/dist/angular-translate.js',                       // => for debug
    //'node_modules/angular-translate/dist/angular-translate.min.js',
];

var css_lib = [
    'src/style/lib/*.css',
];

//js source paths
var kui = [
    paths.src + '/js/app.js',
];

//js common source
var kui_common = [
    paths.src + '/js/common/*/*js',
];

// create default gulp task 
gulp.task('default', function (callback) {
    runSequence('clean', 'image-compress', 'copy-views',
        'build-css-lib', 'build-css-pages', 'copy-fonts',
        'iconfont', 'build-js-lib',
        'build-js-kui', 'build-js-common', 'build-js-pages', 'copy-master-page',
        'watch', callback);
});

// image compression
gulp.task('image-compress', function () {
    gulp.src(paths.imagesSource)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.imagesDist));
});

// clean all content dist folder
gulp.task('clean', function () {
    return del(paths.dist);
});

// clean all content of dist/images
gulp.task('clean-images', function () {
    return del(paths.imagesDist + "*");
});

// clean all content of dist/icons
gulp.task('clean-icons', function () {
    return del(paths.iconDist + "*");
});

// clean all content of dist/js
gulp.task('clean-js', function () {
    return del(paths.scriptLibDist + "*");
});


// clean views 
gulp.task('clean-views', function () {
    return del(paths.templateDist + "*");
});

// clean fonts
gulp.task('clean-fonts', function () {
    return del(paths.fontDist + "*");
});

// clean js common
gulp.task('clean-js-common', function () {
    return del('dist/js/k-ui-common.js');
});

// clean js k-ui
gulp.task('clean-js-kui', function () {
    return del('dist/js/k-ui.js');
});

// clean js pages
gulp.task('clean-js-pages', function () {
    return del('dist/js/k-ui-pages.js');
});

// clean master page
gulp.task('clean-master-page', function () {
    return del('dist/index.html');
});

// watch 
gulp.task('watch', function () {
    var queue = sequence(300);

    //watch images
    watch(paths.imagesSource, {
        name: 'IMAGES',
        emitOnGlob: false
    }, queue.getHandler('clean-images', 'image-compress'));

    //watch icons
    watch(paths.iconSource, {
        name: 'ICONS',
        emitOnGlob: false
    }, queue.getHandler('clean-icons', 'iconfont'));

    //wath master page
    watch("src/index.html", {
        name: 'MASTER PAGE',
        emitOnGlob: false
    }, queue.getHandler('clean-master-page', 'copy-master-page'));

    //watch js common
    watch(paths.scriptCommon, {
        name: 'JS COMMON',
        emitOnGlob: false
    }, queue.getHandler('clean-js-common', 'build-js-common'));

    //watch app.js
    watch(paths.scriptApp, {
        name: 'APP.JS',
        emitOnGlob: false
    }, queue.getHandler('clean-js-kui', 'build-js-kui'));

    //watch page js
    watch(paths.scriptPages, {
        name: 'JS PAGES',
        emitOnGlob: false
    }, queue.getHandler('clean-js-pages', 'build-js-pages'));

    //watch views
    watch(paths.templateSource, {
        name: 'VIEWS',
        emitOnGlob: false
    }, queue.getHandler('clean-views', 'copy-views'));

    //watch fonts
    watch(paths.fontSource, {
        name: 'FONTS',
        emitOnGlob: false
    }, queue.getHandler('clean-fonts', 'copy-fonts'));

    //watch css pages
    watch(paths.styleSource + 'pages', {
        name: 'CSS_PAGES',
        emitOnGlob: false
    }, queue.getHandler('clean-css-pages', 'build-css-pages'));
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
        .pipe(gulp.dest(paths.iconDist).on('finish', function () {
            console.log("Iconfont was generated successfully!!");
        }));
});

// Build js lib
gulp.task('build-js-lib', function () {
    return gulpMerge(
        gulp.src(lib)
    )
        .pipe(concat('k-ui-lib.js'))
        .pipe(gulp.dest('dist/js/'));
});

// Build k-ui js
gulp.task('build-js-kui', function () {
    return gulpMerge(
        gulp.src(kui)
    )
        .pipe(concat('k-ui.js'))
        .pipe(gulp.dest('dist/js/'));
});

// Build k-ui js
gulp.task('build-js-common', function () {
    return gulpMerge(
        gulp.src(kui_common)
    )
        .pipe(concat('k-ui-common.js'))
        .pipe(gulp.dest('dist/js/'));
});

// Build js pages
gulp.task('build-js-pages', function () {
    return gulpMerge(
        gulp.src(paths.scriptPages)
    )
        .pipe(concat('k-ui-pages.js'))
        .pipe(gulp.dest('dist/js/'));
});


// Build css lib
gulp.task('build-css-lib', function () {
    return gulpMerge(
        gulp.src(css_lib)
    )
        .pipe(concat('k-ui-lib.css'))
        .pipe(gulp.dest(paths.styleDist));
});

// clean css lib
gulp.task('clean-css-lib', function () {
    return del(paths.styleDist + 'k-ui-lib.css');
});

// Copy master page
gulp.task('copy-master-page', function () {
    console.log("Master page had been reloaded");
    return gulp.src("src/index.html").pipe(gulp.dest("dist"));
});

//copy fonts
gulp.task('copy-fonts', function () {
    gulp.src(paths.fontSource)
        .pipe(gulp.dest(paths.fontDist));
});

// copy views
gulp.task('copy-views', function () {
    gulp.src(paths.templateSource)
        .pipe(gulp.dest(paths.templateDist));
});

gulp.task('start-server', function (cb) {
    exec('lite-server -c lite-server.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

// build css pages
gulp.task('build-css-pages', function () {
    return gulp.src(paths.styleSource + 'pages/*.styl')
        .pipe(stylus())
        .pipe(concat('k-ui-pages.css'))
        .pipe(gulp.dest(paths.styleDist));
});

// clean css pages
gulp.task('clean-css-pages', function () {
    return del(paths.styleDist + 'k-ui-pages.css');
});

