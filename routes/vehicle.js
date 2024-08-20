const express = require('express');
const { createVehicle, getVehicles } = require('../controllers/vehicleController');
const auth = require('../middleware/auth');  // Ensure auth is imported before using it
const router = express.Router();

// Route to create a new vehicle listing
router.post('/', auth, createVehicle);

// Route to get all vehicle listings
router.get('/', auth, getVehicles);

module.exports = router;
