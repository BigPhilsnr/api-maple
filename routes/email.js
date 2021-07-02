'use strict';

var express = require('express');
var Emailcontroller = require('../controllers/email');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post('/email', md_auth.ensureAuth, Emailcontroller.createEmail);
api.delete('/email', md_auth.ensureAuth, Emailcontroller.deleteEmail);
api.put('/email', md_auth.ensureAuth, Emailcontroller.updateEmail);
api.get('/email', md_auth.ensureAuth, Emailcontroller.getEmail);


module.exports = api;