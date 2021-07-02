'use strict';

var Invoice = require('../models/invoice');

async function createInvoice(req, res) {
    try {
        const invoice = await new Invoice(req.body).save();
        return res.status(200).send({
            invoice: invoice
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

async function updateInvoice(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        const invoice = await Invoice.findByIdAndUpdate({
            _id,
            id
        }, req.body);

        return res.status(200).send({
            invoice: invoice
        });

    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

async function getInvoice(req, res) {
    try {
        if (req.query.id) {
            const invoice = await Invoice.findById(req.query.id);
            return res.status(200).send({
                invoice: invoice
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const invoices = await Invoice.paginate(query, {
            limit: limit,
            page: page
        });

        return res.status(200).send({
            invoices: invoices
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}

async function deleteInvoice(req, res) {
    try {
        const result = await Invoice.findById(req.query.id).remove()
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
    createInvoice,
    getInvoice,
    deleteInvoice,
    updateInvoice
};