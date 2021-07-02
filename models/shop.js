'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ShopSchema = new Schema({
    name: String,
    description: String,
    images: [{
        type: Schema.ObjectId,
        autopopulate: true,
        ref: 'File'
    }],
    profile: {
        type: Schema.ObjectId,
        ref: 'File'
    },
    features: [{
        type: String
    }],
    location: {
        lat: {
            type: Number
        },
        lon: {
            type: Number
        }
    },
    shop: {
        type: Schema.ObjectId,
        ref: 'Shop',
        autopopulate: true

    }
}, {
    timestamps: true
});

ShopSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Shop', ShopSchema);