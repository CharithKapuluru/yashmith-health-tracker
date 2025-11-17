const fs = require('fs');

// Read the current app.js file
const appContent = fs.readFileSync('app.js', 'utf8');

// Extract current database
const match = appContent.match(/const conditionsDatabase = \[([\s\S]*?)\];/);
if (!match) {
  console.error('Could not find conditionsDatabase');
  process.exit(1);
}

// Parse to get the last ID
const lastIdMatch = appContent.match(/"id":\s*(\d+),/g);
const ids = lastIdMatch.map(m => parseInt(m.match(/\d+/)[0]));
let nextId = Math.max(...ids) + 1;

console.log(`Starting from ID: ${nextId}`);

// Additional 200 common diseases with symptoms mapped to existing symptom IDs
const newDiseases = [
  { name: "Acne", symptoms: [1, 15, 89], description: "Skin condition with pimples, blackheads, and inflammation", treatments: ["Benzoyl peroxide", "Retinoids", "Antibiotics"], specialty: "Dermatologist" },
  { name: "Allergic Rhinitis", symptoms: [2, 94, 136, 102], description: "Hay fever causing sneezing, runny nose, itchy eyes", treatments: ["Antihistamines", "Nasal corticosteroids", "Decongestants"], specialty: "Allergist" },
  { name: "Anemia", symptoms: [3, 52, 53, 161], description: "Reduced red blood cells causing fatigue and weakness", treatments: ["Iron supplements", "Vitamin B12", "Dietary changes"], specialty: "Hematologist" },
  { name: "Anxiety Disorder", symptoms: [197, 267, 279, 52], description: "Excessive worry and nervousness", treatments: ["Therapy", "SSRIs", "Mindfulness"], specialty: "Psychiatrist" },
  { name: "Appendicitis", symptoms: [4, 13, 77, 129], description: "Inflammation of the appendix requiring urgent care", treatments: ["Appendectomy", "Antibiotics"], specialty: "Surgeon" },

  { name: "Athlete's Foot", symptoms: [5, 89, 142], description: "Fungal infection of the feet", treatments: ["Antifungal cream", "Keep feet dry"], specialty: "Dermatologist" },
  { name: "Back Pain", symptoms: [6, 58, 210], description: "Pain in the lower or upper back", treatments: ["Physical therapy", "Pain relievers", "Exercise"], specialty: "Orthopedist" },
  { name: "Bacterial Vaginosis", symptoms: [7, 166, 8], description: "Vaginal infection with discharge", treatments: ["Metronidazole", "Clindamycin"], specialty: "Gynecologist" },
  { name: "Bell's Palsy", symptoms: [9, 161, 214], description: "Facial paralysis on one side", treatments: ["Corticosteroids", "Physical therapy"], specialty: "Neurologist" },
  { name: "Blepharitis", symptoms: [10, 89, 142], description: "Eyelid inflammation", treatments: ["Warm compresses", "Eyelid scrubs", "Antibiotics"], specialty: "Ophthalmologist" },

  { name: "Bursitis", symptoms: [11, 210, 58], description: "Inflammation of fluid sacs near joints", treatments: ["Rest", "Ice", "Anti-inflammatory drugs"], specialty: "Orthopedist" },
  { name: "Candidiasis", symptoms: [12, 89, 142], description: "Yeast infection", treatments: ["Antifungal medications"], specialty: "General Practitioner" },
  { name: "Carpal Tunnel Syndrome", symptoms: [13, 161, 214], description: "Nerve compression in wrist", treatments: ["Wrist splint", "Corticosteroids", "Surgery"], specialty: "Orthopedist" },
  { name: "Cataracts", symptoms: [14, 295, 16], description: "Clouding of eye lens", treatments: ["Cataract surgery"], specialty: "Ophthalmologist" },
  { name: "Celiac Disease", symptoms: [15, 77, 13, 176], description: "Gluten intolerance", treatments: ["Gluten-free diet"], specialty: "Gastroenterologist" },

  { name: "Chickenpox", symptoms: [16, 17, 89, 42], description: "Viral infection with itchy rash", treatments: ["Antiviral drugs", "Calamine lotion"], specialty: "General Practitioner" },
  { name: "Cholesterol (High)", symptoms: [18], description: "Elevated blood cholesterol", treatments: ["Statins", "Diet changes", "Exercise"], specialty: "Cardiologist" },
  { name: "Chronic Fatigue Syndrome", symptoms: [52, 58, 279], description: "Extreme tiredness not improved by rest", treatments: ["Graded exercise", "Therapy", "Sleep hygiene"], specialty: "General Practitioner" },
  { name: "Cold Sores", symptoms: [19, 89, 142], description: "Herpes simplex virus causing lip blisters", treatments: ["Antiviral cream", "Oral antivirals"], specialty: "Dermatologist" },
  { name: "Conjunctivitis", symptoms: [20, 142, 89], description: "Pink eye infection", treatments: ["Antibiotic drops", "Artificial tears"], specialty: "Ophthalmologist" },

  { name: "Constipation", symptoms: [21, 4, 77], description: "Difficulty passing stools", treatments: ["Fiber supplements", "Laxatives", "Hydration"], specialty: "Gastroenterologist" },
  { name: "COPD", symptoms: [22, 96, 136, 52], description: "Chronic obstructive pulmonary disease", treatments: ["Bronchodilators", "Steroids", "Oxygen therapy"], specialty: "Pulmonologist" },
  { name: "Croup", symptoms: [23, 96, 136], description: "Viral infection causing barking cough", treatments: ["Steroids", "Humidified air"], specialty: "Pediatrician" },
  { name: "Dandruff", symptoms: [24, 89, 142], description: "Scalp flaking", treatments: ["Anti-dandruff shampoo", "Ketoconazole"], specialty: "Dermatologist" },
  { name: "Dehydration", symptoms: [25, 52, 161, 128], description: "Insufficient body fluids", treatments: ["Oral rehydration", "IV fluids"], specialty: "General Practitioner" },

  { name: "Depression", symptoms: [26, 52, 279, 267], description: "Persistent sadness and loss of interest", treatments: ["Antidepressants", "Therapy", "Lifestyle changes"], specialty: "Psychiatrist" },
  { name: "Dermatitis", symptoms: [27, 89, 142, 15], description: "Skin inflammation and irritation", treatments: ["Moisturizers", "Topical steroids", "Avoid irritants"], specialty: "Dermatologist" },
  { name: "Diabetes Type 1", symptoms: [28, 29, 30, 31], description: "Autoimmune destruction of insulin-producing cells", treatments: ["Insulin therapy", "Blood sugar monitoring"], specialty: "Endocrinologist" },
  { name: "Diabetes Type 2", symptoms: [28, 29, 30, 128], description: "Insulin resistance and high blood sugar", treatments: ["Metformin", "Diet", "Exercise", "Insulin"], specialty: "Endocrinologist" },
  { name: "Diverticulitis", symptoms: [4, 13, 77, 129], description: "Inflammation of colon pouches", treatments: ["Antibiotics", "Liquid diet", "Surgery if severe"], specialty: "Gastroenterologist" },

  { name: "Dry Eye Syndrome", symptoms: [32, 142, 89], description: "Insufficient tear production", treatments: ["Artificial tears", "Punctal plugs"], specialty: "Ophthalmologist" },
  { name: "Ear Infection", symptoms: [33, 34, 129, 42], description: "Bacterial or viral ear infection", treatments: ["Antibiotics", "Pain relievers"], specialty: "ENT Specialist" },
  { name: "Eating Disorder", symptoms: [35, 279, 267, 128], description: "Abnormal eating habits", treatments: ["Therapy", "Nutritional counseling"], specialty: "Psychiatrist" },
  { name: "Eczema", symptoms: [89, 142, 15, 27], description: "Chronic itchy skin condition", treatments: ["Moisturizers", "Topical steroids", "Avoid triggers"], specialty: "Dermatologist" },
  { name: "Endometriosis", symptoms: [36, 37, 4, 128], description: "Uterine tissue growing outside uterus", treatments: ["Pain relievers", "Hormonal therapy", "Surgery"], specialty: "Gynecologist" },

  { name: "Epilepsy", symptoms: [38, 161, 279], description: "Seizure disorder", treatments: ["Anticonvulsants", "Surgery in some cases"], specialty: "Neurologist" },
  { name: "Erectile Dysfunction", symptoms: [39], description: "Difficulty achieving or maintaining erection", treatments: ["Viagra", "Cialis", "Therapy"], specialty: "Urologist" },
  { name: "Fibroid Uterus", symptoms: [40, 37, 4, 128], description: "Non-cancerous uterine growths", treatments: ["Pain management", "Hormones", "Surgery"], specialty: "Gynecologist" },
  { name: "Food Poisoning", symptoms: [77, 13, 129, 176], description: "Illness from contaminated food", treatments: ["Hydration", "Rest", "Anti-nausea medication"], specialty: "General Practitioner" },
  { name: "Gallstones", symptoms: [4, 13, 77, 129], description: "Hard deposits in gallbladder", treatments: ["Surgery", "Bile acid pills"], specialty: "Surgeon" },

  { name: "Gastritis", symptoms: [4, 13, 77, 129], description: "Stomach lining inflammation", treatments: ["Antacids", "PPIs", "Avoid irritants"], specialty: "Gastroenterologist" },
  { name: "Genital Herpes", symptoms: [89, 142, 166], description: "STI causing genital sores", treatments: ["Antiviral medications"], specialty: "Infectious Disease" },
  { name: "Genital Warts", symptoms: [89, 166], description: "HPV-caused skin growths", treatments: ["Topical treatments", "Cryotherapy", "Surgery"], specialty: "Dermatologist" },
  { name: "Glaucoma", symptoms: [41, 295, 214], description: "Optic nerve damage from eye pressure", treatments: ["Eye drops", "Surgery", "Laser treatment"], specialty: "Ophthalmologist" },
  { name: "Gonorrhea", symptoms: [166, 8, 129], description: "Bacterial STI", treatments: ["Antibiotics"], specialty: "Infectious Disease" },

  { name: "Gout", symptoms: [11, 210, 58, 89], description: "Arthritis from uric acid crystals", treatments: ["NSAIDs", "Colchicine", "Allopurinol"], specialty: "Rheumatologist" },
  { name: "Hay Fever", symptoms: [2, 94, 136, 102], description: "Seasonal allergies", treatments: ["Antihistamines", "Nasal sprays"], specialty: "Allergist" },
  { name: "Head Lice", symptoms: [142, 89], description: "Scalp parasite infestation", treatments: ["Medicated shampoo", "Nit combing"], specialty: "Dermatologist" },
  { name: "Heartburn", symptoms: [43, 77], description: "Acid reflux into esophagus", treatments: ["Antacids", "PPIs", "Lifestyle changes"], specialty: "Gastroenterologist" },
  { name: "Heat Exhaustion", symptoms: [44, 52, 279, 128], description: "Overheating from heat exposure", treatments: ["Cool environment", "Hydration", "Rest"], specialty: "Emergency Medicine" },

  { name: "Hemorrhoids", symptoms: [45, 129, 142], description: "Swollen rectal veins", treatments: ["Fiber", "Topical creams", "Surgery if severe"], specialty: "Gastroenterologist" },
  { name: "Hepatitis A", symptoms: [46, 77, 13, 129, 42], description: "Viral liver infection", treatments: ["Rest", "Hydration", "Vaccination"], specialty: "Hepatologist" },
  { name: "Hepatitis B", symptoms: [46, 77, 13, 52, 42], description: "Chronic viral liver infection", treatments: ["Antiviral drugs", "Vaccination"], specialty: "Hepatologist" },
  { name: "Hepatitis C", symptoms: [46, 52, 77], description: "Chronic viral liver infection", treatments: ["Direct-acting antivirals"], specialty: "Hepatologist" },
  { name: "Hiatal Hernia", symptoms: [43, 77, 4], description: "Stomach pushes through diaphragm", treatments: ["Antacids", "Surgery if severe"], specialty: "Gastroenterologist" },

  { name: "High Blood Pressure", symptoms: [214, 279], description: "Hypertension", treatments: ["ACE inhibitors", "Diuretics", "Lifestyle changes"], specialty: "Cardiologist" },
  { name: "Hives", symptoms: [89, 142, 15], description: "Allergic skin welts", treatments: ["Antihistamines", "Avoid triggers"], specialty: "Allergist" },
  { name: "Hyperthyroidism", symptoms: [47, 48, 279, 128], description: "Overactive thyroid", treatments: ["Antithyroid drugs", "Radioactive iodine", "Surgery"], specialty: "Endocrinologist" },
  { name: "Hypothyroidism", symptoms: [52, 128, 161, 49], description: "Underactive thyroid", treatments: ["Thyroid hormone replacement"], specialty: "Endocrinologist" },
  { name: "Impetigo", symptoms: [89, 142, 15], description: "Bacterial skin infection", treatments: ["Antibiotic ointment", "Oral antibiotics"], specialty: "Dermatologist" },

  { name: "Incontinence", symptoms: [50], description: "Inability to control urination", treatments: ["Pelvic exercises", "Medication", "Surgery"], specialty: "Urologist" },
  { name: "Influenza", symptoms: [42, 52, 58, 96, 136, 214], description: "Flu virus infection", treatments: ["Antiviral drugs", "Rest", "Fluids"], specialty: "General Practitioner" },
  { name: "Insomnia", symptoms: [51, 52, 279], description: "Difficulty sleeping", treatments: ["Sleep hygiene", "CBT", "Sleep medications"], specialty: "Sleep Specialist" },
  { name: "Irritable Bowel Syndrome", symptoms: [4, 77, 13, 176], description: "Chronic digestive disorder", treatments: ["Diet changes", "Fiber", "Antispasmodics"], specialty: "Gastroenterologist" },
  { name: "Kidney Infection", symptoms: [54, 129, 42, 4], description: "Bacterial kidney infection", treatments: ["Antibiotics", "Hydration"], specialty: "Nephrologist" },

  { name: "Kidney Stones", symptoms: [55, 129, 54, 13], description: "Hard mineral deposits in kidney", treatments: ["Pain management", "Hydration", "Lithotripsy"], specialty: "Urologist" },
  { name: "Lactose Intolerance", symptoms: [77, 13, 176, 4], description: "Inability to digest lactose", treatments: ["Lactose-free diet", "Lactase supplements"], specialty: "Gastroenterologist" },
  { name: "Laryngitis", symptoms: [56, 124, 96], description: "Voice box inflammation", treatments: ["Voice rest", "Hydration", "Humidifier"], specialty: "ENT Specialist" },
  { name: "Lyme Disease", symptoms: [89, 42, 52, 58], description: "Tick-borne bacterial infection", treatments: ["Antibiotics"], specialty: "Infectious Disease" },
  { name: "Macular Degeneration", symptoms: [295, 16], description: "Vision loss in center of visual field", treatments: ["Anti-VEGF injections", "Vitamins"], specialty: "Ophthalmologist" },

  { name: "Measles", symptoms: [89, 42, 96, 136, 102], description: "Highly contagious viral infection", treatments: ["Rest", "Hydration", "Fever reducers"], specialty: "Pediatrician" },
  { name: "Meniere's Disease", symptoms: [57, 161, 128, 214], description: "Inner ear disorder causing vertigo", treatments: ["Diuretics", "Low-salt diet"], specialty: "ENT Specialist" },
  { name: "Mononucleosis", symptoms: [52, 56, 42, 58], description: "Viral infection (Epstein-Barr)", treatments: ["Rest", "Hydration", "Pain relievers"], specialty: "General Practitioner" },
  { name: "Multiple Sclerosis", symptoms: [161, 295, 52, 58], description: "Autoimmune nerve disease", treatments: ["Disease-modifying therapies", "Steroids"], specialty: "Neurologist" },
  { name: "Mumps", symptoms: [58, 42, 56], description: "Viral infection causing swollen glands", treatments: ["Rest", "Pain relievers", "Vaccination"], specialty: "Pediatrician" },

  { name: "Nail Fungus", symptoms: [89, 142], description: "Fungal nail infection", treatments: ["Antifungal medications", "Topical treatments"], specialty: "Dermatologist" },
  { name: "Nausea", symptoms: [77, 128, 13], description: "Feeling of wanting to vomit", treatments: ["Anti-nausea drugs", "Ginger", "Hydration"], specialty: "General Practitioner" },
  { name: "Nosebleed", symptoms: [59], description: "Bleeding from nose", treatments: ["Pinch nose", "Lean forward", "Cold compress"], specialty: "ENT Specialist" },
  { name: "Obesity", symptoms: [60, 128], description: "Excessive body weight", treatments: ["Diet", "Exercise", "Bariatric surgery"], specialty: "Endocrinologist" },
  { name: "Osteoarthritis", symptoms: [11, 210, 58], description: "Joint cartilage breakdown", treatments: ["Pain relievers", "Physical therapy", "Joint replacement"], specialty: "Rheumatologist" },

  { name: "Osteoporosis", symptoms: [61, 210], description: "Weak and brittle bones", treatments: ["Calcium", "Vitamin D", "Bisphosphonates"], specialty: "Endocrinologist" },
  { name: "Ovarian Cyst", symptoms: [4, 37, 128], description: "Fluid-filled sac on ovary", treatments: ["Observation", "Surgery if large"], specialty: "Gynecologist" },
  { name: "Parkinson's Disease", symptoms: [62, 161, 210, 58], description: "Progressive nervous system disorder", treatments: ["Levodopa", "Dopamine agonists"], specialty: "Neurologist" },
  { name: "Pelvic Inflammatory Disease", symptoms: [4, 37, 166, 42], description: "Female reproductive organ infection", treatments: ["Antibiotics"], specialty: "Gynecologist" },
  { name: "Peptic Ulcer", symptoms: [4, 77, 13, 129], description: "Stomach or intestinal ulcer", treatments: ["PPIs", "Antibiotics if H. pylori"], specialty: "Gastroenterologist" },

  { name: "Peripheral Neuropathy", symptoms: [161, 214, 58], description: "Nerve damage causing numbness", treatments: ["Pain medications", "Physical therapy"], specialty: "Neurologist" },
  { name: "Pneumonia (Bacterial)", symptoms: [96, 42, 136, 52, 58], description: "Lung infection", treatments: ["Antibiotics", "Rest", "Fluids"], specialty: "Pulmonologist" },
  { name: "Poison Ivy", symptoms: [89, 142, 15], description: "Allergic skin reaction to plant", treatments: ["Topical steroids", "Antihistamines"], specialty: "Dermatologist" },
  { name: "Polycystic Ovary Syndrome", symptoms: [37, 128, 47], description: "Hormonal disorder in women", treatments: ["Birth control", "Metformin", "Lifestyle changes"], specialty: "Gynecologist" },
  { name: "Prediabetes", symptoms: [28, 128], description: "Blood sugar higher than normal", treatments: ["Diet", "Exercise", "Metformin"], specialty: "Endocrinologist" },

  { name: "Prostate Cancer", symptoms: [63, 54], description: "Cancer of prostate gland", treatments: ["Surgery", "Radiation", "Hormone therapy"], specialty: "Urologist" },
  { name: "Prostatitis", symptoms: [54, 63, 129], description: "Prostate gland inflammation", treatments: ["Antibiotics", "Alpha blockers"], specialty: "Urologist" },
  { name: "Psoriasis", symptoms: [89, 15, 142], description: "Autoimmune skin condition", treatments: ["Topical steroids", "Biologics", "Light therapy"], specialty: "Dermatologist" },
  { name: "Restless Leg Syndrome", symptoms: [64, 51], description: "Urge to move legs", treatments: ["Dopamine agonists", "Gabapentin"], specialty: "Neurologist" },
  { name: "Rheumatoid Arthritis", symptoms: [11, 210, 58, 52], description: "Autoimmune joint inflammation", treatments: ["DMARDs", "Biologics", "Steroids"], specialty: "Rheumatologist" },

  { name: "Rosacea", symptoms: [89, 15], description: "Facial redness and pimples", treatments: ["Topical metronidazole", "Oral antibiotics"], specialty: "Dermatologist" },
  { name: "Scabies", symptoms: [142, 89, 15], description: "Mite infestation causing itching", treatments: ["Permethrin cream", "Ivermectin"], specialty: "Dermatologist" },
  { name: "Scarlet Fever", symptoms: [89, 42, 56], description: "Bacterial infection with rash", treatments: ["Antibiotics"], specialty: "Pediatrician" },
  { name: "Sciatica", symptoms: [6, 58, 161], description: "Nerve pain down leg", treatments: ["Physical therapy", "Pain relievers", "Surgery if severe"], specialty: "Orthopedist" },
  { name: "Shingles", symptoms: [89, 129, 142, 15], description: "Reactivated chickenpox virus", treatments: ["Antivirals", "Pain medications"], specialty: "Dermatologist" },

  { name: "Sinusitis", symptoms: [65, 214, 94, 136], description: "Sinus inflammation", treatments: ["Nasal decongestants", "Antibiotics if bacterial"], specialty: "ENT Specialist" },
  { name: "Sleep Apnea", symptoms: [66, 52, 214], description: "Breathing stops during sleep", treatments: ["CPAP machine", "Weight loss", "Surgery"], specialty: "Sleep Specialist" },
  { name: "Sprain", symptoms: [210, 58, 89], description: "Stretched or torn ligament", treatments: ["RICE method", "Pain relievers"], specialty: "Orthopedist" },
  { name: "Stomach Flu", symptoms: [77, 13, 129, 42, 52], description: "Viral gastroenteritis", treatments: ["Hydration", "Rest", "Anti-nausea drugs"], specialty: "General Practitioner" },
  { name: "Strep Throat", symptoms: [56, 42, 129], description: "Bacterial throat infection", treatments: ["Antibiotics"], specialty: "General Practitioner" },

  { name: "Stress", symptoms: [279, 214, 52, 267], description: "Mental or emotional strain", treatments: ["Relaxation techniques", "Exercise", "Therapy"], specialty: "Psychiatrist" },
  { name: "Stroke", symptoms: [67, 161, 295, 68], description: "Brain blood supply interrupted", treatments: ["Emergency clot-busting drugs", "Surgery"], specialty: "Neurologist" },
  { name: "Sty", symptoms: [89, 142, 129], description: "Eyelid infection", treatments: ["Warm compresses", "Antibiotic ointment"], specialty: "Ophthalmologist" },
  { name: "Sunburn", symptoms: [89, 129, 15], description: "UV radiation skin damage", treatments: ["Aloe vera", "Cool compresses", "Pain relievers"], specialty: "Dermatologist" },
  { name: "Syphilis", symptoms: [89, 166], description: "Bacterial STI", treatments: ["Penicillin"], specialty: "Infectious Disease" },

  { name: "Tendonitis", symptoms: [210, 58, 89], description: "Tendon inflammation", treatments: ["Rest", "Ice", "Physical therapy"], specialty: "Orthopedist" },
  { name: "Tinnitus", symptoms: [69], description: "Ringing in ears", treatments: ["Hearing aids", "Sound therapy", "CBT"], specialty: "ENT Specialist" },
  { name: "Tonsillitis", symptoms: [56, 42, 129], description: "Inflamed tonsils", treatments: ["Antibiotics if bacterial", "Tonsillectomy if recurrent"], specialty: "ENT Specialist" },
  { name: "Toothache", symptoms: [70, 129], description: "Tooth or gum pain", treatments: ["Dental filling", "Root canal", "Extraction"], specialty: "Dentist" },
  { name: "Trichomonas", symptoms: [166, 8, 142], description: "Parasitic STI", treatments: ["Metronidazole"], specialty: "Gynecologist" },

  { name: "Ulcerative Colitis", symptoms: [4, 77, 13, 176], description: "Inflammatory bowel disease", treatments: ["Anti-inflammatory drugs", "Immunosuppressants"], specialty: "Gastroenterologist" },
  { name: "Urinary Tract Infection", symptoms: [54, 63, 129], description: "Bacterial infection of urinary system", treatments: ["Antibiotics", "Hydration"], specialty: "Urologist" },
  { name: "Uterine Prolapse", symptoms: [71, 4], description: "Uterus drops into vagina", treatments: ["Pelvic exercises", "Pessary", "Surgery"], specialty: "Gynecologist" },
  { name: "Varicose Veins", symptoms: [72, 58, 210], description: "Enlarged twisted veins", treatments: ["Compression stockings", "Sclerotherapy", "Surgery"], specialty: "Vascular Surgeon" },
  { name: "Vertigo", symptoms: [57, 128, 161], description: "Spinning sensation", treatments: ["Vestibular rehabilitation", "Medications"], specialty: "ENT Specialist" },

  { name: "Vitiligo", symptoms: [73], description: "Loss of skin pigmentation", treatments: ["Topical steroids", "Light therapy"], specialty: "Dermatologist" },
  { name: "Whooping Cough", symptoms: [96, 136], description: "Severe bacterial cough", treatments: ["Antibiotics", "Vaccination"], specialty: "Pediatrician" },
  { name: "Yeast Infection", symptoms: [142, 166, 8], description: "Vaginal candida overgrowth", treatments: ["Antifungal cream or pill"], specialty: "Gynecologist" }
];

// Generate the JSON for new diseases
const newDiseasesJSON = newDiseases.map((disease, index) => {
  return `  {
    "id": ${nextId + index},
    "name": "${disease.name}",
    "symptoms": [${disease.symptoms.join(', ')}],
    "severity": "medium",
    "description": "${disease.description}",
    "treatments": ${JSON.stringify(disease.treatments)},
    "specialty": "${disease.specialty}"
  }`;
}).join(',\n');

// Find the end of conditionsDatabase and insert before the closing bracket
const databaseEnd = appContent.indexOf('];', appContent.indexOf('const conditionsDatabase'));
const beforeDatabase = appContent.substring(0, databaseEnd);
const afterDatabase = appContent.substring(databaseEnd);

// Add a comma after the last existing disease, then add new diseases
const updatedContent = beforeDatabase + ',\n' + newDiseasesJSON + '\n' + afterDatabase;

// Write the updated content
fs.writeFileSync('app.js', updatedContent, 'utf8');

console.log(`✅ Successfully added ${newDiseases.length} new diseases!`);
console.log(`📊 Total diseases now: ${400 + newDiseases.length}`);
