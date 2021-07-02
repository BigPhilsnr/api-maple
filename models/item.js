'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ItemSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    measurement: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    features: [{
        type: String
    }],
    shop: {
        type: Schema.ObjectId,
        ref: 'Shop',
        required: true
    },
    images: [{
        type: Schema.ObjectId,
        ref: 'File'
    }]
}, {
    timestamps: true
});
ItemSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Item', ItemSchema);