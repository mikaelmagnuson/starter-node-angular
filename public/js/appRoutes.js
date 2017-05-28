angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/page2', {
			templateUrl: 'views/page2.html',
			controller: 'Page2Controller'
		});

	$locationProvider.html5Mode(true);

}]);