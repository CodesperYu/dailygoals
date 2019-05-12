const path = require('path');

const express = require('express');

const goalController = require('../controllers/goal');

const db = require('../utils/db');

const router = express.Router();

router.post('/postGoals', goalController.postGoal);

module.exports = router;
