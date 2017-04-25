'use strict';

module.exports = function($scope, PatientService) {
  $scope.patient = PatientService.patient;

  $scope.ResetPatient = PatientService.ResetPatient;

  $scope.relevant_relationships = [
    'Grandparents',
    'Mother',
    'Father',
    'Siblings',
    'Children'
  ];
  
  $scope.diseases = [
    'Cancer',
    'Heart Disease',
    'Diabetes',
    'Stroke',
    'High Blood Pressure',
    'High Cholesterol',
    'Liver Disease',
    'Alcohol / Drug Abuse',
    'Anxiety / Depression',
    'Tuberculosis',
    'Anesthesia Complications',
    'Genetic Disorder',
    'Hypertension',
    'Heart Attack',
    'Chronic Obstructive Pulmonary Disease',
    'Hepatitis',
    'Back Pain',
    'Psychotic disorder',
    'Irritable bowel syndrome',
    'Seizures',
    'Substance Abuse',
    'Depression',
    'Kidney Disease',
    'HIV',
    'Gastro esophageal reflux disease',
    'Thyroid disease',
    'Bipolar',
    'Eye disease',
    'Arthritis',
    'Asthma'
  ];
};
