'use strict';

var express = require('express');
var Billcontroller = require('../controllers/bill');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post('/bill', md_auth.ensureAuth, Billcontroller.createBill);
api.delete('/bill', md_auth.ensureAuth, Billcontroller.deleteBill);
api.put('/bill', md_auth.ensureAuth, Billcontroller.updateBill);
api.get('/bill', md_auth.ensureAuth, Billcontroller.getBill);


module.exports = api;