'use strict';

var express = require('express');
var Admincontroller = require('../controllers/admin');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post('/admin', md_auth.ensureAuth, Admincontroller.createAdmin);
api.delete('/admin', md_auth.ensureAuth, Admincontroller.deleteAdmin);
api.put('/admin', md_auth.ensureAuth, Admincontroller.updateAdmin);
api.get('/admin', md_auth.ensureAuth, Admincontroller.getAdmin);


module.exports = api;