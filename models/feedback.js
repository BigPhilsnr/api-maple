// @ts-nocheck
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FeedbackSchema = Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    property:{
        type:Schema.ObjectId, 
        ref: 'Property'

    }

}, {
    timestamps: true
});

FeedbackSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Feedback', FeedbackSchema);