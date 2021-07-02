'use strict';

var Feedback = require('../models/feedback');
var User = require('../models/user')


async function createFeedback(req, res) {
    try {
        let feedback = await new Feedback(req.body).save();
        feedback = await Feedback.findById(feedback._id)
        return res.status(200).send({
            feedback: feedback
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }

}

async function updateFeedback(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        let feedback = await Feedback.findByIdAndUpdate({
            _id: id
        }, req.body);
        feedback = await Feedback.findById(feedback._id)
        console.log(feedback)
        return res.status(200).send({
            feedback: feedback
        });

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error
        });
    }
}

async function getFeedback(req, res) {
    try {
        if (req.query._id) {
            const feedback = await Feedback.findById(req.query._id)
            return res.status(200).send({
                feedback: feedback
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const feedbacks = await Feedback.paginate(query, {
            limit: limit,
            page: page,
        });
        return res.status(200).send({
            feedbacks: feedbacks
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}


async function deleteFeedback(req, res) {
    try {
        const result = await Feedback.findById(req.query._id).remove()
        return res.status(200).send({
            feedback: {
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
    createFeedback,
    getFeedback,
    deleteFeedback,
    updateFeedback,
};