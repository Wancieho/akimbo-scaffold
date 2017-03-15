(function (root) {
	root.App.Config.Routes = Routes;

	var routes = [
		{
			path: '',
			controller: 'HelloController'
		}
	];

	function Routes() {}

	Routes.prototype = {
		get: function () {
			return routes;
		}
	};
})(protected);