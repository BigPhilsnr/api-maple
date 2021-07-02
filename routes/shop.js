
'use strict';

var express = require('express');
var Shopcontroller = require('../controllers/shop');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/shops'});

api.post('/shop', md_auth.ensureAuth, Shopcontroller.createShop);
api.delete('/shop/:id', md_auth.ensureAuth, Shopcontroller.deleteShop);
api.put('/shop', md_auth.ensureAuth, Shopcontroller.updateShop);
api.post('/shop/image',[md_auth.ensureAuth,md_upload],Shopcontroller.uploadImage)
api.get('/shop', md_auth.ensureAuth, Shopcontroller.getShop);


module.exports = api;