const express = require('express');
const { getFactorial } = require('../controller/assignmentNo3_controller');
const router = express.Router();

// POST route to calculate factorial
router.get('/calculate/:number', getFactorial);

module.exports = router;
