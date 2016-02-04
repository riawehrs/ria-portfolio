var gulp = require('gulp');
var	server = require('gulp-express');
var	sass = require('gulp-sass');
var	jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var	autoprefixer = require('gulp-autoprefixer');
var	plumber = require('gulp-plumber');
var	app = require('./app');

var onError = function(err) {
	err = {
		'Name': err.name,
		'File': err.file,
		'Reason': err.reason,
		'Message': err.message
	}
	console.log(err);
	this.emit('end');
};

gulp.task('sass', function() {
	return gulp.src('src/sass/*.scss')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(sass({
			outputStyle: 'compressed',
			errLogToConsole: true
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: true
		}))
		.pipe(gulp.dest('public/css'))
		.pipe(server.notify());
});

gulp.task('lint', function() {
	return gulp.src('src/js/*.js')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
    .pipe(uglify({ 'mangle': false }))
		.pipe(gulp.dest('public/js'))
		.pipe(server.notify());
});

gulp.task('server', function () {
	// Start the server at the beginning of the task
	server.run(['./bin/www']);

	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js',['lint']);

});

gulp.task('default', ['sass', 'lint', 'server'], function() {

});