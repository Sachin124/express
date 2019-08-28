/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

/*
Following Methods are used for CRUD operation in MongoDB
   
       ~ Mongoose save()
       ~ Mongoose find()
       ~ Mongoose findById()
       ~ Mongoose findByIdAndUpdate()
       ~ Mongoose findByIdAndRemove()
 
*/

const Employee = require('../model/employee.model');

// create and save new employee details

exports.profile = (req, res, next) => {
      res.status(200).send({
        status:1,
        message:'File uploaded successfully!',
        filename :  req.file.filename
        });
    // res.send('File uploaded successfully! -> filename = ' + req.file.filename);

};

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
        address: req.body.address,
        profile_photo: `${__basedir}/uploads/${req.body.profile_photo}`
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
    if (!req.body) {
        return res.status(400).send({
            message: 'Employee content cannot be empty!'
        });
    }

    Employee.findByIdAndUpdate(req.body._id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            profile_photo: req.body.profile_photo
        }, {
            new: true
        })
        .then(employee => {
            if (!employee) {
                return res.status(404).send({
                    message: 'Employee Not Found! with Employee Id = ' + req.body._id
                });
            }
            res.send(employee);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Employee Not Found! with Employee Id = ' + req.body._id
                });
            }
            return res.status(500).send({
                message: 'Error Updating Employee with Employee Id = ' + req.body._id
            });
        });
};

// delete particular employee details
exports.delete = (req, res) => {
    Employee.findByIdAndRemove(req.params.empId)
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