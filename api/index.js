const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Google Maps API Key
const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

// Endpoint to search for nearby healthcare providers
app.get('/api/places/nearby', async (req, res) => {
    const { lat, lng, type, radius = 5000 } = req.query;

    if (!lat || !lng) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    if (!GOOGLE_API_KEY) {
        return res.status(500).json({
            error: 'Google Maps API key not configured',
            message: 'Please add GOOGLE_MAPS_API_KEY to your environment variables'
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
        console.error('Error fetching nearby places:', error);
        res.status(500).json({
            error: 'Server error',
            message: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'HealthCheck API is running' });
});

// Export for Vercel
module.exports = app;
