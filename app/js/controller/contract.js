'use strict';

module.exports = function($scope, PatientService) {
  var CONTRACT = 'Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.' + 
             ' Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.' + 
             ' Maecenas sed diam eget risus varius blandit sit amet non magna. \n' +
             'Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo.' +
             ' Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.' +
             ' Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.';

  $scope.patient = PatientService.patient;

  $scope.ResetPatient = PatientService.ResetPatient;

  $scope.contract = CONTRACT;
};
