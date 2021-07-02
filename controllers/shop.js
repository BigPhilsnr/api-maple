'use strict';

var fs = require('fs');
var path = require('path');
var Shop = require('../models/shop');
var File = require('../models/file')


async function createShop(req, res) {
    try {
        const shop = await new Shop(req.body).save();
        return res.status(200).send({
            shop: shop
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function updateShop(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        const shop = await Shop.findByIdAndUpdate({
            _id,
            id
        }, req.body);

        return res.status(200).send({
            shop: shop
        });

    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

async function getShop(req, res) {
    try {
        if (req.query._id) {
            const shop = await Shop.findById(req.query._id).populate('user');
            return res.status(200).send({
                shop: shop
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const shops = await Shop.paginate(query, {
            limit: limit,
            page: page,
            populate: 'seller'
        });
        return res.status(200).send({
            shops: shops
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deleteShop(req, res) {
    try {
        const result = await Shop.findById(req.query).remove()
        return res.status(200).send({
            result: result
        })
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function uploadImage(req, res) {
    var shopId = req.body.id;

    if (req.files) {
        console.log(req.files)
        var file_path = req.files.shop[0].path;
        var file_split = file_path.split('/');
        var file_name = file_split[2];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];
        if (file_ext === 'png' || file_ext === 'jpg' || file_ext === 'jpeg' || file_ext === 'gif') {
            try {
                let shop = await Shop.findOne({
                    '_id': shopId
                });

                if (!shop) {
                    throw new Error("shop not found")
                }

                const result = await File.create(req.files.shop)
                console.log(result)
                 result.forEach(item =>{ 
                    shop.images.push(item._id)
                })
               
                shop = await shop.save();
                shop = await Shop.findById(shopId).populate('seller');

                return res.status(200).send({
                    shop: shop
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
    var path_file = './uploads/shops/' + image_file;
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
    createShop,
    getShop,
    deleteShop,
    updateShop,
    uploadImage,
    getImageFile,
    removeFilesOfUploads
};