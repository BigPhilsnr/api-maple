'use strict';

var express = require('express');
var Ordercontroller = require('../controllers/order');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
api.post('/order', md_auth.ensureAuth, Ordercontroller.createOrder);
api.delete('/order/:id', md_auth.ensureAuth, Ordercontroller.deleteOrder);
api.put('/order', md_auth.ensureAuth, Ordercontroller.updateOrder);
api.get('/order', md_auth.ensureAuth, Ordercontroller.getOrder);


module.exports = api;