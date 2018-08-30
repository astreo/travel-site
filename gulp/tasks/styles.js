var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    extname = require('gulp-extname');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.pcss')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(extname('.css'))
        .pipe(gulp.dest('./app/temp/styles'));
});