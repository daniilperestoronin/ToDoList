(function () {
    'use strict';

    angular.module('Authentication')
        .controller('AuthenticationController',
            ['$scope', '$rootScope', '$location', 'AuthenticationService',
                function ($scope, $rootScope, $location, AuthenticationService) {
                    // reset login status
                    AuthenticationService.ClearCredentials();

                    $scope.login = function () {
                        $scope.dataLoading = true;
                        AuthenticationService.Login($scope.username, $scope.password, function (response) {
                            if (response.success) {
                                AuthenticationService.SetCredentials($scope.username, $scope.password);
                                $location.path('/tasks');
                            } else {
                                $scope.error = response.message;
                                $scope.dataLoading = false;
                            }
                        });
                    };
                }]);

})();
