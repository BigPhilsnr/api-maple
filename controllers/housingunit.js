'use strict';

var Hunit = require('../models/housingunit');
var User = require('../models/user')
const {
    ObjectId
  } = require('mongodb');



async function createHunit(req, res) {
    try {
       if(req.body.propertyId){
           req.body.property = req.body.propertyId;
       }
        let housingunit = await new Hunit(req.body).save();
        housingunit = await Hunit.findById(housingunit._id).populate('property');
        return res.status(200).send({
            hunit: housingunit
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function updateHunit(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        if(req.body.propertyId){
            req.body.property = req.body.propertyId;
        }
        let housingunit = await Hunit.findByIdAndUpdate({
            _id: id
        }, req.body);
        housingunit = await Hunit.findById(housingunit._id).populate('property');
        console.log(housingunit)
        return res.status(200).send({
            hunit: housingunit
        });

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error
        });
    }
}


async function getHunit(req, res) {
    try {
        console.log(req.user)
        if (req.query._id) {
            const housingunit = await Hunit.findById(req.query._id).populate('user');
            return res.status(200).send({
                hunit: housingunit
            })
        }
        
        let page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;
        const originalPage = page;
        page = (page - 1) * limit;

        let housingunits = await Hunit.aggregate(aggregageWithBills(req.query.property,page,Number(limit)));
        console.log(housingunits)
        if(housingunits){
            housingunits = housingunits[0]
        }
        return res.status(200).send({
            hunits: housingunits
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}

async function getHunits(req, res) {
    try {
        console.log(req.user)
        if (req.query._id) {
            const housingunit = await Hunit.findById(req.query._id).populate('user');
            return res.status(200).send({
                housingunit: housingunit
            })
        }
        

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const housingunits = await Hunit.paginate(query, {
            limit: limit,
            page: page,
            populate: 'user'
        });
        return res.status(200).send({
            hunits: housingunits
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deleteHunit(req, res) {
    try {
        const result = await Hunit.findById(req.query._id).remove()
        return res.status(200).send({
            housingunit: {
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

function aggregageWithBills(propertyId, page, limit){
    
    return [
        {
          '$match': {
            'property': new ObjectId(propertyId)
          }
        }, {
          '$lookup': {
            'from': 'bills', 
            'localField': '_id', 
            'foreignField': 'hunit', 
            'as': 'bills'
          }
        }, {
          '$project': {
            '_id': 1, 
            'status': 1, 
            'hnumber': 1, 
            'description': 1, 
            'bills': {
              '$sum': '$bills.amount'
            }, 
            'payments': {
              '$sum': '$bills.paid'
            }
          }
        }, {
          '$facet': {
            'docs': [
              {
                '$skip': page
              }, {
                '$limit': limit
              }
            ], 
            'total': [
              {
                '$count': 'count'
              }
            ]
          }
        }, {
          '$unwind': {
            'path': '$total', 
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$project': {
            'docs': '$docs', 
            'totalDocs': '$total.count'
          }
        }
      ]
}

module.exports = {
    createHunit,
    getHunit,
    getHunits,
    deleteHunit,
    updateHunit,
};