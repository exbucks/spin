var gulp = require('gulp');
var $ = require("gulp-load-plugins")();
var browserSync = require("browser-sync");
var bowerMain    = require('main-bower-files');
var runSequence = require("run-sequence");
var del = require('del');

var reload = browserSync.reload;

var bs;

//=================== Config ========================
var bowerMainOverrides = {
    'bootstrap': {
        'main': [
            'fonts/glyphicons-halflings-regular.eot',
            'fonts/glyphicons-halflings-regular.svg',
            'fonts/glyphicons-halflings-regular.ttf',
            'fonts/glyphicons-halflings-regular.woff',
            'fonts/glyphicons-halflings-regular.woff2'
        ]
    },
    'font-awesome': {
        'main': [
            'css/font-awesome.css',
            'fonts/fontawesome-webfont.woff2',
            'fonts/fontawesome-webfont.woff',
            'fonts/fontawesome-webfont.otf',
            'fonts/fontawesome-webfont.ttf',
            'fonts/fontawesome-webfont.svg',
            'fonts/fontawesome-webfont.eot'
        ]
    },
    'highcharts': {
        'main': [
            "highstock.js",
            "highcharts-more.js",
            "modules/exporting.js",
            "modules/data.js"
        ]
    },
    'select2': {
        'main': [
            "dist/js/select2.js",
            "dist/css/select2.css"
        ]
    },
    'bootstrap-daterangepicker': {
        'main': 'daterangepicker.js'
    },
    'fullcalendar': {
        'main': "dist/fullcalendar.js"
    },
    'perfect-scrollbar': {
        'main': [
            'js/perfect-scrollbar.jquery.min.js',
            'css/perfect-scrollbar.min.css'
        ]
    },
    'chartist': {
        'main': 'dist/chartist.js'
    },
    'jquery.sparkline.bower': {
        'main': 'src/jquery.sparkline.js'
    }
};

// Serve
gulp.task("serve:clean", function(cb) {
    del(["serve/**"], cb);
});

//================== Copy Html =======================
gulp.task("serve:html", function(cb) {
    return gulp.src(["src/**/*.html", "!src/assets"])
        .pipe(gulp.dest('serve'));
});

//================== Copy Assets =====================
gulp.task("serve:assets", function() {
    return gulp.src(["src/assets/**/*.*", "!src/assets/scss/**/*.*"])
        .pipe(gulp.dest('serve/assets'));
});

// ============== Application Styles ===================
gulp.task("dashboard:sass", function () {
    return gulp.src("src/assets/scss/app/app.scss")
        .pipe($.sass({
            includePaths: ["bower_components/bootstrap-sass/assets/stylesheets"]
        }))
        .pipe($.autoprefixer("last 1 version", { cascade: true }))
        .pipe(gulp.dest("serve/assets/stylesheets/"))
});

gulp.task("custom-bootstrap:sass", function () {
    return gulp.src("src/assets/scss/bootstrap/bootstrap.scss")
        .pipe($.sass({
            includePaths: ["bower_components/bootstrap-sass/assets/stylesheets"]
        }))
        .pipe($.autoprefixer("last 1 version", { cascade: true }))
        .pipe(gulp.dest("serve/assets/stylesheets/"))
});

gulp.task("plugins:sass", function() {
    return gulp.src("src/assets/scss/plugins/plugins.scss")
    .pipe($.sass({
        includePaths: [
            "bower_components/bootstrap-sass/assets/stylesheets",
            "bower_components/"
        ]
    }))
    .pipe($.autoprefixer("last 1 version", { cascade: true }))
    .pipe(gulp.dest("serve/assets/stylesheets/"))
});

gulp.task("styles", ['custom-bootstrap:sass', 'dashboard:sass', 'plugins:sass']);

// =====================Bower Dependencies====================
gulp.task('bower:other', function() {
    var cssFilter = $.filter('*.css')
    var fontFilter = $.filter(['*.eot', '*.woff', '*.woff2', '*.svg', '*.ttf'])

    return gulp.src(bowerMain({ overrides: bowerMainOverrides }))
        // CSS
        .pipe(cssFilter)
        .pipe($.concat('lib.css'))
        .pipe($.minifyCss({keepBreaks:true}))
        .pipe($.rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('./serve/assets/vendor/css'))
        .pipe(cssFilter.restore())

        // FONTS
        .pipe(fontFilter)
        .pipe($.flatten())
        .pipe(gulp.dest('./serve/assets/vendor/fonts'))
        .pipe(fontFilter.restore())
});

gulp.task('bower:js:lib', function() {
    var jsFilter = $.filter('*.js')

    return gulp.src(bowerMain({ 'overrides': bowerMainOverrides, 'group': 'lib' }))
        .pipe(jsFilter)
        .pipe($.concat('lib.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest('./serve/assets/vendor/js'))
        .pipe(jsFilter.restore());
});

gulp.task('bower:js:other', function() {
    var jsFilter = $.filter('*.js')

    return gulp.src(bowerMain({ overrides: bowerMainOverrides, group: '!lib'}))
      // JS
      .pipe(jsFilter)
      .pipe($.uglify())
      .pipe($.rename({
          suffix: ".min"
      }))
      .pipe(gulp.dest('./serve/assets/vendor/js'))
      .pipe(jsFilter.restore())
});

gulp.task('bower', ["bower:js:lib", "bower:other", "bower:js:other"]);

// ====================== Watches =====================
gulp.task("watch", function () {
  //gulp.watch(["serve/**/*.*"], reload);

  gulp.watch(["src/**/*.html"], ['serve:html', reload]);
  gulp.watch(["src/assets/scss/**/*.scss", "src/assets/scss/**/*.css"], ["styles", reload]);
  gulp.watch([
      "src/assets/**/*.*",
      "!src/assets/scss/**/*.scss",
      "!src/assets/scss/**/*.css"
  ], ["serve:assets", reload]);
  //gulp.watch(["src/assets/javascript/app/*.js"], ["js:app"]);
});

// ===================== Build Tasks ===================
gulp.task("dist:clean", function(cb) {
    del(["dist/**"], cb);
});

gulp.task("dist:assets", function() {
    return gulp.src([
        "serve/assets/**/*.*",
        "!serve/assets/stylesheets",
        "!serve/assets/javascript/app"
    ]).pipe(gulp.dest('dist/assets'));
});

gulp.task("html", function () {
    var assets = $.useref.assets({searchPath: "serve"});

    return gulp.src("serve/**/*.html")
    .pipe(assets)
    // Concatenate JavaScript files and preserve important comments
    .pipe($.if("*.js", $.uglify({preserveComments: "some"})))
    // Minify CSS
    .pipe($.if("*.css", $.minifyCss({keepBreaks:true})))
    // Start cache busting the files
    .pipe($.revAll({ ignore: [".eot", ".svg", ".ttf", ".woff", ".woff2"] }))
    .pipe(assets.restore())
    // Conctenate your files based on what you specified in _layout/header.html
    .pipe($.useref())
    // Replace the asset names with their cache busted names
    .pipe($.revReplace())
    // Minify HTML
    /*.pipe($.if("*.html", $.htmlmin({
        removeComments: false,
        removeCommentsFromCDATA: false,
        removeCDATASectionsFromCDATA: false,
        collapseWhitespace: false,
        collapseBooleanAttributes: false,
        removeAttributeQuotes: false,
        removeRedundantAttributes: false
    })))*/
    // Send the output to the correct folder
    .pipe(gulp.dest("dist"))
});
// ===================== Main Tasks ====================
gulp.task("serve:dev", function(callback) {
    runSequence('serve:clean', ['serve:html', 'bower', 'styles', 'serve:assets'], function() {
        bs = browserSync({
            notify: true,
            // tunnel: "",
            server: {
                baseDir: "serve"
            }
        });

        callback();
    });
});

gulp.task('build', function(cb) {
    runSequence(
        'serve:clean',
        'dist:clean',
        ['serve:html', 'bower', 'styles', 'serve:assets'],
        'html',
        'dist:assets',
     cb);
});

// ================== Default Dev Task =================
gulp.task('default', function(cb) {
    runSequence('serve:dev', 'watch', cb)
});
