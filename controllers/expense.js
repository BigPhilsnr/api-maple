'use strict';

var Expense = require('../models/expense');

async function createExpense(req, res) {
    try {
        const expense = await new Expense(req.body).save();
        return res.status(200).send({
            expense: expense
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

async function updateExpense(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        const expense = await Expense.findByIdAndUpdate({
            _id,
            id
        }, req.body);

        return res.status(200).send({
            expense: expense
        });

    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

async function getExpense(req, res) {
    try {
        if (req.query.id) {
            const expense = await Expense.findById(req.query.id);
            return res.status(200).send({
                expense: expense
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const expenses = await Expense.paginate(query, {
            limit: limit,
            page: page
        });

        return res.status(200).send({
            expenses: expenses
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}

async function deleteExpense(req, res) {
    try {
        const result = await Expense.findById(req.query.id).remove()
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
    createExpense,
    getExpense,
    deleteExpense,
    updateExpense
};