// @ts-nocheck
'use strict';

var express = require('express');
var PublicationController = require('../controllers/publication');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/publications'});

api.post('/publication', [md_auth.ensureAuth,md_upload], PublicationController.createPublication);
api.get('/publication', md_auth.ensureAuth, PublicationController.getPublication);
api.delete('/publication', md_auth.ensureAuth, PublicationController.deletePublication);
api.put('/publication', [md_auth.ensureAuth,md_upload], PublicationController.updatePublication);

module.exports = api;
