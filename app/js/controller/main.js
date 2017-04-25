'use strict';

module.exports = function($scope, PatientService, $location) {
  $scope.patient = PatientService.patient;

  $scope.ResetPatient = PatientService.ResetPatient;

  $scope.Submit = PatientService.Submit;

  $scope.IsActive = function (route) {
        return route === $location.path();
  };
};

