// @ts-nocheck
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PropertyType= Schema({
    title: String,
    description: String,

}, {
    timestamps: true
});

PropertyType.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Propertytype', PropertyType);