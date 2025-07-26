const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/customers/:customer_id/overview', customerController.getOverview);

module.exports = router;
