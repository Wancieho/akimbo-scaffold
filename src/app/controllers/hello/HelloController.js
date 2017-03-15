(function (root) {
	root.App.Controllers.HelloController = HelloController;

	function HelloController() {
		this.meta = {
			selector: 'data-content',
			templateUrl: 'src/app/controllers/hello/hello.html'
		};
	}
})(protected);