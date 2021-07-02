'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    item: {
        type: Schema.ObjectId,
        ref: 'Item'
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["ACTIVE", "ARCHIVED",'CANCELLED'],
        default: "ACTIVE",
        required: true
    }
});

module.exports = mongoose.model('Order', OrderSchema);