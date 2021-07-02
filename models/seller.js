'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SellerSchema = Schema({
    description: String,
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

SellerSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Seller', SellerSchema);