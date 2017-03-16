(function (akimbo) {
	akimbo.App.Controllers.HelloController = HelloController;

	function HelloController() {
		this.meta = {
			selector: 'data-content',
			templateUrl: 'src/app/controllers/hello/hello.html'
		};

		this.constructor = function (scope) {
			scope.locationService = new akimbo.App.Services.LocationService();
		};

		this.before = function (scope) {
			$('body').append('<p>Calling 3rd party location detection service...</p>');

			scope.locationService.listen('read.done', function (data) {
				$('body').append(JSON.stringify(data));
			}, scope);

			scope.locationService.read(scope);
		};
	}
})(akimbo);