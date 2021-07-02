'use strict';

var express = require('express');
var Ownercontroller = require('../controllers/owner');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post('/owner', md_auth.ensureAuth, Ownercontroller.createOwner);
api.delete('/owner', md_auth.ensureAuth, Ownercontroller.deleteOwner);
api.put('/owner', md_auth.ensureAuth, Ownercontroller.updateOwner);
api.get('/owner', md_auth.ensureAuth, Ownercontroller.getOwner);


module.exports = api;