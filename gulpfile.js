var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', [
	'clean',
	'build'
]);

gulp.task('clean', function () {
	return del([
		'dist'
	]);
});

gulp.task('jquery', ['clean'], function () {
	return gulp.src('bower_components/akimbo/dist/akimbo.min.js')
			.pipe(gulp.dest('dist/src/js'));
});

gulp.task('akimbo', ['clean'], function () {
	return gulp.src('bower_components/jquery/dist/jquery.min.js')
			.pipe(gulp.dest('dist/src/js'));
});

gulp.task('build', ['jquery', 'akimbo'], function () {
	var html = gulp.src(['src/**/*.html', '!src/index.html'])
			.pipe(gulp.dest('dist/src'));

	var index = gulp.src('src/index.html')
			.pipe(gulp.dest('dist'));

	var app = gulp.src('src/**/*.js')
			.pipe(concat('app.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('dist/src/js'));
});

gulp.task('watch', function () {
	gulp.watch('src/**/*', ['build']);
});