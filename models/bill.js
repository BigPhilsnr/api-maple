// @ts-nocheck
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BillSchema = Schema({
    description: String,
    hunit: {
        type: Schema.ObjectId,
        ref: 'HUnit',
    },
    property: {
        type: Schema.ObjectId,
        ref: 'Property',

    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    refNumber: {
        type:String,
    },
    paid: {
        type: Number,
        default: 0
    },
    amount: {
        type: Number,
        default: 0
    },
    dueDate: {
        type:Date,
    }
  
}, {
    timestamps: true
});

BillSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Bill', BillSchema);