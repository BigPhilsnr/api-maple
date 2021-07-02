// @ts-nocheck
'use strict';

var Payment = require('../models/payment');
var Bill = require('../models/bill')
var User = require('../models/user')
const {
    ObjectId
} = require('mongodb');

async function createBill(req, res) {
    try {
        if (req.body.user) {
            const user = await new User(req.body.user).save();
            req.body.user = user._id
        }

        if(req.body.hunitId){
            req.body.hunit = req.body.hunitId;
        }
        let bill = await new Bill(req.body).save();
        bill = await Bill.findById(bill._id).populate();
        return res.status(200).send({
            bill: bill
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function updateBill(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        let bill = await Bill.findByIdAndUpdate({
            _id: id
        }, req.body);
        bill = await Bill.findById(bill._id);
        console.log(bill)
        return res.status(200).send({
            bill: bill
        });

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error
        });
    }
}

async function getBill(req, res) {
    try {
        console.log(req.user)
        if (req.query._id) {
            let bill = await Bill.findById(req.body._id);
            const toatlPaymet = await Payment.aggregate(getPaymentTotal(req.body.hunit,req.body.bill,'APPROVED'));
    
            if (toatlPaymet && toatlPaymet[0]) {
                let billPaidAmount = toatlPaymet[0].total;
                bill = await Bill.findByIdAndUpdate({
                    _id: req.body.bill
                }, {
                    paid: billPaidAmount
                });
            }
            bill = await Bill.findById(req.query._id).populate('user');
            return res.status(200).send({
                bill: bill
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const bills = await Bill.paginate(query, {
            limit: limit,
            page: page,
            populate: 'user'
        });
        return res.status(200).send({
            bills: bills
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deleteBill(req, res) {
    try {
        const result = await Bill.findById(req.query._id).remove()
        return res.status(200).send({
            bill: {
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


module.exports = {
    createBill,
    getBill,
    deleteBill,
    updateBill,
};