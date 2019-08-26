/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

const multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, __basedir + '/uploads/');
	},
	filename: (req, file, cb) => {
	  cb(null, Date.now() + '.' + file.originalname.split('.').pop());
	}
});
 
var upload = multer({storage: storage});
 
module.exports = upload;