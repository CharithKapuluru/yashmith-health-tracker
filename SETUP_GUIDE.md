# Complete Setup Guide - HealthCheck Symptom Tracker

## Quick Start Guide

You've successfully created a Google Maps API key! Now let's get your app running with real healthcare provider data.

## Step 1: Install Dependencies

First, install the required Node.js packages:

```bash
cd /Users/charithkapuluru/Desktop/Yashmith
npm install
```

This will install:
- `express` - Web server
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management
- `node-fetch` - HTTP requests to Google Maps API

## Step 2: Configure Your API Key

1. **Create a `.env` file** in the project root:

```bash
# Create the .env file
touch .env
```

2. **Add your API key** to the `.env` file:

```env
GOOGLE_MAPS_API_KEY=AIzaSyBfkTIaBWidM5p1tkqU1iQ4mYlbnZF2DGY
PORT=3000
```

**Important:** Replace `AIzaSyBfkTIaBWidM5p1tkqU1iQ4mYlbnZF2DGY` with your actual API key from the screenshot.

## Step 3: Secure Your API Key (IMPORTANT!)

To prevent unauthorized usage and unexpected charges:

1. **Go to Google Cloud Console** → [API Credentials](https://console.cloud.google.com/apis/credentials)

2. **Click on your API key** (Maps Platform API Key)

3. **Set Application Restrictions:**
   - Choose "HTTP referrers (web sites)"
   - Add these referrers:
     ```
     http://localhost:3000/*
     http://127.0.0.1:3000/*
     http://www.charithkapuluru.com/*
     https://www.charithkapuluru.com/*
     ```

4. **Set API Restrictions:**
   - Click "Restrict key"
   - Select only these APIs:
     - Places API
     - Maps JavaScript API
     - Geolocation API (optional)

5. **Click "Save"**

## Step 4: Enable Required APIs

Make sure these APIs are enabled in your Google Cloud project:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project ("Trash" from your screenshot)
3. Go to "APIs & Services" → "Library"
4. Search and enable:
   - ✅ **Places API** (Required)
   - ✅ **Maps JavaScript API** (Optional, for enhanced maps)

## Step 5: Set Up Billing (Required for Places API)

Google Maps Places API requires billing to be enabled:

1. Go to [Billing](https://console.cloud.google.com/billing)
2. Link a billing account to your project
3. **Don't worry:** Google provides **$200/month free credit**
   - That's approximately **28,500 Place Search requests per month**
   - More than enough for personal/development use

## Step 6: Run the Application

### For Development (Local Testing):

```bash
# Start the server
npm start

# Or use nodemon for auto-restart on file changes
npm run dev
```

You should see:
```
🏥 HealthCheck Server running on http://localhost:3000
📍 API endpoint: http://localhost:3000/api/places/nearby
✅ Google Maps API key configured
```

### Open in Browser:

Visit: **http://localhost:3000**

## Step 7: Test the Application

1. **Select symptoms** from the interface
2. **Click "Analyze Symptoms"** to see diagnosis
3. **Click "Find Doctors & Hospitals Near Me"**
4. **Allow location access** when prompted
5. **See REAL healthcare providers** near you!

## For GitHub Pages Deployment

Since GitHub Pages only hosts static files, you'll need a backend server for the API. Here are your options:

### Option 1: Deploy Backend to Vercel (Recommended - FREE)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Create `vercel.json` in your project:**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "/server.js"
       },
       {
         "src": "/(.*)",
         "dest": "/$1"
       }
     ],
     "env": {
       "GOOGLE_MAPS_API_KEY": "@google_maps_api_key"
     }
   }
   ```

3. **Deploy to Vercel:**
   ```bash
   vercel
   ```

4. **Add your API key as a secret:**
   ```bash
   vercel secrets add google_maps_api_key "YOUR_API_KEY_HERE"
   ```

5. **Update app.js** to use your Vercel URL:
   ```javascript
   const API_URL = 'https://your-project.vercel.app';
   ```

### Option 2: Deploy Backend to Render (FREE)

1. Go to [Render.com](https://render.com)
2. Create a new "Web Service"
3. Connect your GitHub repository
4. Set environment variable: `GOOGLE_MAPS_API_KEY`
5. Deploy!

### Option 3: Deploy Backend to Railway (FREE)

1. Go to [Railway.app](https://railway.app)
2. Create new project from GitHub
3. Add environment variable
4. Deploy automatically

## Project Structure

```
yashmith-health-tracker/
├── index.html              # Main HTML file
├── styles.css              # Styling
├── app.js                  # Frontend JavaScript (with API integration)
├── server.js               # Backend server (API proxy)
├── package.json            # Node.js dependencies
├── .env                    # Environment variables (API keys) - NOT IN GIT
├── .env.example            # Example env file
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── API_SETUP.md            # Detailed API setup guide
└── SETUP_GUIDE.md          # This file
```

## Troubleshooting

### "API key not configured" Error

**Problem:** Server shows warning about missing API key

**Solution:**
- Check that `.env` file exists in project root
- Verify API key is correctly copied
- Restart the server after creating `.env`

### "API request failed" Error

**Problem:** Frontend can't reach backend API

**Solution:**
- Make sure server is running (`npm start`)
- Check server is on port 3000
- Verify API URL in app.js matches your setup

### "ZERO_RESULTS" or No Providers Found

**Problem:** No healthcare providers returned

**Solutions:**
- Check that Places API is enabled in Google Cloud
- Verify billing is set up (required for Places API)
- Try increasing search radius
- Check your location is accurate

### "Request Denied" from Google Maps

**Problem:** API key restrictions blocking requests

**Solution:**
- Check API key restrictions in Google Cloud Console
- Add your domain/localhost to allowed referrers
- Verify Places API is enabled

### CORS Errors in Browser Console

**Problem:** Cross-origin request blocked

**Solution:**
- Make sure you're accessing via `http://localhost:3000` (not file://)
- Server includes CORS middleware already
- Check browser console for specific error

## Cost Management

### Stay Within Free Tier:

- Google provides **$200/month free credit**
- Places API costs:
  - Nearby Search: $32 per 1000 requests
  - Place Details: $17 per 1000 requests
- Free tier = ~6,250 searches/month

### Set Up Budget Alerts:

1. Go to [Google Cloud Billing](https://console.cloud.google.com/billing)
2. Set up budget alerts at $10, $50, $100
3. You'll get email notifications

### Monitor Usage:

- Check usage at [Google Cloud Console](https://console.cloud.google.com/apis/dashboard)

## Security Best Practices

1. ✅ **Never commit `.env` to GitHub** (already in .gitignore)
2. ✅ **Restrict API key to specific domains**
3. ✅ **Enable only required APIs**
4. ✅ **Set up billing alerts**
5. ✅ **Use backend proxy** (server.js) to hide API key
6. ✅ **Monitor usage regularly**

## Need Help?

- **Google Maps API Docs:** https://developers.google.com/maps/documentation
- **Places API Docs:** https://developers.google.com/maps/documentation/places/web-service
- **GitHub Issues:** https://github.com/CharithKapuluru/yashmith-health-tracker/issues

## Next Steps

After setup is complete:
1. ✅ Test locally with `npm start`
2. ✅ Verify real providers appear
3. ✅ Deploy backend to Vercel/Render
4. ✅ Update GitHub Pages with new frontend
5. ✅ Share your live app!

---

**Your API Key:** `AIzaSyBfkTIaBWidM5p1tkqU1iQ4mYlbnZF2DGY`

**Remember to restrict this key in Google Cloud Console!**
