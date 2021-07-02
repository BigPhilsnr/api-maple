'use strict';

var express = require('express');
var Tenantcontroller = require('../controllers/tenant');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post('/tenant', md_auth.ensureAuth, Tenantcontroller.createTenant);
api.delete('/tenant', md_auth.ensureAuth, Tenantcontroller.deleteTenant);
api.put('/tenant', md_auth.ensureAuth, Tenantcontroller.updateTenant);
api.get('/tenant', md_auth.ensureAuth, Tenantcontroller.getTenant);


module.exports = api;