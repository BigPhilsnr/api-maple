'use strict';

var express = require('express');
var Agentcontroller = require('../controllers/agent');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
api.post('/agent', md_auth.ensureAuth, Agentcontroller.createAgent);
api.delete('/agent/:id', md_auth.ensureAuth, Agentcontroller.deleteAgent);
api.put('/agent', md_auth.ensureAuth, Agentcontroller.updateAgent);
api.get('/agent', md_auth.ensureAuth, Agentcontroller.getAgent);


module.exports = api;