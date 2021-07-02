'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FileSchema = Schema({
    fieldName: String,
    originalFilename: String,
    path: String,
    size: Number,
    name: String,
    type: String
});

module.exports = mongoose.model('File', FileSchema);