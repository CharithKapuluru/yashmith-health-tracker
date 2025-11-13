const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Google Maps API Key (stored securely in .env file)
const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

// Endpoint to search for nearby healthcare providers
app.get('/api/places/nearby', async (req, res) => {
    const { lat, lng, type, radius = 5000 } = req.query;

    // Validate inputs
    if (!lat || !lng) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    if (!GOOGLE_API_KEY) {
        return res.status(500).json({
            error: 'Google Maps API key not configured',
            message: 'Please add GOOGLE_MAPS_API_KEY to your .env file'
        });
    }

    try {
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type || 'hospital'}&key=${GOOGLE_API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'OK') {
            res.json(data);
        } else if (data.status === 'ZERO_RESULTS') {
            res.json({ results: [], status: 'ZERO_RESULTS' });
        } else {
            res.status(500).json({
                error: 'Google Maps API error',
                status: data.status,
                message: data.error_message || 'Unknown error occurred'
            });
        }
    } catch (error) {
        console.error('Error fetching places:', error);
        res.status(500).json({
            error: 'Failed to fetch places',
            message: error.message
        });
    }
});

// Endpoint to get place details
app.get('/api/places/details', async (req, res) => {
    const { placeId } = req.query;

    if (!placeId) {
        return res.status(400).json({ error: 'Place ID is required' });
    }

    if (!GOOGLE_API_KEY) {
        return res.status(500).json({
            error: 'Google Maps API key not configured'
        });
    }

    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_phone_number,website,opening_hours,rating,user_ratings_total&key=${GOOGLE_API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'OK') {
            res.json(data);
        } else {
            res.status(500).json({
                error: 'Google Maps API error',
                status: data.status
            });
        }
    } catch (error) {
        console.error('Error fetching place details:', error);
        res.status(500).json({
            error: 'Failed to fetch place details',
            message: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        apiKeyConfigured: !!GOOGLE_API_KEY,
        message: GOOGLE_API_KEY ? 'Server is ready' : 'Please configure GOOGLE_MAPS_API_KEY in .env file'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🏥 HealthCheck Server running on http://localhost:${PORT}`);
    console.log(`📍 API endpoint: http://localhost:${PORT}/api/places/nearby`);

    if (!GOOGLE_API_KEY) {
        console.log('\n⚠️  WARNING: Google Maps API key not found!');
        console.log('   Please create a .env file and add: GOOGLE_MAPS_API_KEY=your_key_here\n');
    } else {
        console.log('✅ Google Maps API key configured\n');
    }
});
