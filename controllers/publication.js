'use strict';

var Publication = require('../models/publication');


async function createPublication(req, res) {
    try {
        console.log(req.files)
        console.log(req.body)

        if (req.files && req.files.file) {
            if (Array.isArray(req.files.file)) {
                req.body.file = req.files.file[0].path;
            } else {
                const image = req.files.file.path;
                req.body.file = image;
            }
        }

        let publication = await new Publication(req.body).save();
        publication = await Publication.findById(publication._id).populate('user');
        return res.status(200).send({
            publication: publication
        });

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}

async function updatePublication(req, res) {
    try {

        const id = req.body._id;
        const params = req.body;
        const update= {}
        
        update.title =params.title;
        update.content = params.content;
        if(params.file){
            update.file = params.file;
        }

        update.user = req.user.userId;
       

        if (req.files && req.files.file) {
            if (Array.isArray(req.files.file)) {
                update.file = req.files.file[0].path;
            } else {
                const image = req.files.file.path;
                update.file = image;
            }
        }
        console.log("update")

        console.log(update)
      
        let publication = await Publication.findByIdAndUpdate({
            _id: id
        }, update);
        publication = await Publication.findById(publication._id).populate('user');
        console.log(publication)
        return res.status(200).send({
            publication: publication
        });


    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error
        });
    }
}

async function getPublication(req, res) {
    try {
        console.log(req.user)
        if (req.query._id) {
            const publication = await Publication.findById(req.query._id).populate('user');
            return res.status(200).send({
                publication: publication
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const publications = await Publication.paginate(query, {
            limit: limit,
            page: page,
        });
        return res.status(200).send({
            publications: publications
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deletePublication(req, res) {
    try {
        const result = await Publication.findById(req.query._id).remove()
        return res.status(200).send({
            publication: {
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
    createPublication,
    getPublication,
    deletePublication,
    updatePublication,
};