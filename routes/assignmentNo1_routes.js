
const express = require('express');
const router = express.Router();
const controller = require('../controller/assignmentNo1_controller');


router.get('/fibonacci/:n', controller.getFibonacciSequence);

module.exports = router;
