// @ts-nocheck
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PgroupSchema = Schema({
    title: String,
    description: String,
    address:String,
    location: {
        lat: Number,
        lng: Number,
    },
    
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        default: "ACTIVE",
        enum : ['ACTIVE','DEACTIVATED'],
    }
}, {
    timestamps: true
});

PgroupSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Pgroup', PgroupSchema);