// @ts-nocheck
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HUnitSchema = Schema({
    description: {
        type: String,
    },
    floor: Number,
    hnumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    deposit: {
        type: Number,
    },
    factor: {
        type: [String]
    },
    property: {
        type: Schema.ObjectId,
        ref: 'Property',
        required: true
    },
    availabilityDate: {
        type:Date,
    },
    tenants: {
        type: [Schema.ObjectId],
        ref: 'User'
    }
}, {
    timestamps: true
});
HUnitSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('HUnit', HUnitSchema);