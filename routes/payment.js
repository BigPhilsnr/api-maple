'use strict';

var express = require('express');
var Paymentcontroller = require('../controllers/payment');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
api.post('/payment', md_auth.ensureAuth, Paymentcontroller.createPayment);
api.delete('/payment/:id', md_auth.ensureAuth, Paymentcontroller.deletePayment);
api.put('/payment', md_auth.ensureAuth, Paymentcontroller.updatePayment);
api.get('/payment', md_auth.ensureAuth, Paymentcontroller.getPayment);


module.exports = api;