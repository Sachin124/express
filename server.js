/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */
const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

const dbConfig = require('./config/database.config');

const AuthorizationRouter = require('./authorization/routes.config');

const UsersRouter = require('./app/routes/employee.routes');

global.__basedir = __dirname;


app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

app.listen(3000, ()=>{
   console.log('Server is running on port 3000');   
});

mongoose.connect(dbConfig.url, {useNewUrlParser:true}).then(()=>{
console.log('MongoDB Connected!');
}).catch(err=>{
   console.log(err);   
   process.exit();
});

AuthorizationRouter.routesConfig(app);
UsersRouter.routesConfig(app);

// require('./app/routes/employee.routes')(app);