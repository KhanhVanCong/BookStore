const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const smushit = require('gulp-smushit'); // image optimizer
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const uglify = require('gulp-minify'); // minify js files


function complierSass() {
  return gulp.src('src/assets/scss/**/*.scss', '!./scss/**/_*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/assets/css'));
}

function jsMinify() {
  return gulp.src('src/assets/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
}

//  [ image optimizer ] start
function imgMinify() {
  return gulp.src('src/assets/images/**/*.{jpg,png}')
    .pipe(smushit())
    .pipe(gulp.dest('dist/assets/images'));
}
//  [ image optimizer ] end

function buildHTML() {
  return gulp.src('src/html/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      indent: true,
    }))
    .pipe(gulp.dest('dist'));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'dist/',
    },
  });

  gulp.watch('src/assets/images/**/*.{jpg,png}', imgMinify);
  gulp.watch('src/assets/js/**/*.js', jsMinify);
  gulp.watch('src/assets/scss/*.scss', complierSass);
  gulp.watch('src/html/**/*.html', buildHTML);
  gulp.watch('./**/*.+(html|css|js)').on('change', browserSync.reload);
}

function defaultTask() {
  watch();
}

exports.buildHTML = buildHTML;
exports.complierSass = complierSass;
exports.imgMinify = imgMinify;
exports.jsMinify = jsMinify;
exports.watch = watch;
exports.default = defaultTask;