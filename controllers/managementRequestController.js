const ManagementRequest = require('../models/ManagementRequest');

// Create a new management request
exports.createRequest = async (req, res) => {
    const { vehicleId } = req.body;

    try {
        const request = await ManagementRequest.create({
            vehicle: vehicleId,
            host: req.user.id  // Assuming the user is authenticated and req.user is populated
        });

        res.status(201).json(request);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all management requests
exports.getRequests = async (req, res) => {
    try {
        const requests = await ManagementRequest.find({ host: req.user.id }).populate('vehicle');
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
