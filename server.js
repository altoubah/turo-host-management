const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

// Basic route to ensure server is working
app.get('/', (req, res) => {
    res.send('Turo Host Management API is running...');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const authRoutes = require('./routes/auth');
const vehicleRoutes = require('./routes/vehicle');
const managementRequestRoutes = require('./routes/managementRequest');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/management-requests', managementRequestRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
