'use strict';

var fs = require('fs');
var path = require('path');
var Seller = require('../models/seller');


async function createSeller(req, res) {
    try {
        const seller = await new Seller(req.body).save();
        return res.status(200).send({
            seller: seller
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function updateSeller(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        const seller = await Seller.findByIdAndUpdate({
            _id,
            id
        }, req.body);

        return res.status(200).send({
            seller: seller
        });

    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

async function getSeller(req, res) {
    try {
        console.log(req.user)
        if (req.query._id) {
            const seller = await Seller.findById(req.query._id).populate('user');
            return res.status(200).send({
                seller: seller
            })
        }
       
        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const sellers = await Seller.paginate(query, {
            limit: limit,
            page: page,
            populate: 'user'
        });
        return res.status(200).send({
            sellers: sellers
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deleteSeller(req, res) {
    try {
        const result = await Seller.findById(req.query).remove()
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
    createSeller,
    getSeller,
    deleteSeller,
    updateSeller,
};