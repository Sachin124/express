/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

 const express = require('express');

 const bodyParser = require('body-parser');


 const app = express();

 app.use(bodyParser.urlencoded({extended: true}));

 const mongoose = require('mongoose');
 mongoose.Promise = global.Promise;

 const dbConfig = require('./config/database.config');
 mongoose.connect(dbConfig.url, {useNewUrlParser: true}).then(()=>{
    console.log('Successfully connected to the database');    
 }).catch(err=>{
     console.log('Could not connect to database. Exiting now...', err);
     process.exit();     
 });

 app.get('/', (req,res)=>{
    res.json('Hello Good Morning!');
 });


 app.listen(3000, ()=>{
    console.log('Server is running on port 3000');    
 });