/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

const moongose = require('mongoose');

const employeeSchema = moongose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    profile_photo: String
}, {
    timestampls: true
});


module.exports = moongose.model('Employee', employeeSchema);