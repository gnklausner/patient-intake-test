'use strict';

module.exports = function($location) {
  var self = this;
  
  self.patient = {};

  self.GetPatient = function() {
    return self.patient;
  };

  self.SetPatient = function(new_patient) {
    self.patient = new_patient;
  };

  self.ResetPatient = function() {
    self.patient = {};
    $location.path('/');
  };

  self.Submit = function() {
    console.log(self.patient);
    self.patient.submitted = true;
    $location.path('/submit');
  };
};