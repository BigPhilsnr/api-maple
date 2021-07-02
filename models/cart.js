'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CartSchema = Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    item: [{
        type: Schema.ObjectId,
        ref: 'Item'
    }],
    status: {
        type: String,
        enum: ['PAID','PENDING','CANCELLED']
    }
});

module.exports = mongoose.model('Cart', CartSchema);