'use strict';

var Employee = require('../models/employee');

async function createEmployee(req, res) {
    try {
        const employee = await new Employee(req.body).save();
        return res.status(200).send({
            employee: employee
        });
    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

async function updateEmployee(req, res) {
    try {
        const id = req.body._id
        delete req.body._id
        const employee = await Employee.findByIdAndUpdate({
            _id,
            id
        }, req.body);

        return res.status(200).send({
            employee: employee
        });

    } catch (error) {
        return res.status(500).send({
            error: error
        });
    }
}

async function getEmployee(req, res) {
    try {
        if (req.query.id) {
            const employee = await Employee.findById(req.query.id);
            return res.status(200).send({
                employee: employee
            })
        }

        const page = req.query.page;
        const limit = req.query.limit;
        let query = req.query;
        delete query.page;
        delete query.limit;

        const employees = await Employee.paginate(query, {
            limit: limit,
            page: page
        });

        return res.status(200).send({
            employees: employees
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            error: error
        });
    }

}

async function deleteEmployee(req, res) {
    try {
        const result = await Employee.findById(req.query.id).remove()
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
    createEmployee,
    getEmployee,
    deleteEmployee,
    updateEmployee
};