angular.module('AuthCtrl', []).controller('AuthController', function($scope, $location) {
    $scope.registration = false;
    $scope.formText = "Login to your account";
    $scope.linkText = "New user? Sign up instead.";

    $scope.toggleRegister = function()
    {
        $scope.registration = !$scope.registration;
        toggleText();
    };

    var toggleText = function()
    {
        if ($scope.registration)
        {
            $scope.formText = "Register for a new account";
            $scope.linkText = "Already have an account? Login instead.";
        }
        else
        {
            $scope.formText = "Login to your account";
            $scope.linkText = "New user? Sign up instead."
        }

    };

    $scope.submitForm = function()
    {
        if ($scope.registration)
        {
            $.ajax({
                type: "POST",
                url: "/v1/user",
                data: JSON.stringify({
                    "name": $scope.fullName,
                    "email": $scope.email,
                    "password": $scope.password
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $location.path('/login');
                },
                error: function (errMsg) {
                    $scope.error = errMsg.responseJSON.message;
                    $scope.$apply();
                }
            });
            //TODO: create new user and redirect to login page
            console.log("Creating new account");
        }
        else
        {
            // TODO: login user and redirect to index
            console.log("Logging in to existing account account");
            $location.path("/akdjer");
        }
    };

    $scope.goToHomepage = function() {
        $location.path("/");
    };

    // var init = function()
    // {
    //     $scope.registration = false;
    //     $scope.formText = "Login to your account";
    //     $scope.linkText = "New user? Sign up instead.";
    // }
    //
    // init();
    //
});