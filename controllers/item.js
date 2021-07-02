'use strict';

var fs = require('fs');
var path = require('path');
var Item = require('../models/item');
var File = require('../models/file')


async function createItem(req, res) {
    try {
        const item = await new Item(req.body).save();
        return res.status(200).send({
            item: item
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function updateItem(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        const item = await Item.findByIdAndUpdate({
            _id,
            id
        }, req.body);

        return res.status(200).send({
            item: item
        });

    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

async function getItem(req, res) {
    try {
        if (req.query._id) {
            const item = await Item.findById(req.query._id).populate('user');
            return res.status(200).send({
                item: item
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const items = await Item.paginate(query, {
            limit: limit,
            page: page,
            populate: 'seller'
        });
        return res.status(200).send({
            items: items
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deleteItem(req, res) {
    try {
        const result = await Item.findById(req.query).remove()
        return res.status(200).send({
            result: result
        })
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function updateItemFully(req, res) {
    var itemId = req.body.id;
    let removals = null;
    let features = null;
    let updateQuery = {}
    let query = {}

    if (req.body.removals) {
        removals = JSON.parse(req.body.removals)
    }

    if (req.body.features) {
        features = JSON.parse(req.body.features)
    }

    console.log(removals)

    if (req.files) {

        if (true) {
            try {
                let item = await Item.findOne({
                    '_id': itemId
                });

                if (!item) {
                    throw new Error("item not found")
                }

                let result = await File.create(req.files.item)
                result = result.map(item => item._id)
               
                if (removals && removals.length > 0) {
                    query.$pull = {
                        images: {
                            $in: removals
                        }
                    }
                    query.multi = true
                }

                if (features && features.length > 0) {
                    query.$pull = {
                        features: {
                            $in: features
                        }
                    }
                    query.multi = true
                }

                let updateResult = await Item.update({
                    _id: itemId
                }, query);

                if (result && result.length > 0) {
                    updateQuery.$push = {
                        images: {
                            $each: result
                        }
                    }
                }

                if (features && features.length > 0) {
                    updateQuery.$push = {
                        features: {
                            $each: features
                        }
                    }
                }

                 updateResult = await Item.update({
                    _id: itemId
                }, updateQuery);

                item = await Item.findById(itemId);

                return res.status(200).send({
                    item: item
                });


            } catch (error) {
                console.log(error)
                return res.status(500).send({
                    error: ""
                });
            }

        } else {
            return res.status(200).send({
                message: "Ups, please image file."
            });
        }
    }
}

function removeFilesOfUploads(res, file_path, message) {
    fs.unlink(file_path, (err) => {
        return res.status(200).send({
            message: message
        });
    });
}

function getImageFile(req, res) {
    var image_file = req.params.imageFile;
    var path_file = './uploads/items/' + image_file;
    fs.exists(path_file, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_file));
        } else {
            return res.status(200).send({
                message: "Ups, the file not exists."
            });
        }
    });
}


module.exports = {
    createItem,
    getItem,
    deleteItem,
    updateItem,
    updateItemFull: updateItemFully,
    getImageFile,
    removeFilesOfUploads
};