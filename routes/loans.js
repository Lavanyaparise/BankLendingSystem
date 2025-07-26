const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

// POST /loans -> LEND
router.post('/loans', loanController.createLoan);

// POST /loans/:loan_id/payments -> PAYMENT
router.post('/loans/:loan_id/payments', loanController.makePayment);

// GET /loans/:loan_id/ledger -> LEDGER
router.get('/loans/:loan_id/ledger', loanController.getLedger);

module.exports = router;
