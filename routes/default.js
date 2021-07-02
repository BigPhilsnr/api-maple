'use strict';

var express = require('express');
var api = express.Router();
var DefaultController = require('../controllers/default');

api.get('/', DefaultController.help);
api.post('/status', DefaultController.status);
api.get( '*',DefaultController.notFound)

module.exports = api;
