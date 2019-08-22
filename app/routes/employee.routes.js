/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */


// module.exports = (app) => {

    const employee = require('../controllers/employee.controller');


    const UsersController = require('../controllers/userlogin.controller');
    const PermissionMiddleware = require('../../common/middlewares/auth.permission.middleware');
    const ValidationMiddleware = require('../../common/middlewares/auth.validation.middleware');
    const config = require('../../common/config/env.config');

    const ADMIN = config.permissionLevels.ADMIN;
    const PAID = config.permissionLevels.PAID_USER;
    const FREE = config.permissionLevels.NORMAL_USER;

    exports.routesConfig = (app)=> {

    // To create new employee row
    app.post('/employee', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        employee.create
    ]);

    // To edit particular employee details
    app.put('/employee/:empId', employee.update);

    // To delete particular employee details
    app.delete('/employee/:empId', employee.delete);

    // To view all employees details
    app.get('/employee', employee.view);

    // To view particular employee details
    app.get('/employee/:empId', employee.viewById);


    const user = require('../controllers/userlogin.controller');

    app.post('/users', [
        UsersController.insert
    ]);
    app.get('/users', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        UsersController.list
    ]);
    app.get('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(FREE),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.getById
    ]);
    app.patch('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(FREE),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.patchById
    ]);
    app.delete('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        UsersController.removeById
    ]);
};