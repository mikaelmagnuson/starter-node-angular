angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// login page
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})

		// registration page
		.when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		});

		// user profile page
		// TODO:

	$locationProvider.html5Mode(true);

}]);