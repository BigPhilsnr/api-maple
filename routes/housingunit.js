'use strict';

var express = require('express');
var HUnitcontroller = require('../controllers/housingunit');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
api.post('/hunit', md_auth.ensureAuth, HUnitcontroller.createHunit);
api.delete('/hunit', md_auth.ensureAuth, HUnitcontroller.deleteHunit);
api.put('/hunit', md_auth.ensureAuth, HUnitcontroller.updateHunit);
api.get('/hunit', md_auth.ensureAuth, HUnitcontroller.getHunit);
api.get('/hunits', md_auth.ensureAuth, HUnitcontroller.getHunits);


module.exports = api;