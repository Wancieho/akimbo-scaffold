(function (akimbo, $) {
	akimbo.App.Controllers.HelloController = HelloController;

	function HelloController() {
		this.meta = {
			selector: 'data-content',
			templateUrl: 'src/app/controllers/hello/hello.html',
			components: [
				akimbo.App.Components.InjectComponent
			]
		};

		this.constructor = function (scope) {
			scope.locationService = new akimbo.App.Services.LocationService();
		};

		this.before = function (scope) {
			$('h1').after('<p>Calling 3rd party location detection service...</p>');

			scope.locationService.listen('read.done', function (data) {
				$('h1').after(JSON.stringify(data));
			}, scope);

			scope.locationService.read(scope);
		};
	}
})(akimbo, jQuery);