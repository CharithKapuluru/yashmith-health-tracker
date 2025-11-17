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
        symptoms: [22, 15, 28, 23, 27, 1],
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
        id: 22,
        name: 'Meningitis',
        symptoms: [1, 22, 28, 24, 5, 15, 38],
        severity: 'high',
        description: 'A serious infection causing inflammation of the membranes surrounding the brain and spinal cord. REQUIRES IMMEDIATE MEDICAL ATTENTION.',
        treatments: [
            '🚨 SEEK EMERGENCY CARE IMMEDIATELY - Call 911',
            'Do not delay - this is a medical emergency',
            'Hospital treatment with IV antibiotics or antivirals',
            'May require hospitalization',
            'Close contacts may need prophylactic antibiotics',
            'Early treatment is critical for best outcomes'
        ],
        specialty: 'Emergency Room - IMMEDIATE CARE REQUIRED'
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
    },
    {
        id: 16,
        name: 'Heart Failure',
        symptoms: [2, 9, 32, 7, 3, 8],
        severity: 'high',
        description: 'A chronic condition where the heart doesn\'t pump blood as well as it should, leading to fluid buildup and swelling.',
        treatments: [
            'Take prescribed medications (diuretics, ACE inhibitors, beta-blockers)',
            'Limit sodium and fluid intake',
            'Monitor weight daily',
            'Engage in doctor-approved exercise',
            'Quit smoking and limit alcohol',
            'Attend regular follow-up appointments'
        ],
        specialty: 'Cardiologist'
    },
    {
        id: 17,
        name: 'Kidney Disease',
        symptoms: [2, 32, 7, 15, 5, 3],
        severity: 'high',
        description: 'Chronic kidney disease is gradual loss of kidney function, which can lead to fluid retention, fatigue, and appetite changes.',
        treatments: [
            'Follow prescribed medications',
            'Eat a kidney-friendly diet (low protein, salt, and potassium)',
            'Control blood pressure and blood sugar',
            'Stay hydrated but monitor fluid intake',
            'Avoid NSAIDs and certain medications',
            'Regular monitoring of kidney function'
        ],
        specialty: 'Nephrologist'
    },
    {
        id: 18,
        name: 'Liver Disease',
        symptoms: [2, 7, 32, 6, 15, 39],
        severity: 'high',
        description: 'Liver disease includes conditions that damage the liver, affecting its ability to function properly.',
        treatments: [
            'Avoid alcohol completely',
            'Eat a balanced, low-fat diet',
            'Take prescribed medications',
            'Monitor for complications',
            'Maintain healthy weight',
            'Get vaccinated for hepatitis A and B'
        ],
        specialty: 'Hepatologist or Gastroenterologist'
    },
    {
        id: 19,
        name: 'Hypothyroidism',
        symptoms: [2, 3, 6, 34, 32, 7],
        severity: 'medium',
        description: 'An underactive thyroid gland that doesn\'t produce enough thyroid hormone, slowing metabolism.',
        treatments: [
            'Take daily thyroid hormone replacement medication',
            'Get regular blood tests to monitor levels',
            'Take medication on empty stomach',
            'Eat a balanced diet rich in iodine',
            'Exercise regularly',
            'Manage stress levels'
        ],
        specialty: 'Endocrinologist'
    },
    {
        id: 20,
        name: 'Anemia',
        symptoms: [2, 3, 23, 9, 34, 7],
        severity: 'medium',
        description: 'A condition where you lack enough healthy red blood cells to carry adequate oxygen to tissues.',
        treatments: [
            'Take iron supplements if iron-deficient',
            'Eat iron-rich foods (red meat, beans, spinach)',
            'Take vitamin B12 and folate supplements if needed',
            'Treat underlying causes',
            'Get regular blood tests',
            'Avoid tea and coffee with meals (blocks iron absorption)'
        ],
        specialty: 'Hematologist or General Practitioner'
    },
    {
        id: 21,
        name: 'Depression',
        symptoms: [2, 7, 3, 2, 25, 22],
        severity: 'medium',
        description: 'A mood disorder causing persistent sadness, loss of interest, and physical symptoms like fatigue.',
        treatments: [
            'Consider psychotherapy (CBT, talk therapy)',
            'Take prescribed antidepressant medications if recommended',
            'Exercise regularly (30 minutes daily)',
            'Maintain regular sleep schedule',
            'Stay socially connected',
            'Seek emergency help if suicidal thoughts occur'
        ],
        specialty: 'Psychiatrist or Psychologist'
    },
    {
        id: 23,
        name: 'Vertigo / Inner Ear Problems',
        symptoms: [23, 15, 16, 22],
        severity: 'medium',
        description: 'A sensation of spinning or dizziness, often caused by inner ear problems affecting balance.',
        treatments: [
            'Avoid sudden head movements',
            'Sit or lie down when dizzy',
            'Take prescribed anti-vertigo medications',
            'Do vestibular rehabilitation exercises',
            'Stay hydrated',
            'Avoid driving if experiencing vertigo'
        ],
        specialty: 'ENT Specialist or Neurologist'
    },
    {
        id: 24,
        name: 'Low Blood Pressure (Hypotension)',
        symptoms: [23, 3, 2, 24],
        severity: 'medium',
        description: 'Blood pressure that\'s lower than normal, which can cause dizziness and fainting.',
        treatments: [
            'Increase salt intake (if advised by doctor)',
            'Drink more fluids',
            'Stand up slowly from sitting/lying positions',
            'Wear compression stockings',
            'Avoid prolonged standing',
            'Take prescribed medications'
        ],
        specialty: 'Cardiologist or General Practitioner'
    },
    {
        id: 25,
        name: 'Ear Infection (Otitis)',
        symptoms: [40, 23, 1, 11, 22],
        severity: 'medium',
        description: 'Infection of the middle or outer ear causing pain and sometimes dizziness.',
        treatments: [
            'Take prescribed antibiotics if bacterial',
            'Use pain relievers (acetaminophen, ibuprofen)',
            'Apply warm compress to ear',
            'Avoid getting water in the ear',
            'Use prescribed ear drops',
            'Follow up if symptoms persist beyond 3 days'
        ],
        specialty: 'ENT Specialist or General Practitioner'
    },
    {
        id: 26,
        name: 'Motion Sickness',
        symptoms: [23, 15, 16, 2],
        severity: 'low',
        description: 'Nausea and dizziness caused by motion during travel.',
        treatments: [
            'Look at the horizon or fixed point',
            'Sit in front seat or over wing on plane',
            'Take anti-motion sickness medication before travel',
            'Eat light meals before travel',
            'Get fresh air',
            'Try ginger or peppermint'
        ],
        specialty: 'General Practitioner'
    },
    {
        id: 27,
        name: 'Concussion',
        symptoms: [22, 23, 24, 15, 27, 25],
        severity: 'high',
        description: 'A mild traumatic brain injury usually caused by a blow to the head.',
        treatments: [
            'Rest and avoid physical/mental exertion',
            'Avoid screens and bright lights',
            'Do NOT use NSAIDs initially (increase bleeding risk)',
            'Monitor for worsening symptoms',
            'Seek emergency care if symptoms worsen',
            'Gradual return to normal activities as symptoms improve'
        ],
        specialty: 'Emergency Room or Neurologist'
    },
    {
        id: 28,
        name: 'Panic Attack',
        symptoms: [23, 9, 38, 15, 4],
        severity: 'medium',
        description: 'Sudden episode of intense fear triggering severe physical reactions.',
        treatments: [
            'Practice deep breathing exercises',
            'Ground yourself (5 senses technique)',
            'Remember it will pass (usually 10-20 minutes)',
            'Consider cognitive behavioral therapy',
            'Learn stress management techniques',
            'Consult about anti-anxiety medication if frequent'
        ],
        specialty: 'Psychiatrist or Psychologist'
    },
    {
        id: 29,
        name: 'Heat Exhaustion',
        symptoms: [23, 4, 15, 2, 35, 22],
        severity: 'medium',
        description: 'Condition resulting from overheating, usually from high temperature and humidity.',
        treatments: [
            'Move to cool, shaded area immediately',
            'Drink cool water or sports drinks',
            'Remove excess clothing',
            'Apply cool, wet cloths to skin',
            'Rest and avoid exertion',
            'Seek medical care if symptoms worsen or don\'t improve'
        ],
        specialty: 'Emergency Room if severe'
    },
    {
        id: 30,
        name: 'Stroke / TIA (Mini-Stroke)',
        symptoms: [23, 26, 24, 3, 22, 27],
        severity: 'high',
        description: 'Reduced blood flow to the brain causing neurological symptoms. MEDICAL EMERGENCY.',
        treatments: [
            '🚨 CALL 911 IMMEDIATELY - Time is critical!',
            'Note time symptoms started',
            'Do NOT give aspirin unless instructed',
            'Keep person calm and lying down',
            'Monitor breathing and consciousness',
            'Emergency treatment within hours can prevent permanent damage'
        ],
        specialty: 'Emergency Room - IMMEDIATE CARE REQUIRED'
    },
    {
        id: 31,
        name: 'Vestibular Neuritis',
        symptoms: [23, 15, 16, 2],
        severity: 'medium',
        description: 'Inflammation of the inner ear nerve causing severe dizziness and balance problems.',
        treatments: [
            'Take prescribed anti-nausea and anti-vertigo medications',
            'Rest initially, then gradually increase activity',
            'Do vestibular rehabilitation exercises',
            'Stay hydrated',
            'Avoid sudden head movements',
            'Symptoms usually improve over weeks'
        ],
        specialty: 'ENT Specialist or Neurologist'
    },
    {
        id: 32,
        name: 'Menieres Disease',
        symptoms: [23, 40, 11, 15],
        severity: 'medium',
        description: 'Inner ear disorder causing episodes of vertigo, hearing loss, and ear fullness.',
        treatments: [
            'Reduce salt intake',
            'Take prescribed diuretics',
            'Avoid caffeine, alcohol, and tobacco',
            'Manage stress',
            'Take anti-vertigo medications during attacks',
            'Consider hearing aids if hearing loss develops'
        ],
        specialty: 'ENT Specialist'
    },
    {
        id: 33,
        name: 'Blood Sugar Issues (Hypoglycemia)',
        symptoms: [23, 4, 3, 24, 2],
        severity: 'medium',
        description: 'Low blood sugar causing dizziness, shakiness, and confusion.',
        treatments: [
            'Eat or drink something with fast-acting sugar immediately',
            'Check blood sugar if possible',
            'Follow with complex carbohydrates',
            'Eat regular meals and snacks',
            'Monitor blood sugar levels',
            'Adjust diabetes medications if needed (consult doctor)'
        ],
        specialty: 'Endocrinologist or General Practitioner'
    },
    {
        id: 34,
        name: 'Cervical Spine Issues / Whiplash',
        symptoms: [23, 22, 37, 26],
        severity: 'medium',
        description: 'Neck problems causing dizziness, headaches, and numbness.',
        treatments: [
            'Apply ice initially, then heat after 48 hours',
            'Take anti-inflammatory medications',
            'Do gentle neck exercises',
            'Maintain good posture',
            'Physical therapy',
            'Avoid heavy lifting'
        ],
        specialty: 'Orthopedic Surgeon or Physical Therapist'
    },
    {
        id: 35,
        name: 'Medication Side Effects',
        symptoms: [23, 15, 3, 2, 22],
        severity: 'low',
        description: 'Dizziness and other symptoms caused by medication side effects.',
        treatments: [
            'Review all medications with doctor',
            'Do NOT stop medications without consulting doctor',
            'Change timing of medication doses',
            'Stay hydrated',
            'Stand up slowly',
            'Ask about alternative medications'
        ],
        specialty: 'General Practitioner or Pharmacist'
    },
    {
        id: 36,
        name: 'Pneumonia',
        symptoms: [1, 8, 9, 38, 4, 2, 35],
        severity: 'high',
        description: 'Lung infection causing inflammation of air sacs, which may fill with fluid.',
        treatments: [
            'Take prescribed antibiotics for bacterial pneumonia',
            'Rest and stay hydrated',
            'Use fever reducers',
            'Seek emergency care if severe breathing difficulty',
            'Get pneumonia vaccine if recommended',
            'May require hospitalization if severe'
        ],
        specialty: 'Pulmonologist or Emergency Room'
    },
    {
        id: 37,
        name: 'Chronic Fatigue Syndrome',
        symptoms: [2, 3, 22, 35, 36, 25],
        severity: 'medium',
        description: 'Complex disorder characterized by extreme fatigue that doesn\'t improve with rest.',
        treatments: [
            'Pace activities to avoid overexertion',
            'Maintain regular sleep schedule',
            'Gentle exercise as tolerated',
            'Cognitive behavioral therapy',
            'Treat specific symptoms',
            'Join support groups'
        ],
        specialty: 'General Practitioner or Specialist Team'
    },
    {
        id: 38,
        name: 'Fibromyalgia',
        symptoms: [35, 36, 2, 22, 25],
        severity: 'medium',
        description: 'Chronic condition causing widespread musculoskeletal pain and fatigue.',
        treatments: [
            'Take prescribed pain medications',
            'Regular low-impact exercise',
            'Physical therapy',
            'Stress management',
            'Improve sleep quality',
            'Consider antidepressants for pain'
        ],
        specialty: 'Rheumatologist'
    },
    {
        id: 39,
        name: 'Mononucleosis (Mono)',
        symptoms: [2, 1, 10, 32, 22, 7],
        severity: 'medium',
        description: 'Viral infection causing extreme fatigue, sore throat, and swollen lymph nodes.',
        treatments: [
            'Rest extensively - may need weeks off work/school',
            'Stay very well hydrated',
            'Take pain relievers for throat and fever',
            'Avoid contact sports (risk of spleen rupture)',
            'Eat soft foods',
            'Symptoms may last 2-4 weeks'
        ],
        specialty: 'General Practitioner'
    },
    {
        id: 40,
        name: 'Lyme Disease',
        symptoms: [1, 2, 22, 36, 35, 29],
        severity: 'medium',
        description: 'Bacterial infection spread by ticks, causing rash and flu-like symptoms.',
        treatments: [
            'Take prescribed antibiotics (doxycycline)',
            'Complete full course of antibiotics',
            'Remove tick properly if still attached',
            'Rest and manage symptoms',
            'Early treatment prevents complications',
            'Watch for bull\'s-eye rash'
        ],
        specialty: 'Infectious Disease Specialist'
    },
    {
        id: 41,
        name: 'Tuberculosis (TB)',
        symptoms: [8, 1, 5, 6, 2, 38],
        severity: 'high',
        description: 'Serious bacterial lung infection that can spread to other organs.',
        treatments: [
            'Take multiple antibiotics for 6-9 months',
            'Complete ENTIRE treatment course',
            'Isolate to prevent spread',
            'Regular monitoring and chest X-rays',
            'Report to public health authorities',
            'Close contacts need testing'
        ],
        specialty: 'Infectious Disease Specialist or Pulmonologist'
    },
    {
        id: 42,
        name: 'Appendicitis',
        symptoms: [39, 1, 15, 16, 7],
        severity: 'high',
        description: 'Inflammation of the appendix requiring emergency surgery.',
        treatments: [
            '🚨 SEEK EMERGENCY CARE IMMEDIATELY',
            'Do NOT eat or drink (may need surgery)',
            'Do NOT take laxatives or pain medication',
            'Surgical removal (appendectomy) required',
            'IV antibiotics',
            'Can rupture if untreated - life threatening'
        ],
        specialty: 'Emergency Room - Surgery Required'
    },
    {
        id: 43,
        name: 'Gallstones / Gallbladder Issues',
        symptoms: [39, 15, 16, 1, 21],
        severity: 'medium',
        description: 'Hardened deposits in gallbladder causing pain, especially after eating fatty foods.',
        treatments: [
            'Avoid fatty, greasy, and fried foods',
            'Eat smaller, more frequent meals',
            'Take prescribed pain medication',
            'May need surgical removal of gallbladder',
            'Seek emergency care if severe pain or fever',
            'Maintain healthy weight'
        ],
        specialty: 'Gastroenterologist or General Surgeon'
    },
    {
        id: 44,
        name: 'Irritable Bowel Syndrome (IBS)',
        symptoms: [19, 20, 17, 18, 2],
        severity: 'low',
        description: 'Chronic disorder affecting the large intestine, causing cramping and bowel changes.',
        treatments: [
            'Identify and avoid trigger foods',
            'Increase fiber gradually',
            'Manage stress',
            'Regular exercise',
            'Consider low-FODMAP diet',
            'Take prescribed medications for symptoms'
        ],
        specialty: 'Gastroenterologist'
    },
    {
        id: 45,
        name: 'Celiac Disease',
        symptoms: [17, 19, 20, 2, 6, 29],
        severity: 'medium',
        description: 'Immune reaction to eating gluten, damaging small intestine lining.',
        treatments: [
            'Strict gluten-free diet for life',
            'Read all food labels carefully',
            'Take vitamin/mineral supplements',
            'Join celiac support groups',
            'Get regular follow-up testing',
            'Consult dietitian for meal planning'
        ],
        specialty: 'Gastroenterologist and Dietitian'
    },
    {
        id: 46,
        name: 'Lactose Intolerance',
        symptoms: [17, 19, 20, 15],
        severity: 'low',
        description: 'Inability to digest lactose (milk sugar), causing digestive symptoms.',
        treatments: [
            'Avoid or limit dairy products',
            'Try lactose-free alternatives',
            'Take lactase enzyme supplements before dairy',
            'Read labels for hidden lactose',
            'Get calcium from non-dairy sources',
            'Gradually test tolerance levels'
        ],
        specialty: 'General Practitioner or Dietitian'
    },
    {
        id: 47,
        name: 'GERD / Acid Reflux',
        symptoms: [21, 19, 8, 10, 38],
        severity: 'medium',
        description: 'Stomach acid frequently flows back into the esophagus, irritating its lining.',
        treatments: [
            'Take prescribed antacids or PPIs',
            'Avoid trigger foods (spicy, fatty, acidic)',
            'Eat smaller meals',
            'Don\'t lie down right after eating',
            'Elevate head of bed',
            'Lose weight if overweight'
        ],
        specialty: 'Gastroenterologist'
    },
    {
        id: 48,
        name: 'Peptic Ulcer',
        symptoms: [19, 39, 15, 21, 6],
        severity: 'medium',
        description: 'Open sores in stomach lining or upper small intestine.',
        treatments: [
            'Take prescribed medications (PPIs, antibiotics)',
            'Avoid NSAIDs (aspirin, ibuprofen)',
            'Don\'t smoke or drink alcohol',
            'Eat regular, balanced meals',
            'Manage stress',
            'Seek emergency care if vomiting blood'
        ],
        specialty: 'Gastroenterologist'
    },
    {
        id: 49,
        name: 'Diverticulitis',
        symptoms: [39, 1, 17, 18, 15],
        severity: 'medium',
        description: 'Inflammation or infection of small pouches in digestive tract.',
        treatments: [
            'Take prescribed antibiotics',
            'Liquid diet initially, then gradual progression',
            'Rest bowel',
            'Apply heat to abdomen for comfort',
            'High-fiber diet after recovery',
            'May require hospitalization if severe'
        ],
        specialty: 'Gastroenterologist'
    },
    {
        id: 50,
        name: 'Conjunctivitis (Pink Eye)',
        symptoms: [31, 30, 27],
        severity: 'low',
        description: 'Inflammation of the eye\'s outer membrane causing redness and discharge.',
        treatments: [
            'Apply warm compresses',
            'Use prescribed antibiotic eye drops if bacterial',
            'Avoid touching or rubbing eyes',
            'Wash hands frequently',
            'Don\'t share towels or pillows',
            'Usually resolves in 7-10 days'
        ],
        specialty: 'Ophthalmologist or General Practitioner'
    },
    {
        id: 51,
        name: 'Shingles (Herpes Zoster)',
        symptoms: [29, 30, 1, 22, 2],
        severity: 'medium',
        description: 'Viral infection causing painful rash, usually on one side of body.',
        treatments: [
            'Take antiviral medications within 72 hours',
            'Apply calamine lotion to rash',
            'Take pain relievers',
            'Keep rash clean and covered',
            'Avoid contact with pregnant women, infants, immunocompromised',
            'Get shingles vaccine if over 50'
        ],
        specialty: 'General Practitioner or Dermatologist'
    },
    {
        id: 52,
        name: 'Psoriasis',
        symptoms: [29, 30, 34, 31],
        severity: 'medium',
        description: 'Autoimmune condition causing rapid skin cell buildup, forming scales and red patches.',
        treatments: [
            'Apply topical corticosteroids',
            'Use moisturizers regularly',
            'Get controlled sun exposure',
            'Take prescribed systemic medications if severe',
            'Manage stress',
            'Avoid triggers (infections, stress, cold weather)'
        ],
        specialty: 'Dermatologist'
    },
    {
        id: 53,
        name: 'Cellulitis',
        symptoms: [29, 31, 32, 1, 30],
        severity: 'high',
        description: 'Bacterial skin infection that can spread rapidly and become serious.',
        treatments: [
            'Take prescribed antibiotics immediately',
            'Elevate affected area',
            'Apply warm compresses',
            'Mark rash edges to monitor spreading',
            'Seek emergency care if rapidly worsening',
            'Complete full course of antibiotics'
        ],
        specialty: 'General Practitioner or Emergency Room'
    },
    {
        id: 54,
        name: 'Scabies',
        symptoms: [30, 29, 33],
        severity: 'low',
        description: 'Skin infestation by tiny mites causing intense itching.',
        treatments: [
            'Apply prescribed scabicide cream to entire body',
            'Wash all clothing and bedding in hot water',
            'Treat all household members simultaneously',
            'Vacuum furniture and carpets',
            'Seal items that can\'t be washed in plastic bags for 72 hours',
            'Itching may persist for weeks after treatment'
        ],
        specialty: 'Dermatologist or General Practitioner'
    },
    {
        id: 55,
        name: 'Allergic Reaction',
        symptoms: [29, 30, 33, 32, 9],
        severity: 'medium',
        description: 'Immune system response to allergen, can range from mild to severe.',
        treatments: [
            'Take antihistamines immediately',
            'Use EpiPen if severe (anaphylaxis)',
            '🚨 Call 911 if difficulty breathing or swelling of face/throat',
            'Identify and avoid allergen',
            'Carry emergency medication if history of severe reactions',
            'See allergist for testing'
        ],
        specialty: 'Allergist or Emergency Room if severe'
    },
    {
        id: 56,
        name: 'Tension Headache',
        symptoms: [22, 35, 2],
        severity: 'low',
        description: 'Most common type of headache, feels like tight band around head.',
        treatments: [
            'Take over-the-counter pain relievers',
            'Apply heat or cold to head/neck',
            'Massage neck and shoulders',
            'Practice relaxation techniques',
            'Improve posture',
            'Manage stress'
        ],
        specialty: 'General Practitioner'
    },
    {
        id: 57,
        name: 'Cluster Headache',
        symptoms: [22, 40, 27, 11],
        severity: 'high',
        description: 'Severe headaches occurring in cyclical patterns or clusters.',
        treatments: [
            'Use prescribed oxygen therapy',
            'Take prescribed triptans',
            'Avoid alcohol during cluster periods',
            'Maintain regular sleep schedule',
            'Use preventive medications',
            'Seek immediate treatment during attacks'
        ],
        specialty: 'Neurologist or Headache Specialist'
    },
    {
        id: 58,
        name: 'Sinus Headache',
        symptoms: [22, 12, 11, 1, 38],
        severity: 'low',
        description: 'Headache caused by sinus inflammation or infection.',
        treatments: [
            'Use decongestants',
            'Apply warm compresses to face',
            'Use saline nasal spray',
            'Stay hydrated',
            'Take antibiotics if bacterial infection',
            'Use humidifier'
        ],
        specialty: 'ENT Specialist or General Practitioner'
    },
    {
        id: 59,
        name: 'Multiple Sclerosis (MS)',
        symptoms: [2, 26, 27, 3, 23, 36],
        severity: 'high',
        description: 'Autoimmune disease affecting central nervous system, causing varied neurological symptoms.',
        treatments: [
            'Take prescribed disease-modifying therapies',
            'Physical therapy',
            'Occupational therapy',
            'Manage symptoms individually',
            'Avoid heat and stress',
            'Regular neurologist monitoring'
        ],
        specialty: 'Neurologist'
    },
    {
        id: 60,
        name: 'Parkinson\'s Disease',
        symptoms: [26, 3, 23, 2, 37],
        severity: 'high',
        description: 'Progressive nervous system disorder affecting movement.',
        treatments: [
            'Take prescribed medications (levodopa)',
            'Physical therapy',
            'Occupational therapy',
            'Speech therapy',
            'Exercise regularly',
            'Consider deep brain stimulation if advanced'
        ],
        specialty: 'Neurologist specializing in Movement Disorders'
    },
    {
        id: 61,
        name: 'Carpal Tunnel Syndrome',
        symptoms: [26, 36, 3],
        severity: 'low',
        description: 'Compression of nerve in wrist causing numbness, tingling, and weakness in hand.',
        treatments: [
            'Wear wrist splint, especially at night',
            'Take frequent breaks from repetitive activities',
            'Do stretching exercises',
            'Apply cold packs to reduce swelling',
            'Take NSAIDs for pain',
            'Consider corticosteroid injections or surgery if severe'
        ],
        specialty: 'Orthopedic Surgeon or Hand Specialist'
    },
    {
        id: 62,
        name: 'Peripheral Neuropathy',
        symptoms: [26, 2, 3, 36],
        severity: 'medium',
        description: 'Nerve damage causing weakness, numbness, and pain, usually in hands and feet.',
        treatments: [
            'Control underlying condition (diabetes)',
            'Take prescribed pain medications',
            'Physical therapy',
            'Wear proper footwear',
            'Check feet daily for injuries',
            'Avoid alcohol and smoking'
        ],
        specialty: 'Neurologist or Endocrinologist'
    },
    {
        id: 63,
        name: 'Sciatica',
        symptoms: [37, 26, 3, 36],
        severity: 'medium',
        description: 'Pain radiating along sciatic nerve from lower back down leg.',
        treatments: [
            'Apply heat or ice',
            'Take anti-inflammatory medications',
            'Do stretching exercises',
            'Physical therapy',
            'Avoid prolonged sitting',
            'Consider epidural injections if severe'
        ],
        specialty: 'Orthopedic Surgeon or Physical Therapist'
    },
    {
        id: 64,
        name: 'Osteoporosis',
        symptoms: [37, 36, 3],
        severity: 'medium',
        description: 'Weakening of bones, making them fragile and prone to fractures.',
        treatments: [
            'Take prescribed bone-strengthening medications',
            'Ensure adequate calcium and vitamin D intake',
            'Do weight-bearing exercises',
            'Avoid smoking and excessive alcohol',
            'Fall prevention at home',
            'Get regular bone density tests'
        ],
        specialty: 'Endocrinologist or Rheumatologist'
    },
    {
        id: 65,
        name: 'Gout',
        symptoms: [36, 32, 31, 1],
        severity: 'medium',
        description: 'Form of arthritis causing sudden, severe joint pain, often in big toe.',
        treatments: [
            'Take prescribed anti-inflammatory medications',
            'Elevate affected joint',
            'Apply ice',
            'Drink plenty of water',
            'Avoid alcohol, red meat, and seafood',
            'Take uric acid-lowering medications'
        ],
        specialty: 'Rheumatologist'
    },
    {
        id: 66,
        name: 'Tendinitis',
        symptoms: [36, 32, 3],
        severity: 'low',
        description: 'Inflammation of tendon, often from overuse.',
        treatments: [
            'Rest affected area',
            'Apply ice',
            'Take NSAIDs',
            'Do gentle stretching when pain subsides',
            'Physical therapy',
            'Avoid activities that worsen pain'
        ],
        specialty: 'Orthopedic Surgeon or Physical Therapist'
    },
    {
        id: 67,
        name: 'Sleep Apnea',
        symptoms: [2, 22, 11, 10],
        severity: 'medium',
        description: 'Breathing repeatedly stops during sleep, disrupting rest and oxygen levels.',
        treatments: [
            'Use CPAP machine during sleep',
            'Lose weight if overweight',
            'Sleep on your side',
            'Avoid alcohol and sedatives before bed',
            'Stop smoking',
            'Consider oral appliance or surgery if CPAP ineffective'
        ],
        specialty: 'Sleep Specialist or Pulmonologist'
    },
    {
        id: 68,
        name: 'Insomnia',
        symptoms: [2, 22, 24, 30],
        severity: 'low',
        description: 'Persistent difficulty falling or staying asleep.',
        treatments: [
            'Maintain consistent sleep schedule',
            'Create relaxing bedtime routine',
            'Avoid screens before bed',
            'Limit caffeine and alcohol',
            'Exercise regularly (but not before bed)',
            'Consider cognitive behavioral therapy for insomnia'
        ],
        specialty: 'Sleep Specialist or Psychiatrist'
    },
    {
        id: 69,
        name: 'Restless Leg Syndrome',
        symptoms: [26, 35, 2],
        severity: 'low',
        description: 'Uncomfortable sensations in legs with urge to move them, especially at night.',
        treatments: [
            'Take prescribed medications',
            'Exercise regularly',
            'Massage legs',
            'Apply heat or cold',
            'Avoid caffeine, alcohol, tobacco',
            'Maintain regular sleep schedule'
        ],
        specialty: 'Neurologist or Sleep Specialist'
    },
    {
        id: 70,
        name: 'Vitamin D Deficiency',
        symptoms: [2, 36, 35, 3, 22],
        severity: 'low',
        description: 'Insufficient vitamin D causing bone pain, muscle weakness, and fatigue.',
        treatments: [
            'Take vitamin D supplements',
            'Get safe sun exposure (10-30 minutes daily)',
            'Eat vitamin D-rich foods (fatty fish, eggs, fortified milk)',
            'Get vitamin D levels tested',
            'Take calcium supplements',
            'Address underlying absorption issues'
        ],
        specialty: 'General Practitioner or Endocrinologist'
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

        // Improved matching logic
        // Require at least 2 symptoms AND at least 30% match for small condition sets
        // OR at least 3 symptoms AND at least 40% match for larger condition sets
        const minSymptoms = condition.symptoms.length <= 5 ? 2 : 3;
        const minPercentage = condition.symptoms.length <= 5 ? 30 : 40;

        const hasEnoughSymptoms = matchedSymptoms.length >= minSymptoms;
        const hasGoodMatch = matchPercentage >= minPercentage;

        // Show results if BOTH criteria met
        if (hasEnoughSymptoms && hasGoodMatch) {
            // Calculate confidence score with multiple factors
            const relevanceScore = (matchedSymptoms.length / selectedSymptoms.length) * 100;

            // Weighted scoring:
            // - 50% based on how many of the condition's symptoms match
            // - 30% based on how many of the user's symptoms are relevant to this condition
            // - 20% bonus for having 3+ matched symptoms (strong indicator)
            const confidenceScore = (
                (matchPercentage * 0.5) +
                (relevanceScore * 0.3) +
                (matchedSymptoms.length >= 3 ? 20 : 0)
            );

            results.push({
                ...condition,
                matchedSymptoms,
                matchPercentage,
                confidenceScore
            });
        }
    });

    // Sort by confidence score
    results.sort((a, b) => b.confidenceScore - a.confidenceScore);

    // If we have results but none are very confident, add a warning
    if (results.length > 0 && results[0].confidenceScore < 40) {
        console.log('Low confidence results - consider selecting more specific symptoms');
    }

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

        const data = await response.json();

        // Check for API errors
        if (data.error) {
            console.error(`API Error for ${type}:`, data);
            throw new Error(data.message || data.error || 'API request failed - Places API may not be enabled');
        }

        if (!response.ok) {
            throw new Error(`API request failed: ${response.statusText}`);
        }

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
        // Re-throw the error so it can be caught by findNearbyProviders
        throw error;
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
    const isAPIError = message && (message.includes('API') || message.includes('REQUEST_DENIED') || message.includes('invalid'));

    providersList.innerHTML = `
        <div style="padding: 20px; background: ${isAPIError ? '#FEE2E2' : '#FEF3C7'}; border-radius: 12px;">
            ${isAPIError ? `
                <h3 style="color: #991B1B; margin-bottom: 15px;">⚠️ Google Maps API Setup Required</h3>
                <p style="color: #991B1B; margin-bottom: 15px; font-weight: 600;">
                    The Google Maps Places API is not yet configured. Please follow these steps:
                </p>
                <ol style="text-align: left; margin: 0 auto; max-width: 600px; color: #7C2D12; line-height: 1.8;">
                    <li><strong>Enable Places API:</strong> Go to <a href="https://console.cloud.google.com/apis/library/places-backend.googleapis.com" target="_blank" style="color: #0891B2; text-decoration: underline;">Google Cloud Console</a> and click "Enable"</li>
                    <li><strong>Enable Billing:</strong> Places API requires billing (includes $200/month free credit)</li>
                    <li><strong>Wait 2-3 minutes:</strong> New API keys take time to activate</li>
                    <li><strong>Restart server:</strong> After enabling, run <code style="background: white; padding: 2px 6px; border-radius: 4px;">npm start</code> again</li>
                </ol>
                <p style="margin-top: 20px; color: #7C2D12;">
                    <strong>Note:</strong> Google provides $200/month free credit (~28,000 searches). See SETUP_GUIDE.md for details.
                </p>
            ` : `
                <p style="color: #991B1B; font-weight: 600; margin-bottom: 10px;">Unable to get your location.</p>
                <p style="color: #92400E; margin-bottom: 10px;">Please enable location services in your browser to find nearby healthcare providers.</p>
                ${message ? `<p style="margin-top: 10px; font-size: 0.85rem; color: var(--gray-600);">Error: ${message}</p>` : ''}
            `}
            <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid rgba(0,0,0,0.1);">
                <p style="color: var(--gray-700); font-weight: 500; margin-bottom: 10px;">Search manually instead:</p>
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                    <a href="https://www.google.com/maps/search/hospitals+near+me" target="_blank" class="provider-btn">🏥 Find Hospitals</a>
                    <a href="https://www.google.com/maps/search/doctors+near+me" target="_blank" class="provider-btn">👨‍⚕️ Find Doctors</a>
                    <a href="https://www.google.com/maps/search/urgent+care+near+me" target="_blank" class="provider-btn">🚑 Find Urgent Care</a>
                </div>
            </div>
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
