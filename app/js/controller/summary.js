'use strict';

module.exports = function($scope, PatientService) {
  $scope.patient = PatientService.patient;

  $scope.Submit = PatientService.Submit;
};
