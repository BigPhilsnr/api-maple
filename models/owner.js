// @ts-nocheck
'use strict';

var mongoose = require('mongoose');
const pgroup = require('./pgroup');
var Schema = mongoose.Schema;
var OwnerSchema = Schema({
    description: String,
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    status: {
        type: String,
        default: "ACTIVE",
    },
    type: {
        type: String,
        required: true,
        unique: true
    },
    pgroup: {
        type: Schema.ObjectId,
        ref: 'Pgroup'
    }
}, {
    timestamps: true
});

OwnerSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Owner', OwnerSchema);