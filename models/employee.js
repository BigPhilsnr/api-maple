'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EmployeeSchema = Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    property: [{
        type: Schema.ObjectId,
        ref: 'Property'
    }],
    role: {
        type: String
    },
    fees: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);