var gulp = 			require('gulp');
var clean =         require('gulp-clean');
var sass = 			require('gulp-sass'); 
var rename =        require('gulp-rename');  
var minifyCss = 	require('gulp-minify-css');
var copy =			require('gulp-copy');

//style paths
var sassFiles = 'custom.scss',  
    cssDest = 'dist/';

//app dest path
var dist = 'dist/';

gulp.task('styles', ['clean'], function(){  
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(rename({
        	basename: 'custom',
        	extname: '.css'
        }))
        .pipe(gulp.dest(cssDest));
});

gulp.task('clean', function () {
    return gulp.src(dist, {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean', 'styles']);
