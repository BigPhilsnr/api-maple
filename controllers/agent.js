'use strict';

var Agent = require('../models/agent');

async function createAgent(req, res) {
    try {
        req.body.user = req.user._id;
        const agent = await new Agent(req.body).save();
        console.log(agent)
        return res.status(200).send({
            agent: agent
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }
}

async function updateAgent(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        const agent = await Agent.findByIdAndUpdate({
            _id,
            id
        }, req.body);

        return res.status(200).send({
            agent: agent
        });

    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

async function getAgent(req, res) {
    try {
        if (req.query.id) {
            const agent = await Agent.findById(req.query.id);
            return res.status(200).send({
                agent: agent
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const agents = await Agent.paginate(query, {
            limit: limit,
            page: page
        });

        return res.status(200).send({
            agents: agents
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}

async function deleteAgent(req, res) {
    try {
        const result = await Agent.findById(req.query.id).remove()
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
    createAgent,
    getAgent,
    deleteAgent,
    updateAgent
};