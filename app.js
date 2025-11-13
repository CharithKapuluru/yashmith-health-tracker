// Comprehensive symptom database with conditions
const symptomsDatabase = [
    // General symptoms
    { id: 1, name: 'Fever', category: 'general', icon: '🌡️' },
    { id: 2, name: 'Fatigue', category: 'general', icon: '😴' },
    { id: 3, name: 'Weakness', category: 'general', icon: '💤' },
    { id: 4, name: 'Chills', category: 'general', icon: '🥶' },
    { id: 5, name: 'Night Sweats', category: 'general', icon: '💧' },
    { id: 6, name: 'Weight Loss', category: 'general', icon: '⚖️' },
    { id: 7, name: 'Loss of Appetite', category: 'general', icon: '🍽️' },

    // Respiratory symptoms
    { id: 8, name: 'Cough', category: 'respiratory', icon: '🤧' },
    { id: 9, name: 'Shortness of Breath', category: 'respiratory', icon: '💨' },
    { id: 10, name: 'Sore Throat', category: 'respiratory', icon: '🗣️' },
    { id: 11, name: 'Runny Nose', category: 'respiratory', icon: '👃' },
    { id: 12, name: 'Congestion', category: 'respiratory', icon: '😷' },
    { id: 13, name: 'Wheezing', category: 'respiratory', icon: '🫁' },
    { id: 14, name: 'Chest Tightness', category: 'respiratory', icon: '🫀' },

    // Digestive symptoms
    { id: 15, name: 'Nausea', category: 'digestive', icon: '🤢' },
    { id: 16, name: 'Vomiting', category: 'digestive', icon: '🤮' },
    { id: 17, name: 'Diarrhea', category: 'digestive', icon: '🚽' },
    { id: 18, name: 'Constipation', category: 'digestive', icon: '💊' },
    { id: 19, name: 'Stomach Pain', category: 'digestive', icon: '🤰' },
    { id: 20, name: 'Bloating', category: 'digestive', icon: '🎈' },
    { id: 21, name: 'Heartburn', category: 'digestive', icon: '🔥' },

    // Neurological symptoms
    { id: 22, name: 'Headache', category: 'neurological', icon: '🤕' },
    { id: 23, name: 'Dizziness', category: 'neurological', icon: '😵' },
    { id: 24, name: 'Confusion', category: 'neurological', icon: '😕' },
    { id: 25, name: 'Memory Problems', category: 'neurological', icon: '🧠' },
    { id: 26, name: 'Numbness/Tingling', category: 'neurological', icon: '📍' },
    { id: 27, name: 'Vision Changes', category: 'neurological', icon: '👁️' },
    { id: 28, name: 'Sensitivity to Light', category: 'neurological', icon: '💡' },

    // Skin symptoms
    { id: 29, name: 'Rash', category: 'skin', icon: '🔴' },
    { id: 30, name: 'Itching', category: 'skin', icon: '✋' },
    { id: 31, name: 'Redness', category: 'skin', icon: '🔺' },
    { id: 32, name: 'Swelling', category: 'skin', icon: '🎈' },
    { id: 33, name: 'Hives', category: 'skin', icon: '🟥' },
    { id: 34, name: 'Dry Skin', category: 'skin', icon: '🏜️' },

    // Pain symptoms
    { id: 35, name: 'Muscle Pain', category: 'pain', icon: '💪' },
    { id: 36, name: 'Joint Pain', category: 'pain', icon: '🦴' },
    { id: 37, name: 'Back Pain', category: 'pain', icon: '🧍' },
    { id: 38, name: 'Chest Pain', category: 'pain', icon: '❤️' },
    { id: 39, name: 'Abdominal Pain', category: 'pain', icon: '🤰' },
    { id: 40, name: 'Ear Pain', category: 'pain', icon: '👂' },
];

// Conditions database with symptoms and treatments
const conditionsDatabase = [
    {
        id: 1,
        name: 'Common Cold',
        symptoms: [8, 10, 11, 12, 22, 2, 10],
        severity: 'low',
        description: 'A viral infection of your nose and throat (upper respiratory tract). It\'s usually harmless and symptoms typically resolve within 7-10 days.',
        treatments: [
            'Rest and stay hydrated',
            'Use over-the-counter cold medications for symptom relief',
            'Gargle with warm salt water for sore throat',
            'Use a humidifier to ease congestion',
            'Take vitamin C and zinc supplements'
        ],
        specialty: 'General Practitioner or Family Doctor'
    },
    {
        id: 2,
        name: 'Influenza (Flu)',
        symptoms: [1, 2, 8, 4, 22, 35, 36, 10],
        severity: 'medium',
        description: 'A contagious respiratory illness caused by influenza viruses. More severe than the common cold with sudden onset of symptoms.',
        treatments: [
            'Rest and get plenty of sleep',
            'Drink lots of fluids to prevent dehydration',
            'Take antiviral medications if prescribed early',
            'Use fever reducers like acetaminophen or ibuprofen',
            'Isolate to prevent spreading to others'
        ],
        specialty: 'General Practitioner or Urgent Care'
    },
    {
        id: 3,
        name: 'COVID-19',
        symptoms: [1, 2, 8, 9, 22, 35, 10, 15],
        severity: 'medium',
        description: 'A respiratory illness caused by the SARS-CoV-2 virus. Symptoms can range from mild to severe.',
        treatments: [
            'Isolate immediately and get tested',
            'Rest and stay hydrated',
            'Monitor oxygen levels if available',
            'Contact healthcare provider if symptoms worsen',
            'Consider antiviral treatment if eligible',
            'Seek emergency care if difficulty breathing occurs'
        ],
        specialty: 'General Practitioner or COVID-19 Testing Center'
    },
    {
        id: 4,
        name: 'Migraine',
        symptoms: [22, 15, 28, 23, 27],
        severity: 'medium',
        description: 'A neurological condition characterized by intense, debilitating headaches often accompanied by nausea and sensitivity to light.',
        treatments: [
            'Rest in a quiet, dark room',
            'Apply cold or warm compress to head/neck',
            'Take prescribed migraine medications',
            'Stay hydrated',
            'Identify and avoid triggers',
            'Consider preventive medications if frequent'
        ],
        specialty: 'Neurologist or Headache Specialist'
    },
    {
        id: 5,
        name: 'Gastroenteritis (Stomach Flu)',
        symptoms: [15, 16, 17, 19, 1, 2, 4],
        severity: 'medium',
        description: 'Inflammation of the digestive tract, typically caused by a viral or bacterial infection. Leads to diarrhea and vomiting.',
        treatments: [
            'Stay hydrated with clear fluids and electrolyte solutions',
            'Follow the BRAT diet (Bananas, Rice, Applesauce, Toast)',
            'Avoid dairy, caffeine, and fatty foods',
            'Rest and let your stomach recover',
            'Use anti-diarrheal medications if recommended',
            'Wash hands frequently to prevent spread'
        ],
        specialty: 'General Practitioner or Gastroenterologist'
    },
    {
        id: 6,
        name: 'Seasonal Allergies',
        symptoms: [11, 12, 30, 29, 27, 10],
        severity: 'low',
        description: 'An immune system response to outdoor allergens like pollen, causing cold-like symptoms.',
        treatments: [
            'Take antihistamine medications',
            'Use nasal corticosteroid sprays',
            'Keep windows closed during high pollen days',
            'Shower after being outdoors',
            'Use air purifiers indoors',
            'Consider allergy immunotherapy for severe cases'
        ],
        specialty: 'Allergist or General Practitioner'
    },
    {
        id: 7,
        name: 'Asthma',
        symptoms: [9, 13, 14, 8, 38],
        severity: 'high',
        description: 'A chronic condition where airways narrow and swell, producing extra mucus, making breathing difficult.',
        treatments: [
            'Use prescribed inhaler (rescue and/or controller)',
            'Identify and avoid triggers',
            'Take controller medications daily as prescribed',
            'Develop an asthma action plan',
            'Monitor peak flow readings',
            'Seek emergency care if severe attack occurs'
        ],
        specialty: 'Pulmonologist or Allergist'
    },
    {
        id: 8,
        name: 'Anxiety Disorder',
        symptoms: [2, 23, 9, 22, 35],
        severity: 'medium',
        description: 'A mental health condition characterized by excessive worry, nervousness, and physical symptoms.',
        treatments: [
            'Practice deep breathing and relaxation techniques',
            'Consider cognitive behavioral therapy (CBT)',
            'Exercise regularly',
            'Limit caffeine and alcohol',
            'Maintain a regular sleep schedule',
            'Consult about anti-anxiety medications if needed'
        ],
        specialty: 'Psychiatrist or Psychologist'
    },
    {
        id: 9,
        name: 'Urinary Tract Infection (UTI)',
        symptoms: [39, 1, 4],
        severity: 'medium',
        description: 'An infection in any part of the urinary system, most commonly affecting the bladder.',
        treatments: [
            'Take prescribed antibiotics completely',
            'Drink plenty of water',
            'Urinate frequently and completely',
            'Use a heating pad for pain relief',
            'Avoid irritants like caffeine and alcohol',
            'Take over-the-counter pain relievers'
        ],
        specialty: 'Urologist or General Practitioner'
    },
    {
        id: 10,
        name: 'Arthritis',
        symptoms: [36, 32, 3, 37],
        severity: 'medium',
        description: 'Inflammation of one or more joints, causing pain and stiffness that typically worsens with age.',
        treatments: [
            'Take anti-inflammatory medications (NSAIDs)',
            'Apply hot or cold therapy',
            'Engage in low-impact exercise',
            'Maintain healthy weight',
            'Physical therapy exercises',
            'Consider joint injections or surgery for severe cases'
        ],
        specialty: 'Rheumatologist or Orthopedic Surgeon'
    },
    {
        id: 11,
        name: 'Bronchitis',
        symptoms: [8, 9, 14, 1, 2, 4],
        severity: 'medium',
        description: 'Inflammation of the bronchial tubes that carry air to and from the lungs, often following a cold.',
        treatments: [
            'Rest and drink plenty of fluids',
            'Use a humidifier',
            'Take cough suppressants or expectorants',
            'Use bronchodilator inhalers if prescribed',
            'Avoid lung irritants like smoke',
            'Consider antibiotics only if bacterial'
        ],
        specialty: 'Pulmonologist or General Practitioner'
    },
    {
        id: 12,
        name: 'Dehydration',
        symptoms: [23, 2, 22, 3, 34],
        severity: 'medium',
        description: 'A condition that occurs when you lose more fluids than you take in.',
        treatments: [
            'Drink water and electrolyte solutions immediately',
            'Sip fluids slowly if nauseated',
            'Eat water-rich foods',
            'Avoid caffeine and alcohol',
            'Seek medical care if severe or cannot keep fluids down',
            'IV fluids may be needed in severe cases'
        ],
        specialty: 'Emergency Room or Urgent Care'
    },
    {
        id: 13,
        name: 'Sinusitis',
        symptoms: [22, 12, 11, 38, 1, 2],
        severity: 'low',
        description: 'Inflammation of the sinuses causing nasal congestion and facial pressure.',
        treatments: [
            'Use saline nasal spray or rinse',
            'Apply warm compresses to face',
            'Stay hydrated',
            'Use decongestants',
            'Sleep with head elevated',
            'Take antibiotics if bacterial infection confirmed'
        ],
        specialty: 'ENT Specialist or General Practitioner'
    },
    {
        id: 14,
        name: 'Food Poisoning',
        symptoms: [15, 16, 17, 19, 1, 4],
        severity: 'medium',
        description: 'Illness caused by eating contaminated food, typically with bacteria, viruses, or parasites.',
        treatments: [
            'Rest and let your stomach settle',
            'Stay hydrated with clear fluids',
            'Gradually reintroduce bland foods',
            'Avoid dairy, fatty, and spicy foods',
            'Replace electrolytes with sports drinks',
            'Seek medical care if symptoms are severe or persistent'
        ],
        specialty: 'General Practitioner or Emergency Room (if severe)'
    },
    {
        id: 15,
        name: 'Eczema',
        symptoms: [29, 30, 34, 31],
        severity: 'low',
        description: 'A condition that makes skin red, inflamed, and itchy. Common in children but can occur at any age.',
        treatments: [
            'Apply moisturizer regularly',
            'Use prescribed topical corticosteroids',
            'Take lukewarm (not hot) baths',
            'Avoid triggers and irritants',
            'Use gentle, fragrance-free products',
            'Consider antihistamines for itching'
        ],
        specialty: 'Dermatologist'
    }
];

// Global state
let selectedSymptoms = [];
let currentCategory = 'all';
let userLocation = null;

// DOM Elements
const symptomGrid = document.getElementById('symptomGrid');
const symptomSearch = document.getElementById('symptomSearch');
const categoryButtons = document.querySelectorAll('.category-btn');
const analyzeBtn = document.getElementById('analyzeBtn');
const selectedSymptomsDiv = document.getElementById('selectedSymptoms');
const selectedList = document.getElementById('selectedList');
const resultsSection = document.getElementById('resultsSection');
const conditionsContainer = document.getElementById('conditionsContainer');
const treatmentSection = document.getElementById('treatmentSection');
const findProvidersBtn = document.getElementById('findProvidersBtn');
const providersList = document.getElementById('providersList');
const resetBtn = document.getElementById('resetBtn');

// Initialize the app
function init() {
    renderSymptoms();
    attachEventListeners();
}

// Render symptoms in grid
function renderSymptoms(filter = '') {
    const filteredSymptoms = symptomsDatabase.filter(symptom => {
        const matchesCategory = currentCategory === 'all' || symptom.category === currentCategory;
        const matchesSearch = symptom.name.toLowerCase().includes(filter.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    symptomGrid.innerHTML = filteredSymptoms.map(symptom => `
        <div class="symptom-card ${selectedSymptoms.includes(symptom.id) ? 'selected' : ''}"
             data-id="${symptom.id}">
            <span class="icon">${symptom.icon}</span>
            <span class="name">${symptom.name}</span>
        </div>
    `).join('');

    // Attach click handlers to symptom cards
    document.querySelectorAll('.symptom-card').forEach(card => {
        card.addEventListener('click', () => toggleSymptom(parseInt(card.dataset.id)));
    });
}

// Toggle symptom selection
function toggleSymptom(symptomId) {
    if (selectedSymptoms.includes(symptomId)) {
        selectedSymptoms = selectedSymptoms.filter(id => id !== symptomId);
    } else {
        selectedSymptoms.push(symptomId);
    }
    updateUI();
}

// Update UI after symptom selection changes
function updateUI() {
    renderSymptoms(symptomSearch.value);
    updateSelectedSymptoms();
    analyzeBtn.disabled = selectedSymptoms.length === 0;
}

// Update selected symptoms display
function updateSelectedSymptoms() {
    if (selectedSymptoms.length === 0) {
        selectedSymptomsDiv.style.display = 'none';
        return;
    }

    selectedSymptomsDiv.style.display = 'block';
    selectedList.innerHTML = selectedSymptoms.map(id => {
        const symptom = symptomsDatabase.find(s => s.id === id);
        return `
            <div class="selected-tag">
                <span>${symptom.icon} ${symptom.name}</span>
                <span class="remove" data-id="${id}">×</span>
            </div>
        `;
    }).join('');

    // Attach click handlers to remove buttons
    document.querySelectorAll('.selected-tag .remove').forEach(btn => {
        btn.addEventListener('click', () => toggleSymptom(parseInt(btn.dataset.id)));
    });
}

// Analyze symptoms and show results
function analyzeSymptoms() {
    const results = [];

    conditionsDatabase.forEach(condition => {
        const matchedSymptoms = condition.symptoms.filter(s => selectedSymptoms.includes(s));
        const matchPercentage = (matchedSymptoms.length / condition.symptoms.length) * 100;

        if (matchedSymptoms.length >= 2 || matchPercentage >= 30) {
            results.push({
                ...condition,
                matchedSymptoms,
                matchPercentage
            });
        }
    });

    // Sort by match percentage
    results.sort((a, b) => b.matchPercentage - a.matchPercentage);

    displayResults(results);
}

// Display diagnosis results
function displayResults(results) {
    // Scroll to results
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });

    if (results.length === 0) {
        conditionsContainer.innerHTML = `
            <div class="condition-card">
                <p style="text-align: center; color: var(--gray-600);">
                    No specific conditions matched your symptoms. Please consult a healthcare provider for a proper evaluation.
                </p>
            </div>
        `;
        treatmentSection.innerHTML = '';
        return;
    }

    // Display condition cards
    conditionsContainer.innerHTML = results.map((result, index) => {
        const matchedSymptomNames = result.matchedSymptoms.map(id =>
            symptomsDatabase.find(s => s.id === id).name
        );

        return `
            <div class="condition-card">
                <div class="condition-header">
                    <div>
                        <div class="condition-name">${result.name}</div>
                        <div class="match-score">
                            ${Math.round(result.matchPercentage)}% symptom match
                            (${result.matchedSymptoms.length} of ${result.symptoms.length} symptoms)
                        </div>
                    </div>
                    <span class="severity-badge severity-${result.severity}">
                        ${result.severity.charAt(0).toUpperCase() + result.severity.slice(1)} Severity
                    </span>
                </div>
                <p class="condition-description">${result.description}</p>
                <div class="matched-symptoms">
                    <h4>Your matching symptoms:</h4>
                    <ul>
                        ${matchedSymptomNames.map(name => `<li>${name}</li>`).join('')}
                    </ul>
                </div>
                ${index === 0 ? `<div style="margin-top: 15px; padding: 12px; background: #FEF3C7; border-radius: 8px; font-size: 0.9rem; color: #92400E;">
                    <strong>Most likely condition based on your symptoms</strong>
                </div>` : ''}
            </div>
        `;
    }).join('');

    // Display treatment recommendations for top match
    const topMatch = results[0];
    treatmentSection.innerHTML = `
        <h3>Recommended Actions for ${topMatch.name}</h3>
        <p style="margin-bottom: 15px; color: var(--gray-700);">
            <strong>Recommended Specialist:</strong> ${topMatch.specialty}
        </p>
        <ul class="treatment-list">
            ${topMatch.treatments.map(treatment => `<li>${treatment}</li>`).join('')}
        </ul>
        <div style="margin-top: 20px; padding: 15px; background: #FEE2E2; border-radius: 8px; font-size: 0.9rem; color: #991B1B;">
            <strong>⚠️ When to seek emergency care:</strong> If you experience severe difficulty breathing, chest pain, confusion, severe bleeding, or other life-threatening symptoms, call emergency services immediately.
        </div>
    `;
}

// Find nearby healthcare providers
async function findNearbyProviders() {
    findProvidersBtn.innerHTML = '<span class="loading"></span> Getting your location...';
    findProvidersBtn.disabled = true;

    try {
        // Get user's location
        const position = await getCurrentPosition();
        userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        findProvidersBtn.innerHTML = '<span class="loading"></span> Searching for providers...';

        // Search for different types of healthcare providers
        const allProviders = [];

        // Search for hospitals
        const hospitals = await searchPlaces('hospital', userLocation);
        allProviders.push(...hospitals);

        // Search for doctors
        const doctors = await searchPlaces('doctor', userLocation);
        allProviders.push(...doctors);

        // Search for clinics
        const clinics = await searchPlaces('health', userLocation);
        allProviders.push(...clinics);

        // Remove duplicates and sort by distance
        const uniqueProviders = removeDuplicates(allProviders);
        const sortedProviders = uniqueProviders
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 10); // Show top 10 results

        if (sortedProviders.length > 0) {
            displayProviders(sortedProviders);
        } else {
            showNoResults();
        }

    } catch (error) {
        console.error('Error finding providers:', error);
        showLocationError(error.message);
    }
}

// Search for places using backend API
async function searchPlaces(type, location) {
    try {
        const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
            ? 'http://localhost:3000'
            : window.location.origin;

        const response = await fetch(
            `${API_URL}/api/places/nearby?lat=${location.lat}&lng=${location.lng}&type=${type}&radius=5000`
        );

        if (!response.ok) {
            throw new Error(`API request failed: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.status === 'OK' && data.results) {
            return data.results.map(place => ({
                name: place.name,
                type: formatType(type),
                address: place.vicinity,
                distance: calculateDistance(location, {
                    lat: place.geometry.location.lat,
                    lng: place.geometry.location.lng
                }),
                rating: place.rating || null,
                userRatingsTotal: place.user_ratings_total || 0,
                placeId: place.place_id,
                isOpen: place.opening_hours?.open_now,
                location: place.geometry.location
            }));
        }

        return [];
    } catch (error) {
        console.error(`Error searching for ${type}:`, error);
        return [];
    }
}

// Calculate distance between two points in miles
function calculateDistance(point1, point2) {
    const R = 3959; // Earth's radius in miles
    const dLat = (point2.lat - point1.lat) * Math.PI / 180;
    const dLon = (point2.lng - point1.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Format type for display
function formatType(type) {
    const typeMap = {
        'hospital': 'Hospital',
        'doctor': 'Medical Practice',
        'health': 'Health Clinic',
        'clinic': 'Clinic'
    };
    return typeMap[type] || type.charAt(0).toUpperCase() + type.slice(1);
}

// Remove duplicate providers based on name and address similarity
function removeDuplicates(providers) {
    const seen = new Set();
    return providers.filter(provider => {
        const key = `${provider.name.toLowerCase()}-${provider.address.toLowerCase()}`;
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}

// Display providers
function displayProviders(providers) {
    providersList.innerHTML = providers.map(provider => `
        <div class="provider-card">
            <div class="provider-name">${provider.name}</div>
            <div class="provider-type">${provider.type}</div>
            <div class="provider-address">📍 ${provider.address}</div>
            <div class="provider-distance">📏 ${provider.distance.toFixed(1)} miles away</div>
            ${provider.rating ? `
                <div style="color: #F59E0B; margin: 8px 0; font-size: 0.9rem;">
                    ⭐ ${provider.rating}/5 ${provider.userRatingsTotal > 0 ? `(${provider.userRatingsTotal} reviews)` : ''}
                </div>
            ` : ''}
            ${provider.isOpen !== undefined ? `
                <div style="margin: 8px 0; font-size: 0.85rem; color: ${provider.isOpen ? '#10B981' : '#EF4444'};">
                    ${provider.isOpen ? '🟢 Open now' : '🔴 Closed now'}
                </div>
            ` : ''}
            <div class="provider-actions">
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(provider.name + ' ' + provider.address)}&query_place_id=${provider.placeId}"
                   target="_blank" class="provider-btn">🗺️ View on Maps</a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=${provider.location.lat},${provider.location.lng}"
                   target="_blank" class="provider-btn">🚗 Get Directions</a>
            </div>
        </div>
    `).join('');

    providersList.innerHTML += `
        <div style="margin-top: 20px; padding: 15px; background: #DBEAFE; border-radius: 8px; font-size: 0.85rem; color: var(--gray-700);">
            <strong>ℹ️ Note:</strong> Results are from Google Maps Places API. Click on any provider to view full details, contact information, and reviews on Google Maps.
        </div>
    `;

    findProvidersBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C6.13 0 3 3.13 3 7C3 12.25 10 20 10 20C10 20 17 12.25 17 7C17 3.13 13.87 0 10 0ZM10 9.5C8.62 9.5 7.5 8.38 7.5 7C7.5 5.62 8.62 4.5 10 4.5C11.38 4.5 12.5 5.62 12.5 7C12.5 8.38 11.38 9.5 10 9.5Z" fill="white"/>
        </svg>
        Refresh Results
    `;
    findProvidersBtn.disabled = false;
}

// Show error when location cannot be obtained
function showLocationError(message) {
    providersList.innerHTML = `
        <div style="padding: 20px; text-align: center; color: var(--danger);">
            <p><strong>Unable to get your location.</strong></p>
            <p style="margin-top: 10px; font-size: 0.9rem;">Please enable location services in your browser to find nearby healthcare providers.</p>
            ${message ? `<p style="margin-top: 10px; font-size: 0.85rem; color: var(--gray-600);">Error: ${message}</p>` : ''}
            <p style="margin-top: 15px; font-size: 0.85rem; color: var(--gray-600);">
                Alternatively, you can search for healthcare providers manually using <a href="https://www.google.com/maps/search/hospitals+near+me" target="_blank" style="color: var(--primary); text-decoration: underline;">Google Maps</a>.
            </p>
        </div>
    `;
    findProvidersBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C6.13 0 3 3.13 3 7C3 12.25 10 20 10 20C10 20 17 12.25 17 7C17 3.13 13.87 0 10 0ZM10 9.5C8.62 9.5 7.5 8.38 7.5 7C7.5 5.62 8.62 4.5 10 4.5C11.38 4.5 12.5 5.62 12.5 7C12.5 8.38 11.38 9.5 10 9.5Z" fill="white"/>
        </svg>
        Try Again
    `;
    findProvidersBtn.disabled = false;
}

// Show message when no results found
function showNoResults() {
    providersList.innerHTML = `
        <div style="padding: 20px; text-align: center; color: var(--gray-600);">
            <p><strong>No healthcare providers found nearby.</strong></p>
            <p style="margin-top: 10px; font-size: 0.9rem;">Try expanding your search radius or search manually on <a href="https://www.google.com/maps/search/hospitals+near+me" target="_blank" style="color: var(--primary); text-decoration: underline;">Google Maps</a>.</p>
        </div>
    `;
    findProvidersBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C6.13 0 3 3.13 3 7C3 12.25 10 20 10 20C10 20 17 12.25 17 7C17 3.13 13.87 0 10 0ZM10 9.5C8.62 9.5 7.5 8.38 7.5 7C7.5 5.62 8.62 4.5 10 4.5C11.38 4.5 12.5 5.62 12.5 7C12.5 8.38 11.38 9.5 10 9.5Z" fill="white"/>
        </svg>
        Try Again
    `;
    findProvidersBtn.disabled = false;
}

// Get current position using Geolocation API
function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported by your browser'));
        } else {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        }
    });
}

// Reset the app
function resetApp() {
    selectedSymptoms = [];
    currentCategory = 'all';
    symptomSearch.value = '';

    // Reset category buttons
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');

    // Hide results section
    resultsSection.style.display = 'none';

    // Clear providers list
    providersList.innerHTML = '';

    // Update UI
    updateUI();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Attach event listeners
function attachEventListeners() {
    // Search functionality
    symptomSearch.addEventListener('input', (e) => {
        renderSymptoms(e.target.value);
    });

    // Category filtering
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderSymptoms(symptomSearch.value);
        });
    });

    // Analyze button
    analyzeBtn.addEventListener('click', analyzeSymptoms);

    // Find providers button
    findProvidersBtn.addEventListener('click', findNearbyProviders);

    // Reset button
    resetBtn.addEventListener('click', resetApp);
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
