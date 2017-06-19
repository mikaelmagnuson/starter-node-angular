/**
 * Created by mikael on 5/28/17.
 */

angular.module('UserCtrl', []).controller('UserController', function($scope) {

    $scope.goToAccount = function()
    {
        window.location.assign("/login")
    };

});