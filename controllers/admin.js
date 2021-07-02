'use strict';

var Admin = require('../models/admin');
var User = require('../models/user')


async function createAdmin(req, res) {
    try {
        if (req.body.user) {
            const user = await new User(req.body.user).save();
            req.body.user = user._id
        }
        let admin = await new Admin(req.body).save();
        admin = await Admin.findById(admin._id).populate('user');
        return res.status(200).send({
            admin: admin
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function updateAdmin(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        let admin = await Admin.findByIdAndUpdate({
            _id: id
        }, req.body);
        admin = await Admin.findById(admin._id).populate('user');
        console.log(admin)
        return res.status(200).send({
            admin: admin
        });

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error
        });
    }
}

async function getAdmin(req, res) {
    try {
        console.log(req.user)
        if (req.query._id) {
            const admin = await Admin.findById(req.query._id).populate('user');
            return res.status(200).send({
                admin: admin
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const admins = await Admin.paginate(query, {
            limit: limit,
            page: page,
            populate: 'user'
        });
        return res.status(200).send({
            admins: admins
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deleteAdmin(req, res) {
    try {
        const result = await Admin.findById(req.query._id).remove()
        return res.status(200).send({
            admin: {
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
    createAdmin,
    getAdmin,
    deleteAdmin,
    updateAdmin,
};