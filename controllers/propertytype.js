'use strict';

var Propertytype = require('../models/propertytype');
var User = require('../models/user')


async function createPropertytype(req, res) {
    try {
        if (req.body.user) {
            const user = await new User(req.body.user).save();
            req.body.user = user._id
        }else{
            req.body.user= req.user.userId;
        }
        let propertytype = await new Propertytype(req.body).save();
        propertytype = await Propertytype.findById(propertytype._id)
        return res.status(200).send({
            propertytype: propertytype
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function updatePropertytype(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        let propertytype = await Propertytype.findByIdAndUpdate({
            _id: id
        }, req.body);
        propertytype = await Propertytype.findById(propertytype._id);
        console.log(propertytype)
        return res.status(200).send({
            propertytype: propertytype
        });

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error
        });
    }
}

async function getPropertytype(req, res) {
    try {
        console.log(req.user)
        if (req.query._id) {
            const propertytype = await Propertytype.findById(req.query._id).populate();
            return res.status(200).send({
                propertytype: propertytype
            })
        }

    
        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;


        const propertytypes = await Propertytype.paginate(query, {
            limit: limit,
            page: page,
        });
        return res.status(200).send({
            propertytypes: propertytypes
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deletePropertytype(req, res) {
    try {
        const result = await Propertytype.findById(req.query._id).remove()
        return res.status(200).send({
            propertytype: {
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
    createPropertytype,
    getPropertytype,
    deletePropertytype,
    updatePropertytype,
};