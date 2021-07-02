'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// @ts-ignore
var EmailSchema = Schema({
    email: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

EmailSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Email', EmailSchema);