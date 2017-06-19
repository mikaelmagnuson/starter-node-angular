angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

        // login and registration page
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthController'
        })

        // user home page
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthController'
        })

        // user home page
		.when('/:id', {
			templateUrl: 'views/user.html',
			controller: 'UserController'
		});

		// user profile page
		// TODO:

	$locationProvider.html5Mode(true);

}]);