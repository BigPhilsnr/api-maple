// @ts-nocheck
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },

    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
       
    },
    userType: {
        type: String
    },
    idNumber: {
        type: String
    },
    receiveNewsletter: {
        type: Boolean
    },
    avatar: {
        type: String

    }
});
UserSchema.index({'$**': 'text'});
module.exports = mongoose.model('User', UserSchema);