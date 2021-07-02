'use strict';

var express = require('express');
var Invoicecontroller = require('../controllers/invoie');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
api.post('/invoice', md_auth.ensureAuth, Invoicecontroller.createInvoice);
api.delete('/invoice/:id', md_auth.ensureAuth, Invoicecontroller.deleteInvoice);
api.put('/invoice', md_auth.ensureAuth, Invoicecontroller.updateInvoice);
api.get('/invoice', md_auth.ensureAuth, Invoicecontroller.getInvoice);


module.exports = api;