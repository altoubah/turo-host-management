const Vehicle = require('../models/Vehicle');

// Create a new vehicle listing
exports.createVehicle = async (req, res) => {
    const { make, model, year, description } = req.body;

    try {
        const vehicle = await Vehicle.create({
            owner: req.user.id,  // Assuming the user is authenticated and req.user is populated
            make,
            model,
            year,
            description
        });

        res.status(201).json(vehicle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all vehicle listings
exports.getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find({}).populate('owner', 'name email');
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
