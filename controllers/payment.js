// @ts-nocheck
'use strict';

var Payment = require('../models/payment');
var Bill = require('../models/bill')
var User = require('../models/user')
const {
    ObjectId
} = require('mongodb');


async function createPayment(req, res) {
    try {
        console.log(req.body)
        if (req.body.user) {
            const user = await new User(req.body.user).save();
            req.body.user = user._id
        }

        if (req.body.hunitId) {
            req.body.hunit = req.body.hunitId;
            req.body.bill = req.body.bill._id;
        }

        let payment = await new Payment(req.body).save();
        let bill = await Bill.findById(req.body.bill);
        const toatlPaymet = await Payment.aggregate(getPaymentTotal(req.body.hunit,req.body.bill,'APPROVED'));

        if (toatlPaymet && toatlPaymet[0]) {
            let billPaidAmount = toatlPaymet[0].total;
            bill = await Bill.findByIdAndUpdate({
                _id: req.body.bill
            }, {
                paid: billPaidAmount
            });
        }

        payment = await Payment.findById(payment._id).populate();
        return res.status(200).send({
            payment: payment
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}

function getPaymentTotal(hunit, bill,status) {
    return [{
            '$match': {
                'hunit': new ObjectId(hunit),
                'bill': new ObjectId(bill),
                'status':status
            }
        }, {
            '$project': {
                'amount': 1
            }
        }, {
            '$group': {
                '_id': null,
                'total': {
                    '$sum': '$amount'
                }
            }
        }, {
            '$project': {
                '_id': 0
            }
        }, {
            '$unwind': {
                'path': '$total',
                'preserveNullAndEmptyArrays': true
            }
        }

    ]
}

async function updatePayment(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        let payment = await Payment.findByIdAndUpdate({
            _id: id
        }, req.body);

        payment = await Payment.findById(payment._id);
        let bill = await Bill.findById(payment.bill);
        const toatlPaymet = await Payment.aggregate(getPaymentTotal(payment.hunit,payment.bill,'APPROVED'));
        if (toatlPaymet && toatlPaymet[0]) {
            let billPaidAmount = toatlPaymet[0].total;
            bill = await Bill.findByIdAndUpdate({
                _id: payment.bill
            }, {
                paid: billPaidAmount
            });
           
        }

        payment = await Payment.findById(payment._id).populate();
        console.log(payment)
        return res.status(200).send({
            payment: payment
        });

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error
        });
    }
}

async function getPayment(req, res) {
    try {
        console.log(req.user)
        if (req.query._id) {
            const payment = await Payment.findById(req.query._id).populate();
            return res.status(200).send({
                payment: payment
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const payments = await Payment.paginate(query, {
            limit: limit,
            page: page,
            populate: 'user'
        });
        return res.status(200).send({
            payments: payments
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deletePayment(req, res) {
    try {
        const result = await Payment.findById(req.query._id).remove()
        return res.status(200).send({
            payment: {
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
    createPayment,
    getPayment,
    deletePayment,
    updatePayment,
};