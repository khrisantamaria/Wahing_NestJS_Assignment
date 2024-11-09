const express = require('express');
const { getFactorial } = require('../controller/assignmentNo3_controller');
const router = express.Router();


router.get('/calculate/:number', getFactorial);

module.exports = router;
