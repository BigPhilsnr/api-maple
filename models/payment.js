// @ts-nocheck
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PaymentSchema = Schema({
    title: {
        type: String,
    },
    refNumber: String,
    description: String,
    purpose: String,
    file: String,
    category: String,
    paymentDate: Date,
    paymentMethod: String,
    accountDetails: String,
    status:{
        type:String,
        default:"PENDING"
    },
    bill: {
        type: Schema.ObjectId,
        ref: 'Bill'
    },
    amount: {
        type: Number,
        required: true
    },
    hunit: {
        type: Schema.ObjectId,
        ref: 'HUnit',
        required: true,
    }
}, {
    timestamps: true
});

PaymentSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Payment', PaymentSchema);