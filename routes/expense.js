'use strict';

var express = require('express');
var Expensecontroller = require('../controllers/expense');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');
api.post('/expense', md_auth.ensureAuth, Expensecontroller.createExpense);
api.delete('/expense/:id', md_auth.ensureAuth, Expensecontroller.deleteExpense);
api.put('/expense', md_auth.ensureAuth, Expensecontroller.updateExpense);
api.get('/expense', md_auth.ensureAuth, Expensecontroller.getExpense);


module.exports = api;