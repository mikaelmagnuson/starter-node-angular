angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tagline = 'First Page...';

	$scope.goToAccount = function()
	{
		window.location.assign("/login")
	}

});