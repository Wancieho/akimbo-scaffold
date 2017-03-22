(function (akimbo, $) {
	akimbo.App.Components.InjectComponent = InjectComponent;

	function InjectComponent() {
		this.meta = {
			selector: 'data-inject',
			templateUrl: 'src/app/components/inject/inject.html'
		};

		this.before = function () {
			$('[data-inject] h2').append(' Sub-species');
		};
	}
})(akimbo, jQuery);