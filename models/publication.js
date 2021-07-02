// @ts-nocheck
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PublicationSchema = Schema({

    title: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },
    link: String,
    file: String,

    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },

}, {
    timestamps: true
});
PublicationSchema.plugin(require('mongoose-paginate-v2'));
module.exports = mongoose.model('Publication', PublicationSchema);