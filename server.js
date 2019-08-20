/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

const moongose = require('mongoose');

const dbConfig = require('./config/database.config');

moongose.Promise = global.Promise;


moongose.connect(dbConfig.url, {
   useNewUrlParser: true
}).then(() => {
   console.log('MongoDB Connected!');
}).catch((err) => {
   console.log('Could not connect to the database. Exiting now...', err);
   process.exit();
});

require('./app/routes/employee.routes')(app);


app.listen(3000, () => {
   console.log('Server is running on port 3000');
});