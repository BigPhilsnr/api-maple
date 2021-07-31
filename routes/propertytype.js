'use strict';

var express = require('express');
var Propertytypecontroller = require('../controllers/propertytype');
var Publicationcontroller = require('../controllers/publication');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post('/propertytype', md_auth.ensureAuth, Propertytypecontroller.createPropertytype);
api.delete('/propertytype', md_auth.ensureAuth, Propertytypecontroller.deletePropertytype);
api.put('/propertytype', md_auth.ensureAuth, Propertytypecontroller.updatePropertytype);
api.get('/ptype',  Publicationcontroller.getPropertyTypes);


module.exports = api;