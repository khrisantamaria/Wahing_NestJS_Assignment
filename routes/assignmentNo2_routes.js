const express = require('express');
const router = express.Router();
const { checkPrime } = require('../controller/assignmentNo2_controller');

router.get('/prime/:number', checkPrime);

module.exports = router;
