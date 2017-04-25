'use strict';

module.exports = function($scope, PatientService) {
  $scope.patient = PatientService.patient;

  $scope.ResetPatient = PatientService.ResetPatient;

  $scope.marital_statuses = [
    'Single',
    'Married',
    'Divorced',
    'Life Partner',
    'Separated',
    'Widowed',
    'Other'
  ];
};
