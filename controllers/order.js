'use strict';

var Order = require('../models/order');

async function createOrder(req, res) {
    try {
        const order = await new Order(req.body).save();
        return res.status(200).send({
            order: order
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

async function updateOrder(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        const order = await Order.findByIdAndUpdate({
            _id,
            id
        }, req.body);

        return res.status(200).send({
            order: order
        });

    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

async function getOrder(req, res) {
    try {
        if (req.query.id) {
            const order = await Order.findById(req.query.id);
            return res.status(200).send({
                order: order
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const orders = await Order.paginate(query, {
            limit: limit,
            page: page
        });

        return res.status(200).send({
            orders: orders
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}

async function deleteOrder(req, res) {
    try {
        const result = await Order.findById(req.query.id).remove()
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
    createOrder,
    getOrder,
    deleteOrder,
    updateOrder
};