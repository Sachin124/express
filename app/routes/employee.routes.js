/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

module.exports = (app) => {

    const employee = require('../controllers/employee.controller');

    // To create new employee row
    app.post('/employee', employee.create);

    // To edit particular employee details
    app.put('/employee/:empId', employee.update);

    // To delete particular employee details
    app.delete('/employee/:empId', employee.delete);

    // To view all employees details
    app.get('/employee', employee.view);

    // To view particular employee details
    app.get('/employee/:empId', employee.viewById);
    
};