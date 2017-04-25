'use strict';

require('es5-shim');
require('es5-sham');

require('jquery');
var angular = require('angular');
require('angular-route');
require('angular-ui-bootstrap');

var app = angular.module('parsley', [ 'ngRoute', 'ui.bootstrap' ]);

require('./service');
require('./controller');
require('./filter');

app.config(function($routeProvider) {
  $routeProvider.when('/demographics', {
    templateUrl: 'views/demographics.html',
    controller: 'DemographicsController'
  })
  .when('/history', {
    templateUrl: 'views/medical_history.html',
    controller: 'MedicalHistoryController'
  })
  .when('/contract', {
    templateUrl: 'views/contract.html',
    controller: 'ContractController'
  })
  .when('/summary', {
    templateUrl: 'views/summary.html',
    controller: 'SummaryController'
  })
  .when('/submit', {
    templateUrl: 'views/submit.html',
    controller: 'SubmitController'
  })
  .otherwise({
    redirectTo: '/demographics',
  });
});
