const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const rename = require('gulp-rename');

gulp.task('to-browser', ()=>{
	browserify('es6/main.js')
	.transform('babelify', {
		presets: ['es2015']
	})
	.bundle()
	.pipe(source('main.js'))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(rename('simon-min.js'))
	.pipe(gulp.dest('dist/'));
});

gulp.task('pre-test', function() {
	//source
	//tests
	gulp.src('es6/*.js')
		.pipe(babel())
		.pipe(gulp.dest('es5'));

	//tests
	gulp.src('tests/es6/*.test.js')
		.pipe(babel())
		.pipe(gulp.dest('tests/es5'));
});
