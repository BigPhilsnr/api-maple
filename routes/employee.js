'use strict';

var express = require('express');
var Employeecontroller = require('../controllers/employee');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
api.post('/employee', md_auth.ensureAuth, Employeecontroller.createEmployee);
api.delete('/employee/:id', md_auth.ensureAuth, Employeecontroller.deleteEmployee);
api.put('/employee', md_auth.ensureAuth, Employeecontroller.updateEmployee);
api.get('/employee', md_auth.ensureAuth, Employeecontroller.getEmployee);

module.exports = api;