const express = require('express');
const { createRequest, getRequests } = require('../controllers/managementRequestController');
const router = express.Router();

// Route to create a new management request
router.post('/', createRequest);

// Route to get all management requests
router.get('/', getRequests);

module.exports = router;

const auth = require('../middleware/auth');

router.post('/', auth, createRequest);
router.get('/', auth, getRequests);
