'use strict';

var express = require('express');
var Feedbackcontroller = require('../controllers/feedback');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post('/feedback', md_auth.ensureAuth, Feedbackcontroller.createFeedback);
api.delete('/feedback', md_auth.ensureAuth, Feedbackcontroller.deleteFeedback);
api.put('/feedback', md_auth.ensureAuth, Feedbackcontroller.updateFeedback);
api.get('/feedback', md_auth.ensureAuth, Feedbackcontroller.getFeedback);


module.exports = api;