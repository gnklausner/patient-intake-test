'use strict';

var app = require('angular').module('parsley');

app.controller('MainController', require('./main'));
app.controller('DemographicsController', require('./demographics'));
app.controller('MedicalHistoryController', require('./medical_history'));
app.controller('ContractController', require('./contract'));
app.controller('SummaryController', require('./summary'));
app.controller('SubmitController', require('./submit'));
