/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

const Employee = require('../model/employee.model');

// create and save new employee details
exports.create = (req, res) => {

    // validate a request
    if (!req.body) {
        return res.status(400).send({
            message: 'Employee content cannot be empty!'
        });
    }

    //  create employee details

    const employee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address
    });

    // save employee details in the database

    employee.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Employee details."
            });
        });


};

// update and save particular employee details
exports.update = (req, res) => {

};

// delete particular employee details
exports.delete = (req, res) => {

};

// view all employees details
exports.view = (req, res) => {
    Employee.find()
        .then(employees => {
            res.send(employees);
        }).catch(err => {
            console.log(err);
        });
};

// view particular employee details
exports.viewById = (req, res) => {
    
    Employee.findById(req.params.empId)
        .then(employee => {
            if (!employee) {
                return res.status(404).send({
                    message: "Employee not found with id = " + req.params.empId
                });
            }
                res.send(employee);   
        }).catch(err => {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Employee not found with id = " + req.params.empId
                });
            }

            return res.status(500).send({
                message: "Error retrieving note with id = " + req.params.empId
            });
        });
};