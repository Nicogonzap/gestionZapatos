const express = require('express');
const router = express.Router();
const path = require ('path');
const mainController = require('../controller/mainController');


router.get('/',mainController.loginIndex);
router.post('/',mainController.processLogin);

module.exports = router