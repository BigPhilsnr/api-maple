'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ExpenseSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    amount: {
        type: Number,
        required: true
    },
    housingunit: {
        type: Schema.ObjectId,
        ref: 'HUnit',
        required: true,
    }
}, {
    timestamps: true
});

ExpenseSchema.plugin(require('mongoose-paginate-v2'));

module.exports = mongoose.model('Expense', ExpenseSchema);