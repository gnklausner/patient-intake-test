'use strict';

module.exports = function($scope, PatientService, $location) {
  $scope.IsActive = function (route) {
        return route === $location.path();
  };
};

