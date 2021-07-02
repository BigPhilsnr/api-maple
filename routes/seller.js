'use strict';

var express = require('express');
var Sellercontroller = require('../controllers/seller');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post('/seller', md_auth.ensureAuth, Sellercontroller.createSeller);
api.delete('/seller/:id', md_auth.ensureAuth, Sellercontroller.deleteSeller);
api.put('/seller', md_auth.ensureAuth, Sellercontroller.updateSeller);
api.get('/seller', md_auth.ensureAuth, Sellercontroller.getSeller);


module.exports = api;