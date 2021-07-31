// @ts-nocheck
'use strict';

var Property = require('../models/property');
const {
    param
} = require('../routes/user');
async function createProperty(req, res) {
    try {
        console.log(req.body)
        req.body.user = req.user.userId;
        delete req.body._id
        let property = req.body;

        if (property.lat) {
            property.location = {
                lat: parseFloat(property.lat),
                lng: parseFloat(property.lng)
            };


            property.geoLocation = {
                type: "Point",
                coordinates: [parseFloat(property.lat), parseFloat(property.lng)]
            }
            console.log(property.geoLocation)
        }

        if (req.files && req.files.gallery) {
            if (Array.isArray(req.files.gallery)) {
                property.gallery = req.files.gallery.map(image => {
                    return {
                        small: image.path,
                        medium: image.path,
                        big: image.path
                    }
                });
            } else {
                const image = req.files.gallery.path
                property.gallery = [{
                    small: image,
                    medium: image,
                    big: image
                }]
            }

        }

        if (property.videos) {
            if (Array.isArray(property.videos)) {
                property.videos = property.videos.map(link => {
                    const pair = link.split('###$$££')
                    return {
                        name: pair[0],
                        link: pair[1]
                    }
                })
            } else {
                property.videos = [{
                    name: property.videos.split('###$$££')[0],
                    link: property.videos.split('###$$££')[1]
                }]
            }
        }
        if (property.additionalFeatures) {
            if (Array.isArray(property.additionalFeatures)) {
                property.additionalFeatures = property.additionalFeatures.map(content => {
                    const pair = content.split('###$$££')
                    return {
                        name: pair[0],
                        value: pair[1]
                    }
                })
            } else {
                const pair = property.additionalFeatures.split('###$$££')
                property.additionalFeatures = [{
                    name: pair[0],
                    value: pair[1]
                }]
            }
        }

        if (property.features) {
            if (!Array.isArray(property.features)) {
                property.features = [property.features]
            }
        }

        if (property.category) {
            if (!Array.isArray(property.category)) {
                property.features = [property.category]
            }
        }


        if (!property.gallery) {
            property.gallery = [];
        }
        if (property.link) {
            if (Array.isArray(property.link)) {
                property.link.forEach(image => {
                    property.gallery.push({
                        small: image,
                        medium: image,
                        big: image,
                        link: true
                    })
                });
            } else {
                const image = property.link
                property.gallery.push({
                    small: image,
                    medium: image,
                    big: image,
                    link: true
                });
            }

        }

        property.area = {
            value: property.area,
            unit: 'ft'
        }

        property.priceDollar = {};
        property.priceEuro = {};
        property.priceDollar.rent = property.rent
        property.priceEuro.rent = property.rent;
        property.priceDollar.sale = property.sale;
        property.priceEuro.sale = property.sale;
        property.id = 0;

        let propertyResult = await new Property(property).save();
        propertyResult = await Property.findById(propertyResult._id).populate('user');
        return res.status(200).send({
            property: propertyResult
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error.message
        });
    }
}

async function updateProperty(req, res) {
    try {
        console.log(req.body)
        const id = req.body._id
        delete req.body._id
        delete req.body.pgroup

        req.body.user = req.user.userId;
        let property = req.body;

        if (property.lat) {

            property.location = {
                lat: parseFloat(property.lat),
                lng: parseFloat(property.lng)
            };

            property.geoLocation = {
                type: "Point",
                coordinates: [parseFloat(property.lat), parseFloat(property.lng)]
            }
        }

        if (!property.gallery) {
            property.gallery = []
        }

        if (property.link) {
            if (Array.isArray(property.link)) {
                property.link.forEach(image => {
                    property.gallery.push({
                        small: image,
                        medium: image,
                        big: image,
                        link: true
                    })
                });
            } else {
                const image = property.link
                property.gallery.push({
                    small: image,
                    medium: image,
                    big: image,
                    link: true
                });
            }

        }

        if (req.files && req.files.gallery) {
            if (Array.isArray(req.files.gallery)) {
                req.files.gallery.forEach(image => {
                    property.gallery.push({
                        small: image.path,
                        medium: image.path,
                        big: image.path,
                        link: false
                    })
                });
            } else {
                const image = req.files.gallery.path
                property.gallery.push({
                    small: image,
                    medium: image,
                    big: image,
                    link: false
                });
            }

        }

        if (property.videos && property.videos != '') {
            if (Array.isArray(property.videos)) {
                property.videos = property.videos.map(link => {
                    const pair = link.split('###$$££')
                    return {
                        name: pair[0],
                        link: pair[1]
                    }
                })
            } else {
                const pair = property.videos.split('###$$££')
                property.videos = [{
                    name: pair[0],
                    link: pair[1]
                }]
            }
        }

        if (property.additionalFeatures) {
            if (Array.isArray(property.additionalFeatures)) {
                property.additionalFeatures = property.additionalFeatures.map(content => {
                    const pair = content.split('###$$££')
                    return {
                        name: pair[0],
                        value: pair[1]
                    }
                })
            } else {
                const pair = property.additionalFeatures.split('###$$££')
                property.additionalFeatures = [{
                    name: pair[0],
                    value: pair[1]
                }]
            }
        }

        if (property.features) {
            if (!Array.isArray(property.features)) {
                property.features = [property.features]
            }
        }

        property.area = {
            value: property.area,
            unit: 'ft'
        }

        property.priceDollar = {};
        property.priceEuro = {};
        property.priceDollar.rent = property.rent
        property.priceEuro.rent = property.rent;
        property.priceDollar.sale = property.sale;
        property.priceEuro.sale = property.sale;

        property.id = Math.floor(Math.random() * 10000);;

        property = await Property.findByIdAndUpdate({
            _id: id
        }, property);
        property = await Property.findById(id).populate('user');

        return res.status(200).send({
            property: property
        });

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }
}

async function getProperty(req, res) {
    try {

        if (req.query.id) {
            const property = await Property.findById(req.query.id).populate('user');
            return res.status(200).send({
                property: property
            })
        }

        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        let query = req.query;
        delete query.page;
        delete query.limit;

        const propertys = await Property.paginate(query, {
            limit: limit,
            page: page
        });

        return res.status(200).send({
            propertys: propertys
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}

const filterPropertyData = function (params, page, perPage) {

    const filter = {};
    if (!page) {
        page = 1;
    }

    if (!perPage) {
        perPage = 10;
    }


    filter.page = page;
    filter.limit = perPage;
    if (params) {

        if (params.propertyType) {
            filter.propertyType = params.propertyType.name;
        }

        if (params.advertise) {
            filter.advertise = params.advertise;
        }

        if (params.featured) {
            filter.featured = params.featured

        }

        if (params.propertyStatus && !Array.isArray(params.propertyStatus)) {
            params.propertyStatus = [params.propertyStatus]
        }

        if (params.propertyStatus && params.propertyStatus.length > 0) {
           
            if (params.propertyStatus && params.propertyStatus.length) {
                const statuses = [];

                params.propertyStatus.forEach(status => {
                    statuses.push(status.name);
                });

                filter.propertyStatus = {
                    $in: statuses
                };
            }
        }

        if (params.coords) {
            const lat = params.coords[0];
            const lng = params.coords[1]
            filter.geoLocation = {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng]
                    },
                }
            }
            JSON.stringify(filter.geoLocation)

        }

        if (params.price) {
            let from = 0;
            let to = 1000000000000000;

            if (from) {
                from = from - 1;
            }


            if (params.price.from) {
                from = params.price.from;
            }
            if (params.price.to) {
                to = params.price.to;
            }


            if (to !== 1000000000000000 || from !== 0) {

                if (params.propertyStatus && params.propertyStatus.length > 0) {
                    params.propertyStatus = params.propertyStatus.map(status => status.name)

                }

                if (params.propertyStatus && params.propertyStatus.includes("For Sale") && params.propertyStatus.includes("For Rent")) {
                    filter.$or[{
                        'priceDollar.sale': {
                            $gt: from,
                            $lt: to
                        },
                        'priceDollar.rent': {
                            $gt: from,
                            $lt: to
                        }
                    }]

                } else {

                    if (params.propertyStatus && params.propertyStatus.includes("For Sale")) {
                        filter['priceDollar.sale'] = {
                            $gt: from,
                            $lt: to
                        };
                    } else if (params.propertyStatus && params.propertyStatus.includes("For Rent")) {
                        filter['priceDollar.rent'] = {
                            $gt: from,
                            $lt: to
                        };
                    } else {

                        filter['priceDollar.sale'] = {
                            $gt: from,
                            $lt: to
                        };
                    }

                }




            }

        }


        if (params.city) {
            if (params.city.name !== 'Any where') {
                filter.city = params.city.name;
            }
        }


        if (params.bedrooms) {
            let from = 0;
            let to = 50;

            if (params.bedrooms.from || params.bedrooms.to) {
                filter.bedrooms = {}
            }

            if (params.bedrooms.from) {
                from = params.bedrooms.from;
                from = Number(from);
                filter.bedrooms.$gt = from - 1;
            }
            if (params.bedrooms.to) {
                to = params.bedrooms.to;
                to = Number(to);
                filter.bedrooms.$lt = to + 1
            }

        }


        if (params.bathrooms) {
            let from = 0;
            let to = 50;

            if (params.bathrooms.from || params.bathrooms.to) {
                filter.bathrooms = {}
            }

            if (params.bathrooms.from) {
                from = params.bathrooms.from;
                from = Number(from);
                filter.bathrooms.$gt = from - 1;
            }
            if (params.bathrooms.to) {
                to = params.bathrooms.to;
                to = Number(to);
                filter.bathrooms.$lt = to + 1
            }

        }


        if (params.garages) {
            let from = 0;
            let to = 50;

            if (params.garages.from || params.garages.to) {
                filter.garages = {}
            }

            if (params.garages.from) {
                from = params.garages.from;
                from = Number(from);
                filter.garages.$gt = from - 1;
            }
            if (params.garages.to) {
                to = params.garages.to;
                to = Number(to);
                filter.garages.$lt = to + 1
            }

        }


        if (params.area) {
            let from = 0;

            let to = 10000000000000000000;


            if (params.area.from) {
                from = params.area.from;
            }
            if (params.area.to) {
                to = params.area.to;
            }


            if (from) {
                from = Number(from);
                from = from - 1;
            }

            if (to) {
                to = Number(to);
            }
            if (to !== 10000000000000000000 || from !== 0) {
                filter['area.value'] = {
                    $gt: (from - 1),
                    $lt: to
                };
            }
        }

        if (params.acres) {
            let from = 0;

            let to = 10000000000000000000;


            if (params.acres.from) {
                from = params.acres.from;
            }

            if (params.acres.to) {
                to = params.acres.to;
            }

            if (to) {
                to = Number(to);
            }
            if (to !== 10000000000000000000 || from !== 0) {
                filter.acres = {
                    $gt: (from - 0.1),
                    $lt: to
                };
            }
        }


        if (params.yearBuilt) {
            let from = 0;
            let to = 2100;
            let available = false;
            if (params.yearBuilt.from) {
                available = true;
                from = params.yearBuilt.from;

            }
            if (params.yearBuilt.to) {
                available = true
                to = params.yearBuilt.to;
            }

            if (available) {
                filter.yearBuilt = {
                    $gt: from,
                    $lt: to
                };
            }


        }

        if (params.features) {
            const arr = [];
            params.features.forEach(feature => {
                if (feature.selected) {
                    arr.push(feature.name);
                }
            });
            if (arr.length > 0) {
                filter.features = {
                    $in: arr
                };
            }

        }


        if (params.category) {
            const arr = [];
            params.category.forEach(feature => {
                if (feature.selected) {
                    arr.push(feature.name);
                }
            });
            if (arr.length > 0) {
                filter.category = {
                    $in: arr
                };
            }

        }
    }




    console.log(new Date())
    console.log("======= Filter ========")
    console.log(filter)

    return filter;

}

async function filterProperty(req, res) {
    try {

        console.log(req.body);
        req.body = filterPropertyData(req.body);
        console.log(req.body);
        if (req.body.id) {
            const property = await Property.findById(req.body.id).populate('user');
            return res.status(200).send({
                property: property
            })
        }

        const page = req.body.page;
        const limit = req.body.limit;
        let query = req.body;
        delete query.page;
        delete query.limit;

        const propertys = await Property.paginate(query, {
            limit: limit,
            page: page
        });

        //  const propertys = await Property.find(query);
        // console.log(propertys)

        return res.status(200).send({
            propertys: propertys
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}

async function deleteProperty(req, res) {
    try {
        const result = await Property.findById(req.query._id).remove()
        return res.status(200).send({
            result: result
        })
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

module.exports = {
    filterProperty,
    createProperty,
    getProperty,
    deleteProperty,
    updateProperty
};