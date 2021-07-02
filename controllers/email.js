'use strict';

var Email = require('../models/email');
var User = require('../models/user')


async function createEmail(req, res) {
    try {
        let email = await new Email(req.body).save();
        email = await Email.findById(email._id)
        return res.status(200).send({
            email: email
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function updateEmail(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        let email = await Email.findByIdAndUpdate({
            _id: id
        }, req.body);
        email = await Email.findById(email._id)
        console.log(email)
        return res.status(200).send({
            email: email
        });

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error
        });
    }
}

async function getEmail(req, res) {
    try {
        if (req.query._id) {
            const email = await Email.findById(req.query._id)
            return res.status(200).send({
                email: email
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const emails = await Email.paginate(query, {
            limit: limit,
            page: page,
        });
        return res.status(200).send({
            emails: emails
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deleteEmail(req, res) {
    try {
        const result = await Email.findById(req.query._id).remove()
        return res.status(200).send({
            email: {
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
    createEmail,
    getEmail,
    deleteEmail,
    updateEmail,
};