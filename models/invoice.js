'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var InvoiceSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    amount: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },
    due: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        default: 'UNPAID'
    },
    property: {
        type: Schema.ObjectId,
        ref: 'Property',
        required: true,
    }
}, {
    timestamps: true
});

InvoiceSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Invoice', InvoiceSchema);