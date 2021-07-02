'use strict';

const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config()
const port = process.env.PORT || 4500;
const mongoDb = process.env.ATLAS_URL || 'mongodb://localhost:27017/social';

mongoose.connect(mongoDb, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('DB: Connect OK!');
        app.listen(port, () => {
            console.log('Server running on => http://localhost:' + port);
        });
    })
    .catch(err => console.log(err));

console.log('Starting...');