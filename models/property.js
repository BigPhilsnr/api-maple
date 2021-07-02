// @ts-nocheck
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropertySchema = new Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
        required: true
    },
    activated: {
        type: String,
        default: "INACTIVE"
    },
    desc: {
        type: String
    },

    shortDesc: {
        type: String
    },
    propertyType: {
        type: String,
        required: true
    },
    propertyStatus: {
        type: [String]
    },
    city: {
        type: String
    },
    city: {
        type: String
    },
    acres: {
        type: Number
    },
    // zipCode: {
    //     type: String
    // },
    // neighborhood: {
    //     type: [
    //         String
    //     ]
    // },
    // street: {
    //     type: [
    //         String
    //     ]
    // },

    geoLocation: {
        type: {
            type: String
        },
        coordinates: [Number],

    },
    location: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    },
    formattedAddress: {
        type: String
    },
    features: {
        type: [
            String
        ]
    },
    featured: {
        type: Boolean
    },

    development: {
        type: Boolean,
        default: false
    },


    advertise: {
        type: Boolean,
        default: false
    },
    priceDollar: {
        sale: {
            type: Number
        },
        rent: {
            type: Number
        }
    },
    priceEuro: {
        sale: {
            type: Number
        },
        rent: {
            type: Number
        }
    },
    bedrooms: {
        type: Number
    },
    bathrooms: {
        type: Number
    },
    garages: {
        type: Number
    },
    area: {
        value: {
            type: Number
        },
        unit: {
            type: String
        }
    },
    yearBuilt: {
        type: Number
    },
    ratingsCount: {
        type: Number
    },
    ratingsValue: {
        type: Number
    },
    additionalFeatures: {
        type: [{
            name: String,
            value: String
        }]
    },
    gallery: {
        type: [{
            small: String,
            medium: String,
            big: String,
            link: Boolean
        }]
    },
    plans: {
        type: [{
            name: String,
            desc: String,
            area: {
                value: String,
                unit: String,

            },
            room: Number,
            baths: Number,
            image: String,

        }]
    },
    videos: {
        type: [{
            name: String,
            link: String,
        }]
    },
    published: {
        type: Date,
        default: Date.now
    },
    lastUpdate: {
        type: Date,
        default: Date.now
    },
    views: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    pgroup: {
        type: Schema.ObjectId,
        ref: 'Pgroup'
    }
}, {
    timestamps: true
});
PropertySchema.index({
    geoLocation: '2dsphere'
});

PropertySchema.plugin(require('mongoose-paginate'));

module.exports = mongoose.model('Property', PropertySchema);