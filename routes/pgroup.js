'use strict';

var express = require('express');
var Pgroupcontroller = require('../controllers/pgroup');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post('/pgroup', md_auth.ensureAuth, Pgroupcontroller.createPgroup);
api.delete('/pgroup', md_auth.ensureAuth, Pgroupcontroller.deletePgroup);
api.put('/pgroup', md_auth.ensureAuth, Pgroupcontroller.updatePgroup);
api.get('/pgroup', md_auth.ensureAuth, Pgroupcontroller.getPgroup);


module.exports = api;