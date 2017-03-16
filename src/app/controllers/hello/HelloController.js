(function (akimbo) {
	akimbo.App.Controllers.HelloController = HelloController;

	function HelloController() {
		this.meta = {
			selector: 'data-content',
			templateUrl: 'src/app/controllers/hello/hello.html'
		};

		this.before = function () {
			$('body').append('akimbo.App.Controllers.HelloController.before');
		};
	}
})(akimbo);