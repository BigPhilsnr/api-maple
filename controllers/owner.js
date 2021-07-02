'use strict';

var Owner = require('../models/owner');
var User = require('../models/user')

async function createOwner(req, res) {
    try {
        if (req.body.user) {
            const user = await new User(req.body.user).save();
            req.body.user = user._id
        }
        let owner = await new Owner(req.body).save();
        owner = await Owner.findById(owner._id).populate('user');
        return res.status(200).send({
            owner: owner
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function updateOwner(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        let owner = await Owner.findByIdAndUpdate({
            _id: id
        }, req.body);
        owner = await Owner.findById(owner._id).populate('user');
        console.log(owner)
        return res.status(200).send({
            owner: owner
        });

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error
        });
    }
}

async function getOwner(req, res) {
    try {
        console.log(req.user)
        if (req.query._id) {
            const owner = await Owner.findById(req.query._id).populate('user');
            return res.status(200).send({
                owner: owner
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const owners = await Owner.paginate(query, {
            limit: limit,
            page: page,
            populate: 'user'
        });
        return res.status(200).send({
            owners: owners
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deleteOwner(req, res) {
    try {
        const result = await Owner.findById(req.query._id).remove()
        return res.status(200).send({
            owner: {
                _id: req.query._id
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


module.exports = {
    createOwner,
    getOwner,
    deleteOwner,
    updateOwner,
};