'use strict';

var app = require('angular').module('parsley');

app.filter('PrettyKey', require('./pretty_keys'));
