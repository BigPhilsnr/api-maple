'use strict';

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'Secret_Key1-2-4.';

exports.createtoken = function (user) {
    var payload = {
        sub: user._id,
        userId: user._id,
        fullName: user.fullName,
        email: user.email,
        gender: user.gender,
        phone: user.phone,
        avatar: user.avatar,
        iat: moment().unix(),
        expired: moment().add(3, 'days').unix()
    };
    return jwt.encode(payload, secret);
};
