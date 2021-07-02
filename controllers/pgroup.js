'use strict';

var Pgroup = require('../models/pgroup');
var User = require('../models/user')


async function createPgroup(req, res) {
    try {
        if (req.body.user) {
            const user = await new User(req.body.user).save();
            req.body.user = user._id
        }else{
            req.body.user= req.user.userId;
        }
        let pgroup = await new Pgroup(req.body).save();
        pgroup = await Pgroup.findById(pgroup._id).populate('user');
        return res.status(200).send({
            pgroup: pgroup
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function updatePgroup(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        let pgroup = await Pgroup.findByIdAndUpdate({
            _id: id
        }, req.body);
        pgroup = await Pgroup.findById(pgroup._id).populate('user');
        console.log(pgroup)
        return res.status(200).send({
            pgroup: pgroup
        });

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error
        });
    }
}

async function getPgroup(req, res) {
    try {
        console.log(req.user)
        if (req.query._id) {
            const pgroup = await Pgroup.findById(req.query._id).populate();
            return res.status(200).send({
                pgroup: pgroup
            })
        }

        if(!req.user){
            return res.status(401).send({
                error: "Invalid user "
            });
        }
        req.query.user = req.user.userId;
        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;


        const pgroups = await Pgroup.paginate(query, {
            limit: limit,
            page: page,
            populate: 'user'
        });
        return res.status(200).send({
            pgroups: pgroups
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deletePgroup(req, res) {
    try {
        const result = await Pgroup.findById(req.query._id).remove()
        return res.status(200).send({
            pgroup: {
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
    createPgroup,
    getPgroup,
    deletePgroup,
    updatePgroup,
};