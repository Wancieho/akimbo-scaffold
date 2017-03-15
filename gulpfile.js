var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', [
	'build'
]);

gulp.task('build', function () {
	var html = gulp.src(['src/**/*.html', '!src/index.html'])
			.pipe(gulp.dest('dist/src'));

	var index = gulp.src('src/index.html')
			.pipe(gulp.dest('dist'));

	var app = gulp.src('src/**/*.js')
			.pipe(concat('app.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
	gulp.watch('src/**/*', ['build']);
});