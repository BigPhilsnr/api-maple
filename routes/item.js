'use strict';

var express = require('express');
var Itemcontroller = require('../controllers/item');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/items'});

api.post('/item', md_auth.ensureAuth, Itemcontroller.createItem);
api.delete('/item/:id', md_auth.ensureAuth, Itemcontroller.deleteItem);
api.put('/item',[md_auth.ensureAuth,md_upload],Itemcontroller.updateItemFull);
api.post('/item/image',[md_auth.ensureAuth,md_upload],Itemcontroller.updateItemFull)
api.get('/item', md_auth.ensureAuth, Itemcontroller.getItem);


module.exports = api;