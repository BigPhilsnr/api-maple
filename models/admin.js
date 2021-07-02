'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AdminSchema = Schema({
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
    }
}, {
    timestamps: true
});

AdminSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Admin', AdminSchema);