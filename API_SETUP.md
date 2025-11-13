# API Setup Guide for HealthCheck Symptom Tracker

This document explains how to integrate external APIs to enhance the functionality of your symptom tracker website.

## Current Status

The website is **fully functional** without any API keys. It includes:
- ✅ 40+ symptoms across 6 categories
- ✅ 15 common health conditions with detailed information
- ✅ Intelligent symptom matching algorithm
- ✅ Treatment recommendations
- ✅ Mock healthcare provider data
- ✅ Responsive design for all devices

## Optional API Integrations

### 1. Google Maps Places API (Recommended for Production)

**Purpose:** Find real nearby doctors, hospitals, and healthcare providers based on user location.

**Steps to Set Up:**

1. **Get API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable "Places API" and "Maps JavaScript API"
   - Create credentials (API Key)
   - Restrict the API key to your domain for security

2. **Add API Key to Code:**

   Open `app.js` and replace the `displayMockProviders()` function with:

   ```javascript
   // Add this at the top of app.js
   const GOOGLE_API_KEY = 'YOUR_API_KEY_HERE';

   // Replace displayMockProviders function
   async function findNearbyProviders() {
       findProvidersBtn.innerHTML = '<span class="loading"></span> Getting your location...';
       findProvidersBtn.disabled = true;

       try {
           const position = await getCurrentPosition();
           userLocation = {
               lat: position.coords.latitude,
               lng: position.coords.longitude
           };

           findProvidersBtn.innerHTML = '<span class="loading"></span> Searching for providers...';

           // Search for hospitals
           const hospitals = await searchPlaces('hospital', userLocation);
           // Search for doctors
           const doctors = await searchPlaces('doctor', userLocation);
           // Search for clinics
           const clinics = await searchPlaces('clinic', userLocation);

           const allProviders = [...hospitals, ...doctors, ...clinics]
               .sort((a, b) => a.distance - b.distance)
               .slice(0, 10);

           displayProviders(allProviders);

       } catch (error) {
           console.error('Error finding providers:', error);
           showLocationError();
       }
   }

   async function searchPlaces(type, location) {
       const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=5000&type=${type}&key=${GOOGLE_API_KEY}`;

       try {
           const response = await fetch(url);
           const data = await response.json();

           return data.results.map(place => ({
               name: place.name,
               type: type.charAt(0).toUpperCase() + type.slice(1),
               address: place.vicinity,
               distance: calculateDistance(location, {
                   lat: place.geometry.location.lat,
                   lng: place.geometry.location.lng
               }),
               rating: place.rating,
               placeId: place.place_id
           }));
       } catch (error) {
           console.error('Error searching places:', error);
           return [];
       }
   }

   function calculateDistance(point1, point2) {
       const R = 3959; // Earth's radius in miles
       const dLat = (point2.lat - point1.lat) * Math.PI / 180;
       const dLon = (point2.lng - point1.lng) * Math.PI / 180;
       const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                 Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) *
                 Math.sin(dLon/2) * Math.sin(dLon/2);
       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
       return (R * c).toFixed(1);
   }

   function displayProviders(providers) {
       providersList.innerHTML = providers.map(provider => `
           <div class="provider-card">
               <div class="provider-name">${provider.name}</div>
               <div class="provider-type">${provider.type}</div>
               <div class="provider-address">📍 ${provider.address}</div>
               <div class="provider-distance">📏 ${provider.distance} miles away</div>
               ${provider.rating ? `<div style="color: #F59E0B; margin: 8px 0;">⭐ ${provider.rating}/5</div>` : ''}
               <div class="provider-actions">
                   <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(provider.name + ' ' + provider.address)}&query_place_id=${provider.placeId}"
                      target="_blank" class="provider-btn">🗺️ View on Maps</a>
                   <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(provider.address)}"
                      target="_blank" class="provider-btn">🚗 Get Directions</a>
               </div>
           </div>
       `).join('');

       findProvidersBtn.innerHTML = `
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
               <path d="M10 0C6.13 0 3 3.13 3 7C3 12.25 10 20 10 20C10 20 17 12.25 17 7C17 3.13 13.87 0 10 0ZM10 9.5C8.62 9.5 7.5 8.38 7.5 7C7.5 5.62 8.62 4.5 10 4.5C11.38 4.5 12.5 5.62 12.5 7C12.5 8.38 11.38 9.5 10 9.5Z" fill="white"/>
           </svg>
           Refresh Results
       `;
       findProvidersBtn.disabled = false;
   }
   ```

3. **Important Notes:**
   - Google Places API requires billing to be enabled (free tier includes $200/month credit)
   - Due to CORS restrictions, you may need to set up a backend proxy server
   - Consider using a serverless function (Vercel, Netlify Functions, AWS Lambda) as a proxy

### 2. Alternative: Mapbox Places API

**Purpose:** Free alternative to Google Maps (generous free tier).

**Steps:**

1. Sign up at [Mapbox](https://www.mapbox.com/)
2. Get your access token
3. Use the [Mapbox Places API](https://docs.mapbox.com/api/search/geocoding/)

### 3. Symptomate API (Optional - Advanced)

**Purpose:** Professional symptom checking and diagnosis suggestions.

- [Infermedica API](https://developer.infermedica.com/) - Medical diagnostic API
- [ApiMedic](https://apimedic.com/) - Symptom checker API

**Note:** These are professional medical APIs that require approval and may have costs.

## Backend Proxy Server (Recommended for Production)

For security reasons, API keys should not be exposed in frontend code. Set up a simple backend:

### Option 1: Node.js/Express Backend

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

app.get('/api/places/nearby', async (req, res) => {
    const { lat, lng, type } = req.query;

    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
            {
                params: {
                    location: `${lat},${lng}`,
                    radius: 5000,
                    type: type,
                    key: GOOGLE_API_KEY
                }
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch places' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### Option 2: Serverless Function (Vercel)

Create `api/places.js`:

```javascript
export default async function handler(req, res) {
    const { lat, lng, type } = req.query;
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

    const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=${type}&key=${GOOGLE_API_KEY}`
    );

    const data = await response.json();
    res.json(data);
}
```

## Testing Without APIs

The current implementation works perfectly without any API keys:
- Mock healthcare providers are displayed
- All core functionality is operational
- Users can test the full symptom checking flow

## Security Best Practices

1. **Never commit API keys to version control**
   - Use environment variables
   - Add `.env` to `.gitignore`

2. **Restrict API keys**
   - Limit to specific domains
   - Set usage quotas
   - Enable billing alerts

3. **Use HTTPS**
   - Always serve your site over HTTPS in production
   - Required for geolocation API

4. **Rate limiting**
   - Implement rate limiting on your backend
   - Cache API responses when possible

## Cost Estimates

- **Google Maps Places API:** Free tier includes $200/month credit (~28,500 requests)
- **Mapbox:** 100,000 free requests per month
- **Geolocation API:** Free (browser built-in)

## Support

For API integration help:
- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation)
- [Mapbox Documentation](https://docs.mapbox.com/)

## Questions?

Feel free to reach out if you need help setting up any of these APIs!
