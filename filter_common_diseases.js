const fs = require('fs');

// Read current app.js
const appContent = fs.readFileSync('app.js', 'utf-8');

// Extract conditionsDatabase
const conditionsMatch = appContent.match(/const conditionsDatabase = (\[[\s\S]*?\]);[\s\S]*?\/\/ Total:/);
const conditions = JSON.parse(conditionsMatch[1]);

console.log(`Original conditions: ${conditions.length}`);

// List of most common diseases to keep (targeting ~60-70 total)
const commonDiseaseKeywords = [
    // Respiratory (very common)
    'Common Cold', 'Flu', 'Influenza', 'COVID',
    'Pneumonia', 'Bronchitis', 'Asthma',
    'Sinusitis', 'Sinus',

    // Chronic diseases (very important)
    'Diabetes', 'Type 1 Diabetes', 'Type 2 Diabetes',
    'Hypertension', 'High Blood Pressure',
    'Heart Attack', 'Heart Failure', 'Coronary',
    'Stroke',

    // Pain & Neurological
    'Migraine', 'Headache', 'Tension',
    'Concussion',

    // Mental Health
    'Depression', 'Anxiety', 'Panic',

    // Musculoskeletal
    'Arthritis', 'Osteoarthritis',
    'Osteoporosis',
    'Sciatica',
    'Carpal Tunnel',

    // Digestive
    'Gastritis', 'Ulcer', 'GERD', 'Acid Reflux',
    'IBS', 'Inflammatory Bowel',
    'Food Poisoning',
    'Appendicitis',
    'Gallstones',
    'Constipation',
    'Diarrhea',

    // Urinary
    'UTI', 'Urinary Tract',
    'Kidney Stone',

    // Endocrine
    'Thyroid', 'Hypothyroidism', 'Hyperthyroidism',

    // Infectious
    'Meningitis',
    'Hepatitis',
    'Chickenpox', 'Measles',
    'Herpes', 'Shingles',
    'Mononucleosis',

    // Skin
    'Eczema', 'Psoriasis', 'Dermatitis', 'Acne',
    'Cellulitis',

    // Blood
    'Anemia',
    'Deep Vein Thrombosis',

    // Allergies
    'Allergies', 'Allergy', 'Hay Fever',

    // Other Common
    'Dehydration',
    'Vertigo',
    'Sleep Apnea', 'Insomnia',
    'Hemorrhoids'
];

// Filter conditions - keep if name contains any common keyword
const filteredConditions = conditions.filter(condition => {
    const nameLower = condition.name.toLowerCase();
    return commonDiseaseKeywords.some(keyword =>
        nameLower.includes(keyword.toLowerCase())
    );
});

// Sort by importance (common conditions first)
const priorityKeywords = ['common cold', 'flu', 'fever', 'headache', 'diabetes', 'hypertension', 'asthma', 'anxiety', 'depression'];
filteredConditions.sort((a, b) => {
    const aHasPriority = priorityKeywords.some(k => a.name.toLowerCase().includes(k));
    const bHasPriority = priorityKeywords.some(k => b.name.toLowerCase().includes(k));

    if (aHasPriority && !bHasPriority) return -1;
    if (!aHasPriority && bHasPriority) return 1;
    return 0;
});

// Take top 60
const finalConditions = filteredConditions.slice(0, 60);

console.log(`Filtered to: ${finalConditions.length} common conditions`);
console.log('Sample conditions:', finalConditions.slice(0, 15).map(c => c.name));

// Save to file
fs.writeFileSync('filtered_conditions.json', JSON.stringify(finalConditions, null, 2));
console.log('Saved to filtered_conditions.json');
