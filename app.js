// ============================================
// REAL MEDICAL DATABASE - 400 Diseases, 1000 Symptoms
// Source: HuggingFace Diseases_Symptoms Dataset
// ============================================

const symptomsDatabase = [
  {
    "id": 1,
    "name": "Abdominal or back pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 2,
    "name": "Abdominal or flank pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 3,
    "name": "Abdominal pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 4,
    "name": "Abdominal pain (often in the upper right quadrant)",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 5,
    "name": "Abdominal pain or discomfort",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 6,
    "name": "Abnormal positioning of the urethral opening on the underside of the penis",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 7,
    "name": "Abnormal vaginal bleeding",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 8,
    "name": "Abnormal vaginal bleeding outside of the menstrual period",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 9,
    "name": "Absence or undescended testicle(s)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 10,
    "name": "Altered perception of reality",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 11,
    "name": "Anxiety",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 12,
    "name": "Avoidance or restriction of certain foods or entire food groups",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 13,
    "name": "Benign tumors in various organs",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 14,
    "name": "Blood in urine",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 15,
    "name": "Blurred distance vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 16,
    "name": "Blurred or distorted central vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 17,
    "name": "Blurred or distorted vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 18,
    "name": "Blurred or hazy vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 19,
    "name": "Blurred vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 20,
    "name": "Bone pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 21,
    "name": "Breast lump",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 22,
    "name": "Bruising",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 23,
    "name": "Challenges with social interaction",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 24,
    "name": "Chest or back pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 25,
    "name": "Chest pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 26,
    "name": "Chest pain (sharp and stabbing)",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 27,
    "name": "Chest pain (sharp or dull)",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 28,
    "name": "Chest pain or discomfort (angina)",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 29,
    "name": "Cholecystectomy",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 30,
    "name": "Chronic back pain and stiffness",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 31,
    "name": "Chronic constipation",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 32,
    "name": "Chronic diarrhea",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 33,
    "name": "Cloudy or hazy eyes",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 34,
    "name": "Compulsive use of opioids",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 35,
    "name": "Confusion",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 36,
    "name": "Cough",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 37,
    "name": "Cough with phlegm or pus",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 38,
    "name": "Cravings for alcohol",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 39,
    "name": "Curvature of the penis",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 40,
    "name": "Decreased urine output",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 41,
    "name": "Deformity",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 42,
    "name": "Dehydration",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 43,
    "name": "Depends on the specific cranial nerve involved; symptoms can include vision changes",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 44,
    "name": "Developmental delays",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 45,
    "name": "Difficulty",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 46,
    "name": "Difficulty breathing",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 47,
    "name": "Difficulty falling asleep or staying asleep",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 48,
    "name": "Difficulty moving",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 49,
    "name": "Difficulty or poor urinary stream",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 50,
    "name": "Difficulty seeing objects up close",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 51,
    "name": "Difficulty swallowing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 52,
    "name": "Dizziness",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 53,
    "name": "Double vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 54,
    "name": "Drowsiness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 55,
    "name": "Dry",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 56,
    "name": "Dry mouth and eyes",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 57,
    "name": "Ear pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 58,
    "name": "Ear pain (particularly behind the ear)",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 59,
    "name": "Easy bruising",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 60,
    "name": "Easy or excessive bruising",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 61,
    "name": "Elevated intraocular pressure",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 62,
    "name": "Elevated intraocular pressure without optic nerve damage",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 63,
    "name": "Elevated levels of gamma globulins in the blood",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 64,
    "name": "Enlarged",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 65,
    "name": "Enlarged thyroid gland in the neck",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 66,
    "name": "Euphoria",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 67,
    "name": "Excessive bleeding and bruising",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 68,
    "name": "Excessive body weight",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 69,
    "name": "Excessive daytime sleepiness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 70,
    "name": "Excessive hair growth in women",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 71,
    "name": "Excessive sweating (beyond what is necessary for temperature regulation)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 72,
    "name": "Excessive tearing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 73,
    "name": "Excessive worrying",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 74,
    "name": "Excessively concentrated urine",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 75,
    "name": "Extreme fatigue",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 76,
    "name": "Extreme weight loss",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 77,
    "name": "Eye fatigue",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 78,
    "name": "Eye pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 79,
    "name": "Eye redness",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 80,
    "name": "Facial changes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 81,
    "name": "Facial numbness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 82,
    "name": "Facial pain or pressure",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 83,
    "name": "Facial paralysis",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 84,
    "name": "Facial weakness",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 85,
    "name": "Facial weakness or paralysis",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 86,
    "name": "Fatigue",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 87,
    "name": "Fear of losing control",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 88,
    "name": "Fever",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 89,
    "name": "Flank pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 90,
    "name": "Floaters (spots or cobweb-like shapes in vision)",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 91,
    "name": "Floaters in vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 92,
    "name": "Flu-like symptoms (fever",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 93,
    "name": "Foot pain or achiness",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 94,
    "name": "Fragile bones",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 95,
    "name": "Frequent episodes of stone formation",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 96,
    "name": "Frequent or constant dribbling of urine",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 97,
    "name": "Frequent urinary tract infections",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 98,
    "name": "Frequent urination",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 99,
    "name": "Fussiness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 100,
    "name": "Gait disturbances",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 101,
    "name": "General malaise",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 102,
    "name": "Gonadal dysgenesis",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 103,
    "name": "Gradual hearing loss",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 104,
    "name": "Gradual loss of peripheral vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 105,
    "name": "Gradual loss of vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 106,
    "name": "Gradual vision loss",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 107,
    "name": "Growth deficiencies",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 108,
    "name": "Growth on the conjunctiva (white part of the eye)",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 109,
    "name": "Hair loss or balding",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 110,
    "name": "Head tilting",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 111,
    "name": "Headache",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 112,
    "name": "Headaches",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 113,
    "name": "Hearing loss (gradual and progressive)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 114,
    "name": "Heartburn",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 115,
    "name": "Heavy or prolonged menstrual periods",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 116,
    "name": "Heel pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 117,
    "name": "Hemangioblastomas (tumors in the brain",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 118,
    "name": "High blood pressure",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 119,
    "name": "High blood pressure during pregnancy",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 120,
    "name": "High blood pressure without proteinuria (preeclampsia)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 121,
    "name": "High blood sugar levels during pregnancy",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 122,
    "name": "High fever",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 123,
    "name": "High levels of cholesterol in the blood",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 124,
    "name": "Hoarseness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 125,
    "name": "Hypocalcemia (low calcium levels)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 126,
    "name": "Impaired memory and cognition",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 127,
    "name": "Impulsive behaviors (e.g.",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 128,
    "name": "Inability to conceive after one year of unprotected intercourse",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 129,
    "name": "Inattention",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 130,
    "name": "Increased appetite",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 131,
    "name": "Increased blood sugar levels",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 132,
    "name": "Increased energy and alertness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 133,
    "name": "Increased hunger",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 134,
    "name": "Increased red blood cell count",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 135,
    "name": "Increased thirst",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 136,
    "name": "Inflammation of blood vessels leading to various symptoms depending on the affected organs",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 137,
    "name": "Inflammation of the glans penis (tip of the penis)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 138,
    "name": "Intense burning pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 139,
    "name": "Intense itching",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 140,
    "name": "Intense joint pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 141,
    "name": "Irregular or rapid heartbeat",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 142,
    "name": "Irregular periods",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 143,
    "name": "Itching and irritation in the vagina and vulva",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 144,
    "name": "Itching and visible presence of lice or nits (eggs) in the hair",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 145,
    "name": "Itching around the anus or vagina",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 146,
    "name": "Itchy",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 147,
    "name": "Itchy skin",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 148,
    "name": "Jaw pain or tenderness",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 149,
    "name": "Joint pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 150,
    "name": "Joint swelling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 151,
    "name": "Knee pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 152,
    "name": "Lack of menstrual periods",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 153,
    "name": "Localized muscle pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 154,
    "name": "Loss of function",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 155,
    "name": "Low blood sugar (hypoglycemia) symptoms (e.g.",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 156,
    "name": "Lower abdominal pain and discomfort occurring around the time of ovulation",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 157,
    "name": "Lower back pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 158,
    "name": "Lump",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 159,
    "name": "Lump or swelling in the testicles",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 160,
    "name": "Lymph node enlargement",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 161,
    "name": "Lymphedema",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 162,
    "name": "Metabolic acidosis",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 163,
    "name": "Mild to moderate head pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 164,
    "name": "Mood swings",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 165,
    "name": "Most colonic polyps do not cause symptoms. Some larger polyps or certain types may cause rectal bleeding or changes in bowel habits",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 166,
    "name": "Motor",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 167,
    "name": "Muscle pain and stiffness",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 168,
    "name": "Muscle stiffness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 169,
    "name": "Muscle twitches or cramps",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 170,
    "name": "Muscle wasting",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 171,
    "name": "Muscle weakness",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 172,
    "name": "Muscle weakness or fatigue",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 173,
    "name": "Nasal congestion",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 174,
    "name": "Nausea",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 175,
    "name": "Neck or back pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 176,
    "name": "Neck pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 177,
    "name": "Neurological symptoms that cannot be explained by a medical condition or injury",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 178,
    "name": "Night blindness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 179,
    "name": "Numbness or tingling in fingers or around the mouth",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 180,
    "name": "Obsessive focus on clean eating",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 181,
    "name": "Optic neuritis (vision loss",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 182,
    "name": "Pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 183,
    "name": "Pain during bowel movements",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 184,
    "name": "Pain or discomfort in the tailbone area",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 185,
    "name": "Pain or tenderness on the outer side of the elbow",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 186,
    "name": "Pain radiating from the lower back to the leg",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 187,
    "name": "Painful",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 188,
    "name": "Painful blisters on the skin and mucous membranes",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 189,
    "name": "Painful intercourse",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 190,
    "name": "Painful lump or swelling on the eyelid",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 191,
    "name": "Painful ulcers or sores on the genital area",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 192,
    "name": "Painful urination",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 193,
    "name": "Painless fluid-filled swelling in the oral cavity",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 194,
    "name": "Painless lump or swelling",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 195,
    "name": "Painless swelling",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 196,
    "name": "Palpable mass",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 197,
    "name": "Palpitations",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 198,
    "name": "Pelvic pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 199,
    "name": "Pelvic pain (during menstruation",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 200,
    "name": "Pelvic pressure or heaviness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 201,
    "name": "Persistent",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 202,
    "name": "Persistent consumption of non-food substances",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 203,
    "name": "Persistent cough with thick mucus",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 204,
    "name": "Persistent cough with yellow or green mucus",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 205,
    "name": "Persistent depressive symptoms (low mood",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 206,
    "name": "Persistent feelings of sadness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 207,
    "name": "Persistent head pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 208,
    "name": "Persistent hunger",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 209,
    "name": "Persistent knee pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 210,
    "name": "Persistent pain or discomfort in the vulva",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 211,
    "name": "Persistent sore throat",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 212,
    "name": "Poor depth perception",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 213,
    "name": "Primary stage: painless sores (chancre) at the site of infection",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 214,
    "name": "Progressive muscle weakness and degeneration",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 215,
    "name": "Raised",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 216,
    "name": "Rash",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 217,
    "name": "Raynaud's phenomenon",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 218,
    "name": "Recurrent",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 219,
    "name": "Recurrent episodes of binge eating followed by purging behaviors",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 220,
    "name": "Recurrent episodes of binge eating without compensatory behaviors",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 221,
    "name": "Recurrent episodes of wheezing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 222,
    "name": "Red",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 223,
    "name": "Redness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 224,
    "name": "Reduced hearing sensitivity",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 225,
    "name": "Repeated regurgitation and re-chewing of food",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 226,
    "name": "Respiratory distress",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 227,
    "name": "Rough",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 228,
    "name": "Sedation",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 229,
    "name": "Sensation of a foreign object stuck in the throat",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 230,
    "name": "Severe abdominal or back pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 231,
    "name": "Severe abdominal pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 232,
    "name": "Severe and chronic pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 233,
    "name": "Severe and persistent pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 234,
    "name": "Severe eye pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 235,
    "name": "Severe headache",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 236,
    "name": "Severe headaches",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 237,
    "name": "Severe kidney damage",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 238,
    "name": "Severe nausea and vomiting during pregnancy",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 239,
    "name": "Severe neck pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 240,
    "name": "Severe pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 241,
    "name": "Severe pain in the side or back",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 242,
    "name": "Severe sore throat",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 243,
    "name": "Severe swelling of the floor of the mouth",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 244,
    "name": "Severe upper abdominal pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 245,
    "name": "Shaking",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 246,
    "name": "Sharp",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 247,
    "name": "Sharp or aching pain in the lower abdomen or groin",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 248,
    "name": "Sharp pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 249,
    "name": "Shooting or burning pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 250,
    "name": "Short stature",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 251,
    "name": "Shortness of breath",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 252,
    "name": "Shoulder pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 253,
    "name": "Skin changes",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 254,
    "name": "Skin sores",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 255,
    "name": "Skipped or extra heartbeats",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 256,
    "name": "Slow healing of wounds",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 257,
    "name": "Slurred speech",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 258,
    "name": "Small",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 259,
    "name": "Small lump or swelling in the vaginal wall",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 260,
    "name": "Sore throat",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 261,
    "name": "Sudden",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 262,
    "name": "Sudden and severe abdominal or pelvic pain on one side",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 263,
    "name": "Sudden numbness or weakness of the face",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 264,
    "name": "Sudden onset of neurological symptoms that resolve within 24 hours",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 265,
    "name": "Sunburn-like rash",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 266,
    "name": "Surgical site pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 267,
    "name": "Sweating",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 268,
    "name": "Swelling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 269,
    "name": "Swelling in arms or legs",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 270,
    "name": "Swelling of the scrotum",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 271,
    "name": "Swollen",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 272,
    "name": "Swollen blood vessels in the esophagus",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 273,
    "name": "Swollen lymph nodes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 274,
    "name": "Swollen salivary glands (usually parotid)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 275,
    "name": "Symptoms that do not meet the full criteria for a specific eating disorder",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 276,
    "name": "Thickening of the skin",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 277,
    "name": "Tingling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 278,
    "name": "Toothache",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 279,
    "name": "Trembling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 280,
    "name": "Tremors",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 281,
    "name": "Uncomfortable sensation in the legs",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 282,
    "name": "Unintentional urine leakage during physical activity",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 283,
    "name": "Vaginal bleeding",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 284,
    "name": "Vaginal burning",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 285,
    "name": "Vaginal dryness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 286,
    "name": "Varies depending on the underlying cause",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 287,
    "name": "Various symptoms depending on the specific disorder",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 288,
    "name": "Vertigo",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 289,
    "name": "Visible bulge or swelling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 290,
    "name": "Visible peristalsis",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 291,
    "name": "Vision loss or blurry vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 292,
    "name": "Vocal Changes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 293,
    "name": "Vocal Fatigue",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 294,
    "name": "Weakness",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 295,
    "name": "Webbed neck",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 296,
    "name": "Weight loss",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 297,
    "name": "Wheezing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 298,
    "name": "White patches or plaques in the mouth",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 299,
    "name": "Widespread musculoskeletal pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 300,
    "name": "Yellowing of the skin and eyes",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 301,
    "name": "Yellowish or white growth on the conjunctiva (eye's surface)",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 302,
    "name": "abdominal cramps",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 303,
    "name": "abdominal distension",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 304,
    "name": "abdominal pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 305,
    "name": "abdominal pain or bloating",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 306,
    "name": "abdominal pain or cramping",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 307,
    "name": "abdominal pain or cramps",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 308,
    "name": "abdominal pain or discomfort",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 309,
    "name": "abdominal pain or swelling",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 310,
    "name": "abdominal swelling (ascites)",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 311,
    "name": "abdominal swelling or pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 312,
    "name": "abdominal tenderness",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 313,
    "name": "abnormal bleeding or spotting",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 314,
    "name": "abnormal discharge from the genitals",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 315,
    "name": "abnormal positioning of the testicle(s) (higher in the groin area)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 316,
    "name": "abnormal sweating",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 317,
    "name": "abscess formation",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 318,
    "name": "acid reflux",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 319,
    "name": "acidic taste",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 320,
    "name": "acne",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 321,
    "name": "age-related factors",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 322,
    "name": "altered judgment",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 323,
    "name": "altered perception of time",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 324,
    "name": "anal or vaginal discharge",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 325,
    "name": "and abnormal head positioning",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 326,
    "name": "and oily patches of skin",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 327,
    "name": "and other organs",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 328,
    "name": "and pain in the hand and fingers",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 329,
    "name": "and psychiatric symptoms",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 330,
    "name": "and signs of fluid overload",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 331,
    "name": "and tenderness along a vein",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 332,
    "name": "anemia",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 333,
    "name": "anxiety",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 334,
    "name": "anxiety or paranoia (in some individuals)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 335,
    "name": "anxiety) when attempting to stop or reduce use",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 336,
    "name": "apid breathing",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 337,
    "name": "arm",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 338,
    "name": "back or flank pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 339,
    "name": "back pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 340,
    "name": "backache",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 341,
    "name": "bad breath",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 342,
    "name": "bad taste",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 343,
    "name": "balance problems",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 344,
    "name": "bedwetting (in children)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 345,
    "name": "black",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 346,
    "name": "bleeding",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 347,
    "name": "bleeding after menopause",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 348,
    "name": "bleeding after sexual intercourse",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 349,
    "name": "bleeding gums",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 350,
    "name": "bleeding tendencies",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 351,
    "name": "blind spots",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 352,
    "name": "blindness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 353,
    "name": "blistering",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 354,
    "name": "bloating",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 355,
    "name": "blood in the urine",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 356,
    "name": "blood in urine",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 357,
    "name": "blood in urine or stool",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 358,
    "name": "bloodshot eyes",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 359,
    "name": "bloody or black stools",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 360,
    "name": "bloody stool",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 361,
    "name": "bloody stools",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 362,
    "name": "blurred or decreased vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 363,
    "name": "blurred vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 364,
    "name": "blurred vision (if the chalazion affects the line of sight)",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 365,
    "name": "blurred vision when focusing on near objects",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 366,
    "name": "blurry vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 367,
    "name": "body aches",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 368,
    "name": "bone pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 369,
    "name": "bowel movement difficulties",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 370,
    "name": "bowel obstruction",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 371,
    "name": "brain",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 372,
    "name": "breast pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 373,
    "name": "breast tenderness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 374,
    "name": "brief muscle contractions or jerks",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 375,
    "name": "bruising",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 376,
    "name": "burning",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 377,
    "name": "burning sensation during urination",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 378,
    "name": "changes in appetite or sleep patterns",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 379,
    "name": "changes in bowel movements",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 380,
    "name": "changes in bowel or bladder habits",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 381,
    "name": "changes in breast size or shape",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 382,
    "name": "changes in coordination or balance",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 383,
    "name": "changes in heart rate",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 384,
    "name": "changes in sensory experiences",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 385,
    "name": "changes in skin color or temperature",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 386,
    "name": "changes in skin temperature",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 387,
    "name": "changes in sleep and appetite)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 388,
    "name": "changes in testicular size or shape",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 389,
    "name": "changes in vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 390,
    "name": "chest congestion",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 391,
    "name": "chest discomfort or tightness",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 392,
    "name": "chest pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 393,
    "name": "chest pain or angina",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 394,
    "name": "chest pain or discomfort",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 395,
    "name": "chest pain or pressure",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 396,
    "name": "chest tightness",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 397,
    "name": "chest wall bruising",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 398,
    "name": "chills",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 399,
    "name": "choking or gagging",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 400,
    "name": "chronic cough",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 401,
    "name": "chronic pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 402,
    "name": "clicking or popping sounds in the jaw joint",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 403,
    "name": "cloudy or bloody urine",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 404,
    "name": "cloudy urine",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 405,
    "name": "clumpy vaginal discharge (resembling cottage cheese)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 406,
    "name": "cognitive",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 407,
    "name": "cognitive decline or dementia-like symptoms",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 408,
    "name": "cognitive difficulties",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 409,
    "name": "cognitive difficulties (fibro fog)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 410,
    "name": "cognitive impairments",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 411,
    "name": "cognitive or developmental problems",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 412,
    "name": "color vision impairment",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 413,
    "name": "communication difficulties",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 414,
    "name": "confusion",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 415,
    "name": "congestion",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 416,
    "name": "constipation",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 417,
    "name": "continued use despite negative consequences (such as legal issues",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 418,
    "name": "continued use despite negative consequences (such as relationship problems",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 419,
    "name": "corneal abrasions or ulcers",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 420,
    "name": "cough",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 421,
    "name": "coughing",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 422,
    "name": "coughing or wheezing",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 423,
    "name": "coughing up blood or pink-tinged sputum",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 424,
    "name": "cramping",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 425,
    "name": "curtain-like shadow over vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 426,
    "name": "cyanosis (bluish discoloration of the skin)",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 427,
    "name": "dandruff",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 428,
    "name": "dark or empty areas in the visual field",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 429,
    "name": "dark spots on the teeth",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 430,
    "name": "dark urine",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 431,
    "name": "daytime sleepiness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 432,
    "name": "decreased appetite",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 433,
    "name": "decreased exercise tolerance",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 434,
    "name": "decreased oxygen levels",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 435,
    "name": "decreased vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 436,
    "name": "deformity",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 437,
    "name": "delayed wound healing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 438,
    "name": "depression",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 439,
    "name": "depressive episodes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 440,
    "name": "developmental delays",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 441,
    "name": "developmental delays (in children)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 442,
    "name": "diarrhea",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 443,
    "name": "difficulty bonding with the baby",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 444,
    "name": "difficulty breathing",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 445,
    "name": "difficulty breathing or shortness of breath",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 446,
    "name": "difficulty chewing or opening the mouth",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 447,
    "name": "difficulty concentrating",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 448,
    "name": "difficulty eating",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 449,
    "name": "difficulty emptying the bladder",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 450,
    "name": "difficulty gripping or using the finger",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 451,
    "name": "difficulty hearing high-pitched sounds",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 452,
    "name": "difficulty in urination",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 453,
    "name": "difficulty maintaining proper posture",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 454,
    "name": "difficulty moving or turning the head",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 455,
    "name": "difficulty moving or using the affected area",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 456,
    "name": "difficulty resisting urges",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 457,
    "name": "difficulty speaking",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 458,
    "name": "difficulty speaking or walking)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 459,
    "name": "difficulty straightening or bending the knee",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 460,
    "name": "difficulty swallowing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 461,
    "name": "difficulty swallowing or breathing",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 462,
    "name": "difficulty swallowing or speaking",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 463,
    "name": "difficulty walking",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 464,
    "name": "difficulty walking or moving",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 465,
    "name": "difficulty with foot and ankle movement",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 466,
    "name": "difficulty with forearm movements",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 467,
    "name": "dilated pupils",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 468,
    "name": "disabling migraines",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 469,
    "name": "discharge",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 470,
    "name": "discharge from the eye",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 471,
    "name": "discharge from the nose",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 472,
    "name": "discharge from the wound",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 473,
    "name": "discomfort",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 474,
    "name": "discomfort in the pelvic area",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 475,
    "name": "discomfort or pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 476,
    "name": "discomfort or pain during intercourse",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 477,
    "name": "discomfort or pain in the neck",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 478,
    "name": "distinct facial features (small jaw",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 479,
    "name": "distorted body image",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 480,
    "name": "distorted or irregular corneal shape",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 481,
    "name": "dizziness",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 482,
    "name": "dizziness or balance problems",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 483,
    "name": "dizziness or lightheadedness",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 484,
    "name": "dizziness or vertigo",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 485,
    "name": "drainage of fluid or pus from the ear",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 486,
    "name": "drainage of pus or blood",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 487,
    "name": "drooling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 488,
    "name": "drooping of the mouth or eyelid",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 489,
    "name": "drowsiness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 490,
    "name": "drug cravings",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 491,
    "name": "dry cough",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 492,
    "name": "dry eyes",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 493,
    "name": "dry mouth",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 494,
    "name": "dry or rough skin",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 495,
    "name": "dry skin",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 496,
    "name": "dryness or excessive tearing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 497,
    "name": "ear drainage",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 498,
    "name": "ear fullness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 499,
    "name": "ear pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 500,
    "name": "earache",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 501,
    "name": "early satiety",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 502,
    "name": "easy bleeding or bruising",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 503,
    "name": "easy bruising and bleeding",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 504,
    "name": "easy bruising or bleeding",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 505,
    "name": "elevated cholesterol levels",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 506,
    "name": "elevated eosinophil count in the blood or sputum",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 507,
    "name": "elevated liver enzymes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 508,
    "name": "emotional distress",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 509,
    "name": "emptiness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 510,
    "name": "empty scrotum",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 511,
    "name": "endoscopic retrograde cholangiopancreatography (ERCP) with stone removal",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 512,
    "name": "enlarged abdomen or uterus",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 513,
    "name": "enlarged head in infants",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 514,
    "name": "enlarged liver",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 515,
    "name": "enlarged spleen",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 516,
    "name": "enlarged spleen or liver",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 517,
    "name": "erectile dysfunction",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 518,
    "name": "especially at night",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 519,
    "name": "especially at night or in response to triggers such as allergens or exercise",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 520,
    "name": "especially during physical activity or exertion",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 521,
    "name": "especially in the morning or after periods of inactivity",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 522,
    "name": "especially when walking or standing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 523,
    "name": "euphoria",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 524,
    "name": "excessive bleeding from minor cuts or abrasions",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 525,
    "name": "excessive hair growth",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 526,
    "name": "excessive menstrual bleeding",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 527,
    "name": "excessive tearing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 528,
    "name": "excessive thirst",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 529,
    "name": "eye discharge",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 530,
    "name": "eye movement abnormalities",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 531,
    "name": "eye pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 532,
    "name": "eye pain or discomfort",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 533,
    "name": "eye pain with eye movement",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 534,
    "name": "eye strain",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 535,
    "name": "eyestrain",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 536,
    "name": "facial abnormalities",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 537,
    "name": "facial pain or pressure",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 538,
    "name": "facial weakness or paralysis",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 539,
    "name": "failure to pass meconium (in newborns)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 540,
    "name": "failure to thrive",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 541,
    "name": "fainting",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 542,
    "name": "fainting or lightheadedness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 543,
    "name": "fainting or near-fainting episodes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 544,
    "name": "fatigue",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 545,
    "name": "fatigue)",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 546,
    "name": "fatty deposits (xanthomas) on the skin or tendons",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 547,
    "name": "fear of gaining weight",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 548,
    "name": "feeling of heaviness or tightness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 549,
    "name": "feelings of connection or disconnection",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 550,
    "name": "feelings of guilt or worthlessness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 551,
    "name": "feet",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 552,
    "name": "fever",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 553,
    "name": "fever (in some cases)",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 554,
    "name": "flaky scalp",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 555,
    "name": "flaky skin with itching",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 556,
    "name": "flashbacks (in some individuals)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 557,
    "name": "flashes of light",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 558,
    "name": "flashing lights or floaters",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 559,
    "name": "floaters",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 560,
    "name": "floaters (dark spots or cobwebs in the vision)",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 561,
    "name": "fluid drainage from the ear",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 562,
    "name": "fluid retention",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 563,
    "name": "foot fatigue",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 564,
    "name": "foreign body sensation",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 565,
    "name": "forgetfulness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 566,
    "name": "foul odor around the umbilical area",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 567,
    "name": "fractures",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 568,
    "name": "frequent crying",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 569,
    "name": "frequent infections",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 570,
    "name": "frequent nosebleeds",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 571,
    "name": "frequent urination",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 572,
    "name": "fruity breath odor",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 573,
    "name": "gambling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 574,
    "name": "gastrointestinal bleeding",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 575,
    "name": "gastrointestinal symptoms",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 576,
    "name": "growth abnormalities in children",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 577,
    "name": "hair loss",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 578,
    "name": "hallucinations",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 579,
    "name": "halos around lights",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 580,
    "name": "headache",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 581,
    "name": "headaches",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 582,
    "name": "health issues)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 583,
    "name": "health problems)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 584,
    "name": "health risks)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 585,
    "name": "healthy food choices",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 586,
    "name": "hearing loss",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 587,
    "name": "hearing loss or impaired hearing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 588,
    "name": "hearing loss or muffled hearing in the affected ear",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 589,
    "name": "heart and digestive problems",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 590,
    "name": "heart attack (when a coronary artery becomes completely blocked)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 591,
    "name": "heart attacks",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 592,
    "name": "heart defects",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 593,
    "name": "heart inflammation",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 594,
    "name": "heart palpitations",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 595,
    "name": "heart palpitations (rapid or irregular heartbeat)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 596,
    "name": "heartburn",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 597,
    "name": "heavy menstrual bleeding",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 598,
    "name": "heavy or prolonged menstrual periods",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 599,
    "name": "high blood pressure",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 600,
    "name": "high blood pressure (in severe cases)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 601,
    "name": "hoarseness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 602,
    "name": "hormonal imbalances",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 603,
    "name": "hormonal imbalances (such as excessive production or deficiency of specific hormones)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 604,
    "name": "hyperactivity",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 605,
    "name": "impaired color vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 606,
    "name": "impaired coordination",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 607,
    "name": "impaired immunity",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 608,
    "name": "impaired memory and concentration",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 609,
    "name": "impulsivity",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 610,
    "name": "inability to bear weight",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 611,
    "name": "inability to completely empty the bladder",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 612,
    "name": "inability to control or limit alcohol consumption",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 613,
    "name": "inability to control or reduce opioid use",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 614,
    "name": "inability to move the elbow",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 615,
    "name": "inability to straighten the leg",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 616,
    "name": "including hormonal imbalances",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 617,
    "name": "including rash",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 618,
    "name": "increased energy",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 619,
    "name": "increased heart rate",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 620,
    "name": "increased heart rate and blood pressure",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 621,
    "name": "increased ketone production",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 622,
    "name": "increased need to urinate",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 623,
    "name": "increased risk of chronic conditions",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 624,
    "name": "increased sensitivity to light",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 625,
    "name": "increased sensitivity to light (photophobia)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 626,
    "name": "increased urination or urine changes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 627,
    "name": "infertility",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 628,
    "name": "infertility or recurrent miscarriages (in some cases)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 629,
    "name": "inflamed skin",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 630,
    "name": "inflammation",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 631,
    "name": "inflammation and pain in other joints (such as hips",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 632,
    "name": "inflammation of the surrounding tissue",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 633,
    "name": "inguinal hernia",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 634,
    "name": "insomnia",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 635,
    "name": "insomnia) when attempting to stop or reduce cannabis use",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 636,
    "name": "insulin resistance",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 637,
    "name": "intellectual disability",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 638,
    "name": "intense urge to urinate followed by involuntary urine leakage",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 639,
    "name": "intercourse",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 640,
    "name": "introspective thoughts",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 641,
    "name": "involuntary movements",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 642,
    "name": "involuntary muscle contractions",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 643,
    "name": "irregular heart rhythms",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 644,
    "name": "irregular heartbeat",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 645,
    "name": "irregular heartbeat or palpitations",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 646,
    "name": "irregular or absent menstrual cycles",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 647,
    "name": "irritability",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 648,
    "name": "irritability (in infants and young children)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 649,
    "name": "itching",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 650,
    "name": "itching or burning sensation",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 651,
    "name": "itchy",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 652,
    "name": "itchy bumps",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 653,
    "name": "itchy welts on the skin",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 654,
    "name": "jaundice",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 655,
    "name": "jaundice (yellowing of the skin and eyes)",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 656,
    "name": "jaw or arm pain (in some cases)",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 657,
    "name": "job difficulties)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 658,
    "name": "joint and muscle pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 659,
    "name": "joint pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 660,
    "name": "kidney cysts",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 661,
    "name": "kidney stones",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 662,
    "name": "knees)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 663,
    "name": "lack of interest",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 664,
    "name": "lasting for at least two years",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 665,
    "name": "latent stage: no symptoms",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 666,
    "name": "leg pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 667,
    "name": "legs",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 668,
    "name": "lightheadedness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 669,
    "name": "limited mobility or difficulty moving the arm",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 670,
    "name": "limited range of motion",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 671,
    "name": "limited range of motion in the spine",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 672,
    "name": "liver or kidney damage",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 673,
    "name": "liver or spleen enlargement",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 674,
    "name": "localized inflammation and swelling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 675,
    "name": "loss of appetite",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 676,
    "name": "loss of bladder or bowel control)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 677,
    "name": "loss of consciousness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 678,
    "name": "loss of height over time",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 679,
    "name": "loss of interest or pleasure in activities",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 680,
    "name": "loss of sensation",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 681,
    "name": "loss of sensation in the face or other areas",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 682,
    "name": "loss of smell",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 683,
    "name": "low blood pressure",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 684,
    "name": "low blood sodium levels",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 685,
    "name": "low-set ears)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 686,
    "name": "malaise",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 687,
    "name": "manic episodes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 688,
    "name": "mastoid bone protrusion or swelling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 689,
    "name": "may appear in clusters or as single lesions",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 690,
    "name": "may be asymptomatic or associated with other underlying conditions",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 691,
    "name": "may interfere with daily activities",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 692,
    "name": "memory impairment",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 693,
    "name": "memory loss or cognitive difficulties",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 694,
    "name": "memory problems",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 695,
    "name": "meningitis",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 696,
    "name": "menstrual irregularities",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 697,
    "name": "mental confusion",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 698,
    "name": "mild discomfort",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 699,
    "name": "minerals)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 700,
    "name": "mood changes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 701,
    "name": "mood swings",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 702,
    "name": "muffled or blocked sound",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 703,
    "name": "muscle aches",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 704,
    "name": "muscle aches and stiffness",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 705,
    "name": "muscle and joint pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 706,
    "name": "muscle cramps",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 707,
    "name": "muscle pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 708,
    "name": "muscle wasting",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 709,
    "name": "muscle weakness",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 710,
    "name": "nasal congestion",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 711,
    "name": "nausea",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 712,
    "name": "nausea and vomiting",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 713,
    "name": "nausea or vomiting",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 714,
    "name": "neck mass",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 715,
    "name": "neck pain or stiffness",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 716,
    "name": "neglecting responsibilities",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 717,
    "name": "neurological deficits",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 718,
    "name": "neurological symptoms",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 719,
    "name": "neurological symptoms (tremors",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 720,
    "name": "night sweats",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 721,
    "name": "nipple changes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 722,
    "name": "nosebleeds",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 723,
    "name": "numbness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 724,
    "name": "numbness or tingling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 725,
    "name": "numbness or tingling in the hand/arm",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 726,
    "name": "numbness or weakness in the arms or legs",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 727,
    "name": "numbness or weakness in the extremities",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 728,
    "name": "nutrient deficiencies (vitamins",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 729,
    "name": "often affecting the arms",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 730,
    "name": "often in the legs",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 731,
    "name": "often in the limbs",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 732,
    "name": "often on the tongue or inside of the cheeks",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 733,
    "name": "or bowel movements)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 734,
    "name": "or difficulty speaking",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 735,
    "name": "or face",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 736,
    "name": "or hopelessness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 737,
    "name": "or inflamed skin in skin folds (such as armpits or groin)",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 738,
    "name": "or leg (typically on one side of the body)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 739,
    "name": "or legs",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 740,
    "name": "or numbness that radiates from the lower back through the hips and down the leg",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 741,
    "name": "or other organs)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 742,
    "name": "or painful veins in the rectal area",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 743,
    "name": "or paralysis of the limbs",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 744,
    "name": "organ dysfunction",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 745,
    "name": "other",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 746,
    "name": "other tumors or cysts",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 747,
    "name": "ovarian cysts",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 748,
    "name": "overwhelming fatigue",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 749,
    "name": "pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 750,
    "name": "pain during erections",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 751,
    "name": "pain during intercourse",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 752,
    "name": "pain during sexual intercourse",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 753,
    "name": "pain during urination",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 754,
    "name": "pain or discomfort",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 755,
    "name": "pain or tenderness at the wound site",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 756,
    "name": "pain when swallowing and speaking",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 757,
    "name": "pain with eye movement)",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 758,
    "name": "painful blisters on the lips or around the mouth",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 759,
    "name": "painful erection",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 760,
    "name": "painful periods",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 761,
    "name": "painful sores or blisters in the mouth and throat",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 762,
    "name": "painless bleeding in the third trimester",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 763,
    "name": "pale skin",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 764,
    "name": "pale stools",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 765,
    "name": "palpitations",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 766,
    "name": "pancreatic cysts/tumors",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 767,
    "name": "panic attacks",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 768,
    "name": "paranoia",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 769,
    "name": "particularly on the hands and feet",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 770,
    "name": "patchy or generalized hair loss",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 771,
    "name": "peeling skin",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 772,
    "name": "pelvic pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 773,
    "name": "pelvic pain or discomfort",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 774,
    "name": "pelvic pain or pressure",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 775,
    "name": "penile curvature",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 776,
    "name": "perforation of the digestive tract",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 777,
    "name": "peripheral vision impairment",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 778,
    "name": "personality changes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 779,
    "name": "petechiae (red or purple spots on the skin)",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 780,
    "name": "petechial rash (small red or purple spots)",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 781,
    "name": "pheochromocytomas (adrenal gland tumors)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 782,
    "name": "pneumonia",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 783,
    "name": "poor appetite",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 784,
    "name": "poor coordination",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 785,
    "name": "poor growth or weight gain",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 786,
    "name": "poor weight gain",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 787,
    "name": "poor wound healing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 788,
    "name": "post-nasal drip",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 789,
    "name": "postnasal drip",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 790,
    "name": "productive cough with foul-smelling or bloody sputum",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 791,
    "name": "prolonged bleeding after injury or surgery",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 792,
    "name": "prolonged bleeding from cuts",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 793,
    "name": "prolonged bleeding from wounds or after dental work or surgery",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 794,
    "name": "prolonged bleeding or bruising",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 795,
    "name": "prolonged or excessive bleeding from cuts or injuries",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 796,
    "name": "prolonged or heavy bleeding",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 797,
    "name": "proteinuria",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 798,
    "name": "psychosis (in severe cases)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 799,
    "name": "pus formation",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 800,
    "name": "pus or drainage from the wound",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 801,
    "name": "rapid breathing",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 802,
    "name": "rapid heart rate",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 803,
    "name": "rapid heartbeat",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 804,
    "name": "rapid or irregular heartbeats",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 805,
    "name": "rapid or shallow breathing",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 806,
    "name": "rapid pulse",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 807,
    "name": "rash",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 808,
    "name": "rash (red",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 809,
    "name": "rash at birth",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 810,
    "name": "rash or soreness in the affected area",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 811,
    "name": "raw",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 812,
    "name": "rawness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 813,
    "name": "rectal bleeding",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 814,
    "name": "recurrent ear infections",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 815,
    "name": "recurrent eye infections",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 816,
    "name": "recurrent lung infections",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 817,
    "name": "red",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 818,
    "name": "red lump or swelling on the eyelid",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 819,
    "name": "red rash caused by contact with irritants or allergens",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 820,
    "name": "redness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 821,
    "name": "redness and swelling of the vulva",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 822,
    "name": "redness or irritation of the eye",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 823,
    "name": "reduced anxiety",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 824,
    "name": "reduced range of motion",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 825,
    "name": "relaxation",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 826,
    "name": "renal cell carcinomas (kidney tumors)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 827,
    "name": "respiratory depression",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 828,
    "name": "respiratory distress",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 829,
    "name": "respiratory symptoms",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 830,
    "name": "restless sleep",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 831,
    "name": "restlessness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 832,
    "name": "restricted interests or repetitive behaviors",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 833,
    "name": "restricted range of motion",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 834,
    "name": "retinal angiomas (abnormal blood vessel growth in the retina)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 835,
    "name": "rib fractures (associated injuries)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 836,
    "name": "risk of heart attack or stroke",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 837,
    "name": "rough growths on the skin or mucous membranes",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 838,
    "name": "rounded face",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 839,
    "name": "runny nose",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 840,
    "name": "salty-tasting skin",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 841,
    "name": "sandpaper-like)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 842,
    "name": "scaly patches on the skin",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 843,
    "name": "secondary stage: skin rash",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 844,
    "name": "seizures",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 845,
    "name": "sensitivity to cold",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 846,
    "name": "sensitivity to light",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 847,
    "name": "sensitivity to light (photophobia)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 848,
    "name": "sensitivity to light and sound",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 849,
    "name": "sensitivity to light or noise",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 850,
    "name": "severe eye pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 851,
    "name": "severe headache",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 852,
    "name": "severe pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 853,
    "name": "sharp or stabbing pain",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 854,
    "name": "shooting pain along the affected nerve",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 855,
    "name": "short stature",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 856,
    "name": "shortness of breath",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 857,
    "name": "shoulder pain (if the fallopian tube ruptures)",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 858,
    "name": "shoulder stiffness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 859,
    "name": "shoulders",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 860,
    "name": "significant weight loss or failure to gain weight",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 861,
    "name": "skin abnormalities",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 862,
    "name": "skin discoloration",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 863,
    "name": "skin rashes",
    "category": "skin",
    "icon": "🩹"
  },
  {
    "id": 864,
    "name": "sleep disturbances",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 865,
    "name": "slow heart rate",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 866,
    "name": "slowed breathing",
    "category": "respiratory",
    "icon": "🫁"
  },
  {
    "id": 867,
    "name": "slowness of movement",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 868,
    "name": "slurred speech",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 869,
    "name": "small blisters or bumps",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 870,
    "name": "smaller or underdeveloped testicle(s)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 871,
    "name": "sneezing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 872,
    "name": "soles",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 873,
    "name": "sore throat",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 874,
    "name": "sore tongue",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 875,
    "name": "speech sounds muffled or unclear",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 876,
    "name": "sphincterotomy",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 877,
    "name": "spinal cord",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 878,
    "name": "spontaneous bleeding in joints or muscles",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 879,
    "name": "spotting or light bleeding between periods",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 880,
    "name": "spraying of urine",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 881,
    "name": "squinting",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 882,
    "name": "stealing)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 883,
    "name": "stiffness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 884,
    "name": "stinging",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 885,
    "name": "strokes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 886,
    "name": "strong desire or cravings for opioids",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 887,
    "name": "such as diarrhea or constipation.",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 888,
    "name": "such as paralysis",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 889,
    "name": "sudden loss of muscle tone (cataplexy)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 890,
    "name": "sudden vision loss",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 891,
    "name": "sweating",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 892,
    "name": "sweating)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 893,
    "name": "sweating) when attempting to stop or reduce alcohol use",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 894,
    "name": "swelling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 895,
    "name": "swelling and redness of the ear or the area behind the ear",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 896,
    "name": "swelling and tenderness of the cartilage connecting the ribs to the breastbone",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 897,
    "name": "swelling in the abdomen",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 898,
    "name": "swelling in the ankles",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 899,
    "name": "swelling in the legs and ankles",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 900,
    "name": "swelling of the legs or ankles",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 901,
    "name": "swelling of the limbs",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 902,
    "name": "swelling or visible protrusion",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 903,
    "name": "swollen",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 904,
    "name": "swollen and bleeding gums",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 905,
    "name": "swollen and tender abdomen",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 906,
    "name": "swollen eyelids",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 907,
    "name": "swollen glands",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 908,
    "name": "swollen legs or ankles",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 909,
    "name": "swollen lymph nodes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 910,
    "name": "swollen lymph nodes in the groin",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 911,
    "name": "swollen tonsils",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 912,
    "name": "swollen veins",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 913,
    "name": "tarry stools",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 914,
    "name": "tender gums",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 915,
    "name": "tenderness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 916,
    "name": "tenderness or pain when touching the area",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 917,
    "name": "tenderness or swelling in affected areas",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 918,
    "name": "tenderness or swelling over the ribcage",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 919,
    "name": "tension in neck and shoulders",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 920,
    "name": "tertiary stage: severe complications affecting the heart",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 921,
    "name": "tetany (muscle spasms)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 922,
    "name": "that cannot be scraped off",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 923,
    "name": "thick",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 924,
    "name": "thick nasal discharge",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 925,
    "name": "thoughts of self-harm or harming the baby",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 926,
    "name": "throbbing headache",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 927,
    "name": "tightness or pressure sensation on both sides of head",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 928,
    "name": "tingling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 929,
    "name": "tingling in limbs",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 930,
    "name": "tingling or numbness",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 931,
    "name": "tingling or numbness in extremities in severe cases",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 932,
    "name": "tingling or numbness in the hands and feet",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 933,
    "name": "tinnitus",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 934,
    "name": "tinnitus (ringing in the ears)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 935,
    "name": "tolerance to alcohol",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 936,
    "name": "tolerance to opioids",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 937,
    "name": "tooth sensitivity",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 938,
    "name": "transverse myelitis (weakness",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 939,
    "name": "tremors",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 940,
    "name": "tremors) when attempting to stop or reduce benzodiazepine use",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 941,
    "name": "tremors) when attempting to stop or reduce use",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 942,
    "name": "trigger points",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 943,
    "name": "trouble concentrating or making decisions",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 944,
    "name": "trouble speaking or understanding",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 945,
    "name": "tunnel vision",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 946,
    "name": "typically in specific areas (such as palms",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 947,
    "name": "typically painless",
    "category": "pain",
    "icon": "⚡"
  },
  {
    "id": 948,
    "name": "underarms)",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 949,
    "name": "uneven curvature of cornea",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 950,
    "name": "unexplained weight loss",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 951,
    "name": "unintentional weight loss",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 952,
    "name": "unpredictable bleeding episodes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 953,
    "name": "unrefreshing sleep",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 954,
    "name": "urge to move legs for relief",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 955,
    "name": "urgency",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 956,
    "name": "urinary frequency",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 957,
    "name": "urinary frequency or urgency",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 958,
    "name": "urinary incontinence",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 959,
    "name": "urinary tract infections",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 960,
    "name": "urinary urgency or frequency",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 961,
    "name": "usually in sun-exposed areas",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 962,
    "name": "usually in the evening or at night",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 963,
    "name": "usually near the cornea",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 964,
    "name": "usually on the lower lip or floor of the mouth",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 965,
    "name": "usually on the upper eyelid",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 966,
    "name": "visible deformity",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 967,
    "name": "visible lice or nits in the affected area",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 968,
    "name": "visible pits or holes in the teeth",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 969,
    "name": "visible veins",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 970,
    "name": "vision changes",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 971,
    "name": "vision loss",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 972,
    "name": "vision problems",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 973,
    "name": "vision problems (such as blurred vision or loss of peripheral vision)",
    "category": "neurological",
    "icon": "🧠"
  },
  {
    "id": 974,
    "name": "visual disturbances",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 975,
    "name": "visual field defects",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 976,
    "name": "visual field loss",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 977,
    "name": "visual or auditory hallucinations",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 978,
    "name": "voice changes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 979,
    "name": "vomiting",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 980,
    "name": "vomiting blood",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 981,
    "name": "warmth",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 982,
    "name": "watery discharge",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 983,
    "name": "weak grip strength",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 984,
    "name": "weak urine stream",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 985,
    "name": "weakened immune system",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 986,
    "name": "weakness",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 987,
    "name": "weakness or loss of strength",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 988,
    "name": "weakness or numbness",
    "category": "general",
    "icon": "🤒"
  },
  {
    "id": 989,
    "name": "weight changes",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 990,
    "name": "weight gain",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 991,
    "name": "weight gain or loss",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 992,
    "name": "weight loss",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 993,
    "name": "wheezing",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 994,
    "name": "white",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 995,
    "name": "with associated swelling",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 996,
    "name": "withdrawal symptoms (such as irritability",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 997,
    "name": "withdrawal symptoms (such as nausea",
    "category": "digestive",
    "icon": "🔄"
  },
  {
    "id": 998,
    "name": "withdrawal symptoms (such as rebound anxiety",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 999,
    "name": "withdrawal symptoms (such as tremors",
    "category": "general",
    "icon": "🔹"
  },
  {
    "id": 1000,
    "name": "worsens with deep breaths or lying down",
    "category": "general",
    "icon": "🔹"
  }
];

const conditionsDatabase = [
  {
    "id": 1,
    "name": "Panic disorder",
    "symptoms": [
      197,
      267,
      279,
      251,
      87,
      52
    ],
    "severity": "medium",
    "description": "A medical condition characterized by palpitations, sweating, trembling.",
    "treatments": [
      "Antidepressant medications",
      "Cognitive Behavioral Therapy",
      "Relaxation Techniques"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 2,
    "name": "Vocal cord polyp",
    "symptoms": [
      124,
      292,
      293
    ],
    "severity": "medium",
    "description": "A medical condition characterized by hoarseness, vocal changes, vocal fatigue.",
    "treatments": [
      "Voice Rest",
      "Speech Therapy",
      "Surgical Removal"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 3,
    "name": "Turner syndrome",
    "symptoms": [
      250,
      102,
      295,
      161
    ],
    "severity": "medium",
    "description": "A medical condition characterized by short stature, gonadal dysgenesis, webbed neck.",
    "treatments": [
      "Growth hormone therapy",
      "Estrogen replacement therapy",
      "Cardiac and renal evaluations"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 4,
    "name": "Cryptorchidism",
    "symptoms": [
      9,
      510,
      870,
      633,
      315
    ],
    "severity": "medium",
    "description": "A medical condition characterized by absence or undescended testicle(s), empty scrotum, smaller or underdeveloped testicle(s).",
    "treatments": [
      "Observation and monitoring (in cases of mild or transient cryptorchidism)",
      "hormone therapy (to stimulate testicular descent)",
      "surgical intervention (orchiopexy) to reposition the testicle(s) into the scrotum",
      "if necessary",
      "performed around the age of 6 to 12 months",
      "open or laparoscopic surgery (in cases of high or persistent cryptorchidism)",
      "testicular prostheses (in cases of absent or non-functional testicles)",
      "regular follow-up visits with a urologist or pediatric surgeon"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 5,
    "name": "Ethylene glycol poisoning-1",
    "symptoms": [
      174,
      979,
      304,
      101,
      986,
      135,
      571
    ],
    "severity": "medium",
    "description": "A medical condition characterized by nausea, vomiting, abdominal pain.",
    "treatments": [
      "Supportive Measures",
      "Gastric Decontamination",
      "Antidote Administration",
      "Hemodialysis"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 6,
    "name": "Ethylene glycol poisoning-2",
    "symptoms": [
      162,
      336,
      802,
      414,
      580,
      481,
      844
    ],
    "severity": "medium",
    "description": "A medical condition characterized by metabolic acidosis, apid breathing, rapid heart rate.",
    "treatments": [
      "Blood tests",
      "Supportive Measures",
      "Gastric Decontamination",
      "Antidote Administration",
      "Hemodialysis"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 7,
    "name": "Ethylene glycol poisoning-3",
    "symptoms": [
      40,
      899,
      330,
      237
    ],
    "severity": "medium",
    "description": "A medical condition characterized by decreased urine output, swelling in the legs and ankles, and signs of fluid overload.",
    "treatments": [
      "Supportive Measures",
      "Gastric Decontamination",
      "Antidote Administration",
      "Hemodialysis"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 8,
    "name": "Atrophic vaginitis",
    "symptoms": [
      285,
      284,
      571,
      959,
      189
    ],
    "severity": "medium",
    "description": "A medical condition characterized by vaginal dryness, vaginal burning, frequent urination.",
    "treatments": [
      "Vaginal moisturizers",
      "Vaginal estrogen therapy",
      "Lifestyle modifications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 9,
    "name": "Fracture",
    "symptoms": [
      182,
      268,
      22,
      41,
      48,
      154
    ],
    "severity": "medium",
    "description": "A medical condition characterized by pain, swelling, bruising.",
    "treatments": [
      "Immobilization",
      "Surgery",
      "Rehabilitation"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 10,
    "name": "Cellulitis",
    "symptoms": [
      223,
      182,
      915,
      268,
      253,
      160
    ],
    "severity": "medium",
    "description": "A medical condition characterized by redness, pain, tenderness.",
    "treatments": [
      "Antibiotics",
      "Warm compresses",
      "immobilization",
      "rest",
      "Pain management"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 11,
    "name": "Eye alignment disorder",
    "symptoms": [
      53,
      77,
      212,
      110
    ],
    "severity": "medium",
    "description": "A medical condition characterized by double vision, eye fatigue, poor depth perception.",
    "treatments": [
      "Glasses",
      "Patching therapy",
      "Vision therapy",
      "Botox injections",
      "Surgical intervention"
    ],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 12,
    "name": "Headache after lumbar puncture",
    "symptoms": [
      926
    ],
    "severity": "medium",
    "description": "A medical condition characterized by throbbing headache.",
    "treatments": [
      "Epidural blood patch",
      "Conservative measures"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 13,
    "name": "Pyloric stenosis",
    "symptoms": [
      208,
      296,
      42,
      290,
      196,
      99
    ],
    "severity": "medium",
    "description": "A medical condition characterized by persistent hunger, weight loss, dehydration.",
    "treatments": [
      "Ultrasound",
      "Blood tests",
      "Pyloromyotomy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 14,
    "name": "Adenoid cystic carcinoma",
    "symptoms": [
      158,
      894,
      81,
      928
    ],
    "severity": "medium",
    "description": "A medical condition characterized by lump, swelling, facial numbness.",
    "treatments": [
      "Surgery",
      "Radiation therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 15,
    "name": "Pleomorphic adenoma",
    "symptoms": [
      194,
      80
    ],
    "severity": "medium",
    "description": "A medical condition characterized by painless lump or swelling, facial changes.",
    "treatments": [
      "Surgical excision"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 16,
    "name": "Warthin tumor",
    "symptoms": [
      194,
      80
    ],
    "severity": "medium",
    "description": "A medical condition characterized by painless lump or swelling, facial changes.",
    "treatments": [
      "Surgical excision"
    ],
    "specialty": "Oncologist"
  },
  {
    "id": 17,
    "name": "Mucoepidermoid carcinoma",
    "symptoms": [
      158,
      894,
      45,
      756,
      84,
      83
    ],
    "severity": "medium",
    "description": "A medical condition characterized by lump, swelling, difficulty.",
    "treatments": [
      "Surgery",
      "Radiation therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 18,
    "name": "Acinic cell carcinoma",
    "symptoms": [
      158,
      894,
      80
    ],
    "severity": "medium",
    "description": "A medical condition characterized by lump, swelling, facial changes.",
    "treatments": [
      "Surgery",
      "Radiation therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 19,
    "name": "Mucocele",
    "symptoms": [
      193
    ],
    "severity": "medium",
    "description": "A medical condition characterized by painless fluid-filled swelling in the oral cavity.",
    "treatments": [
      "Observation",
      "Surgical removal if necessary"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 20,
    "name": "Osteochondrosis",
    "symptoms": [
      149,
      883,
      894,
      824
    ],
    "severity": "medium",
    "description": "A medical condition characterized by joint pain, stiffness, swelling.",
    "treatments": [
      "Physical therapy",
      "pain medications",
      "rest",
      "surgery"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 21,
    "name": "Sialolithiasis",
    "symptoms": [
      268,
      749,
      915,
      448
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swelling, pain, tenderness.",
    "treatments": [
      "Warm compresses",
      "Saliva stimulation",
      "Sialagogues",
      "Stone removal"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 22,
    "name": "Submandibular stones",
    "symptoms": [
      268,
      749,
      493,
      342
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swelling, pain, dry mouth.",
    "treatments": [
      "Hydration",
      "Saliva stimulation",
      "Stone removal"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 23,
    "name": "Parotid stones",
    "symptoms": [
      268,
      749,
      493,
      342
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swelling, pain, dry mouth.",
    "treatments": [
      "Hydration",
      "Saliva stimulation",
      "Stone removal"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 24,
    "name": "Recurrent salivary stones",
    "symptoms": [
      95
    ],
    "severity": "medium",
    "description": "A medical condition characterized by frequent episodes of stone formation.",
    "treatments": [
      "Hydration",
      "Saliva stimulation",
      "Stone removal"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 25,
    "name": "Wharton's duct stones",
    "symptoms": [
      268,
      749,
      493,
      342
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swelling, pain, dry mouth.",
    "treatments": [
      "Hydration",
      "Saliva stimulation",
      "Stone removal"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 26,
    "name": "Mumps",
    "symptoms": [
      274,
      552,
      580,
      544
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swollen salivary glands (usually parotid), fever, headache.",
    "treatments": [
      "Supportive care",
      "pain relievers",
      "isolation",
      "vaccination (MMR)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 27,
    "name": "Ludwig's angina",
    "symptoms": [
      243,
      552,
      460,
      487
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe swelling of the floor of the mouth, fever, difficulty swallowing.",
    "treatments": [
      "Intravenous antibiotics",
      "airway management",
      "surgical drainage"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 28,
    "name": "Mucocele",
    "symptoms": [
      195,
      964
    ],
    "severity": "medium",
    "description": "A medical condition characterized by painless swelling, usually on the lower lip or floor of the mouth.",
    "treatments": [
      "Observation",
      "surgical removal if necessary"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 29,
    "name": "Abscess",
    "symptoms": [
      268,
      749,
      820,
      552,
      799
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swelling, pain, redness.",
    "treatments": [
      "Antibiotics",
      "surgical drainage"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 30,
    "name": "Sjögren's syndrome",
    "symptoms": [
      56,
      544,
      659,
      495
    ],
    "severity": "medium",
    "description": "A medical condition characterized by dry mouth and eyes, fatigue, joint pain.",
    "treatments": [
      "Symptomatic relief with artificial tears",
      "saliva substitutes",
      "frequent sips of water",
      "medications to stimulate saliva production",
      "immune-modulating drugs"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 31,
    "name": "Open-Angle Glaucoma",
    "symptoms": [
      104,
      945
    ],
    "severity": "medium",
    "description": "A medical condition characterized by gradual loss of peripheral vision, tunnel vision.",
    "treatments": [
      "Eye drops to lower intraocular pressure (e.g.",
      "prostaglandin analogs",
      "beta blockers",
      "alpha agonists",
      "carbonic anhydrase inhibitors)",
      "oral medications (e.g.",
      "carbonic anhydrase inhibitors)",
      "laser trabeculoplasty",
      "surgical procedures (e.g.",
      "trabeculectomy",
      "glaucoma drainage implants)"
    ],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 32,
    "name": "Angle-Closure Glaucoma",
    "symptoms": [
      234,
      580,
      363,
      579,
      712
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe eye pain, headache, blurred vision.",
    "treatments": [
      "Medications (e.g.",
      "oral or intravenous acetazolamide",
      "topical beta blockers",
      "alpha agonists",
      "prostaglandin analogs)",
      "laser peripheral iridotomy",
      "surgical procedures (e.g.",
      "trabeculectomy",
      "glaucoma drainage implants)"
    ],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 33,
    "name": "Normal-Tension Glaucoma",
    "symptoms": [
      105,
      975
    ],
    "severity": "medium",
    "description": "A medical condition characterized by gradual loss of vision, visual field defects.",
    "treatments": [
      "Eye drops to lower intraocular pressure (e.g.",
      "prostaglandin analogs",
      "beta blockers",
      "alpha agonists",
      "carbonic anhydrase inhibitors)",
      "oral medications (e.g.",
      "carbonic anhydrase inhibitors)",
      "laser trabeculoplasty",
      "surgical procedures (e.g.",
      "trabeculectomy",
      "glaucoma drainage implants)"
    ],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 34,
    "name": "Congenital Glaucoma",
    "symptoms": [
      33,
      527,
      846
    ],
    "severity": "medium",
    "description": "A medical condition characterized by cloudy or hazy eyes, excessive tearing, sensitivity to light.",
    "treatments": [
      "Surgery (e.g.",
      "trabeculotomy",
      "goniotomy) to create a new drainage pathway",
      "medications to reduce intraocular pressure"
    ],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 35,
    "name": "Secondary Glaucoma",
    "symptoms": [
      286
    ],
    "severity": "medium",
    "description": "A medical condition characterized by varies depending on the underlying cause.",
    "treatments": [
      "Treatment of the underlying condition (e.g.",
      "medication adjustments",
      "surgery",
      "trauma management",
      "tumor removal",
      "inflammation control)"
    ],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 36,
    "name": "Pigmentary Glaucoma",
    "symptoms": [
      19,
      579,
      531
    ],
    "severity": "medium",
    "description": "A medical condition characterized by blurred vision, halos around lights, eye pain.",
    "treatments": [
      "Eye drops to lower intraocular pressure (e.g.",
      "prostaglandin analogs",
      "beta blockers",
      "alpha agonists",
      "carbonic anhydrase inhibitors)",
      "laser trabeculoplasty",
      "surgical procedures (e.g.",
      "trabeculectomy",
      "glaucoma drainage implants)"
    ],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 37,
    "name": "Exfoliation Glaucoma",
    "symptoms": [
      61,
      976
    ],
    "severity": "medium",
    "description": "A medical condition characterized by elevated intraocular pressure, visual field loss.",
    "treatments": [
      "Eye drops to lower intraocular pressure (e.g.",
      "prostaglandin analogs",
      "beta blockers",
      "alpha agonists",
      "carbonic anhydrase inhibitors)",
      "laser trabeculoplasty",
      "surgical procedures (e.g.",
      "trabeculectomy",
      "glaucoma drainage implants)"
    ],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 38,
    "name": "Ocular Hypertension",
    "symptoms": [
      62
    ],
    "severity": "medium",
    "description": "A medical condition characterized by elevated intraocular pressure without optic nerve damage.",
    "treatments": [
      "Observation with regular eye exams",
      "use of eye drops to lower intraocular pressure (if necessary)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 39,
    "name": "Low-Tension Glaucoma",
    "symptoms": [
      105,
      975
    ],
    "severity": "medium",
    "description": "A medical condition characterized by gradual loss of vision, visual field defects.",
    "treatments": [
      "Eye drops to lower intraocular pressure (e.g.",
      "prostaglandin analogs",
      "beta blockers",
      "alpha agonists",
      "carbonic anhydrase inhibitors)",
      "oral medications (e.g.",
      "carbonic anhydrase inhibitors)",
      "laser trabeculoplasty",
      "surgical procedures (e.g.",
      "trabeculectomy",
      "glaucoma drainage implants)"
    ],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 40,
    "name": "Anorexia Nervosa",
    "symptoms": [
      76,
      547,
      479
    ],
    "severity": "medium",
    "description": "A medical condition characterized by extreme weight loss, fear of gaining weight, distorted body image.",
    "treatments": [
      "Medical monitoring",
      "nutritional counseling",
      "psychotherapy (such as cognitive-behavioral therapy or family-based therapy)",
      "medications (in some cases)",
      "hospitalization (for severe cases)",
      "support groups"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 41,
    "name": "Bulimia Nervosa",
    "symptoms": [
      219
    ],
    "severity": "medium",
    "description": "A medical condition characterized by recurrent episodes of binge eating followed by purging behaviors.",
    "treatments": [
      "Psychotherapy (such as cognitive-behavioral therapy or dialectical behavior therapy)",
      "nutritional counseling",
      "medications (in some cases)",
      "support groups"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 42,
    "name": "Binge Eating Disorder",
    "symptoms": [
      220
    ],
    "severity": "medium",
    "description": "A medical condition characterized by recurrent episodes of binge eating without compensatory behaviors.",
    "treatments": [
      "Psychotherapy (such as cognitive-behavioral therapy or interpersonal therapy)",
      "nutritional counseling",
      "medications (in some cases)",
      "support groups"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 43,
    "name": "Avoidant/Restrictive Food Intake Disorder (ARFID)",
    "symptoms": [
      12,
      860
    ],
    "severity": "medium",
    "description": "A medical condition characterized by avoidance or restriction of certain foods or entire food groups, significant weight loss or failure to gain weight.",
    "treatments": [
      "Nutritional counseling",
      "psychotherapy (such as cognitive-behavioral therapy or family-based therapy)",
      "medical monitoring",
      "exposure therapy",
      "occupational therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 44,
    "name": "Other Specified Feeding or Eating Disorder (OSFED)",
    "symptoms": [
      275
    ],
    "severity": "medium",
    "description": "A medical condition characterized by symptoms that do not meet the full criteria for a specific eating disorder.",
    "treatments": [
      "Treatment is based on the specific symptoms and can include a combination of psychotherapy",
      "nutritional counseling",
      "medical monitoring",
      "and medications as necessary"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 45,
    "name": "Orthorexia Nervosa",
    "symptoms": [
      180,
      585
    ],
    "severity": "medium",
    "description": "A medical condition characterized by obsessive focus on clean eating, healthy food choices.",
    "treatments": [
      "Psychotherapy (such as cognitive-behavioral therapy or acceptance and commitment therapy)",
      "nutrition education",
      "challenging distorted beliefs",
      "addressing underlying issues"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 46,
    "name": "Pica",
    "symptoms": [
      202
    ],
    "severity": "medium",
    "description": "A medical condition characterized by persistent consumption of non-food substances.",
    "treatments": [
      "Behavioral therapy",
      "addressing underlying nutritional deficiencies",
      "addressing any medical complications",
      "family support"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 47,
    "name": "Rumination Disorder",
    "symptoms": [
      225
    ],
    "severity": "medium",
    "description": "A medical condition characterized by repeated regurgitation and re-chewing of food.",
    "treatments": [
      "Behavioral therapy (such as diaphragmatic breathing techniques)",
      "biofeedback",
      "addressing any underlying psychological or medical conditions",
      "dietary modifications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 48,
    "name": "Transient ischemic attack",
    "symptoms": [
      264
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sudden onset of neurological symptoms that resolve within 24 hours.",
    "treatments": [
      "Antiplatelet medications",
      "Carotid endarterectomy",
      "Anticoagulant medications",
      "Lifestyle modifications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 49,
    "name": "Pyelonephritis",
    "symptoms": [
      88,
      398,
      338,
      571
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fever, chills, back or flank pain.",
    "treatments": [
      "Antibiotics (such as fluoroquinolones",
      "cephalosporins",
      "or trimethoprim-sulfamethoxazole) to target the specific bacteria causing the infection",
      "adequate hydration",
      "pain management (such as over-the-counter pain relievers or prescription medications)",
      "hospitalization (for severe cases or complications)",
      "urine culture to guide antibiotic therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 50,
    "name": "Rotator Cuff Injury",
    "symptoms": [
      252,
      987,
      670,
      858
    ],
    "severity": "medium",
    "description": "A medical condition characterized by shoulder pain, weakness or loss of strength, limited range of motion.",
    "treatments": [
      "Non-surgical treatment options: Rest",
      "ice or heat therapy",
      "pain medications",
      "physical therapy exercises",
      "Arthroscopic surgery"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 51,
    "name": "Fibromyalgia",
    "symptoms": [
      299,
      544,
      864
    ],
    "severity": "medium",
    "description": "A medical condition characterized by widespread musculoskeletal pain, fatigue, sleep disturbances.",
    "treatments": [
      "Medications (such as pain relievers",
      "antidepressants",
      "anticonvulsants)",
      "physical therapy",
      "cognitive-behavioral therapy",
      "stress management techniques",
      "exercise",
      "relaxation techniques",
      "good sleep hygiene"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 52,
    "name": "Chronic Fatigue Syndrome",
    "symptoms": [
      75,
      408,
      953
    ],
    "severity": "medium",
    "description": "A medical condition characterized by extreme fatigue, cognitive difficulties, unrefreshing sleep.",
    "treatments": [
      "Symptom management (such as medications to address pain",
      "sleep disturbances",
      "and other symptoms)",
      "graded exercise therapy",
      "cognitive-behavioral therapy",
      "sleep management techniques",
      "pacing and energy conservation",
      "stress reduction techniques",
      "nutritional support",
      "medications for specific symptoms"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 53,
    "name": "Complex Regional Pain Syndrome (CRPS)",
    "symptoms": [
      233,
      385,
      894,
      883
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe and persistent pain, changes in skin color or temperature, swelling.",
    "treatments": [
      "Medications (such as pain relievers",
      "corticosteroids",
      "anticonvulsants)",
      "physical therapy",
      "sympathetic nerve blocks",
      "spinal cord stimulation",
      "occupational therapy",
      "mirror therapy",
      "psychotherapy",
      "graded motor imagery",
      "stress management techniques"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 54,
    "name": "Myofascial Pain Syndrome",
    "symptoms": [
      153,
      942
    ],
    "severity": "medium",
    "description": "A medical condition characterized by localized muscle pain, trigger points.",
    "treatments": [
      "Physical therapy",
      "trigger point injections",
      "dry needling",
      "medications (such as pain relievers",
      "muscle relaxants)",
      "relaxation techniques",
      "stress management",
      "massage therapy",
      "myofascial release",
      "heat or cold therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 55,
    "name": "Chronic Migraine",
    "symptoms": [
      218,
      468
    ],
    "severity": "medium",
    "description": "A medical condition characterized by recurrent, disabling migraines.",
    "treatments": [
      "Medications (such as preventive medications",
      "pain relievers",
      "triptans)",
      "lifestyle modifications (such as identifying triggers",
      "stress management",
      "regular sleep patterns)",
      "relaxation techniques",
      "biofeedback",
      "cognitive-behavioral therapy",
      "nerve blocks",
      "Botox injections",
      "neuromodulation devices",
      "acupuncture"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 56,
    "name": "Neuropathic Pain",
    "symptoms": [
      249,
      930
    ],
    "severity": "medium",
    "description": "A medical condition characterized by shooting or burning pain, tingling or numbness.",
    "treatments": [
      "Medications (such as antidepressants",
      "anticonvulsants",
      "topical treatments)",
      "nerve blocks",
      "spinal cord stimulation",
      "physical therapy",
      "occupational therapy",
      "transcutaneous electrical nerve stimulation (TENS)",
      "acupuncture",
      "cognitive-behavioral therapy",
      "relaxation techniques"
    ],
    "specialty": "Neurologist"
  },
  {
    "id": 57,
    "name": "Gestational Diabetes",
    "symptoms": [
      121
    ],
    "severity": "medium",
    "description": "A medical condition characterized by high blood sugar levels during pregnancy.",
    "treatments": [
      "Blood sugar monitoring",
      "healthy diet modifications",
      "regular exercise",
      "insulin injections (if needed)",
      "close monitoring by healthcare provider"
    ],
    "specialty": "Endocrinologist"
  },
  {
    "id": 58,
    "name": "Pregnancy-Induced Hypertension",
    "symptoms": [
      119
    ],
    "severity": "medium",
    "description": "A medical condition characterized by high blood pressure during pregnancy.",
    "treatments": [
      "Monitoring blood pressure",
      "lifestyle modifications (such as salt restriction",
      "regular exercise)",
      "medication (such as antihypertensive drugs) if necessary",
      "close monitoring by healthcare provider"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 59,
    "name": "Gestational Hypertension",
    "symptoms": [
      120
    ],
    "severity": "medium",
    "description": "A medical condition characterized by high blood pressure without proteinuria (preeclampsia).",
    "treatments": [
      "Monitoring blood pressure",
      "lifestyle modifications (such as salt restriction",
      "regular exercise)",
      "medication (such as antihypertensive drugs) if necessary",
      "close monitoring by healthcare provider"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 60,
    "name": "Preeclampsia",
    "symptoms": [
      118,
      797,
      894,
      581,
      974
    ],
    "severity": "medium",
    "description": "A medical condition characterized by high blood pressure, proteinuria, swelling.",
    "treatments": [
      "Bed rest",
      "blood pressure monitoring",
      "frequent prenatal visits",
      "medication (such as antihypertensive drugs)",
      "magnesium sulfate (for severe cases)",
      "delivery of the baby (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 61,
    "name": "Hyperemesis Gravidarum",
    "symptoms": [
      238
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe nausea and vomiting during pregnancy.",
    "treatments": [
      "Intravenous fluids to prevent dehydration",
      "anti-nausea medications",
      "nutritional support",
      "rest",
      "monitoring for weight loss and electrolyte imbalance"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 62,
    "name": "Urinary Tract Infection (UTI)",
    "symptoms": [
      192,
      571,
      772,
      404
    ],
    "severity": "medium",
    "description": "A medical condition characterized by painful urination, frequent urination, pelvic pain.",
    "treatments": [
      "Antibiotics safe for pregnancy",
      "increased fluid intake",
      "maintaining good hygiene",
      "urine culture and sensitivity testing to guide antibiotic selection"
    ],
    "specialty": "Nephrologist / Urologist"
  },
  {
    "id": 63,
    "name": "Anemia",
    "symptoms": [
      86,
      986,
      763,
      856
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, weakness, pale skin.",
    "treatments": [
      "Iron supplementation",
      "dietary changes (iron-rich foods)",
      "managing underlying causes (such as treating iron deficiency or vitamin B12 deficiency)",
      "prenatal vitamins"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 64,
    "name": "Pregnancy-Related Back Pain",
    "symptoms": [
      157,
      474
    ],
    "severity": "medium",
    "description": "A medical condition characterized by lower back pain, discomfort in the pelvic area.",
    "treatments": [
      "Prenatal exercises (such as stretching and strengthening exercises)",
      "good posture",
      "heat or cold therapy",
      "prenatal massages",
      "supportive devices (such as pregnancy belts)",
      "physical therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 65,
    "name": "Round Ligament Pain",
    "symptoms": [
      247
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sharp or aching pain in the lower abdomen or groin.",
    "treatments": [
      "Resting",
      "changing positions slowly",
      "warm compresses",
      "gentle stretching",
      "avoiding sudden movements"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 66,
    "name": "Placenta Previa",
    "symptoms": [
      283,
      762
    ],
    "severity": "medium",
    "description": "A medical condition characterized by vaginal bleeding, painless bleeding in the third trimester.",
    "treatments": [
      "Bed rest",
      "avoiding strenuous activity",
      "frequent prenatal check-ups",
      "potential hospitalization",
      "potential cesarean delivery"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 67,
    "name": "Carpal Tunnel Syndrome",
    "symptoms": [
      277,
      723,
      328
    ],
    "severity": "medium",
    "description": "A medical condition characterized by tingling, numbness, and pain in the hand and fingers.",
    "treatments": [
      "Wrist splints",
      "avoiding repetitive hand movements",
      "applying cold or hot compresses",
      "gentle exercises",
      "ergonomic adjustments"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 68,
    "name": "Sciatica",
    "symptoms": [
      248,
      928,
      740
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sharp pain, tingling, or numbness that radiates from the lower back through the hips and down the leg.",
    "treatments": [
      "Rest",
      "gentle stretching exercises",
      "warm or cold compresses",
      "prenatal massages",
      "maintaining good posture",
      "avoiding activities that worsen the pain"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 69,
    "name": "Varicose Veins",
    "symptoms": [
      64,
      912,
      730
    ],
    "severity": "medium",
    "description": "A medical condition characterized by enlarged, swollen veins, often in the legs.",
    "treatments": [
      "Elevating legs",
      "wearing compression stockings",
      "regular exercise",
      "avoiding prolonged sitting or standing",
      "maintaining a healthy weight"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 70,
    "name": "Hemorrhoids",
    "symptoms": [
      271,
      651,
      742
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swollen, itchy, or painful veins in the rectal area.",
    "treatments": [
      "Increasing fiber intake",
      "staying hydrated",
      "avoiding straining during bowel movements",
      "warm sitz baths",
      "topical creams or ointments",
      "over-the-counter pain relievers (after consulting with a healthcare provider)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 71,
    "name": "Gestational Cholestasis",
    "symptoms": [
      147,
      769
    ],
    "severity": "medium",
    "description": "A medical condition characterized by itchy skin, particularly on the hands and feet.",
    "treatments": [],
    "specialty": "General Practitioner"
  },
  {
    "id": 72,
    "name": "Liver Cancer",
    "symptoms": [
      3,
      655,
      950,
      675,
      544,
      711,
      979
    ],
    "severity": "high",
    "description": "A medical condition characterized by abdominal pain, jaundice (yellowing of the skin and eyes), unexplained weight loss.",
    "treatments": [
      "Surgery",
      "Radiation therapy",
      "Chemotherapy",
      "Targeted therapy",
      "Immunotherapy",
      "Radiofrequency ablation",
      "Transarterial chemoembolization (TACE)",
      "Selective internal radiation therapy (SIRT)",
      "Palliative care",
      "Clinical trials"
    ],
    "specialty": "Oncologist"
  },
  {
    "id": 73,
    "name": "Atelectasis",
    "symptoms": [
      46,
      801,
      392
    ],
    "severity": "medium",
    "description": "A medical condition characterized by difficulty breathing, rapid breathing, chest pain.",
    "treatments": [
      "Treatment of the underlying cause (such as removal of airway obstruction",
      "treatment of lung infection)",
      "deep breathing exercises",
      "coughing techniques",
      "incentive spirometry",
      "chest physiotherapy",
      "bronchodilator medications",
      "supplemental oxygen therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 74,
    "name": "Ectopic Pregnancy",
    "symptoms": [
      283,
      306,
      857
    ],
    "severity": "medium",
    "description": "A medical condition characterized by vaginal bleeding, abdominal pain or cramping, shoulder pain (if the fallopian tube ruptures).",
    "treatments": [
      "Immediate medical attention",
      "potential medical procedures (such as medication or surgery to remove the ectopic pregnancy)",
      "close monitoring",
      "emotional support"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 75,
    "name": "Choledocholithiasis",
    "symptoms": [
      4,
      654,
      430,
      764,
      711,
      979,
      511,
      876,
      29
    ],
    "severity": "medium",
    "description": "A medical condition characterized by abdominal pain (often in the upper right quadrant), jaundice, dark urine.",
    "treatments": [
      "Non-surgical treatment options: Medications to manage pain and discomfort",
      "antibiotics"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 76,
    "name": "Cirrhosis",
    "symptoms": [
      86,
      654,
      310,
      503,
      414,
      675,
      992
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, jaundice, abdominal swelling (ascites).",
    "treatments": [
      "Treatment aims to manage symptoms",
      "slow down disease progression",
      "and address underlying causes. It may include: lifestyle modifications (e.g.",
      "avoiding alcohol",
      "maintaining a healthy diet)",
      "medication (e.g.",
      "diuretics",
      "lactulose",
      "antiviral drugs)",
      "procedures (e.g.",
      "paracentesis",
      "transjugular intrahepatic portosystemic shunt)",
      "liver transplantation (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 77,
    "name": "Thoracic Aortic Aneurysm",
    "symptoms": [
      24,
      856,
      601,
      460
    ],
    "severity": "high",
    "description": "A medical condition characterized by chest or back pain, shortness of breath, hoarseness.",
    "treatments": [
      "Regular monitoring and imaging tests to assess aneurysm size and growth",
      "lifestyle modifications (e.g.",
      "blood pressure control",
      "avoiding smoking",
      "managing cholesterol levels)",
      "medication (e.g.",
      "beta-blockers",
      "ACE inhibitors) to manage blood pressure and reduce the risk of rupture",
      "surgical intervention"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 78,
    "name": "Subdural hemorrhage",
    "symptoms": [
      111,
      414,
      481,
      713,
      844,
      988
    ],
    "severity": "medium",
    "description": "A medical condition characterized by headache, confusion, dizziness.",
    "treatments": [
      "Immediate medical attention",
      "close monitoring of vital signs and neurological status",
      "diagnostic imaging (such as CT or MRI scan)",
      "potential surgical intervention (such as craniotomy or burr hole evacuation)",
      "medication to manage symptoms"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 79,
    "name": "Congenital rubella",
    "symptoms": [
      44,
      637,
      586,
      972,
      592,
      673,
      809
    ],
    "severity": "medium",
    "description": "A medical condition characterized by developmental delays, intellectual disability, hearing loss.",
    "treatments": [
      "Supportive care to manage symptoms and complications",
      "early intervention services for developmental delays",
      "educational support",
      "vision and hearing interventions",
      "specialized medical care as needed"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 80,
    "name": "Diabetic retinopathy",
    "symptoms": [
      17,
      559,
      605,
      428,
      971
    ],
    "severity": "medium",
    "description": "A medical condition characterized by blurred or distorted vision, floaters, impaired color vision.",
    "treatments": [
      "Management of blood sugar levels",
      "blood pressure control",
      "cholesterol management",
      "regular eye examinations",
      "laser treatment",
      "intravitreal injections of anti-VEGF medications",
      "vitrectomy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 81,
    "name": "Fibromyalgia",
    "symptoms": [
      299,
      544,
      864,
      409,
      700
    ],
    "severity": "medium",
    "description": "A medical condition characterized by widespread musculoskeletal pain, fatigue, sleep disturbances.",
    "treatments": [
      "Multidisciplinary approach: Medications for pain management (such as analgesics",
      "antidepressants",
      "and anticonvulsants)",
      "physical therapy",
      "occupational therapy",
      "cognitive-behavioral therapy",
      "relaxation techniques",
      "stress management",
      "exercise programs"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 82,
    "name": "Ischemia of the Bowel",
    "symptoms": [
      231,
      361,
      442,
      711,
      979,
      552,
      802,
      683
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe abdominal pain, bloody stools, diarrhea.",
    "treatments": [
      "diagnostic tests",
      "intravenous fluids and medications to stabilize the patient",
      "bowel rest",
      "resection",
      "bypass procedure",
      "potential angioplasty"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 83,
    "name": "Fetal Alcohol Syndrome",
    "symptoms": [
      107,
      536,
      440,
      637
    ],
    "severity": "medium",
    "description": "A medical condition characterized by growth deficiencies, facial abnormalities, developmental delays.",
    "treatments": [
      "Early intervention services for developmental delays",
      "educational support",
      "speech and occupational therapy",
      "behavioral interventions",
      "medical management of associated health issues"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 84,
    "name": "Peritonitis",
    "symptoms": [
      231,
      915,
      354,
      552,
      711,
      979,
      675,
      619
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe abdominal pain, tenderness, bloating.",
    "treatments": [
      "Intravenous antibiotics to treat the infection",
      "intravenous fluids to restore hydration",
      "drainage or removal of any underlying fluid or abscess",
      "surgery to repair or remove the source of infection"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 85,
    "name": "Abdominal Injury",
    "symptoms": [
      3,
      915,
      375,
      894,
      444,
      711,
      979,
      379,
      357
    ],
    "severity": "medium",
    "description": "A medical condition characterized by abdominal pain, tenderness, bruising.",
    "treatments": [
      "Immediate medical attention",
      "X-ray",
      "CT scan",
      "ultrasound",
      "stabilization of vital signs",
      "pain management",
      "observation for signs of internal bleeding",
      "potential surgical intervention",
      "wound care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 86,
    "name": "Acute Pancreatitis",
    "symptoms": [
      244,
      711,
      979,
      552,
      806,
      905,
      654
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe upper abdominal pain, nausea, vomiting.",
    "treatments": [
      "Hospitalization",
      "intravenous fluids to restore hydration",
      "pain management",
      "bowel rest",
      "nutritional support",
      "medications to control pain and inflammation"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 87,
    "name": "Thrombophlebitis",
    "symptoms": [
      223,
      981,
      894,
      331,
      754,
      862,
      969,
      552
    ],
    "severity": "medium",
    "description": "A medical condition characterized by redness, warmth, swelling.",
    "treatments": [
      "Medications to manage pain and inflammation",
      "compression stockings or bandages to promote blood flow",
      "elevation of the affected limb",
      "warm compresses",
      "regular movement and exercise",
      "treatment of underlying causes (such as infection or intravenous catheter removal)",
      "anticoagulant therapy to prevent clot formation or progression"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 88,
    "name": "Asthma",
    "symptoms": [
      221,
      856,
      396,
      421,
      519
    ],
    "severity": "medium",
    "description": "A medical condition characterized by recurrent episodes of wheezing, shortness of breath, chest tightness.",
    "treatments": [
      "Long-term control medications (such as inhaled corticosteroids",
      "long-acting beta-agonists)",
      "quick-relief medications (such as short-acting beta-agonists)",
      "avoidance of triggers (such as allergens",
      "smoke)",
      "regular monitoring of symptoms and lung function",
      "development of an asthma action plan",
      "proper inhaler technique",
      "regular follow-up with a healthcare provider",
      "emergency medications (such as oral corticosteroids) as needed"
    ],
    "specialty": "Pulmonologist"
  },
  {
    "id": 89,
    "name": "Restless Leg Syndrome",
    "symptoms": [
      281,
      962,
      954
    ],
    "severity": "medium",
    "description": "A medical condition characterized by uncomfortable sensation in the legs, usually in the evening or at night, urge to move legs for relief.",
    "treatments": [
      "Lifestyle changes (such as regular exercise",
      "avoiding triggers like caffeine)",
      "good sleep hygiene (maintaining a regular sleep schedule)",
      "leg massages or stretching exercises",
      "hot or cold packs",
      "medication therapy (such as dopamine agonists",
      "anticonvulsants",
      "opioids)",
      "iron supplementation (if iron deficiency is present)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 90,
    "name": "Emphysema",
    "symptoms": [
      251,
      993,
      400,
      396,
      544,
      992
    ],
    "severity": "medium",
    "description": "A medical condition characterized by shortness of breath, wheezing, chronic cough.",
    "treatments": [
      "Smoking cessation (the most important intervention)",
      "medications to manage symptoms (such as bronchodilators",
      "inhaled corticosteroids)",
      "pulmonary rehabilitation (exercise training",
      "breathing techniques)",
      "supplemental oxygen therapy (in advanced cases)",
      "vaccination against respiratory infections",
      "avoiding exposure to irritants (such as secondhand smoke or air pollutants)",
      "regular monitoring of symptoms and lung function",
      "surgical interventions (such as lung volume reduction surgery or lung transplantation)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 91,
    "name": "Induced Abortion",
    "symptoms": [
      283,
      424,
      304,
      711,
      544,
      508
    ],
    "severity": "medium",
    "description": "A medical condition characterized by vaginal bleeding, cramping, abdominal pain.",
    "treatments": [
      "Medical Abortion: Medication (such as mifepristone and misoprostol) is used to induce abortion",
      "which can be done in the early stages of pregnancy. Surgical Abortion: A healthcare professional performs a procedure to remove the pregnancy",
      "which can involve suction aspiration or dilation and curettage (D&C). It's important to consult with a healthcare professional to discuss the options and determine the most suitable method."
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 92,
    "name": "Acute Sinusitis",
    "symptoms": [
      82,
      710,
      924,
      788,
      420,
      580,
      544,
      553
    ],
    "severity": "medium",
    "description": "A medical condition characterized by facial pain or pressure, nasal congestion, thick nasal discharge.",
    "treatments": [
      "Home remedies (such as nasal saline irrigation",
      "steam inhalation)",
      "over-the-counter pain relievers (such as acetaminophen or ibuprofen)",
      "nasal decongestants (for short-term use)",
      "nasal corticosteroids (to reduce inflammation)",
      "plenty of fluids and rest",
      "warm compresses",
      "avoidance of irritants (such as smoke or allergens)",
      "prescription antibiotics (if bacterial infection is suspected or confirmed)",
      "management of underlying causes (such as allergies or nasal polyps)",
      "symptom relief medications (such as cough suppressants or antihistamines)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 93,
    "name": "Von Hippel-Lindau Disease",
    "symptoms": [
      117,
      877,
      741,
      834,
      826,
      781,
      766,
      746
    ],
    "severity": "medium",
    "description": "A medical condition characterized by hemangioblastomas (tumors in the brain, spinal cord, or other organs).",
    "treatments": [
      "Regular monitoring and surveillance to detect and manage tumor growth and associated complications",
      "surgical removal or treatment of tumors if necessary",
      "embolization or radiation therapy for certain tumors",
      "medication or surgery to manage hormonal issues (such as pheochromocytomas)",
      "genetic counseling and testing",
      "screening and management for other potential complications (such as kidney function monitoring)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 94,
    "name": "Alcohol Use Disorder",
    "symptoms": [
      38,
      612,
      999,
      333,
      893,
      418,
      582,
      716,
      935
    ],
    "severity": "medium",
    "description": "A medical condition characterized by cravings for alcohol, inability to control or limit alcohol consumption, withdrawal symptoms (such as tremors.",
    "treatments": [
      "Detoxification (if necessary)",
      "counseling or therapy (such as cognitive-behavioral therapy",
      "motivational interviewing)",
      "support groups (such as Alcoholics Anonymous)",
      "medication (such as disulfiram",
      "naltrexone",
      "acamprosate)",
      "addressing underlying psychological or social factors",
      "lifestyle changes",
      "ongoing monitoring and support"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 95,
    "name": "Opioid Use Disorder",
    "symptoms": [
      34,
      886,
      613,
      997,
      703,
      335,
      936,
      417,
      583
    ],
    "severity": "medium",
    "description": "A medical condition characterized by compulsive use of opioids, strong desire or cravings for opioids, inability to control or reduce opioid use.",
    "treatments": [
      "Medication-assisted treatment (such as methadone",
      "buprenorphine",
      "naltrexone)",
      "counseling or therapy (such as cognitive-behavioral therapy",
      "contingency management)",
      "support groups (such as Narcotics Anonymous)",
      "harm reduction strategies",
      "addressing underlying psychological or social factors",
      "lifestyle changes",
      "ongoing monitoring and support"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 96,
    "name": "Stimulant Use Disorder",
    "symptoms": [
      132,
      523,
      432,
      620,
      634,
      831,
      647,
      768,
      798
    ],
    "severity": "medium",
    "description": "A medical condition characterized by increased energy and alertness, euphoria, decreased appetite.",
    "treatments": [
      "Counseling or therapy (such as cognitive-behavioral therapy",
      "motivational interviewing)",
      "support groups",
      "medication (if applicable)",
      "addressing underlying psychological or social factors",
      "lifestyle changes",
      "addressing co-occurring mental health conditions",
      "harm reduction strategies",
      "ongoing monitoring and support"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 97,
    "name": "Cannabis Use Disorder",
    "symptoms": [
      130,
      825,
      323,
      608,
      358,
      334,
      996,
      635,
      418,
      657
    ],
    "severity": "medium",
    "description": "A medical condition characterized by increased appetite, relaxation, altered perception of time.",
    "treatments": [
      "Counseling or therapy (such as cognitive-behavioral therapy",
      "motivational interviewing)",
      "support groups",
      "addressing underlying psychological or social factors",
      "lifestyle changes",
      "addressing co-occurring mental health conditions",
      "harm reduction strategies",
      "ongoing monitoring and support"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 98,
    "name": "Benzodiazepine Use Disorder",
    "symptoms": [
      228,
      825,
      823,
      489,
      784,
      692,
      998,
      634,
      940,
      418,
      584
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sedation, relaxation, reduced anxiety.",
    "treatments": [
      "Gradual tapering off benzodiazepines under medical supervision",
      "counseling or therapy (such as cognitive-behavioral therapy)",
      "support groups",
      "addressing underlying psychological or social factors",
      "lifestyle changes",
      "addressing co-occurring mental health conditions",
      "harm reduction strategies",
      "ongoing monitoring and support"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 99,
    "name": "Hallucinogen Use Disorder",
    "symptoms": [
      10,
      977,
      384,
      640,
      549,
      334,
      556
    ],
    "severity": "medium",
    "description": "A medical condition characterized by altered perception of reality, visual or auditory hallucinations, changes in sensory experiences.",
    "treatments": [
      "Counseling or therapy (such as cognitive-behavioral therapy",
      "motivational interviewing)",
      "support groups",
      "addressing underlying psychological or social factors",
      "harm reduction strategies",
      "ongoing monitoring and support"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 100,
    "name": "Sedative, Hypnotic, or Anxiolytic Use Disorder",
    "symptoms": [
      228,
      825,
      823,
      489,
      784,
      692,
      998,
      634,
      941,
      418,
      584
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sedation, relaxation, reduced anxiety.",
    "treatments": [
      "Gradual tapering off sedatives",
      "hypnotics",
      "or anxiolytics under medical supervision",
      "counseling or therapy (such as cognitive-behavioral therapy)",
      "support groups",
      "addressing underlying psychological or social factors",
      "lifestyle changes",
      "addressing co-occurring mental health conditions",
      "harm reduction strategies",
      "ongoing monitoring and support"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 101,
    "name": "Postpartum Depression",
    "symptoms": [
      206,
      509,
      736,
      568,
      647,
      679,
      443,
      378,
      748,
      550,
      943,
      925
    ],
    "severity": "medium",
    "description": "A medical condition characterized by persistent feelings of sadness, emptiness, or hopelessness.",
    "treatments": [
      "Psychotherapy (such as cognitive-behavioral therapy or interpersonal therapy)",
      "support groups or peer counseling",
      "antidepressant medication (if recommended by a healthcare professional)",
      "hormone therapy (in some cases)",
      "lifestyle changes (such as exercise",
      "healthy diet",
      "sleep hygiene)",
      "involving a partner or family in the care of the baby",
      "social support and understanding from family and friends",
      "regular follow-up and monitoring by healthcare professionals"
    ],
    "specialty": "Psychiatrist / Psychologist"
  },
  {
    "id": 102,
    "name": "Coronary Atherosclerosis",
    "symptoms": [
      28,
      856,
      544,
      644,
      481,
      711,
      891,
      656,
      590
    ],
    "severity": "medium",
    "description": "A medical condition characterized by chest pain or discomfort (angina), shortness of breath, fatigue.",
    "treatments": [
      "Lifestyle changes (such as a heart-healthy diet",
      "regular exercise",
      "weight management",
      "smoking cessation)",
      "medication (such as aspirin",
      "cholesterol-lowering medications",
      "beta-blockers",
      "calcium channel blockers",
      "nitroglycerin)",
      "procedures (such as angioplasty and stenting",
      "coronary artery bypass grafting)",
      "cardiac rehabilitation",
      "management of other risk factors (such as high blood pressure",
      "diabetes)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 103,
    "name": "Spondylitis",
    "symptoms": [
      30,
      521,
      671,
      544,
      631,
      859,
      662,
      477,
      453,
      917,
      931
    ],
    "severity": "medium",
    "description": "A medical condition characterized by chronic back pain and stiffness, especially in the morning or after periods of inactivity, limited range of motion in the spine.",
    "treatments": [
      "Medication (such as nonsteroidal anti-inflammatory drugs",
      "corticosteroids",
      "disease-modifying antirheumatic drugs)",
      "physical therapy (including stretching and strengthening exercises)",
      "heat or cold therapy",
      "posture correction techniques",
      "lifestyle modifications (such as regular exercise",
      "weight management)",
      "assistive devices (such as braces or supports)",
      "surgical intervention (in rare cases)",
      "pain management techniques (such as acupuncture or transcutaneous electrical nerve stimulation)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 104,
    "name": "Pituitary Adenoma",
    "symptoms": [
      112,
      973,
      603,
      544,
      991,
      696,
      627,
      517,
      576,
      700,
      410
    ],
    "severity": "medium",
    "description": "A medical condition characterized by headaches, vision problems (such as blurred vision or loss of peripheral vision), hormonal imbalances (such as excessive production or deficiency of specific hormones).",
    "treatments": [
      "Observation and monitoring (for small",
      "non-secreting tumors that are not causing significant symptoms)",
      "medication (to manage hormonal imbalances or reduce tumor size)",
      "surgery (transsphenoidal surgery to remove the tumor)",
      "radiation therapy (in cases where surgery is not possible or to treat residual or recurrent tumors)",
      "targeted therapy (in cases of aggressive or resistant tumors)",
      "hormone replacement therapy (if necessary)",
      "regular follow-up and monitoring to assess tumor growth and hormone levels",
      "management of associated complications or hormone deficiencies"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 105,
    "name": "Uterine Fibroids",
    "symptoms": [
      115,
      774,
      571,
      449,
      416,
      340,
      666,
      512,
      628
    ],
    "severity": "medium",
    "description": "A medical condition characterized by heavy or prolonged menstrual periods, pelvic pain or pressure, frequent urination.",
    "treatments": [
      "Watchful waiting (for small or asymptomatic fibroids)",
      "medication (such as hormonal birth control",
      "GnRH agonists",
      "progestin-releasing intrauterine devices)",
      "minimally invasive procedures (such as uterine artery embolization",
      "myomectomy)",
      "hysteroscopic procedures (such as hysteroscopic myomectomy or endometrial ablation)",
      "surgical removal of fibroids (such as laparoscopic or robotic-assisted myomectomy",
      "hysterectomy)",
      "focused ultrasound ablation",
      "hormonal therapy",
      "alternative approaches (such as acupuncture or herbal remedies)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 106,
    "name": "Idiopathic Nonmenstrual Bleeding",
    "symptoms": [
      8,
      952,
      348,
      347,
      879,
      796
    ],
    "severity": "medium",
    "description": "A medical condition characterized by abnormal vaginal bleeding outside of the menstrual period, unpredictable bleeding episodes, bleeding after sexual intercourse.",
    "treatments": [
      "Evaluation to rule out underlying causes (such as hormonal imbalances",
      "polyps",
      "infections",
      "or uterine abnormalities)",
      "hormonal therapy (such as birth control pills",
      "hormone replacement therapy)",
      "non-hormonal medications (such as tranexamic acid)",
      "dilation and curettage (if necessary to remove excessive tissue or investigate the cause)",
      "endometrial ablation (in some cases)",
      "hysteroscopy (to examine the uterus)",
      "surgery (in rare cases)",
      "counseling or support for emotional well-being"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 107,
    "name": "Chalazion",
    "symptoms": [
      187,
      818,
      965,
      846,
      364,
      698,
      915,
      674
    ],
    "severity": "medium",
    "description": "A medical condition characterized by painful, red lump or swelling on the eyelid, usually on the upper eyelid.",
    "treatments": [
      "Warm compresses (to help soften and promote drainage of the blocked oil gland)",
      "gentle massage of the affected area",
      "eyelid hygiene (keeping the area clean)",
      "over-the-counter lubricating eye drops",
      "topical antibiotic ointments (if there is a risk of infection)",
      "corticosteroid injections (for larger or persistent chalazia)",
      "surgical drainage or excision (in rare cases or if conservative treatments are ineffective)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 108,
    "name": "Ovarian Torsion",
    "symptoms": [
      262,
      853,
      711,
      979,
      552,
      803,
      312,
      354,
      894,
      751,
      313
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sudden and severe abdominal or pelvic pain on one side, sharp or stabbing pain, nausea.",
    "treatments": [
      "Emergency medical attention (as ovarian torsion is a medical emergency)",
      "imaging tests (such as ultrasound or CT scan) to diagnose torsion",
      "surgical intervention (laparoscopic or open surgery) to untwist the ovary and restore blood flow",
      "removal of the ovary (if it is damaged or non-viable)",
      "pain management (medications for pain relief)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 109,
    "name": "Vaginal Yeast Infection",
    "symptoms": [
      143,
      821,
      994,
      923,
      405,
      377,
      752,
      810
    ],
    "severity": "medium",
    "description": "A medical condition characterized by itching and irritation in the vagina and vulva, redness and swelling of the vulva, white.",
    "treatments": [
      "Over-the-counter antifungal creams",
      "ointments",
      "or suppositories (such as miconazole",
      "clotrimazole",
      "or terconazole)",
      "prescription-strength antifungal medications (in severe or recurrent cases)",
      "oral antifungal medications (if recommended by a healthcare professional)",
      "topical corticosteroids (for relief of itching and inflammation)",
      "maintaining good hygiene practices",
      "avoiding irritants (such as scented products)",
      "wearing breathable cotton underwear",
      "avoiding tight-fitting clothing",
      "probiotics (to restore healthy vaginal flora)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 110,
    "name": "Mastoiditis",
    "symptoms": [
      58,
      895,
      552,
      580,
      587,
      485,
      500,
      648,
      916,
      688
    ],
    "severity": "medium",
    "description": "A medical condition characterized by ear pain (particularly behind the ear), swelling and redness of the ear or the area behind the ear, fever.",
    "treatments": [
      "Antibiotics (oral or intravenous) to treat the underlying bacterial infection",
      "pain relievers (such as acetaminophen or ibuprofen) for pain and fever",
      "ear drops (if there is drainage from the ear)",
      "surgical intervention (in severe or chronic cases)",
      "such as mastoidectomy (removal of infected mastoid bone cells) or tympanostomy tube placement (to relieve pressure and drain fluid from the middle ear)",
      "supportive care (rest",
      "hydration",
      "warm compresses)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 111,
    "name": "Lung Contusion",
    "symptoms": [
      27,
      445,
      805,
      423,
      434,
      993,
      426,
      397,
      835
    ],
    "severity": "medium",
    "description": "A medical condition characterized by chest pain (sharp or dull), difficulty breathing or shortness of breath, rapid or shallow breathing.",
    "treatments": [
      "Supportive care (including supplemental oxygen",
      "pain management",
      "and respiratory support)",
      "monitoring in a hospital setting (to assess lung function and overall stability)",
      "treatment of associated injuries (such as rib fractures)",
      "management of complications (such as pneumonia or respiratory failure)",
      "prevention of further complications (such as deep vein thrombosis or pressure ulcers)",
      "respiratory therapy (including breathing exercises and airway clearance techniques)",
      "possible use of mechanical ventilation in severe cases"
    ],
    "specialty": "Pulmonologist"
  },
  {
    "id": 112,
    "name": "Hypertrophic Obstructive Cardiomyopathy (HOCM)",
    "symptoms": [
      251,
      520,
      394,
      483,
      543,
      595,
      544,
      898,
      551,
      739
    ],
    "severity": "medium",
    "description": "A medical condition characterized by shortness of breath, especially during physical activity or exertion, chest pain or discomfort.",
    "treatments": [
      "Medications to relieve symptoms and improve heart function (such as beta-blockers",
      "calcium channel blockers",
      "and disopyramide)",
      "medications to prevent abnormal heart rhythms (such as anti-arrhythmic drugs)",
      "medications to reduce blood clotting (such as aspirin or anticoagulants)",
      "implantable cardioverter-defibrillator (ICD) placement (to monitor and correct abnormal heart rhythms)",
      "septal myectomy (surgical removal of a portion of the thickened heart muscle)",
      "alcohol septal ablation (destruction of excess heart muscle with alcohol injection)",
      "lifestyle modifications (such as avoiding strenuous activities",
      "managing stress",
      "and maintaining a healthy weight)",
      "regular follow-up visits with a cardiologist"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 113,
    "name": "Pulmonary Eosinophilia",
    "symptoms": [
      36,
      856,
      993,
      392,
      552,
      720,
      544,
      992,
      506
    ],
    "severity": "medium",
    "description": "A medical condition characterized by cough, shortness of breath, wheezing.",
    "treatments": [
      "Identification and treatment of underlying causes (such as parasitic infections",
      "drug reactions",
      "or allergic reactions)",
      "corticosteroids (such as prednisone) to reduce inflammation",
      "bronchodilators (such as inhalers) to relieve bronchospasm and improve airflow",
      "antiparasitic medications (if parasitic infection is identified)",
      "immunosuppressive medications (in severe cases)",
      "avoidance of triggers or allergens (if identified)",
      "symptomatic treatment for associated symptoms (such as fever or cough)",
      "regular monitoring and follow-up with a healthcare professional"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 114,
    "name": "Corneal Disorder",
    "symptoms": [
      18,
      532,
      822,
      527,
      847,
      564,
      496,
      419,
      480,
      971
    ],
    "severity": "medium",
    "description": "A medical condition characterized by blurred or hazy vision, eye pain or discomfort, redness or irritation of the eye.",
    "treatments": [
      "Treatment depends on the specific corneal disorder and may include: artificial tears or lubricating eye drops",
      "antibiotic or antifungal eye drops (if infection is present)",
      "corticosteroid eye drops or ointments (to reduce inflammation)",
      "bandage contact lenses",
      "therapeutic contact lenses",
      "corneal transplantation (in severe cases)",
      "refractive surgeries (such as LASIK or PRK) to correct vision",
      "protective eyewear or sunglasses",
      "avoiding irritants or triggers",
      "regular eye examinations and monitoring",
      "lifestyle modifications (such as proper eye hygiene and avoiding eye strain)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 115,
    "name": "Foreign Body in the Gastrointestinal Tract",
    "symptoms": [
      5,
      460,
      399,
      487,
      713,
      675,
      395,
      828,
      422,
      574,
      370,
      776
    ],
    "severity": "medium",
    "description": "A medical condition characterized by abdominal pain or discomfort, difficulty swallowing, choking or gagging.",
    "treatments": [
      "Observation and monitoring (for small",
      "smooth",
      "and non-sharp objects that are likely to pass through the digestive tract without complications)",
      "endoscopic removal (using a flexible tube with a camera to locate and remove the foreign body)",
      "surgical intervention (in cases of severe complications",
      "large or sharp objects",
      "or failed endoscopic removal attempts)",
      "supportive care (such as intravenous fluids",
      "pain management",
      "and antibiotics if infection is present)",
      "imaging studies (such as X-rays or CT scans) to evaluate the location and extent of the foreign body",
      "consultation with a gastroenterologist or surgeon for appropriate management"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 116,
    "name": "Endophthalmitis",
    "symptoms": [
      78,
      820,
      894,
      363,
      435,
      560,
      625,
      470,
      527,
      552
    ],
    "severity": "medium",
    "description": "A medical condition characterized by eye pain, redness, swelling.",
    "treatments": [
      "Immediate medical attention is required. Treatment may include: intravenous antibiotics or antifungal medications",
      "intravitreal injections (injections of antibiotics or antifungal agents directly into the eye)",
      "vitrectomy (surgical removal of the gel-like fluid within the eye)",
      "topical or oral medications (to manage pain",
      "inflammation",
      "or infection)",
      "frequent follow-up visits with an ophthalmologist",
      "supportive care (such as warm compresses or lubricating eye drops)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 117,
    "name": "Achalasia",
    "symptoms": [
      51
    ],
    "severity": "medium",
    "description": "A medical condition characterized by difficulty swallowing.",
    "treatments": [
      "Balloon dilation",
      "surgery",
      "medication"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 118,
    "name": "Conductive Hearing Loss",
    "symptoms": [
      224,
      702
    ],
    "severity": "medium",
    "description": "A medical condition characterized by reduced hearing sensitivity, muffled or blocked sound.",
    "treatments": [
      "Medications",
      "surgical intervention",
      "hearing aids"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 119,
    "name": "Abdominal Hernia",
    "symptoms": [
      289,
      475
    ],
    "severity": "medium",
    "description": "A medical condition characterized by visible bulge or swelling, discomfort or pain.",
    "treatments": [
      "Watchful waiting",
      "hernia truss",
      "surgical repair",
      "lifestyle changes"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 120,
    "name": "Marijuana Abuse",
    "symptoms": [
      126,
      322,
      333
    ],
    "severity": "medium",
    "description": "A medical condition characterized by impaired memory and cognition, altered judgment, anxiety.",
    "treatments": [
      "Behavioral therapy",
      "counseling",
      "support groups",
      "medication",
      "detoxification"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 121,
    "name": "Cryptococcosis",
    "symptoms": [
      111,
      552,
      544,
      420,
      695,
      782
    ],
    "severity": "medium",
    "description": "A medical condition characterized by headache, fever, fatigue.",
    "treatments": [
      "Antifungal medication (e.g.",
      "Amphotericin B",
      "Fluconazole)",
      "supportive care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 122,
    "name": "Obesity",
    "symptoms": [
      68,
      623
    ],
    "severity": "medium",
    "description": "A medical condition characterized by excessive body weight, increased risk of chronic conditions.",
    "treatments": [
      "Antifungal medication eg  Amphotericin B",
      "Fluconazole",
      "supportive care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 123,
    "name": "Indigestion",
    "symptoms": [
      3,
      354,
      596,
      711,
      319
    ],
    "severity": "medium",
    "description": "A medical condition characterized by abdominal pain, bloating, heartburn.",
    "treatments": [
      "Lifestyle changes (e.g.",
      "dietary modifications",
      "stress reduction)",
      "over-the-counter antacids",
      "medication",
      "therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 124,
    "name": "Bursitis",
    "symptoms": [
      149,
      894,
      915,
      670
    ],
    "severity": "medium",
    "description": "A medical condition characterized by joint pain, swelling, tenderness.",
    "treatments": [
      "Rest",
      "ice",
      "compression",
      "elevation (RICE therapy)",
      "pain relievers",
      "physical therapy",
      "steroid injections"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 125,
    "name": "Esophageal Cancer",
    "symptoms": [
      51,
      951,
      392,
      601
    ],
    "severity": "high",
    "description": "A medical condition characterized by difficulty swallowing, unintentional weight loss, chest pain.",
    "treatments": [
      "Surgery",
      "chemotherapy",
      "radiation therapy",
      "targeted therapy",
      "immunotherapy",
      "palliative care",
      "clinical trials"
    ],
    "specialty": "Oncologist"
  },
  {
    "id": 126,
    "name": "Pulmonary Congestion",
    "symptoms": [
      251,
      420,
      993,
      544,
      391
    ],
    "severity": "medium",
    "description": "A medical condition characterized by shortness of breath, cough, wheezing.",
    "treatments": [
      "Diuretics",
      "medications to manage underlying conditions (e.g.",
      "heart failure)",
      "oxygen therapy",
      "lifestyle changes"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 127,
    "name": "Juvenile Rheumatoid Arthritis",
    "symptoms": [
      149,
      894,
      883,
      670,
      552,
      807
    ],
    "severity": "medium",
    "description": "A medical condition characterized by joint pain, swelling, stiffness.",
    "treatments": [
      "Medications (NSAIDs",
      "DMARDs)",
      "physical therapy",
      "occupational therapy",
      "exercise",
      "assistive devices"
    ],
    "specialty": "Orthopedist / Rheumatologist"
  },
  {
    "id": 128,
    "name": "Actinic Keratosis",
    "symptoms": [
      227,
      842,
      961
    ],
    "severity": "medium",
    "description": "A medical condition characterized by rough, scaly patches on the skin, usually in sun-exposed areas.",
    "treatments": [
      "Topical medications (e.g.",
      "fluorouracil",
      "imiquimod",
      "diclofenac)",
      "cryotherapy",
      "curettag"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 129,
    "name": "Acute Otitis Media",
    "symptoms": [
      57,
      552,
      561,
      588
    ],
    "severity": "medium",
    "description": "A medical condition characterized by ear pain, fever, fluid drainage from the ear.",
    "treatments": [
      "Antibiotics",
      "pain relievers (e.g.",
      "acetaminophen",
      "ibuprofen)",
      "warm compresses",
      "ear drops",
      "tympanostomy tubes (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 130,
    "name": "Astigmatism",
    "symptoms": [
      17,
      534,
      581,
      949
    ],
    "severity": "medium",
    "description": "A medical condition characterized by blurred or distorted vision, eye strain, headaches.",
    "treatments": [
      "Eyeglasses",
      "contact lenses",
      "refractive surgery (LASIK",
      "PRK)",
      "orthokeratology",
      "toric intraocular lenses"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 131,
    "name": "Tuberous Sclerosis",
    "symptoms": [
      13,
      844,
      440,
      861
    ],
    "severity": "medium",
    "description": "A medical condition characterized by benign tumors in various organs, seizures, developmental delays.",
    "treatments": [
      "Medications (anti-seizure",
      "behavioral",
      "etc.)",
      "surgery (for tumor removal)",
      "therapy (physical",
      "occupational",
      "speech)",
      "educational interventions",
      "support services",
      "genetic counseling",
      "monitoring of organ involvement"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 132,
    "name": "Empyema",
    "symptoms": [
      88,
      392,
      790
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fever, chest pain, productive cough with foul-smelling or bloody sputum.",
    "treatments": [
      "Antibiotics",
      "drainage (chest tube insertion",
      "thoracentesis)",
      "surgical intervention (decortication)",
      "supportive care",
      "treatment of underlying cause"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 133,
    "name": "Presbycusis",
    "symptoms": [
      103,
      451,
      875
    ],
    "severity": "medium",
    "description": "A medical condition characterized by gradual hearing loss, difficulty hearing high-pitched sounds, speech sounds muffled or unclear.",
    "treatments": [
      "Hearing aids",
      "assistive listening devices",
      "cochlear implants (in severe cases)",
      "communication strategies",
      "counseling",
      "regular hearing evaluations"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 134,
    "name": "Neonatal Jaundice",
    "symptoms": [
      300,
      764,
      430
    ],
    "severity": "medium",
    "description": "A medical condition characterized by yellowing of the skin and eyes, pale stools, dark urine.",
    "treatments": [
      "Phototherapy",
      "exchange transfusion (in severe cases)",
      "monitoring of bilirubin levels",
      "addressing underlying causes (e.g.",
      "breastfeeding)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 135,
    "name": "Dislocation of the Elbow",
    "symptoms": [
      240,
      966,
      894,
      614,
      725
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe pain, visible deformity, swelling.",
    "treatments": [
      "Closed reduction (realigning the bones without surgery)",
      "immobilization (splint or cast)",
      "physical therapy",
      "pain management",
      "surgical intervention (in complex or recurrent cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 136,
    "name": "Spondylosis",
    "symptoms": [
      175,
      883,
      670,
      727
    ],
    "severity": "medium",
    "description": "A medical condition characterized by neck or back pain, stiffness, limited range of motion.",
    "treatments": [
      "Medications (pain relievers",
      "muscle relaxants)",
      "physical therapy",
      "exercise",
      "posture improvement",
      "heat or cold therapy",
      "spinal injections",
      "surgery (in severe cases or if conservative treatments fail)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 137,
    "name": "Herpangina",
    "symptoms": [
      260,
      552,
      761,
      460,
      675
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sore throat, fever, painful sores or blisters in the mouth and throat.",
    "treatments": [
      "Symptomatic relief (pain relievers",
      "throat lozenges",
      "mouth rinses)",
      "rest",
      "fluids",
      "maintaining good oral hygiene",
      "avoiding spicy or acidic foods"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 138,
    "name": "Poisoning due to Antidepressants",
    "symptoms": [
      174,
      979,
      489,
      481,
      414,
      844,
      383,
      683,
      828
    ],
    "severity": "medium",
    "description": "A medical condition characterized by nausea, vomiting, drowsiness.",
    "treatments": [
      "Seek immediate medical assistance or contact a poison control center",
      "activated charcoal (if indicated)",
      "supportive care (maintaining vital signs",
      "airway management)",
      "gastric lavage (in certain cases)",
      "administration of antidotes (if available and appropriate)",
      "monitoring and management of complications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 139,
    "name": "Infection of Open Wound",
    "symptoms": [
      223,
      894,
      981,
      755,
      800,
      552,
      686
    ],
    "severity": "medium",
    "description": "A medical condition characterized by redness, swelling, warmth.",
    "treatments": [
      "Cleaning and irrigation of the wound",
      "antibiotic therapy (oral or intravenous)",
      "wound dressings",
      "wound debridement (if necessary)",
      "tetanus prophylaxis"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 140,
    "name": "Protein Deficiency",
    "symptoms": [
      170,
      544,
      986,
      437,
      901,
      577,
      607
    ],
    "severity": "medium",
    "description": "A medical condition characterized by muscle wasting, fatigue, weakness.",
    "treatments": [
      "Increasing protein intake through diet (lean meats",
      "fish",
      "dairy",
      "legumes",
      "nuts)",
      "protein supplements",
      "nutritional counseling",
      "addressing underlying causes (e.g.",
      "malabsorption)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 141,
    "name": "Myoclonus",
    "symptoms": [
      261,
      374,
      729,
      667,
      735
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sudden, brief muscle contractions or jerks, often affecting the arms.",
    "treatments": [
      "Identifying and treating underlying causes (e.g.",
      "medication adjustments",
      "metabolic imbalances)",
      "medications (anti-seizure drugs",
      "tranquilizers)",
      "physical therapy",
      "supportive care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 142,
    "name": "Bone Spur of the Calcaneus",
    "symptoms": [
      116,
      522,
      915,
      894,
      632
    ],
    "severity": "medium",
    "description": "A medical condition characterized by heel pain, especially when walking or standing, tenderness.",
    "treatments": [
      "Nonsteroidal anti-inflammatory drugs (NSAIDs)",
      "orthotic devices",
      "physical therapy",
      "stretching exercises",
      "shoe modifications",
      "corticosteroid injections",
      "surgical removal (in severe cases)"
    ],
    "specialty": "Orthopedist / Rheumatologist"
  },
  {
    "id": 143,
    "name": "Von Willebrand Disease",
    "symptoms": [
      60,
      795,
      570,
      598,
      349,
      357
    ],
    "severity": "medium",
    "description": "A medical condition characterized by easy or excessive bruising, prolonged or excessive bleeding from cuts or injuries, frequent nosebleeds.",
    "treatments": [
      "Desmopressin (DDAVP) medication",
      "replacement therapy with von Willebrand factor (VWF) concentrate or cryoprecipitate",
      "oral contraceptives (for women with heavy menstrual bleeding)",
      "avoiding certain medications",
      "dental care precautions",
      "regular medical follow-up"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 144,
    "name": "Heart Block",
    "symptoms": [
      86,
      481,
      541,
      394,
      856,
      643
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, dizziness, fainting.",
    "treatments": [
      "Medications (such as beta-blockers",
      "calcium channel blockers)",
      "pacemaker implantation (in severe cases or symptomatic heart block)",
      "underlying condition management"
    ],
    "specialty": "Cardiologist"
  },
  {
    "id": 145,
    "name": "Colonic Polyp",
    "symptoms": [
      165,
      887
    ],
    "severity": "medium",
    "description": "A medical condition characterized by most colonic polyps do not cause symptoms. some larger polyps or certain types may cause rectal bleeding or changes in bowel habits, such as diarrhea or constipation..",
    "treatments": [
      "Polypectomy (removal of polyp during colonoscopy)",
      "surveillance colonoscopy (regular monitoring for recurrence or new polyps)",
      "lifestyle modifications (healthy diet",
      "regular exercise",
      "smoking cessation)",
      "follow-up based on pathology findings"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 146,
    "name": "Hypospadias",
    "symptoms": [
      6,
      775,
      880,
      452
    ],
    "severity": "medium",
    "description": "A medical condition characterized by abnormal positioning of the urethral opening on the underside of the penis, penile curvature, spraying of urine.",
    "treatments": [
      "Surgical repair (hypospadias repair surgery)",
      "hormone therapy (in some cases)",
      "counseling and support for the child and family"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 147,
    "name": "Magnesium Deficiency",
    "symptoms": [
      169,
      544,
      986,
      675,
      711,
      979,
      647,
      697,
      644,
      930,
      778,
      844
    ],
    "severity": "medium",
    "description": "A medical condition characterized by muscle twitches or cramps, fatigue, weakness.",
    "treatments": [
      "Dietary changes (consuming magnesium-rich foods)",
      "oral magnesium supplements",
      "intravenous magnesium therapy (in severe cases)",
      "addressing underlying causes (e.g.",
      "malabsorption)",
      "medical supervision and monitoring"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 148,
    "name": "Female Infertility of Unknown Cause",
    "symptoms": [
      128,
      646,
      602,
      321,
      745
    ],
    "severity": "medium",
    "description": "A medical condition characterized by inability to conceive after one year of unprotected intercourse, irregular or absent menstrual cycles, hormonal imbalances.",
    "treatments": [
      "Fertility testing and evaluation (hormone tests",
      "imaging",
      "genetic screening)",
      "lifestyle modifications (healthy diet",
      "regular exercise",
      "stress reduction)",
      "fertility treatments (assisted reproductive technologies",
      "fertility medications)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 149,
    "name": "Pericarditis",
    "symptoms": [
      26,
      1000,
      552
    ],
    "severity": "medium",
    "description": "A medical condition characterized by chest pain (sharp and stabbing), worsens with deep breaths or lying down, fever.",
    "treatments": [
      "Nonsteroidal anti-inflammatory drugs (NSAIDs) to reduce inflammation and pain",
      "colchicine (for recurrent or persistent pericarditis)",
      "corticosteroids (in severe cases or when NSAIDs are ineffective)",
      "antibiotics (if bacterial infection is present)",
      "lifestyle modifications (rest",
      "avoiding strenuous activity)",
      "treating underlying causes (if identified)",
      "potential pericardiocentesis (fluid drainage)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 150,
    "name": "Attention Deficit Hyperactivity Disorder (ADHD)",
    "symptoms": [
      129,
      604,
      609
    ],
    "severity": "medium",
    "description": "A medical condition characterized by inattention, hyperactivity, impulsivity.",
    "treatments": [
      "Behavioral therapy",
      "parent training programs",
      "medication (such as stimulants or non-stimulants)",
      "individualized education plans (IEPs) for academic support",
      "accommodations and modifications in school",
      "psychoeducation",
      "counseling"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 151,
    "name": "Neuromyelitis Optica",
    "symptoms": [
      181,
      757,
      938,
      723,
      743,
      676
    ],
    "severity": "medium",
    "description": "A medical condition characterized by optic neuritis (vision loss, pain with eye movement), transverse myelitis (weakness.",
    "treatments": [
      "High-dose corticosteroids",
      "plasma exchange (to remove antibodies from the blood)",
      "immunosuppressive therapy (such as azathioprine or rituximab)",
      "supportive care to manage symptoms",
      "physical therapy or rehabilitation for functional recovery"
    ],
    "specialty": "Neurologist"
  },
  {
    "id": 152,
    "name": "Pulmonic Valve Disease",
    "symptoms": [
      86,
      856,
      394,
      594,
      542,
      908
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, shortness of breath, chest pain or discomfort.",
    "treatments": [
      "Medications (such as diuretics",
      "beta-blockers",
      "or calcium channel blockers)",
      "surgical interventions (such as balloon valvuloplasty or valve replacement)",
      "lifestyle modifications (such as regular exercise",
      "heart-healthy diet",
      "smoking cessation)",
      "regular follow-up with a cardiologist"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 153,
    "name": "Tietze Syndrome",
    "symptoms": [
      25,
      896
    ],
    "severity": "medium",
    "description": "A medical condition characterized by chest pain, swelling and tenderness of the cartilage connecting the ribs to the breastbone.",
    "treatments": [
      "Nonsteroidal anti-inflammatory drugs (NSAIDs)",
      "pain relievers",
      "local heat or ice application",
      "avoiding activities that worsen symptoms",
      "supportive measures (such as wearing loose clothing or using supportive pillows)",
      "physical therapy (to improve posture and strengthen muscles)",
      "corticosteroid injections (in some cases)",
      "stress reduction techniques"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 154,
    "name": "Cranial Nerve Palsy",
    "symptoms": [
      43,
      530,
      538,
      462,
      681
    ],
    "severity": "medium",
    "description": "A medical condition characterized by depends on the specific cranial nerve involved; symptoms can include vision changes, eye movement abnormalities, facial weakness or paralysis.",
    "treatments": [
      "Treatment depends on the underlying cause and specific cranial nerve affected. It may include medications (such as corticosteroids or antiviral drugs)",
      "physical therapy",
      "speech therapy",
      "occupational therapy",
      "eye exercises",
      "surgery (in some cases)",
      "and management of any underlying conditions."
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 155,
    "name": "Conversion Disorder",
    "symptoms": [
      177,
      888,
      352,
      844,
      734
    ],
    "severity": "medium",
    "description": "A medical condition characterized by neurological symptoms that cannot be explained by a medical condition or injury, such as paralysis, blindness.",
    "treatments": [
      "Psychotherapy (such as cognitive-behavioral therapy or psychodynamic therapy)",
      "physical therapy or rehabilitation (to improve physical function and reduce disability)",
      "addressing underlying stressors or psychological factors",
      "supportive care and reassurance",
      "potentially medications (such as antidepressants or anti-anxiety medications)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 156,
    "name": "Complex Regional Pain Syndrome",
    "symptoms": [
      232,
      731,
      995,
      385,
      316,
      670
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe and chronic pain, often in the limbs, with associated swelling.",
    "treatments": [
      "Physical therapy (including exercises",
      "stretching",
      "and mirror therapy)",
      "pain management techniques (such as medications",
      "nerve blocks",
      "or spinal cord stimulation)",
      "sympathetic nerve blocks",
      "psychological support (such as cognitive-behavioral therapy or counseling)",
      "occupational therapy",
      "graded motor imagery",
      "transcutaneous electrical nerve stimulation (TENS)",
      "patient education and self-management techniques"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 157,
    "name": "Otosclerosis",
    "symptoms": [
      113,
      934,
      482
    ],
    "severity": "medium",
    "description": "A medical condition characterized by hearing loss (gradual and progressive), tinnitus (ringing in the ears), dizziness or balance problems.",
    "treatments": [
      "Hearing aids",
      "surgical interventions (such as stapedectomy or stapedotomy to replace the affected bone in the middle ear)",
      "sodium fluoride therapy (to slow down the progression of the condition)",
      "communication strategies and support (such as lip-reading or sign language)",
      "regular hearing assessments"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 158,
    "name": "Hypothyroidism",
    "symptoms": [
      86,
      990,
      845,
      495,
      416,
      438,
      709,
      505
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, weight gain, sensitivity to cold.",
    "treatments": [
      "Hormone replacement therapy with synthetic thyroid hormone (levothyroxine)",
      "regular monitoring of thyroid hormone levels and adjustment of medication dosage",
      "lifestyle modifications (such as healthy diet and regular exercise)",
      "management of associated symptoms (such as cholesterol-lowering medications or antidepressants)",
      "education and support for long-term management"
    ],
    "specialty": "Endocrinologist"
  },
  {
    "id": 159,
    "name": "Primary Insomnia",
    "symptoms": [
      47,
      431,
      647,
      447
    ],
    "severity": "medium",
    "description": "A medical condition characterized by difficulty falling asleep or staying asleep, daytime sleepiness, irritability.",
    "treatments": [
      "Cognitive-behavioral therapy for insomnia (CBT-I)",
      "sleep hygiene practices (such as maintaining a regular sleep schedule",
      "creating a comfortable sleep environment)",
      "relaxation techniques",
      "stimulus control techniques (such as limiting bed activities to sleep only)",
      "sleep restriction therapy",
      "medications for insomnia (such as sedative-hypnotics",
      "melatonin agonists)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 160,
    "name": "Lice",
    "symptoms": [
      144
    ],
    "severity": "medium",
    "description": "A medical condition characterized by itching and visible presence of lice or nits (eggs) in the hair.",
    "treatments": [
      "Over-the-counter or prescription medications specifically designed to kill lice (such as pediculicides)",
      "manual removal of lice and nits using a fine-toothed comb",
      "washing and drying of infested clothing and bedding at high temperatures",
      "vacuuming of upholstery and household surfaces",
      "disinfection of personal items that cannot be washed or dried",
      "avoiding direct head-to-head contact with infested individuals",
      "education and prevention strategies"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 161,
    "name": "Vitamin B12 Deficiency",
    "symptoms": [
      86,
      986,
      763,
      856,
      932,
      343,
      874
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, weakness, pale skin.",
    "treatments": [
      "Vitamin B12 supplementation (such as oral supplements or injections)",
      "dietary changes to include B12-rich foods (such as meat",
      "fish",
      "eggs",
      "and dairy products)",
      "identification and management of underlying causes (such as pernicious anemia or malabsorption disorders)",
      "management of associated symptoms or complications (such as nerve pain or balance problems)",
      "regular monitoring of B12 levels and treatment adjustment"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 162,
    "name": "Vulvodynia",
    "symptoms": [
      210,
      376,
      884,
      812,
      649
    ],
    "severity": "medium",
    "description": "A medical condition characterized by persistent pain or discomfort in the vulva, burning, stinging.",
    "treatments": [
      "Topical medications (such as lidocaine or estrogen creams)",
      "nerve blocks",
      "physical therapy (including pelvic floor muscle relaxation exercises)",
      "cognitive-behavioral therapy (CBT)",
      "biofeedback",
      "medications (such as tricyclic antidepressants or anticonvulsants)",
      "vulvar care and hygiene practices",
      "stress management techniques",
      "alternative therapies (such as acupuncture or herbal remedies)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 163,
    "name": "Endometriosis",
    "symptoms": [
      199,
      639,
      733,
      597,
      627
    ],
    "severity": "medium",
    "description": "A medical condition characterized by pelvic pain (during menstruation, intercourse, or bowel movements).",
    "treatments": [
      "Pain management (such as nonsteroidal anti-inflammatory drugs [NSAIDs]",
      "hormonal contraceptives",
      "or progestins)",
      "hormone therapy (such as gonadotropin-releasing hormone [GnRH] agonists or oral contraceptives)",
      "surgical interventions (such as laparoscopic excision or hysterectomy)",
      "fertility treatments (if pregnancy is desired)",
      "lifestyle modifications (such as regular exercise",
      "stress management)",
      "complementary therapies (such as acupuncture or dietary changes)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 164,
    "name": "Vasculitis",
    "symptoms": [
      136,
      617,
      552,
      544,
      705,
      856,
      992
    ],
    "severity": "medium",
    "description": "A medical condition characterized by inflammation of blood vessels leading to various symptoms depending on the affected organs, including rash, fever.",
    "treatments": [
      "Treatment depends on the type and severity of vasculitis. It may include corticosteroids",
      "immunosuppressive medications (such as cyclophosphamide or azathioprine)",
      "biologic therapies (such as rituximab)",
      "disease-specific treatments (such as plasmapheresis for certain types)",
      "supportive care to manage symptoms (such as pain relievers or blood pressure medications)",
      "monitoring and management of associated complications (such as organ damage or infections)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 165,
    "name": "Concussion",
    "symptoms": [
      111,
      481,
      713,
      414,
      694,
      849,
      700
    ],
    "severity": "medium",
    "description": "A medical condition characterized by headache, dizziness, nausea or vomiting.",
    "treatments": [
      "Physical and cognitive rest",
      "gradual return to normal activities",
      "symptom management (such as pain relievers or anti-nausea medication)",
      "monitoring for complications (such as changes in neurological function)",
      "cognitive rehabilitation (if persistent cognitive problems)",
      "management of associated symptoms (such as sleep disturbances or mood changes)",
      "education and support for recovery",
      "avoiding further head injuries"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 166,
    "name": "Oral Leukoplakia",
    "symptoms": [
      298,
      732,
      922
    ],
    "severity": "medium",
    "description": "A medical condition characterized by white patches or plaques in the mouth, often on the tongue or inside of the cheeks, that cannot be scraped off.",
    "treatments": [
      "Regular monitoring and follow-up",
      "identification and elimination of potential irritants (such as tobacco or alcohol)",
      "improving oral hygiene practices",
      "medication (such as topical retinoids or antifungal agents)",
      "surgical removal (in some cases)",
      "cryotherapy (freezing the patches)",
      "laser therapy",
      "lifestyle modifications (such as healthy diet)",
      "regular dental check-ups",
      "education and support"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 167,
    "name": "Chronic Kidney Disease",
    "symptoms": [
      86,
      900,
      432,
      447,
      626,
      356,
      599
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, swelling of the legs or ankles, decreased appetite.",
    "treatments": [
      "Management of underlying conditions (such as diabetes or high blood pressure)",
      "lifestyle modifications (such as healthy diet",
      "regular exercise",
      "smoking cessation)",
      "medications (such as ACE inhibitors or diuretics)",
      "dialysis (in advanced stages)",
      "kidney transplant (in end-stage kidney disease)",
      "management of associated complications (such as anemia or bone disease)",
      "regular monitoring and follow-up with a nephrologist",
      "education and support for self-care"
    ],
    "specialty": "Nephrologist / Urologist"
  },
  {
    "id": 168,
    "name": "Bladder Disorder",
    "symptoms": [
      98,
      955,
      772
    ],
    "severity": "medium",
    "description": "A medical condition characterized by frequent urination, urgency, pelvic pain.",
    "treatments": [
      "Medications",
      "bladder training",
      "lifestyle changes"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 169,
    "name": "Chorioretinitis",
    "symptoms": [
      78,
      363,
      846
    ],
    "severity": "medium",
    "description": "A medical condition characterized by eye pain, blurred vision, sensitivity to light.",
    "treatments": [
      "Antiviral medications",
      "corticosteroids",
      "eye drops"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 170,
    "name": "Priapism",
    "symptoms": [
      201,
      759
    ],
    "severity": "medium",
    "description": "A medical condition characterized by persistent, painful erection.",
    "treatments": [
      "Medical intervention (aspiration",
      "medication",
      "surgery)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 171,
    "name": "Myositis",
    "symptoms": [
      171,
      749,
      630
    ],
    "severity": "medium",
    "description": "A medical condition characterized by muscle weakness, pain, inflammation.",
    "treatments": [
      "Medications (corticosteroids",
      "immunosuppressants)",
      "physical therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 172,
    "name": "Mononucleosis",
    "symptoms": [
      86,
      873,
      909
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, sore throat, swollen lymph nodes.",
    "treatments": [
      "Rest",
      "pain relievers",
      "fluids",
      "symptom management"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 173,
    "name": "Neuralgia",
    "symptoms": [
      246,
      854
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sharp, shooting pain along the affected nerve.",
    "treatments": [
      "Medications (pain relievers",
      "anticonvulsants)",
      "nerve blocks"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 174,
    "name": "Polycystic Kidney Disease",
    "symptoms": [
      3,
      599,
      660
    ],
    "severity": "medium",
    "description": "A medical condition characterized by abdominal pain, high blood pressure, kidney cysts.",
    "treatments": [
      "Symptom management",
      "blood pressure control",
      "dialysis"
    ],
    "specialty": "Nephrologist / Urologist"
  },
  {
    "id": 175,
    "name": "Bipolar Disorder",
    "symptoms": [
      164,
      687,
      439
    ],
    "severity": "medium",
    "description": "A medical condition characterized by mood swings, manic episodes, depressive episodes.",
    "treatments": [
      "Medications (mood stabilizers",
      "antipsychotics)",
      "therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 176,
    "name": "Amyloidosis",
    "symptoms": [
      86,
      992,
      744
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, weight loss, organ dysfunction.",
    "treatments": [
      "Treatment depends on the type and extent of organ damage"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 177,
    "name": "Chronic Inflammatory Demyelinating Polyneuropathy (CIDP)",
    "symptoms": [
      294,
      723,
      929
    ],
    "severity": "medium",
    "description": "A medical condition characterized by weakness, numbness, tingling in limbs.",
    "treatments": [
      "Immunoglobulin therapy",
      "corticosteroids",
      "physical therapy"
    ],
    "specialty": "Neurologist"
  },
  {
    "id": 178,
    "name": "Gastroesophageal Reflux Disease (GERD)",
    "symptoms": [
      114,
      318,
      392
    ],
    "severity": "medium",
    "description": "A medical condition characterized by heartburn, acid reflux, chest pain.",
    "treatments": [
      "Lifestyle changes",
      "medications (antacids",
      "proton pump inhibitors)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 179,
    "name": "Vitreous Hemorrhage",
    "symptoms": [
      91,
      366,
      531
    ],
    "severity": "medium",
    "description": "A medical condition characterized by floaters in vision, blurry vision, eye pain.",
    "treatments": [
      "Observation",
      "laser treatment",
      "vitrectomy (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 180,
    "name": "Antimicrobial Drugs Poisoning",
    "symptoms": [
      174,
      979,
      442,
      718
    ],
    "severity": "medium",
    "description": "A medical condition characterized by nausea, vomiting, diarrhea.",
    "treatments": [
      "Immediate medical attention",
      "supportive care",
      "antidote administration"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 181,
    "name": "Scleroderma",
    "symptoms": [
      276,
      217
    ],
    "severity": "medium",
    "description": "A medical condition characterized by thickening of the skin, raynaud's phenomenon.",
    "treatments": [
      "Medications (immunosuppressants)",
      "therapy",
      "symptom management"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 182,
    "name": "Myasthenia Gravis",
    "symptoms": [
      171,
      544,
      457
    ],
    "severity": "medium",
    "description": "A medical condition characterized by muscle weakness, fatigue, difficulty speaking.",
    "treatments": [
      "Medications (acetylcholinesterase inhibitors",
      "immunosuppressants)",
      "thymectomy (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 183,
    "name": "Hypoglycemia",
    "symptoms": [
      245,
      481,
      414,
      891
    ],
    "severity": "medium",
    "description": "A medical condition characterized by shaking, dizziness, confusion.",
    "treatments": [
      "Consuming glucose or sugar-containing foods",
      "adjusting medication or insulin dosage"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 184,
    "name": "Idiopathic Absence of Menstruation",
    "symptoms": [
      152
    ],
    "severity": "medium",
    "description": "A medical condition characterized by lack of menstrual periods.",
    "treatments": [
      "Evaluation to determine underlying cause",
      "hormone therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 185,
    "name": "Dislocation of the Ankle",
    "symptoms": [
      268,
      852,
      610
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swelling, severe pain, inability to bear weight.",
    "treatments": [
      "Reduction (realigning the bones)",
      "immobilization",
      "rehab"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 186,
    "name": "Carbon Monoxide Poisoning",
    "symptoms": [
      111,
      481,
      711,
      414
    ],
    "severity": "medium",
    "description": "A medical condition characterized by headache, dizziness, nausea.",
    "treatments": [
      "Fresh air",
      "oxygen therapy",
      "immediate medical attention"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 187,
    "name": "Panic Attack",
    "symptoms": [
      25,
      856,
      765
    ],
    "severity": "medium",
    "description": "A medical condition characterized by chest pain, shortness of breath, palpitations.",
    "treatments": [
      "Breathing exercises",
      "relaxation techniques",
      "therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 188,
    "name": "Plantar Fasciitis",
    "symptoms": [
      116,
      915,
      463
    ],
    "severity": "medium",
    "description": "A medical condition characterized by heel pain, tenderness, difficulty walking.",
    "treatments": [
      "Rest",
      "stretching exercises",
      "orthotic devices",
      "physiotherapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 189,
    "name": "Hyperopia",
    "symptoms": [
      50,
      365
    ],
    "severity": "medium",
    "description": "A medical condition characterized by difficulty seeing objects up close, blurred vision when focusing on near objects.",
    "treatments": [
      "Eyeglasses",
      "contact lenses",
      "refractive surgery"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 190,
    "name": "Sedatives Poisoning",
    "symptoms": [
      54,
      414,
      866
    ],
    "severity": "medium",
    "description": "A medical condition characterized by drowsiness, confusion, slowed breathing.",
    "treatments": [
      "Immediate medical attention",
      "supportive care",
      "antidote administration"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 191,
    "name": "Pemphigus",
    "symptoms": [
      188
    ],
    "severity": "medium",
    "description": "A medical condition characterized by painful blisters on the skin and mucous membranes.",
    "treatments": [
      "Corticosteroids",
      "immunosuppressants",
      "wound care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 192,
    "name": "Peyronie Disease",
    "symptoms": [
      39,
      750
    ],
    "severity": "medium",
    "description": "A medical condition characterized by curvature of the penis, pain during erections.",
    "treatments": [
      "Medications",
      "traction therapy",
      "surgery"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 193,
    "name": "Hiatal Hernia",
    "symptoms": [
      114,
      392,
      460
    ],
    "severity": "medium",
    "description": "A medical condition characterized by heartburn, chest pain, difficulty swallowing.",
    "treatments": [
      "Lifestyle changes",
      "medications (antacids",
      "proton pump inhibitors)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 194,
    "name": "Extrapyramidal Effect of Drugs",
    "symptoms": [
      168,
      939,
      641
    ],
    "severity": "medium",
    "description": "A medical condition characterized by muscle stiffness, tremors, involuntary movements.",
    "treatments": [
      "Adjusting medication dosage",
      "switching to alternative medications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 195,
    "name": "Meniere Disease",
    "symptoms": [
      288,
      586,
      933,
      498
    ],
    "severity": "medium",
    "description": "A medical condition characterized by vertigo, hearing loss, tinnitus.",
    "treatments": [
      "Medications (diuretics",
      "anti-vertigo drugs)",
      "lifestyle changes"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 196,
    "name": "Anal Fissure",
    "symptoms": [
      183,
      813
    ],
    "severity": "medium",
    "description": "A medical condition characterized by pain during bowel movements, rectal bleeding.",
    "treatments": [
      "Stool softeners",
      "fiber supplements",
      "topical ointments",
      "surgical procedures (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 197,
    "name": "Chronic Otitis Media",
    "symptoms": [
      57,
      586,
      814
    ],
    "severity": "medium",
    "description": "A medical condition characterized by ear pain, hearing loss, recurrent ear infections.",
    "treatments": [
      "Antibiotics",
      "ear drops",
      "surgical intervention (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 198,
    "name": "Hirschsprung Disease",
    "symptoms": [
      31,
      303,
      539
    ],
    "severity": "medium",
    "description": "A medical condition characterized by chronic constipation, abdominal distension, failure to pass meconium (in newborns).",
    "treatments": [
      "Surgery to remove the affected part of the colon (pull-through procedure)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 199,
    "name": "Polymyalgia Rheumatica",
    "symptoms": [
      167,
      659,
      544
    ],
    "severity": "medium",
    "description": "A medical condition characterized by muscle pain and stiffness, joint pain, fatigue.",
    "treatments": [
      "Low-dose corticosteroids",
      "nonsteroidal anti-inflammatory drugs (NSAIDs)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 200,
    "name": "Lymphedema",
    "symptoms": [
      269,
      548
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swelling in arms or legs, feeling of heaviness or tightness.",
    "treatments": [
      "Compression therapy",
      "exercise",
      "lymphatic drainage techniques",
      "surgery (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 201,
    "name": "Bladder Cancer",
    "symptoms": [
      14,
      571,
      772
    ],
    "severity": "high",
    "description": "A medical condition characterized by blood in urine, frequent urination, pelvic pain.",
    "treatments": [
      "Surgery",
      "chemotherapy",
      "radiation therapy"
    ],
    "specialty": "Oncologist"
  },
  {
    "id": 202,
    "name": "Acute Bronchospasm",
    "symptoms": [
      297,
      856,
      396
    ],
    "severity": "medium",
    "description": "A medical condition characterized by wheezing, shortness of breath, chest tightness.",
    "treatments": [
      "Bronchodilators (inhaled medications)",
      "corticosteroids",
      "supplemental oxygen (if needed)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 203,
    "name": "Acute Glaucoma",
    "symptoms": [
      234,
      363,
      579
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe eye pain, blurred vision, halos around lights.",
    "treatments": [
      "Medications (eye drops)",
      "laser therapy",
      "surgery (in some cases)"
    ],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 204,
    "name": "Dislocation of the Patella",
    "symptoms": [
      151,
      894,
      615
    ],
    "severity": "medium",
    "description": "A medical condition characterized by knee pain, swelling, inability to straighten the leg.",
    "treatments": [
      "Manual reduction",
      "immobilization",
      "physical therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 205,
    "name": "Sciatica",
    "symptoms": [
      186
    ],
    "severity": "medium",
    "description": "A medical condition characterized by pain radiating from the lower back to the leg.",
    "treatments": [
      "Pain medications",
      "physical therapy",
      "stretching exercises"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 206,
    "name": "Hypercalcemia",
    "symptoms": [
      86,
      711,
      528,
      661
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, nausea, excessive thirst.",
    "treatments": [
      "Treating underlying cause",
      "hydration",
      "medications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 207,
    "name": "Stress Incontinence",
    "symptoms": [
      282
    ],
    "severity": "medium",
    "description": "A medical condition characterized by unintentional urine leakage during physical activity.",
    "treatments": [
      "Pelvic floor exercises",
      "behavioral techniques",
      "surgery (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 208,
    "name": "Benign Kidney Cyst",
    "symptoms": [
      2,
      356,
      571
    ],
    "severity": "medium",
    "description": "A medical condition characterized by abdominal or flank pain, blood in urine, frequent urination.",
    "treatments": [
      "Observation",
      "medication (if needed)",
      "surgery (in rare cases)"
    ],
    "specialty": "Nephrologist / Urologist"
  },
  {
    "id": 209,
    "name": "Hydrocele of the Testicle",
    "symptoms": [
      270
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swelling of the scrotum.",
    "treatments": [
      "Observation",
      "surgical drainage (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 210,
    "name": "Hirsutism",
    "symptoms": [
      70
    ],
    "severity": "medium",
    "description": "A medical condition characterized by excessive hair growth in women.",
    "treatments": [
      "Medications (anti-androgens",
      "oral contraceptives)",
      "hair removal methods",
      "lifestyle changes"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 211,
    "name": "Hydronephrosis",
    "symptoms": [
      89,
      956,
      897
    ],
    "severity": "medium",
    "description": "A medical condition characterized by flank pain, urinary frequency, swelling in the abdomen.",
    "treatments": [
      "Treating underlying cause",
      "medications",
      "ureteral stent",
      "surgery"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 212,
    "name": "Diverticulosis",
    "symptoms": [
      3,
      354,
      379
    ],
    "severity": "medium",
    "description": "A medical condition characterized by abdominal pain, bloating, changes in bowel movements.",
    "treatments": [
      "High-fiber diet",
      "medications (pain relievers",
      "antibiotics)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 213,
    "name": "Pain after an Operation",
    "symptoms": [
      266,
      473,
      894
    ],
    "severity": "medium",
    "description": "A medical condition characterized by surgical site pain, discomfort, swelling.",
    "treatments": [
      "Pain medications",
      "ice packs",
      "rest",
      "wound care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 214,
    "name": "Huntington Disease",
    "symptoms": [
      166,
      406,
      329
    ],
    "severity": "medium",
    "description": "A medical condition characterized by motor, cognitive, and psychiatric symptoms.",
    "treatments": [
      "Supportive care",
      "medications (to manage symptoms)",
      "therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 215,
    "name": "West Nile Virus",
    "symptoms": [
      88,
      580,
      367,
      807
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fever, headache, body aches.",
    "treatments": [
      "Supportive care",
      "symptom management",
      "prevention of mosquito bites"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 216,
    "name": "Lymphoma",
    "symptoms": [
      273,
      950,
      544
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swollen lymph nodes, unexplained weight loss, fatigue.",
    "treatments": [
      "Chemotherapy",
      "radiation therapy",
      "immunotherapy",
      "targeted therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 217,
    "name": "Dermatitis due to Sun Exposure",
    "symptoms": [
      223,
      649,
      807,
      353
    ],
    "severity": "medium",
    "description": "A medical condition characterized by redness, itching, rash.",
    "treatments": [
      "Topical corticosteroids",
      "moisturizers",
      "avoiding sun exposure"
    ],
    "specialty": "Dermatologist"
  },
  {
    "id": 218,
    "name": "Anemia due to Chronic Kidney Disease",
    "symptoms": [
      86,
      986,
      763
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, weakness, pale skin.",
    "treatments": [
      "Erythropoiesis-stimulating agents (ESA)",
      "iron supplementation",
      "blood transfusions (in severe cases)"
    ],
    "specialty": "Nephrologist / Urologist"
  },
  {
    "id": 219,
    "name": "Injury to Internal Organ",
    "symptoms": [
      3,
      346,
      744
    ],
    "severity": "medium",
    "description": "A medical condition characterized by abdominal pain, bleeding, organ dysfunction.",
    "treatments": [
      "Immediate medical attention",
      "diagnostic tests",
      "surgery (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 220,
    "name": "Scleritis",
    "symptoms": [
      79,
      850,
      363
    ],
    "severity": "medium",
    "description": "A medical condition characterized by eye redness, severe eye pain, blurred vision.",
    "treatments": [
      "Steroid eye drops",
      "nonsteroidal anti-inflammatory drugs (NSAIDs)",
      "immunosuppressants"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 221,
    "name": "Pterygium",
    "symptoms": [
      108
    ],
    "severity": "medium",
    "description": "A medical condition characterized by growth on the conjunctiva (white part of the eye).",
    "treatments": [
      "Artificial tears",
      "eye lubricants",
      "surgical removal (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 222,
    "name": "Fungal Infection of the Skin",
    "symptoms": [
      216,
      649,
      820,
      771
    ],
    "severity": "medium",
    "description": "A medical condition characterized by rash, itching, redness.",
    "treatments": [
      "Antifungal creams",
      "powders",
      "or oral medications",
      "proper hygiene and skin care"
    ],
    "specialty": "Dermatologist"
  },
  {
    "id": 223,
    "name": "Insulin Overdose",
    "symptoms": [
      155,
      414,
      892
    ],
    "severity": "medium",
    "description": "A medical condition characterized by low blood sugar (hypoglycemia) symptoms (e.g., confusion, sweating).",
    "treatments": [
      "Immediate treatment of hypoglycemia",
      "medical assistance",
      "adjusting insulin dosage and regimen"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 224,
    "name": "Syndrome of Inappropriate Secretion of ADH (SIADH)",
    "symptoms": [
      74,
      684
    ],
    "severity": "medium",
    "description": "A medical condition characterized by excessively concentrated urine, low blood sodium levels.",
    "treatments": [
      "Treating underlying cause",
      "fluid restriction",
      "medications to suppress ADH (vasopressin) secretion",
      "addressing electrolyte imbalance"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 225,
    "name": "Premenstrual Tension Syndrome",
    "symptoms": [
      164,
      354,
      373,
      647
    ],
    "severity": "medium",
    "description": "A medical condition characterized by mood swings, bloating, breast tenderness.",
    "treatments": [
      "Lifestyle changes",
      "medications (pain relievers",
      "hormonal contraceptives)",
      "therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 226,
    "name": "Orbital Cellulitis",
    "symptoms": [
      78,
      894,
      820,
      970
    ],
    "severity": "medium",
    "description": "A medical condition characterized by eye pain, swelling, redness.",
    "treatments": [
      "Antibiotics",
      "hospitalization (in severe cases)",
      "surgical drainage (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 227,
    "name": "Injury to the Leg",
    "symptoms": [
      182,
      894,
      375,
      463
    ],
    "severity": "medium",
    "description": "A medical condition characterized by pain, swelling, bruising.",
    "treatments": [
      "R.I.C.E. (Rest",
      "Ice",
      "Compression",
      "Elevation)",
      "pain medications",
      "physical therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 228,
    "name": "Hepatic Encephalopathy",
    "symptoms": [
      35,
      565,
      778,
      939
    ],
    "severity": "medium",
    "description": "A medical condition characterized by confusion, forgetfulness, personality changes.",
    "treatments": [
      "Treating underlying liver disease",
      "medications to manage symptoms",
      "dietary modifications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 229,
    "name": "Bone Cancer",
    "symptoms": [
      20,
      567,
      544,
      950
    ],
    "severity": "high",
    "description": "A medical condition characterized by bone pain, fractures, fatigue.",
    "treatments": [
      "Surgery",
      "chemotherapy",
      "radiation therapy",
      "targeted therapy"
    ],
    "specialty": "Oncologist"
  },
  {
    "id": 230,
    "name": "Leishmaniasis",
    "symptoms": [
      254,
      552,
      992,
      516
    ],
    "severity": "medium",
    "description": "A medical condition characterized by skin sores, fever, weight loss.",
    "treatments": [
      "Antiparasitic medications",
      "treatment of complications",
      "vector control measures (in endemic areas)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 231,
    "name": "Chagas Disease",
    "symptoms": [
      88,
      544,
      367,
      589
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fever, fatigue, body aches.",
    "treatments": [
      "Antiparasitic medications",
      "medications to manage symptoms",
      "supportive care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 232,
    "name": "Syringomyelia",
    "symptoms": [
      171,
      680,
      401
    ],
    "severity": "medium",
    "description": "A medical condition characterized by muscle weakness, loss of sensation, chronic pain.",
    "treatments": [
      "Surgical decompression",
      "draining of syrinx (cyst)",
      "physical therapy",
      "pain management techniques"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 233,
    "name": "Pulmonary Fibrosis",
    "symptoms": [
      251,
      491,
      544
    ],
    "severity": "medium",
    "description": "A medical condition characterized by shortness of breath, dry cough, fatigue.",
    "treatments": [
      "Medications (immunosuppressants",
      "antifibrotic drugs)",
      "oxygen therapy",
      "lung transplantation"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 234,
    "name": "Mitral Valve Disease",
    "symptoms": [
      86,
      856,
      594
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, shortness of breath, heart palpitations.",
    "treatments": [
      "Medications",
      "lifestyle changes",
      "surgical repair or replacement of the valve (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 235,
    "name": "Parkinson Disease",
    "symptoms": [
      280,
      883,
      867
    ],
    "severity": "medium",
    "description": "A medical condition characterized by tremors, stiffness, slowness of movement.",
    "treatments": [
      "Medications (levodopa",
      "dopamine agonists)",
      "physical therapy",
      "deep brain stimulation"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 236,
    "name": "Gout",
    "symptoms": [
      140,
      894,
      820
    ],
    "severity": "medium",
    "description": "A medical condition characterized by intense joint pain, swelling, redness.",
    "treatments": [
      "Medications (nonsteroidal anti-inflammatory drugs",
      "colchicine)",
      "lifestyle changes"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 237,
    "name": "Otitis Media",
    "symptoms": [
      57,
      552,
      561
    ],
    "severity": "medium",
    "description": "A medical condition characterized by ear pain, fever, fluid drainage from the ear.",
    "treatments": [
      "Antibiotics (if bacterial infection)",
      "pain relievers",
      "observation (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 238,
    "name": "Myelodysplastic Syndrome",
    "symptoms": [
      86,
      569,
      504
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, frequent infections, easy bruising or bleeding.",
    "treatments": [
      "Supportive care",
      "blood transfusions",
      "medications",
      "bone marrow transplantation (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 239,
    "name": "Fracture of the Shoulder",
    "symptoms": [
      252,
      894,
      670
    ],
    "severity": "medium",
    "description": "A medical condition characterized by shoulder pain, swelling, limited range of motion.",
    "treatments": [
      "Immobilization (sling",
      "brace)",
      "pain management",
      "physical therapy",
      "surgical intervention (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 240,
    "name": "Acute Kidney Injury",
    "symptoms": [
      40,
      562,
      544
    ],
    "severity": "medium",
    "description": "A medical condition characterized by decreased urine output, fluid retention, fatigue.",
    "treatments": [
      "Treating underlying cause",
      "supportive care",
      "medications to manage complications",
      "dialysis (in severe cases)"
    ],
    "specialty": "Nephrologist / Urologist"
  },
  {
    "id": 241,
    "name": "Threatened Pregnancy",
    "symptoms": [
      283,
      302,
      772
    ],
    "severity": "medium",
    "description": "A medical condition characterized by vaginal bleeding, abdominal cramps, pelvic pain.",
    "treatments": [
      "Bed rest",
      "medications (progesterone)",
      "monitoring",
      "avoiding activities that may stress the pregnancy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 242,
    "name": "Intracranial Abscess",
    "symptoms": [
      111,
      552,
      717
    ],
    "severity": "medium",
    "description": "A medical condition characterized by headache, fever, neurological deficits.",
    "treatments": [
      "Antibiotics",
      "surgical drainage or removal of the abscess",
      "supportive care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 243,
    "name": "Gum Disease",
    "symptoms": [
      271,
      817,
      914,
      349
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swollen, red, tender gums.",
    "treatments": [
      "Oral hygiene practices (brushing",
      "flossing)",
      "professional dental cleanings",
      "medications",
      "surgical interventions"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 244,
    "name": "Open Wound from Surgical Incision",
    "symptoms": [
      223,
      894,
      472
    ],
    "severity": "medium",
    "description": "A medical condition characterized by redness, swelling, discharge from the wound.",
    "treatments": [
      "Wound care (cleaning",
      "dressing changes)",
      "antibiotics (if infection is present)",
      "surgical interventions"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 245,
    "name": "Gastrointestinal Hemorrhage",
    "symptoms": [
      3,
      980,
      359
    ],
    "severity": "medium",
    "description": "A medical condition characterized by abdominal pain, vomiting blood, bloody or black stools.",
    "treatments": [
      "Blood transfusions",
      "endoscopy",
      "surgery (in severe cases)",
      "medications to stop bleeding"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 246,
    "name": "Seborrheic Dermatitis",
    "symptoms": [
      222,
      651,
      326,
      427,
      554
    ],
    "severity": "medium",
    "description": "A medical condition characterized by red, itchy, and oily patches of skin.",
    "treatments": [
      "Topical antifungal creams or ointments",
      "medicated shampoos",
      "corticosteroid creams"
    ],
    "specialty": "Dermatologist"
  },
  {
    "id": 247,
    "name": "Drug Abuse (Methamphetamine)",
    "symptoms": [
      132,
      432,
      803
    ],
    "severity": "medium",
    "description": "A medical condition characterized by increased energy and alertness, decreased appetite, rapid heartbeat.",
    "treatments": [
      "Detoxification",
      "counseling",
      "behavioral therapies",
      "support groups",
      "medication-assisted treatment (if applicable)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 248,
    "name": "Torticollis",
    "symptoms": [
      176,
      883,
      325
    ],
    "severity": "medium",
    "description": "A medical condition characterized by neck pain, stiffness, and abnormal head positioning.",
    "treatments": [
      "Physical therapy exercises",
      "pain relievers",
      "botulinum toxin injections (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 249,
    "name": "Antihypertensives Poisoning",
    "symptoms": [
      52,
      683,
      865,
      711,
      979
    ],
    "severity": "medium",
    "description": "A medical condition characterized by dizziness, low blood pressure, slow heart rate.",
    "treatments": [
      "Immediate medical attention",
      "activated charcoal administration",
      "supportive care",
      "specific antidotes"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 250,
    "name": "Tension Headache",
    "symptoms": [
      163,
      927
    ],
    "severity": "medium",
    "description": "A medical condition characterized by mild to moderate head pain, tightness or pressure sensation on both sides of head.",
    "treatments": [
      "Over-the-counter pain relievers",
      "relaxation techniques",
      "stress management"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 251,
    "name": "Alcohol Intoxication",
    "symptoms": [
      257,
      606,
      414
    ],
    "severity": "medium",
    "description": "A medical condition characterized by slurred speech, impaired coordination, confusion.",
    "treatments": [
      "Supportive care",
      "ensuring hydration",
      "monitoring vital signs",
      "prevention of complications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 252,
    "name": "Scurvy",
    "symptoms": [
      86,
      904,
      659
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, swollen and bleeding gums, joint pain.",
    "treatments": [
      "Vitamin C supplementation",
      "dietary changes",
      "oral hygiene maintenance"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 253,
    "name": "Narcolepsy",
    "symptoms": [
      69,
      889
    ],
    "severity": "medium",
    "description": "A medical condition characterized by excessive daytime sleepiness, sudden loss of muscle tone (cataplexy).",
    "treatments": [
      "Stimulant medications",
      "antidepressants",
      "lifestyle modifications",
      "scheduled naps"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 254,
    "name": "Food Allergy",
    "symptoms": [
      216,
      649,
      894,
      444,
      575
    ],
    "severity": "medium",
    "description": "A medical condition characterized by rash, itching, swelling.",
    "treatments": [
      "Avoidance of allergenic food",
      "antihistamines",
      "epinephrine (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 255,
    "name": "Labyrinthitis",
    "symptoms": [
      288,
      481,
      711,
      586,
      499
    ],
    "severity": "medium",
    "description": "A medical condition characterized by vertigo, dizziness, nausea.",
    "treatments": [
      "Medications (antibiotics",
      "antivirals)",
      "vestibular rehabilitation therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 256,
    "name": "Anxiety",
    "symptoms": [
      73,
      831,
      619,
      767
    ],
    "severity": "medium",
    "description": "A medical condition characterized by excessive worrying, restlessness, increased heart rate.",
    "treatments": [
      "Therapy (cognitive-behavioral therapy",
      "psychotherapy)",
      "medications (antidepressants",
      "anti-anxiety drugs)"
    ],
    "specialty": "Psychiatrist / Psychologist"
  },
  {
    "id": 257,
    "name": "Impulse Control Disorder",
    "symptoms": [
      127,
      573,
      882,
      456
    ],
    "severity": "medium",
    "description": "A medical condition characterized by impulsive behaviors (e.g., gambling, stealing).",
    "treatments": [
      "Psychotherapy",
      "medication (in some cases)",
      "support groups",
      "behavioral interventions"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 258,
    "name": "Stenosis of the Tear Duct",
    "symptoms": [
      72,
      529,
      815
    ],
    "severity": "medium",
    "description": "A medical condition characterized by excessive tearing, eye discharge, recurrent eye infections.",
    "treatments": [
      "Tear duct probing",
      "dilation",
      "surgical correction"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 259,
    "name": "Abscess of Nose",
    "symptoms": [
      182,
      894,
      820,
      471
    ],
    "severity": "medium",
    "description": "A medical condition characterized by pain, swelling, redness.",
    "treatments": [
      "Antibiotics",
      "warm compresses",
      "surgical drainage (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 260,
    "name": "Omphalitis",
    "symptoms": [
      223,
      894,
      469,
      566
    ],
    "severity": "medium",
    "description": "A medical condition characterized by redness, swelling, discharge.",
    "treatments": [
      "Antibiotics",
      "wound care",
      "surgical intervention (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 261,
    "name": "Leukemia",
    "symptoms": [
      86,
      763,
      569,
      502
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, pale skin, frequent infections.",
    "treatments": [
      "Chemotherapy",
      "radiation therapy",
      "stem cell transplant",
      "targeted therapy",
      "supportive care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 262,
    "name": "Bell Palsy",
    "symptoms": [
      85,
      488
    ],
    "severity": "medium",
    "description": "A medical condition characterized by facial weakness or paralysis, drooping of the mouth or eyelid.",
    "treatments": [
      "Corticosteroids",
      "antiviral medications",
      "eye protection",
      "physical therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 263,
    "name": "Conjunctivitis due to Allergy",
    "symptoms": [
      223,
      649,
      982,
      906
    ],
    "severity": "medium",
    "description": "A medical condition characterized by redness, itching, watery discharge.",
    "treatments": [
      "Allergen avoidance",
      "antihistamine eye drops",
      "cold compresses",
      "lubricating eye drops"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 264,
    "name": "Drug Reaction",
    "symptoms": [
      216,
      649,
      894,
      552,
      829
    ],
    "severity": "medium",
    "description": "A medical condition characterized by rash, itching, swelling.",
    "treatments": [
      "Discontinuation of the offending drug",
      "supportive care",
      "antihistamines",
      "corticosteroids (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 265,
    "name": "Adrenal Cancer",
    "symptoms": [
      1,
      950,
      602
    ],
    "severity": "high",
    "description": "A medical condition characterized by abdominal or back pain, unexplained weight loss, hormonal imbalances.",
    "treatments": [
      "Surgery (adrenalectomy)",
      "chemotherapy",
      "radiation therapy",
      "targeted therapy",
      "hormone replacement therapy"
    ],
    "specialty": "Nephrologist / Urologist"
  },
  {
    "id": 266,
    "name": "Myopia",
    "symptoms": [
      15,
      535,
      881
    ],
    "severity": "medium",
    "description": "A medical condition characterized by blurred distance vision, eyestrain, squinting.",
    "treatments": [
      "Eyeglasses",
      "contact lenses",
      "refractive surgery (LASIK)",
      "orthokeratology (for some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 267,
    "name": "Osteoarthritis",
    "symptoms": [
      149,
      883,
      894
    ],
    "severity": "medium",
    "description": "A medical condition characterized by joint pain, stiffness, swelling.",
    "treatments": [
      "Pain relievers",
      "physical therapy",
      "weight management",
      "assistive devices",
      "surgery (in severe cases)"
    ],
    "specialty": "Orthopedist / Rheumatologist"
  },
  {
    "id": 268,
    "name": "Thyroid Disease",
    "symptoms": [
      86,
      989,
      701,
      495
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, weight changes, mood swings.",
    "treatments": [
      "Medications (thyroid hormone replacement",
      "antithyroid drugs)",
      "radioactive iodine therapy",
      "surgery (in some cases)"
    ],
    "specialty": "Endocrinologist"
  },
  {
    "id": 269,
    "name": "Pharyngitis",
    "symptoms": [
      260,
      460,
      909
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sore throat, difficulty swallowing, swollen lymph nodes.",
    "treatments": [
      "Rest",
      "pain relievers",
      "throat lozenges",
      "antibiotics (if bacterial infection)",
      "symptomatic relief"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 270,
    "name": "Chronic Rheumatic Fever",
    "symptoms": [
      149,
      552,
      807,
      593
    ],
    "severity": "medium",
    "description": "A medical condition characterized by joint pain, fever, rash.",
    "treatments": [
      "Antibiotics (to treat streptococcal infections)",
      "anti-inflammatory medications",
      "medications for heart complications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 271,
    "name": "Hypocalcemia",
    "symptoms": [
      179,
      706
    ],
    "severity": "medium",
    "description": "A medical condition characterized by numbness or tingling in fingers or around the mouth, muscle cramps.",
    "treatments": [
      "Calcium and vitamin D supplements",
      "treating underlying causes",
      "intravenous calcium (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 272,
    "name": "Macular Degeneration",
    "symptoms": [
      16,
      351
    ],
    "severity": "medium",
    "description": "A medical condition characterized by blurred or distorted central vision, blind spots.",
    "treatments": [
      "Vision aids",
      "medications (injections into the eye)",
      "laser therapy",
      "photodynamic therapy",
      "surgical intervention"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 273,
    "name": "Pneumonia",
    "symptoms": [
      36,
      552,
      392,
      444
    ],
    "severity": "medium",
    "description": "A medical condition characterized by cough, fever, chest pain.",
    "treatments": [
      "Antibiotics",
      "antiviral medications (if applicable)",
      "rest",
      "fluids",
      "symptomatic relief"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 274,
    "name": "Cold Sore",
    "symptoms": [
      258,
      758
    ],
    "severity": "low",
    "description": "A medical condition characterized by small, painful blisters on the lips or around the mouth.",
    "treatments": [
      "Antiviral medications (topical or oral)",
      "pain relievers",
      "antiviral creams",
      "self-care measures"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 275,
    "name": "Premature Ventricular Contractions (PVCs)",
    "symptoms": [
      255,
      765,
      668
    ],
    "severity": "medium",
    "description": "A medical condition characterized by skipped or extra heartbeats, palpitations, lightheadedness.",
    "treatments": [
      "Monitoring (in most cases)",
      "lifestyle changes",
      "medications (beta-blockers",
      "antiarrhythmics)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 276,
    "name": "Chancroid",
    "symptoms": [
      191,
      910
    ],
    "severity": "medium",
    "description": "A medical condition characterized by painful ulcers or sores on the genital area, swollen lymph nodes in the groin.",
    "treatments": [
      "Antibiotics (such as azithromycin or ceftriaxone)",
      "pain management",
      "warm compresses",
      "good hygiene"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 277,
    "name": "Testicular Cancer",
    "symptoms": [
      159,
      754,
      388
    ],
    "severity": "high",
    "description": "A medical condition characterized by lump or swelling in the testicles, pain or discomfort, changes in testicular size or shape.",
    "treatments": [
      "Surgery (orchiectomy)",
      "chemotherapy",
      "radiation therapy",
      "surveillance (for some cases)"
    ],
    "specialty": "Oncologist"
  },
  {
    "id": 278,
    "name": "Hydrocephalus",
    "symptoms": [
      111,
      711,
      979,
      411,
      513
    ],
    "severity": "medium",
    "description": "A medical condition characterized by headache, nausea, vomiting.",
    "treatments": [
      "Shunt placement (to divert excess cerebrospinal fluid)",
      "endoscopic third ventriculostomy",
      "medication (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 279,
    "name": "Breast Cancer",
    "symptoms": [
      21,
      381,
      721,
      372
    ],
    "severity": "high",
    "description": "A medical condition characterized by breast lump, changes in breast size or shape, nipple changes.",
    "treatments": [
      "Surgery (lumpectomy or mastectomy)",
      "radiation therapy",
      "chemotherapy",
      "hormone therapy",
      "targeted therapy"
    ],
    "specialty": "Oncologist"
  },
  {
    "id": 280,
    "name": "Anemia due to Malignancy",
    "symptoms": [
      86,
      986,
      856,
      763
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, weakness, shortness of breath.",
    "treatments": [
      "Treating underlying malignancy",
      "blood transfusions",
      "medications (erythropoiesis-stimulating agents",
      "iron supplements)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 281,
    "name": "Esophageal Varices",
    "symptoms": [
      272,
      980,
      345,
      913
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swollen blood vessels in the esophagus, vomiting blood, black.",
    "treatments": [
      "Medications (beta-blockers",
      "vasoconstrictors)",
      "endoscopic therapies",
      "band ligation",
      "transjugular intrahepatic portosystemic shunt (TIPS)",
      "surgical interventions"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 282,
    "name": "Endometrial Cancer",
    "symptoms": [
      7,
      773,
      380
    ],
    "severity": "high",
    "description": "A medical condition characterized by abnormal vaginal bleeding, pelvic pain or discomfort, changes in bowel or bladder habits.",
    "treatments": [
      "Surgery (hysterectomy)",
      "radiation therapy",
      "chemotherapy",
      "hormone therapy"
    ],
    "specialty": "Oncologist"
  },
  {
    "id": 283,
    "name": "Cystic Fibrosis",
    "symptoms": [
      203,
      816,
      785,
      840
    ],
    "severity": "medium",
    "description": "A medical condition characterized by persistent cough with thick mucus, recurrent lung infections, poor growth or weight gain.",
    "treatments": [
      "Medications (mucus-thinning drugs",
      "bronchodilators)",
      "chest physical therapy",
      "enzyme supplements",
      "lung transplant (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 284,
    "name": "Intertrigo",
    "symptoms": [
      222,
      811,
      737,
      650
    ],
    "severity": "medium",
    "description": "A medical condition characterized by red, raw, or inflamed skin in skin folds (such as armpits or groin).",
    "treatments": [
      "Keeping the affected area clean and dry",
      "applying topical antifungal or antibacterial creams",
      "using barrier creams"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 285,
    "name": "Parathyroid Adenoma",
    "symptoms": [
      86,
      986,
      368,
      571,
      661
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, weakness, bone pain.",
    "treatments": [
      "Surgical removal of the adenoma (parathyroidectomy)",
      "medications to manage calcium levels"
    ],
    "specialty": "Endocrinologist"
  },
  {
    "id": 286,
    "name": "Glucocorticoid Deficiency",
    "symptoms": [
      86,
      986,
      992,
      683,
      304
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, weakness, weight loss.",
    "treatments": [
      "Hormone replacement therapy with glucocorticoid medications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 287,
    "name": "Temporomandibular Joint Disorder",
    "symptoms": [
      148,
      402,
      446
    ],
    "severity": "medium",
    "description": "A medical condition characterized by jaw pain or tenderness, clicking or popping sounds in the jaw joint, difficulty chewing or opening the mouth.",
    "treatments": [
      "Self-care measures (rest",
      "applying heat or cold",
      "jaw exercises)",
      "pain medications",
      "physical therapy",
      "oral splints"
    ],
    "specialty": "Orthopedist / Rheumatologist"
  },
  {
    "id": 288,
    "name": "Wilson Disease",
    "symptoms": [
      86,
      309,
      654,
      719,
      458
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, abdominal pain or swelling, jaundice.",
    "treatments": [
      "Medications to remove copper from the body (chelators)",
      "dietary changes",
      "liver transplant (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 289,
    "name": "Vesicoureteral Reflux",
    "symptoms": [
      97,
      960,
      344,
      600
    ],
    "severity": "medium",
    "description": "A medical condition characterized by frequent urinary tract infections, urinary urgency or frequency, bedwetting (in children).",
    "treatments": [
      "Antibiotics",
      "bladder training exercises",
      "surgical correction (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 290,
    "name": "Vitamin A Deficiency",
    "symptoms": [
      178,
      492,
      494,
      787,
      985
    ],
    "severity": "medium",
    "description": "A medical condition characterized by night blindness, dry eyes, dry or rough skin.",
    "treatments": [
      "Vitamin A supplementation",
      "dietary changes to include foods rich in vitamin A"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 291,
    "name": "Gonorrhea",
    "symptoms": [
      192,
      314,
      772
    ],
    "severity": "medium",
    "description": "A medical condition characterized by painful urination, abnormal discharge from the genitals, pelvic pain.",
    "treatments": [
      "Antibiotics (dual therapy with ceftriaxone and azithromycin)",
      "safe sexual practices",
      "partner notification"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 292,
    "name": "Fracture of the Rib",
    "symptoms": [
      25,
      444,
      918
    ],
    "severity": "medium",
    "description": "A medical condition characterized by chest pain, difficulty breathing, tenderness or swelling over the ribcage.",
    "treatments": [
      "Pain management",
      "rest",
      "immobilization (splinting or bracing)",
      "physical therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 293,
    "name": "Ependymoma",
    "symptoms": [
      112,
      711,
      844,
      382
    ],
    "severity": "medium",
    "description": "A medical condition characterized by headaches, nausea, seizures.",
    "treatments": [
      "Surgery",
      "radiation therapy",
      "chemotherapy",
      "targeted therapy",
      "rehabilitation"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 294,
    "name": "Hepatitis due to a Toxin",
    "symptoms": [
      86,
      654,
      304,
      711,
      979
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, jaundice, abdominal pain.",
    "treatments": [
      "Supportive care",
      "removal or avoidance of the toxic substance",
      "management of symptoms"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 295,
    "name": "Vaginal Cyst",
    "symptoms": [
      259,
      476
    ],
    "severity": "medium",
    "description": "A medical condition characterized by small lump or swelling in the vaginal wall, discomfort or pain during intercourse.",
    "treatments": [
      "Observation (if asymptomatic)",
      "warm compresses",
      "sitz baths",
      "surgical removal (if necessary)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 296,
    "name": "Chronic Knee Pain",
    "symptoms": [
      209,
      883,
      894,
      670
    ],
    "severity": "medium",
    "description": "A medical condition characterized by persistent knee pain, stiffness, swelling.",
    "treatments": [
      "Pain management",
      "physical therapy",
      "lifestyle modifications",
      "knee braces or supports"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 297,
    "name": "Pinguecula",
    "symptoms": [
      301,
      963
    ],
    "severity": "medium",
    "description": "A medical condition characterized by yellowish or white growth on the conjunctiva (eye's surface), usually near the cornea.",
    "treatments": [
      "Artificial tears",
      "lubricating eye drops",
      "sunglasses for UV protection",
      "surgical removal (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 298,
    "name": "Hypergammaglobulinemia",
    "symptoms": [
      63,
      690
    ],
    "severity": "medium",
    "description": "A medical condition characterized by elevated levels of gamma globulins in the blood, may be asymptomatic or associated with other underlying conditions.",
    "treatments": [
      "Treatment of underlying cause or associated condition",
      "immunosuppressive therapy (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 299,
    "name": "Pituitary Disorder",
    "symptoms": [
      287,
      616
    ],
    "severity": "medium",
    "description": "A medical condition characterized by various symptoms depending on the specific disorder, including hormonal imbalances.",
    "treatments": [
      "Treatment depends on the specific pituitary disorder and may involve medications",
      "surgery",
      "hormone replacement therapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 300,
    "name": "Kidney Stone",
    "symptoms": [
      241,
      355,
      571
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe pain in the side or back, blood in the urine, frequent urination.",
    "treatments": [
      "Pain management",
      "increased fluid intake",
      "medication to facilitate stone passage",
      "minimally invasive procedures or surgery"
    ],
    "specialty": "Nephrologist / Urologist"
  },
  {
    "id": 301,
    "name": "Autism",
    "symptoms": [
      23,
      413,
      832
    ],
    "severity": "medium",
    "description": "A medical condition characterized by challenges with social interaction, communication difficulties, restricted interests or repetitive behaviors.",
    "treatments": [
      "Behavioral therapy",
      "educational interventions",
      "speech and language therapy",
      "medications for associated symptoms"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 302,
    "name": "Cat Scratch Disease",
    "symptoms": [
      273,
      552,
      544,
      580,
      807
    ],
    "severity": "medium",
    "description": "A medical condition characterized by swollen lymph nodes, fever, fatigue.",
    "treatments": [
      "Antibiotics (azithromycin",
      "doxycycline)",
      "pain management",
      "supportive care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 303,
    "name": "Chronic Glaucoma",
    "symptoms": [
      106,
      777,
      532,
      579
    ],
    "severity": "medium",
    "description": "A medical condition characterized by gradual vision loss, peripheral vision impairment, eye pain or discomfort.",
    "treatments": [
      "Eye drops (to reduce intraocular pressure)",
      "oral medications",
      "laser therapy",
      "surgery (trabeculectomy",
      "implantable devices)",
      "regular eye exams"
    ],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 304,
    "name": "Retinal Detachment",
    "symptoms": [
      90,
      557,
      425,
      890
    ],
    "severity": "medium",
    "description": "A medical condition characterized by floaters (spots or cobweb-like shapes in vision), flashes of light, curtain-like shadow over vision.",
    "treatments": [
      "Surgical intervention (pneumatic retinopexy",
      "scleral buckle",
      "vitrectomy)",
      "laser therapy",
      "cryotherapy",
      "gas or silicone oil injection",
      "positioning",
      "regular eye exams"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 305,
    "name": "Aplastic Anemia",
    "symptoms": [
      86,
      763,
      569,
      856,
      804,
      794
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, pale skin, frequent infections.",
    "treatments": [
      "Blood transfusions",
      "bone marrow-stimulating medications",
      "immunosuppressive therapy",
      "stem cell transplant (in severe cases)",
      "supportive care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 306,
    "name": "Overflow Incontinence",
    "symptoms": [
      96,
      611,
      984
    ],
    "severity": "medium",
    "description": "A medical condition characterized by frequent or constant dribbling of urine, inability to completely empty the bladder, weak urine stream.",
    "treatments": [
      "Bladder training exercises",
      "double voiding",
      "catheterization",
      "medications (alpha-blockers",
      "anticholinergics)",
      "surgery (in severe cases)",
      "lifestyle modifications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 307,
    "name": "Rabies",
    "symptoms": [
      92,
      580,
      545,
      333,
      414,
      578,
      460
    ],
    "severity": "medium",
    "description": "A medical condition characterized by flu-like symptoms (fever, headache, fatigue).",
    "treatments": [
      "Immediate medical attention (post-exposure prophylaxis)",
      "wound care",
      "administration of rabies vaccine and immunoglobulin",
      "supportive care",
      "monitoring and management of symptoms"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 308,
    "name": "Hemolytic Anemia",
    "symptoms": [
      86,
      986,
      763,
      856,
      654
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, weakness, pale skin.",
    "treatments": [
      "Treatment of underlying cause",
      "blood transfusions",
      "medications (immunosuppressants",
      "corticosteroids)",
      "splenectomy (in some cases)",
      "supportive care",
      "folic acid or iron supplementation"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 309,
    "name": "Lateral Epicondylitis (Tennis Elbow)",
    "symptoms": [
      185,
      983,
      466
    ],
    "severity": "medium",
    "description": "A medical condition characterized by pain or tenderness on the outer side of the elbow, weak grip strength, difficulty with forearm movements.",
    "treatments": [
      "Rest",
      "ice or cold therapy",
      "compression",
      "elbow brace or strap",
      "pain relievers",
      "physical therapy exercises",
      "corticosteroid injections (in severe cases)",
      "ergonomic modifications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 310,
    "name": "Syphilis",
    "symptoms": [
      213,
      843,
      552,
      909,
      873,
      665,
      920,
      371,
      327
    ],
    "severity": "medium",
    "description": "A medical condition characterized by primary stage: painless sores (chancre) at the site of infection, secondary stage: skin rash, fever.",
    "treatments": [
      "Antibiotics (usually penicillin)",
      "treatment of complications",
      "regular follow-up and testing"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 311,
    "name": "Diabetic Kidney Disease",
    "symptoms": [
      118,
      622,
      899,
      544,
      711,
      675
    ],
    "severity": "medium",
    "description": "A medical condition characterized by high blood pressure, increased need to urinate, swelling in the legs and ankles.",
    "treatments": [
      "Blood pressure control",
      "blood sugar control",
      "medications to protect the kidneys (such as ACE inhibitors or ARBs)",
      "lifestyle modifications (healthy diet",
      "regular exercise",
      "quitting smoking)",
      "management of underlying diabetes",
      "treatment of complications (such as dialysis or kidney transplantation in advanced stages)"
    ],
    "specialty": "Nephrologist / Urologist"
  },
  {
    "id": 312,
    "name": "Nose Disorder",
    "symptoms": [
      173,
      839,
      871,
      537,
      682
    ],
    "severity": "medium",
    "description": "A medical condition characterized by nasal congestion, runny nose, sneezing.",
    "treatments": [
      "Treatment depends on the underlying cause (such as allergies",
      "sinusitis",
      "or nasal polyps)",
      "and may include medications (such as decongestants",
      "antihistamines",
      "nasal sprays)",
      "saline nasal irrigation",
      "steam inhalation",
      "allergy management",
      "antibiotics (if bacterial infection is present)",
      "surgical intervention (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 313,
    "name": "Drug Withdrawal",
    "symptoms": [
      11,
      831,
      647,
      939,
      891,
      711,
      979,
      634,
      490
    ],
    "severity": "medium",
    "description": "A medical condition characterized by anxiety, restlessness, irritability.",
    "treatments": [
      "Gradual tapering of the drug under medical supervision",
      "medications to manage withdrawal symptoms (such as benzodiazepines",
      "clonidine",
      "or buprenorphine)",
      "behavioral therapy",
      "support groups",
      "counseling",
      "rehabilitation programs"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 314,
    "name": "Dental Caries",
    "symptoms": [
      278,
      937,
      968,
      429,
      341
    ],
    "severity": "medium",
    "description": "A medical condition characterized by toothache, tooth sensitivity, visible pits or holes in the teeth.",
    "treatments": [
      "Dental fillings",
      "crowns",
      "root canal treatment",
      "tooth extraction (in severe cases)",
      "oral hygiene practices (brushing and flossing)",
      "regular dental check-ups",
      "fluoride treatments",
      "dietary modifications (reducing sugary and acidic foods and drinks)",
      "dental sealants (for prevention)",
      "education on proper oral care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 315,
    "name": "Hypercholesterolemia",
    "symptoms": [
      123,
      546,
      393,
      591,
      885
    ],
    "severity": "medium",
    "description": "A medical condition characterized by high levels of cholesterol in the blood, fatty deposits (xanthomas) on the skin or tendons, chest pain or angina.",
    "treatments": [
      "Lifestyle modifications (healthy diet",
      "regular exercise",
      "weight management",
      "smoking cessation)",
      "medications to lower cholesterol levels (such as statins)",
      "regular monitoring of cholesterol levels",
      "management of underlying conditions (such as diabetes or high blood pressure)",
      "potential additional treatments (such as bile acid sequestrants or PCSK9 inhibitors)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 316,
    "name": "Fracture of the Patella",
    "symptoms": [
      240,
      894,
      375,
      459,
      436
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe pain, swelling, bruising.",
    "treatments": [
      "Immobilization (splint",
      "cast",
      "or brace)",
      "pain management",
      "physical therapy",
      "exercises to restore mobility and strength",
      "potential surgical intervention (in severe cases or if displacement is present)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 317,
    "name": "Kidney Failure",
    "symptoms": [
      40,
      562,
      544,
      856,
      711,
      414,
      392,
      844
    ],
    "severity": "high",
    "description": "A medical condition characterized by decreased urine output, fluid retention, fatigue.",
    "treatments": [
      "Treatment depends on the underlying cause and may include medications to manage blood pressure and symptoms",
      "dietary modifications (restricting salt",
      "protein",
      "and potassium)",
      "dialysis (hemodialysis or peritoneal dialysis) or kidney transplantation (in end-stage kidney failure)",
      "treatment of complications",
      "management of fluid and electrolyte balance",
      "lifestyle modifications (exercise",
      "quitting smoking",
      "healthy diet)"
    ],
    "specialty": "Nephrologist / Urologist"
  },
  {
    "id": 318,
    "name": "Fracture of the Neck",
    "symptoms": [
      239,
      894,
      915,
      454,
      726
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe neck pain, swelling, tenderness.",
    "treatments": [
      "Immobilization (cervical collar",
      "brace)",
      "pain management",
      "potential surgical intervention (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 319,
    "name": "Muscle Spasm",
    "symptoms": [
      261,
      642,
      707,
      883,
      670
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sudden, involuntary muscle contractions, muscle pain.",
    "treatments": [
      "Stretching and relaxation exercises",
      "heat or cold therapy",
      "over-the-counter pain relievers",
      "muscle relaxants",
      "physical therapy",
      "lifestyle modifications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 320,
    "name": "Hemophilia",
    "symptoms": [
      67,
      793,
      878
    ],
    "severity": "medium",
    "description": "A medical condition characterized by excessive bleeding and bruising, prolonged bleeding from wounds or after dental work or surgery, spontaneous bleeding in joints or muscles.",
    "treatments": [
      "Replacement therapy with clotting factor concentrates",
      "medications to control bleeding",
      "physical therapy",
      "joint protection measures",
      "genetic counseling and testing for family members"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 321,
    "name": "Hyperosmotic Hyperketotic State",
    "symptoms": [
      131,
      621,
      528,
      571,
      544,
      414,
      572
    ],
    "severity": "medium",
    "description": "A medical condition characterized by increased blood sugar levels, increased ketone production, excessive thirst.",
    "treatments": [
      "Insulin therapy to regulate blood sugar levels",
      "intravenous fluids to correct dehydration",
      "electrolyte replacement",
      "correction of underlying causes (e.g.",
      "diabetes management)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 322,
    "name": "Peritonsillar Abscess",
    "symptoms": [
      242,
      460,
      552,
      911,
      978,
      715
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe sore throat, difficulty swallowing, fever.",
    "treatments": [
      "Antibiotics to treat infection",
      "drainage of the abscess (needle aspiration or incision and drainage)",
      "pain relievers",
      "warm saltwater gargles",
      "rest",
      "fluids",
      "surgical removal of the tonsils (in chronic or recurrent cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 323,
    "name": "Gastroparesis",
    "symptoms": [
      174,
      979,
      501,
      354,
      304,
      783
    ],
    "severity": "medium",
    "description": "A medical condition characterized by nausea, vomiting, early satiety.",
    "treatments": [
      "Dietary modifications (small",
      "frequent meals; low-fiber",
      "low-fat diet)",
      "medication to promote gastric emptying",
      "managing underlying cause if possible"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 324,
    "name": "Fat Embolism",
    "symptoms": [
      226,
      392,
      414,
      780,
      718
    ],
    "severity": "medium",
    "description": "A medical condition characterized by respiratory distress, chest pain, confusion.",
    "treatments": [
      "Supportive care (oxygen therapy",
      "fluid resuscitation)",
      "managing symptoms (pain medication",
      "anticoagulants)",
      "treatment of underlying cause if possible"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 325,
    "name": "Polycythemia Vera",
    "symptoms": [
      134,
      544,
      580,
      481,
      649,
      515
    ],
    "severity": "medium",
    "description": "A medical condition characterized by increased red blood cell count, fatigue, headache.",
    "treatments": [
      "Phlebotomy (removal of blood)",
      "medication (hydroxyurea",
      "interferon)",
      "low-dose aspirin",
      "managing complications (blood thinners",
      "medication for itching)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 326,
    "name": "Thrombocytopenia",
    "symptoms": [
      59,
      792,
      779,
      722,
      526
    ],
    "severity": "medium",
    "description": "A medical condition characterized by easy bruising, prolonged bleeding from cuts, petechiae (red or purple spots on the skin).",
    "treatments": [
      "Treatment of underlying cause",
      "platelet transfusion (if severe)",
      "medication (corticosteroids",
      "immunosuppressants)",
      "avoiding medications that can worsen platelet counts"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 327,
    "name": "Head and Neck Cancer",
    "symptoms": [
      211,
      460,
      978,
      499,
      714,
      992
    ],
    "severity": "high",
    "description": "A medical condition characterized by persistent sore throat, difficulty swallowing, voice changes.",
    "treatments": [
      "Treatment depends on the specific type and stage of cancer",
      "and may include surgery",
      "radiation therapy",
      "chemotherapy",
      "targeted therapy",
      "immunotherapy"
    ],
    "specialty": "Oncologist"
  },
  {
    "id": 328,
    "name": "Pseudohypoparathyroidism",
    "symptoms": [
      125,
      921,
      855,
      838
    ],
    "severity": "medium",
    "description": "A medical condition characterized by hypocalcemia (low calcium levels), tetany (muscle spasms), short stature.",
    "treatments": [
      "Calcium and vitamin D supplementation",
      "management of complications",
      "hormone replacement therapy (if necessary)"
    ],
    "specialty": "Endocrinologist"
  },
  {
    "id": 329,
    "name": "Goiter",
    "symptoms": [
      65,
      902,
      461
    ],
    "severity": "medium",
    "description": "A medical condition characterized by enlarged thyroid gland in the neck, swelling or visible protrusion, difficulty swallowing or breathing.",
    "treatments": [
      "Treatment depends on the underlying cause (medication",
      "radioactive iodine therapy",
      "surgery)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 330,
    "name": "Urge Incontinence",
    "symptoms": [
      261,
      638
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sudden, intense urge to urinate followed by involuntary urine leakage.",
    "treatments": [
      "Behavioral therapies (bladder training",
      "pelvic floor exercises)",
      "medications (anticholinergics",
      "beta-3 agonists)",
      "medical devices"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 331,
    "name": "Edward Syndrome",
    "symptoms": [
      44,
      637,
      478,
      685,
      592
    ],
    "severity": "medium",
    "description": "A medical condition characterized by developmental delays, intellectual disability, distinct facial features (small jaw.",
    "treatments": [
      "Supportive care",
      "addressing associated medical issues",
      "early intervention programs",
      "palliative care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 332,
    "name": "Muscular Dystrophy",
    "symptoms": [
      214,
      464,
      708
    ],
    "severity": "medium",
    "description": "A medical condition characterized by progressive muscle weakness and degeneration, difficulty walking or moving, muscle wasting.",
    "treatments": [
      "Supportive care",
      "physical therapy",
      "assistive devices",
      "medications for symptom management",
      "gene therapies (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 333,
    "name": "Mittelschmerz",
    "symptoms": [
      156
    ],
    "severity": "medium",
    "description": "A medical condition characterized by lower abdominal pain and discomfort occurring around the time of ovulation.",
    "treatments": [
      "Pain management (over-the-counter pain relievers",
      "heat therapy)",
      "hormonal birth control (if severe or recurrent)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 334,
    "name": "Corneal Abrasion",
    "symptoms": [
      78,
      820,
      564,
      846
    ],
    "severity": "medium",
    "description": "A medical condition characterized by eye pain, redness, foreign body sensation.",
    "treatments": [
      "Eye patching",
      "lubricating eye drops",
      "antibiotic ointments (if infected)",
      "avoiding further eye irritation"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 335,
    "name": "Anemia of Chronic Disease",
    "symptoms": [
      86,
      986,
      763,
      856,
      433
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, weakness, pale skin.",
    "treatments": [
      "Treating the underlying chronic disease",
      "addressing nutritional deficiencies",
      "blood transfusions (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 336,
    "name": "Dysthymic Disorder",
    "symptoms": [
      205,
      663,
      387,
      664
    ],
    "severity": "medium",
    "description": "A medical condition characterized by persistent depressive symptoms (low mood, lack of interest, changes in sleep and appetite).",
    "treatments": [
      "Psychotherapy (cognitive-behavioral therapy",
      "interpersonal therapy)",
      "antidepressant medications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 337,
    "name": "Scarlet Fever",
    "symptoms": [
      260,
      552,
      808,
      841,
      907
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sore throat, fever, rash (red.",
    "treatments": [
      "Antibiotics (such as penicillin or erythromycin)",
      "rest",
      "fluids",
      "symptomatic relief"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 338,
    "name": "Hypertensive Heart Disease",
    "symptoms": [
      118,
      394,
      856,
      544
    ],
    "severity": "medium",
    "description": "A medical condition characterized by high blood pressure, chest pain or discomfort, shortness of breath.",
    "treatments": [
      "Medications (antihypertensives)",
      "lifestyle changes (healthy diet",
      "exercise",
      "stress management)",
      "treatment of underlying conditions"
    ],
    "specialty": "Cardiologist"
  },
  {
    "id": 339,
    "name": "Drug Abuse (Barbiturates)",
    "symptoms": [
      228,
      489,
      868,
      414,
      827
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sedation, drowsiness, slurred speech.",
    "treatments": [
      "Medical detoxification",
      "supportive care",
      "counseling",
      "rehabilitation programs"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 340,
    "name": "Polycystic Ovarian Syndrome",
    "symptoms": [
      142,
      525,
      320,
      990,
      747
    ],
    "severity": "medium",
    "description": "A medical condition characterized by irregular periods, excessive hair growth, acne.",
    "treatments": [
      "Lifestyle changes (diet",
      "exercise",
      "weight management)",
      "hormonal contraceptives",
      "fertility treatments (if needed)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 341,
    "name": "Encephalitis",
    "symptoms": [
      111,
      552,
      414,
      844,
      718
    ],
    "severity": "medium",
    "description": "A medical condition characterized by headache, fever, confusion.",
    "treatments": [
      "Hospitalization",
      "antiviral medications (if caused by a viral infection)",
      "supportive care"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 342,
    "name": "Cyst of the Eyelid",
    "symptoms": [
      190,
      820,
      915
    ],
    "severity": "medium",
    "description": "A medical condition characterized by painful lump or swelling on the eyelid, redness, tenderness.",
    "treatments": [
      "Warm compresses",
      "good eyelid hygiene",
      "antibiotic ointments (if infected)",
      "surgical removal (if necessary)"
    ],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 343,
    "name": "Balanitis",
    "symptoms": [
      137,
      820,
      894,
      749
    ],
    "severity": "medium",
    "description": "A medical condition characterized by inflammation of the glans penis (tip of the penis), redness, swelling.",
    "treatments": [
      "Good hygiene",
      "topical antifungal or antibacterial creams",
      "corticosteroid creams (if severe)",
      "treating underlying causes"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 344,
    "name": "Foreign Body in the Throat",
    "symptoms": [
      229,
      462
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sensation of a foreign object stuck in the throat, difficulty swallowing or speaking.",
    "treatments": [
      "Immediate medical attention",
      "removal of the foreign body",
      "evaluation for any complications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 345,
    "name": "Drug Abuse (Cocaine)",
    "symptoms": [
      66,
      618,
      467,
      802,
      599,
      836
    ],
    "severity": "medium",
    "description": "A medical condition characterized by euphoria, increased energy, dilated pupils.",
    "treatments": [
      "Medical detoxification",
      "counseling",
      "behavioral therapies",
      "support groups"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 346,
    "name": "Optic Neuritis",
    "symptoms": [
      291,
      533,
      412,
      558
    ],
    "severity": "medium",
    "description": "A medical condition characterized by vision loss or blurry vision, eye pain with eye movement, color vision impairment.",
    "treatments": [
      "High-dose intravenous corticosteroids",
      "treatment of underlying cause",
      "symptom management",
      "visual rehabilitation"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 347,
    "name": "Intestinal Malabsorption",
    "symptoms": [
      32,
      992,
      305,
      728,
      699,
      544,
      540
    ],
    "severity": "medium",
    "description": "A medical condition characterized by chronic diarrhea, weight loss, abdominal pain or bloating.",
    "treatments": [
      "Dietary modifications (specific to the underlying cause)",
      "supplementation of deficient nutrients",
      "medications (to manage symptoms or underlying condition)",
      "treatment of underlying cause"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 348,
    "name": "Lead Poisoning",
    "symptoms": [
      86,
      304,
      659,
      693,
      441,
      332
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, abdominal pain, joint pain.",
    "treatments": [
      "Removal of lead source",
      "chelation therapy (in severe cases)",
      "supportive care",
      "medication to manage symptoms",
      "addressing complications (such as anemia)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 349,
    "name": "Viral Warts",
    "symptoms": [
      258,
      837,
      947,
      689
    ],
    "severity": "medium",
    "description": "A medical condition characterized by small, rough growths on the skin or mucous membranes, typically painless.",
    "treatments": [
      "Topical treatments (salicylic acid",
      "cryotherapy)",
      "laser therapy",
      "surgical removal",
      "immune therapy (for persistent or recurrent cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 350,
    "name": "Hyperhidrosis",
    "symptoms": [
      71,
      946,
      872,
      948,
      691
    ],
    "severity": "medium",
    "description": "A medical condition characterized by excessive sweating (beyond what is necessary for temperature regulation), typically in specific areas (such as palms, soles.",
    "treatments": [
      "Antiperspirants",
      "medications (anticholinergics",
      "beta blockers)",
      "iontophoresis",
      "Botox injections",
      "surgical interventions (sympathectomy",
      "sweat gland removal)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 351,
    "name": "Stroke",
    "symptoms": [
      263,
      337,
      738,
      414,
      944,
      851
    ],
    "severity": "high",
    "description": "A medical condition characterized by sudden numbness or weakness of the face, arm, or leg (typically on one side of the body).",
    "treatments": [
      "Emergency medical attention",
      "medication (clot-busting drugs",
      "anticoagulants)",
      "supportive care",
      "rehabilitation (physical therapy",
      "speech therapy)",
      "lifestyle modifications (diet",
      "exercise",
      "smoking cessation)",
      "addressing underlying risk factors"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 352,
    "name": "Pilonidal Cyst",
    "symptoms": [
      184,
      894,
      820,
      486,
      317
    ],
    "severity": "medium",
    "description": "A medical condition characterized by pain or discomfort in the tailbone area, swelling, redness.",
    "treatments": [
      "Warm compresses",
      "pain management",
      "antibiotics (for infection)",
      "incision and drainage",
      "surgical removal or excision",
      "wound care",
      "lifestyle modifications to prevent recurrence"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 353,
    "name": "Crushing Injury",
    "symptoms": [
      240,
      894,
      436,
      375,
      455
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe pain, swelling, deformity.",
    "treatments": [
      "Emergency medical attention",
      "immobilization",
      "pain management",
      "surgery (to repair or reconstruct affected tissues)",
      "rehabilitation (physical therapy",
      "occupational therapy)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 354,
    "name": "Normal Pressure Hydrocephalus",
    "symptoms": [
      100,
      958,
      407
    ],
    "severity": "medium",
    "description": "A medical condition characterized by gait disturbances, urinary incontinence, cognitive decline or dementia-like symptoms.",
    "treatments": [
      "Ventriculoperitoneal shunt placement",
      "medication management for symptoms"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 355,
    "name": "Alopecia",
    "symptoms": [
      109,
      770
    ],
    "severity": "medium",
    "description": "A medical condition characterized by hair loss or balding, patchy or generalized hair loss.",
    "treatments": [
      "Topical medications (minoxidil)",
      "oral medications (finasteride)",
      "steroid injections",
      "hair transplant surgery",
      "wigs or hairpieces"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 356,
    "name": "Hashimoto Thyroiditis",
    "symptoms": [
      86,
      990,
      416,
      495,
      438,
      704,
      845
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, weight gain, constipation.",
    "treatments": [
      "Thyroid hormone replacement (levothyroxine)",
      "monitoring and management of symptoms"
    ],
    "specialty": "Endocrinologist"
  },
  {
    "id": 357,
    "name": "Flat Feet",
    "symptoms": [
      93,
      465,
      563,
      894
    ],
    "severity": "medium",
    "description": "A medical condition characterized by foot pain or achiness, difficulty with foot and ankle movement, foot fatigue.",
    "treatments": [
      "Supportive footwear",
      "orthotic inserts",
      "physical therapy exercises",
      "pain management",
      "surgery (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 358,
    "name": "Nonalcoholic Liver Disease (NASH)",
    "symptoms": [
      86,
      311,
      514,
      507,
      636
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, abdominal swelling or pain, enlarged liver.",
    "treatments": [
      "Lifestyle changes (weight loss",
      "healthy diet",
      "regular exercise)",
      "management of underlying conditions",
      "medication as needed"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 359,
    "name": "Hemarthrosis",
    "symptoms": [
      150,
      749,
      981,
      670
    ],
    "severity": "medium",
    "description": "A medical condition characterized by joint swelling, pain, warmth.",
    "treatments": [
      "RICE method (Rest",
      "Ice",
      "Compression",
      "Elevation)",
      "pain management",
      "joint aspiration or drainage (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 360,
    "name": "Pelvic Organ Prolapse",
    "symptoms": [
      200,
      958,
      369,
      476
    ],
    "severity": "medium",
    "description": "A medical condition characterized by pelvic pressure or heaviness, urinary incontinence, bowel movement difficulties.",
    "treatments": [
      "Pelvic floor exercises",
      "pessary use",
      "hormone therapy",
      "surgical repair (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 361,
    "name": "Fracture of the Arm",
    "symptoms": [
      182,
      894,
      436,
      669,
      375
    ],
    "severity": "medium",
    "description": "A medical condition characterized by pain, swelling, deformity.",
    "treatments": [
      "Immobilization (cast or splint)",
      "pain management",
      "physical therapy",
      "surgery (in complex fractures)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 362,
    "name": "Coagulation (Bleeding) Disorder",
    "symptoms": [
      59,
      791,
      524,
      570,
      597
    ],
    "severity": "medium",
    "description": "A medical condition characterized by easy bruising, prolonged bleeding after injury or surgery, excessive bleeding from minor cuts or abrasions.",
    "treatments": [
      "Blood transfusions",
      "clotting factor replacement therapy",
      "medications to stimulate clotting",
      "lifestyle modifications",
      "surgery (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 363,
    "name": "Intracranial Hemorrhage",
    "symptoms": [
      235,
      713,
      389,
      677,
      844
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe headache, nausea or vomiting, changes in vision.",
    "treatments": [
      "Emergency medical attention",
      "surgery (if needed)",
      "medications to control bleeding and manage symptoms"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 364,
    "name": "Hyperkalemia",
    "symptoms": [
      172,
      645,
      724,
      713
    ],
    "severity": "medium",
    "description": "A medical condition characterized by muscle weakness or fatigue, irregular heartbeat or palpitations, numbness or tingling.",
    "treatments": [
      "Treatment of underlying cause",
      "medications to reduce potassium levels",
      "dietary modifications",
      "dialysis (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 365,
    "name": "Cornea Infection",
    "symptoms": [
      79,
      754,
      362,
      624
    ],
    "severity": "medium",
    "description": "A medical condition characterized by eye redness, pain or discomfort, blurred or decreased vision.",
    "treatments": [
      "Antibiotic or antifungal eye drops",
      "oral medications",
      "supportive care",
      "possible corneal transplant (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 366,
    "name": "Abscess of the Lung",
    "symptoms": [
      37,
      392,
      552,
      856,
      544
    ],
    "severity": "medium",
    "description": "A medical condition characterized by cough with phlegm or pus, chest pain, fever.",
    "treatments": [
      "Antibiotics",
      "drainage or surgical removal of the abscess",
      "supportive care",
      "management of underlying lung conditions"
    ],
    "specialty": "Pulmonologist"
  },
  {
    "id": 367,
    "name": "Dengue Fever",
    "symptoms": [
      122,
      851,
      658,
      807,
      713,
      350
    ],
    "severity": "medium",
    "description": "A medical condition characterized by high fever, severe headache, joint and muscle pain.",
    "treatments": [
      "Supportive care (hydration",
      "pain relievers",
      "rest)",
      "monitoring",
      "medical attention for severe cases (fluid replacement",
      "blood transfusion",
      "hospitalization)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 368,
    "name": "Chronic Sinusitis",
    "symptoms": [
      82,
      710,
      924,
      789,
      420,
      544
    ],
    "severity": "medium",
    "description": "A medical condition characterized by facial pain or pressure, nasal congestion, thick nasal discharge.",
    "treatments": [
      "Saline nasal irrigation",
      "nasal corticosteroids",
      "antibiotics (in bacterial cases)",
      "decongestants",
      "pain relievers",
      "surgery (in severe or chronic cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 369,
    "name": "Cholesteatoma",
    "symptoms": [
      57,
      586,
      497,
      484,
      933
    ],
    "severity": "medium",
    "description": "A medical condition characterized by ear pain, hearing loss, ear drainage.",
    "treatments": [
      "Surgical removal",
      "antibiotics (for associated infections)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 370,
    "name": "Volvulus",
    "symptoms": [
      3,
      711,
      979,
      354,
      416,
      360
    ],
    "severity": "medium",
    "description": "A medical condition characterized by abdominal pain, nausea, vomiting.",
    "treatments": [
      "Emergency surgery to untwist the affected organ and restore blood flow"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 371,
    "name": "Injury to the Finger",
    "symptoms": [
      182,
      894,
      375,
      436,
      833,
      450
    ],
    "severity": "medium",
    "description": "A medical condition characterized by pain, swelling, bruising.",
    "treatments": [
      "RICE method (Rest",
      "Ice",
      "Compression",
      "Elevation)",
      "splinting",
      "pain medication",
      "physical therapy",
      "surgery (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 372,
    "name": "Poisoning due to Analgesics",
    "symptoms": [
      174,
      979,
      304,
      672,
      481,
      414,
      828
    ],
    "severity": "medium",
    "description": "A medical condition characterized by nausea, vomiting, abdominal pain.",
    "treatments": [
      "Immediate medical attention",
      "activated charcoal administration",
      "supportive care",
      "antidote (if available)",
      "treatment for complications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 373,
    "name": "Atrial Fibrillation",
    "symptoms": [
      141,
      765,
      856,
      394,
      483,
      544
    ],
    "severity": "medium",
    "description": "A medical condition characterized by irregular or rapid heartbeat, palpitations, shortness of breath.",
    "treatments": [
      "Medications (antiarrhythmics",
      "anticoagulants)",
      "electrical cardioversion",
      "catheter ablation",
      "lifestyle changes"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 374,
    "name": "Pinworm Infection",
    "symptoms": [
      145,
      830,
      647,
      324,
      308,
      675
    ],
    "severity": "medium",
    "description": "A medical condition characterized by itching around the anus or vagina, restless sleep, irritability.",
    "treatments": [
      "Anthelmintic medication",
      "hygiene measures (handwashing",
      "trimming nails",
      "laundering bedding)",
      "treatment for household members"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 375,
    "name": "Urethral Valves",
    "symptoms": [
      49,
      959,
      957,
      303,
      786
    ],
    "severity": "medium",
    "description": "A medical condition characterized by difficulty or poor urinary stream, urinary tract infections, urinary frequency or urgency.",
    "treatments": [
      "Surgical intervention (valve ablation or resection)",
      "catheterization",
      "medications for symptoms and complications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 376,
    "name": "Migraine",
    "symptoms": [
      236,
      711,
      848
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe headaches, nausea, sensitivity to light and sound.",
    "treatments": [
      "Pain-relieving medications",
      "lifestyle changes",
      "preventive medications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 377,
    "name": "Arthritis",
    "symptoms": [
      149,
      883,
      894
    ],
    "severity": "medium",
    "description": "A medical condition characterized by joint pain, stiffness, swelling.",
    "treatments": [
      "Medications",
      "physical therapy",
      "surgery (in severe cases)"
    ],
    "specialty": "Orthopedist / Rheumatologist"
  },
  {
    "id": 378,
    "name": "Sciatica",
    "symptoms": [
      157,
      666,
      724
    ],
    "severity": "medium",
    "description": "A medical condition characterized by lower back pain, leg pain, numbness or tingling.",
    "treatments": [
      "Pain relievers",
      "physical therapy",
      "exercise"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 379,
    "name": "Complex Regional Pain Syndrome (CRPS)",
    "symptoms": [
      138,
      894,
      386
    ],
    "severity": "medium",
    "description": "A medical condition characterized by intense burning pain, swelling, changes in skin temperature.",
    "treatments": [
      "Physical therapy",
      "medications",
      "nerve blocks"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 380,
    "name": "Lupus",
    "symptoms": [
      149,
      544,
      863
    ],
    "severity": "medium",
    "description": "A medical condition characterized by joint pain, fatigue, skin rashes.",
    "treatments": [
      "Medications (anti-inflammatory",
      "immunosuppressants)",
      "lifestyle modifications"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 381,
    "name": "Endometriosis",
    "symptoms": [
      198,
      760,
      627
    ],
    "severity": "medium",
    "description": "A medical condition characterized by pelvic pain, painful periods, infertility.",
    "treatments": [
      "Pain medications",
      "hormonal therapies",
      "surgery"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 382,
    "name": "Chronic Headache",
    "symptoms": [
      207,
      919
    ],
    "severity": "medium",
    "description": "A medical condition characterized by persistent head pain, tension in neck and shoulders.",
    "treatments": [
      "Pain-relieving medications",
      "relaxation techniques",
      "stress management"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 383,
    "name": "Dry Skin",
    "symptoms": [
      55,
      555
    ],
    "severity": "medium",
    "description": "A medical condition characterized by dry, flaky skin with itching.",
    "treatments": [
      "Moisturizing creams or lotions",
      "avoiding hot showers or baths",
      "using mild soaps"
    ],
    "specialty": "Dermatologist"
  },
  {
    "id": 384,
    "name": "Eczema",
    "symptoms": [
      146,
      817,
      629,
      807
    ],
    "severity": "medium",
    "description": "A medical condition characterized by itchy, red, inflamed skin.",
    "treatments": [
      "Emollients (moisturizers)",
      "topical corticosteroids or immunomodulators",
      "avoiding triggers"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 385,
    "name": "Psoriasis",
    "symptoms": [
      222,
      842,
      649
    ],
    "severity": "medium",
    "description": "A medical condition characterized by red, scaly patches on the skin, itching.",
    "treatments": [
      "Topical treatments (corticosteroids",
      "salicylic acid)",
      "systemic medications (retinoids",
      "immunosuppressants)",
      "phototherapy"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 386,
    "name": "Scabies",
    "symptoms": [
      139,
      518,
      869
    ],
    "severity": "medium",
    "description": "A medical condition characterized by intense itching, especially at night, small blisters or bumps.",
    "treatments": [
      "Prescription medications (topical or oral scabicides)",
      "washing clothes and bedding in hot water",
      "vacuuming and cleaning home"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 387,
    "name": "Urticaria (Hives)",
    "symptoms": [
      215,
      653
    ],
    "severity": "medium",
    "description": "A medical condition characterized by raised, itchy welts on the skin.",
    "treatments": [
      "Antihistamines",
      "avoiding triggers",
      "corticosteroids (in severe cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 388,
    "name": "Insect Bites",
    "symptoms": [
      222,
      903,
      652
    ],
    "severity": "medium",
    "description": "A medical condition characterized by red, swollen, itchy bumps.",
    "treatments": [
      "Topical corticosteroids",
      "oral antihistamines",
      "cold compresses"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 389,
    "name": "Contact Dermatitis",
    "symptoms": [
      146,
      819
    ],
    "severity": "medium",
    "description": "A medical condition characterized by itchy, red rash caused by contact with irritants or allergens.",
    "treatments": [
      "Avoiding the trigger",
      "corticosteroid creams or ointments",
      "antihistamines"
    ],
    "specialty": "Dermatologist"
  },
  {
    "id": 390,
    "name": "Dermatitis due to Sun Exposure",
    "symptoms": [
      265,
      820,
      649
    ],
    "severity": "medium",
    "description": "A medical condition characterized by sunburn-like rash, redness, itching.",
    "treatments": [
      "Moisturizers",
      "cool compresses",
      "topical corticosteroids"
    ],
    "specialty": "Dermatologist"
  },
  {
    "id": 391,
    "name": "Parasitic Infections",
    "symptoms": [
      139,
      967
    ],
    "severity": "medium",
    "description": "A medical condition characterized by intense itching, visible lice or nits in the affected area.",
    "treatments": [
      "Prescription medications (topical or oral antiparasitic agents)",
      "washing clothes and bedding in hot water"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 392,
    "name": "Influenza (Flu)",
    "symptoms": [
      122,
      367,
      544,
      420,
      873,
      415
    ],
    "severity": "medium",
    "description": "A medical condition characterized by high fever, body aches, fatigue.",
    "treatments": [
      "Rest",
      "fluids",
      "over-the-counter medications for symptom relief",
      "antiviral medications (in some cases)"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 393,
    "name": "Urinary Tract Infection (UTI)",
    "symptoms": [
      98,
      377,
      403,
      772
    ],
    "severity": "medium",
    "description": "A medical condition characterized by frequent urination, burning sensation during urination, cloudy or bloody urine.",
    "treatments": [
      "Antibiotics",
      "increased fluid intake",
      "pain relievers"
    ],
    "specialty": "Nephrologist / Urologist"
  },
  {
    "id": 394,
    "name": "Bronchitis",
    "symptoms": [
      204,
      390,
      544
    ],
    "severity": "medium",
    "description": "A medical condition characterized by persistent cough with yellow or green mucus, chest congestion, fatigue.",
    "treatments": [
      "Rest",
      "fluids",
      "over-the-counter cough suppressants",
      "inhalers (if prescribed)",
      "treating underlying cause"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 395,
    "name": "Gastroenteritis (Stomach Flu)",
    "symptoms": [
      174,
      979,
      442,
      307,
      552
    ],
    "severity": "medium",
    "description": "A medical condition characterized by nausea, vomiting, diarrhea.",
    "treatments": [
      "Rest",
      "fluids (electrolyte solutions)",
      "bland diet",
      "avoiding irritating foods",
      "over-the-counter medications for symptom relief"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 396,
    "name": "Urinary Stones (Kidney Stones)",
    "symptoms": [
      230,
      356,
      571,
      753
    ],
    "severity": "medium",
    "description": "A medical condition characterized by severe abdominal or back pain, blood in urine, frequent urination.",
    "treatments": [
      "Pain management",
      "increased fluid intake",
      "medications to help pass the stones",
      "procedures or surgery"
    ],
    "specialty": "Nephrologist / Urologist"
  },
  {
    "id": 397,
    "name": "Osteoporosis",
    "symptoms": [
      94,
      678,
      339,
      567
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fragile bones, loss of height over time, back pain.",
    "treatments": [
      "Calcium and vitamin D supplements",
      "regular exercise",
      "medications to slow bone loss"
    ],
    "specialty": "General Practitioner"
  },
  {
    "id": 398,
    "name": "Rheumatoid Arthritis",
    "symptoms": [
      149,
      883,
      894,
      544,
      675
    ],
    "severity": "medium",
    "description": "A medical condition characterized by joint pain, stiffness, swelling.",
    "treatments": [
      "Medications (nonsteroidal anti-inflammatory drugs",
      "disease-modifying antirheumatic drugs)",
      "physical therapy",
      "exercise"
    ],
    "specialty": "Orthopedist / Rheumatologist"
  },
  {
    "id": 399,
    "name": "Type 1 Diabetes",
    "symptoms": [
      98,
      135,
      296
    ],
    "severity": "medium",
    "description": "A medical condition characterized by frequent urination, increased thirst, weight loss.",
    "treatments": [
      "Insulin therapy",
      "Blood sugar monitoring",
      "Healthy eating",
      "Regular exercise"
    ],
    "specialty": "Endocrinologist"
  },
  {
    "id": 400,
    "name": "Type 2 Diabetes",
    "symptoms": [
      86,
      133,
      256
    ],
    "severity": "medium",
    "description": "A medical condition characterized by fatigue, increased hunger, slow healing of wounds.",
    "treatments": [
      "Oral medications",
      "Insulin therapy (in some cases)",
      "Blood sugar monitoring",
      "Exercise"
    ],
    "specialty": "Endocrinologist"
  }
,
  {
    "id": 1001,
    "name": "Acne",
    "symptoms": [1, 15, 89],
    "severity": "medium",
    "description": "Skin condition with pimples, blackheads, and inflammation",
    "treatments": ["Benzoyl peroxide","Retinoids","Antibiotics"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1002,
    "name": "Allergic Rhinitis",
    "symptoms": [2, 94, 136, 102],
    "severity": "medium",
    "description": "Hay fever causing sneezing, runny nose, itchy eyes",
    "treatments": ["Antihistamines","Nasal corticosteroids","Decongestants"],
    "specialty": "Allergist"
  },
  {
    "id": 1003,
    "name": "Anemia",
    "symptoms": [3, 52, 53, 161],
    "severity": "medium",
    "description": "Reduced red blood cells causing fatigue and weakness",
    "treatments": ["Iron supplements","Vitamin B12","Dietary changes"],
    "specialty": "Hematologist"
  },
  {
    "id": 1004,
    "name": "Anxiety Disorder",
    "symptoms": [197, 267, 279, 52],
    "severity": "medium",
    "description": "Excessive worry and nervousness",
    "treatments": ["Therapy","SSRIs","Mindfulness"],
    "specialty": "Psychiatrist"
  },
  {
    "id": 1005,
    "name": "Appendicitis",
    "symptoms": [4, 13, 77, 129],
    "severity": "medium",
    "description": "Inflammation of the appendix requiring urgent care",
    "treatments": ["Appendectomy","Antibiotics"],
    "specialty": "Surgeon"
  },
  {
    "id": 1006,
    "name": "Athlete's Foot",
    "symptoms": [5, 89, 142],
    "severity": "medium",
    "description": "Fungal infection of the feet",
    "treatments": ["Antifungal cream","Keep feet dry"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1007,
    "name": "Back Pain",
    "symptoms": [6, 58, 210],
    "severity": "medium",
    "description": "Pain in the lower or upper back",
    "treatments": ["Physical therapy","Pain relievers","Exercise"],
    "specialty": "Orthopedist"
  },
  {
    "id": 1008,
    "name": "Bacterial Vaginosis",
    "symptoms": [7, 166, 8],
    "severity": "medium",
    "description": "Vaginal infection with discharge",
    "treatments": ["Metronidazole","Clindamycin"],
    "specialty": "Gynecologist"
  },
  {
    "id": 1009,
    "name": "Bell's Palsy",
    "symptoms": [9, 161, 214],
    "severity": "medium",
    "description": "Facial paralysis on one side",
    "treatments": ["Corticosteroids","Physical therapy"],
    "specialty": "Neurologist"
  },
  {
    "id": 1010,
    "name": "Blepharitis",
    "symptoms": [10, 89, 142],
    "severity": "medium",
    "description": "Eyelid inflammation",
    "treatments": ["Warm compresses","Eyelid scrubs","Antibiotics"],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 1011,
    "name": "Bursitis",
    "symptoms": [11, 210, 58],
    "severity": "medium",
    "description": "Inflammation of fluid sacs near joints",
    "treatments": ["Rest","Ice","Anti-inflammatory drugs"],
    "specialty": "Orthopedist"
  },
  {
    "id": 1012,
    "name": "Candidiasis",
    "symptoms": [12, 89, 142],
    "severity": "medium",
    "description": "Yeast infection",
    "treatments": ["Antifungal medications"],
    "specialty": "General Practitioner"
  },
  {
    "id": 1013,
    "name": "Carpal Tunnel Syndrome",
    "symptoms": [13, 161, 214],
    "severity": "medium",
    "description": "Nerve compression in wrist",
    "treatments": ["Wrist splint","Corticosteroids","Surgery"],
    "specialty": "Orthopedist"
  },
  {
    "id": 1014,
    "name": "Cataracts",
    "symptoms": [14, 295, 16],
    "severity": "medium",
    "description": "Clouding of eye lens",
    "treatments": ["Cataract surgery"],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 1015,
    "name": "Celiac Disease",
    "symptoms": [15, 77, 13, 176],
    "severity": "medium",
    "description": "Gluten intolerance",
    "treatments": ["Gluten-free diet"],
    "specialty": "Gastroenterologist"
  },
  {
    "id": 1016,
    "name": "Chickenpox",
    "symptoms": [16, 17, 89, 42],
    "severity": "medium",
    "description": "Viral infection with itchy rash",
    "treatments": ["Antiviral drugs","Calamine lotion"],
    "specialty": "General Practitioner"
  },
  {
    "id": 1017,
    "name": "Cholesterol (High)",
    "symptoms": [18],
    "severity": "medium",
    "description": "Elevated blood cholesterol",
    "treatments": ["Statins","Diet changes","Exercise"],
    "specialty": "Cardiologist"
  },
  {
    "id": 1018,
    "name": "Chronic Fatigue Syndrome",
    "symptoms": [52, 58, 279],
    "severity": "medium",
    "description": "Extreme tiredness not improved by rest",
    "treatments": ["Graded exercise","Therapy","Sleep hygiene"],
    "specialty": "General Practitioner"
  },
  {
    "id": 1019,
    "name": "Cold Sores",
    "symptoms": [19, 89, 142],
    "severity": "medium",
    "description": "Herpes simplex virus causing lip blisters",
    "treatments": ["Antiviral cream","Oral antivirals"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1020,
    "name": "Conjunctivitis",
    "symptoms": [20, 142, 89],
    "severity": "medium",
    "description": "Pink eye infection",
    "treatments": ["Antibiotic drops","Artificial tears"],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 1021,
    "name": "Constipation",
    "symptoms": [21, 4, 77],
    "severity": "medium",
    "description": "Difficulty passing stools",
    "treatments": ["Fiber supplements","Laxatives","Hydration"],
    "specialty": "Gastroenterologist"
  },
  {
    "id": 1022,
    "name": "COPD",
    "symptoms": [22, 96, 136, 52],
    "severity": "medium",
    "description": "Chronic obstructive pulmonary disease",
    "treatments": ["Bronchodilators","Steroids","Oxygen therapy"],
    "specialty": "Pulmonologist"
  },
  {
    "id": 1023,
    "name": "Croup",
    "symptoms": [23, 96, 136],
    "severity": "medium",
    "description": "Viral infection causing barking cough",
    "treatments": ["Steroids","Humidified air"],
    "specialty": "Pediatrician"
  },
  {
    "id": 1024,
    "name": "Dandruff",
    "symptoms": [24, 89, 142],
    "severity": "medium",
    "description": "Scalp flaking",
    "treatments": ["Anti-dandruff shampoo","Ketoconazole"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1025,
    "name": "Dehydration",
    "symptoms": [25, 52, 161, 128],
    "severity": "medium",
    "description": "Insufficient body fluids",
    "treatments": ["Oral rehydration","IV fluids"],
    "specialty": "General Practitioner"
  },
  {
    "id": 1026,
    "name": "Depression",
    "symptoms": [26, 52, 279, 267],
    "severity": "medium",
    "description": "Persistent sadness and loss of interest",
    "treatments": ["Antidepressants","Therapy","Lifestyle changes"],
    "specialty": "Psychiatrist"
  },
  {
    "id": 1027,
    "name": "Dermatitis",
    "symptoms": [27, 89, 142, 15],
    "severity": "medium",
    "description": "Skin inflammation and irritation",
    "treatments": ["Moisturizers","Topical steroids","Avoid irritants"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1028,
    "name": "Diabetes Type 1",
    "symptoms": [28, 29, 30, 31],
    "severity": "medium",
    "description": "Autoimmune destruction of insulin-producing cells",
    "treatments": ["Insulin therapy","Blood sugar monitoring"],
    "specialty": "Endocrinologist"
  },
  {
    "id": 1029,
    "name": "Diabetes Type 2",
    "symptoms": [28, 29, 30, 128],
    "severity": "medium",
    "description": "Insulin resistance and high blood sugar",
    "treatments": ["Metformin","Diet","Exercise","Insulin"],
    "specialty": "Endocrinologist"
  },
  {
    "id": 1030,
    "name": "Diverticulitis",
    "symptoms": [4, 13, 77, 129],
    "severity": "medium",
    "description": "Inflammation of colon pouches",
    "treatments": ["Antibiotics","Liquid diet","Surgery if severe"],
    "specialty": "Gastroenterologist"
  },
  {
    "id": 1031,
    "name": "Dry Eye Syndrome",
    "symptoms": [32, 142, 89],
    "severity": "medium",
    "description": "Insufficient tear production",
    "treatments": ["Artificial tears","Punctal plugs"],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 1032,
    "name": "Ear Infection",
    "symptoms": [33, 34, 129, 42],
    "severity": "medium",
    "description": "Bacterial or viral ear infection",
    "treatments": ["Antibiotics","Pain relievers"],
    "specialty": "ENT Specialist"
  },
  {
    "id": 1033,
    "name": "Eating Disorder",
    "symptoms": [35, 279, 267, 128],
    "severity": "medium",
    "description": "Abnormal eating habits",
    "treatments": ["Therapy","Nutritional counseling"],
    "specialty": "Psychiatrist"
  },
  {
    "id": 1034,
    "name": "Eczema",
    "symptoms": [89, 142, 15, 27],
    "severity": "medium",
    "description": "Chronic itchy skin condition",
    "treatments": ["Moisturizers","Topical steroids","Avoid triggers"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1035,
    "name": "Endometriosis",
    "symptoms": [36, 37, 4, 128],
    "severity": "medium",
    "description": "Uterine tissue growing outside uterus",
    "treatments": ["Pain relievers","Hormonal therapy","Surgery"],
    "specialty": "Gynecologist"
  },
  {
    "id": 1036,
    "name": "Epilepsy",
    "symptoms": [38, 161, 279],
    "severity": "medium",
    "description": "Seizure disorder",
    "treatments": ["Anticonvulsants","Surgery in some cases"],
    "specialty": "Neurologist"
  },
  {
    "id": 1037,
    "name": "Erectile Dysfunction",
    "symptoms": [39],
    "severity": "medium",
    "description": "Difficulty achieving or maintaining erection",
    "treatments": ["Viagra","Cialis","Therapy"],
    "specialty": "Urologist"
  },
  {
    "id": 1038,
    "name": "Fibroid Uterus",
    "symptoms": [40, 37, 4, 128],
    "severity": "medium",
    "description": "Non-cancerous uterine growths",
    "treatments": ["Pain management","Hormones","Surgery"],
    "specialty": "Gynecologist"
  },
  {
    "id": 1039,
    "name": "Food Poisoning",
    "symptoms": [77, 13, 129, 176],
    "severity": "medium",
    "description": "Illness from contaminated food",
    "treatments": ["Hydration","Rest","Anti-nausea medication"],
    "specialty": "General Practitioner"
  },
  {
    "id": 1040,
    "name": "Gallstones",
    "symptoms": [4, 13, 77, 129],
    "severity": "medium",
    "description": "Hard deposits in gallbladder",
    "treatments": ["Surgery","Bile acid pills"],
    "specialty": "Surgeon"
  },
  {
    "id": 1041,
    "name": "Gastritis",
    "symptoms": [4, 13, 77, 129],
    "severity": "medium",
    "description": "Stomach lining inflammation",
    "treatments": ["Antacids","PPIs","Avoid irritants"],
    "specialty": "Gastroenterologist"
  },
  {
    "id": 1042,
    "name": "Genital Herpes",
    "symptoms": [89, 142, 166],
    "severity": "medium",
    "description": "STI causing genital sores",
    "treatments": ["Antiviral medications"],
    "specialty": "Infectious Disease"
  },
  {
    "id": 1043,
    "name": "Genital Warts",
    "symptoms": [89, 166],
    "severity": "medium",
    "description": "HPV-caused skin growths",
    "treatments": ["Topical treatments","Cryotherapy","Surgery"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1044,
    "name": "Glaucoma",
    "symptoms": [41, 295, 214],
    "severity": "medium",
    "description": "Optic nerve damage from eye pressure",
    "treatments": ["Eye drops","Surgery","Laser treatment"],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 1045,
    "name": "Gonorrhea",
    "symptoms": [166, 8, 129],
    "severity": "medium",
    "description": "Bacterial STI",
    "treatments": ["Antibiotics"],
    "specialty": "Infectious Disease"
  },
  {
    "id": 1046,
    "name": "Gout",
    "symptoms": [11, 210, 58, 89],
    "severity": "medium",
    "description": "Arthritis from uric acid crystals",
    "treatments": ["NSAIDs","Colchicine","Allopurinol"],
    "specialty": "Rheumatologist"
  },
  {
    "id": 1047,
    "name": "Hay Fever",
    "symptoms": [2, 94, 136, 102],
    "severity": "medium",
    "description": "Seasonal allergies",
    "treatments": ["Antihistamines","Nasal sprays"],
    "specialty": "Allergist"
  },
  {
    "id": 1048,
    "name": "Head Lice",
    "symptoms": [142, 89],
    "severity": "medium",
    "description": "Scalp parasite infestation",
    "treatments": ["Medicated shampoo","Nit combing"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1049,
    "name": "Heartburn",
    "symptoms": [43, 77],
    "severity": "medium",
    "description": "Acid reflux into esophagus",
    "treatments": ["Antacids","PPIs","Lifestyle changes"],
    "specialty": "Gastroenterologist"
  },
  {
    "id": 1050,
    "name": "Heat Exhaustion",
    "symptoms": [44, 52, 279, 128],
    "severity": "medium",
    "description": "Overheating from heat exposure",
    "treatments": ["Cool environment","Hydration","Rest"],
    "specialty": "Emergency Medicine"
  },
  {
    "id": 1051,
    "name": "Hemorrhoids",
    "symptoms": [45, 129, 142],
    "severity": "medium",
    "description": "Swollen rectal veins",
    "treatments": ["Fiber","Topical creams","Surgery if severe"],
    "specialty": "Gastroenterologist"
  },
  {
    "id": 1052,
    "name": "Hepatitis A",
    "symptoms": [46, 77, 13, 129, 42],
    "severity": "medium",
    "description": "Viral liver infection",
    "treatments": ["Rest","Hydration","Vaccination"],
    "specialty": "Hepatologist"
  },
  {
    "id": 1053,
    "name": "Hepatitis B",
    "symptoms": [46, 77, 13, 52, 42],
    "severity": "medium",
    "description": "Chronic viral liver infection",
    "treatments": ["Antiviral drugs","Vaccination"],
    "specialty": "Hepatologist"
  },
  {
    "id": 1054,
    "name": "Hepatitis C",
    "symptoms": [46, 52, 77],
    "severity": "medium",
    "description": "Chronic viral liver infection",
    "treatments": ["Direct-acting antivirals"],
    "specialty": "Hepatologist"
  },
  {
    "id": 1055,
    "name": "Hiatal Hernia",
    "symptoms": [43, 77, 4],
    "severity": "medium",
    "description": "Stomach pushes through diaphragm",
    "treatments": ["Antacids","Surgery if severe"],
    "specialty": "Gastroenterologist"
  },
  {
    "id": 1056,
    "name": "High Blood Pressure",
    "symptoms": [214, 279],
    "severity": "medium",
    "description": "Hypertension",
    "treatments": ["ACE inhibitors","Diuretics","Lifestyle changes"],
    "specialty": "Cardiologist"
  },
  {
    "id": 1057,
    "name": "Hives",
    "symptoms": [89, 142, 15],
    "severity": "medium",
    "description": "Allergic skin welts",
    "treatments": ["Antihistamines","Avoid triggers"],
    "specialty": "Allergist"
  },
  {
    "id": 1058,
    "name": "Hyperthyroidism",
    "symptoms": [47, 48, 279, 128],
    "severity": "medium",
    "description": "Overactive thyroid",
    "treatments": ["Antithyroid drugs","Radioactive iodine","Surgery"],
    "specialty": "Endocrinologist"
  },
  {
    "id": 1059,
    "name": "Hypothyroidism",
    "symptoms": [52, 128, 161, 49],
    "severity": "medium",
    "description": "Underactive thyroid",
    "treatments": ["Thyroid hormone replacement"],
    "specialty": "Endocrinologist"
  },
  {
    "id": 1060,
    "name": "Impetigo",
    "symptoms": [89, 142, 15],
    "severity": "medium",
    "description": "Bacterial skin infection",
    "treatments": ["Antibiotic ointment","Oral antibiotics"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1061,
    "name": "Incontinence",
    "symptoms": [50],
    "severity": "medium",
    "description": "Inability to control urination",
    "treatments": ["Pelvic exercises","Medication","Surgery"],
    "specialty": "Urologist"
  },
  {
    "id": 1062,
    "name": "Influenza",
    "symptoms": [42, 52, 58, 96, 136, 214],
    "severity": "medium",
    "description": "Flu virus infection",
    "treatments": ["Antiviral drugs","Rest","Fluids"],
    "specialty": "General Practitioner"
  },
  {
    "id": 1063,
    "name": "Insomnia",
    "symptoms": [51, 52, 279],
    "severity": "medium",
    "description": "Difficulty sleeping",
    "treatments": ["Sleep hygiene","CBT","Sleep medications"],
    "specialty": "Sleep Specialist"
  },
  {
    "id": 1064,
    "name": "Irritable Bowel Syndrome",
    "symptoms": [4, 77, 13, 176],
    "severity": "medium",
    "description": "Chronic digestive disorder",
    "treatments": ["Diet changes","Fiber","Antispasmodics"],
    "specialty": "Gastroenterologist"
  },
  {
    "id": 1065,
    "name": "Kidney Infection",
    "symptoms": [54, 129, 42, 4],
    "severity": "medium",
    "description": "Bacterial kidney infection",
    "treatments": ["Antibiotics","Hydration"],
    "specialty": "Nephrologist"
  },
  {
    "id": 1066,
    "name": "Kidney Stones",
    "symptoms": [55, 129, 54, 13],
    "severity": "medium",
    "description": "Hard mineral deposits in kidney",
    "treatments": ["Pain management","Hydration","Lithotripsy"],
    "specialty": "Urologist"
  },
  {
    "id": 1067,
    "name": "Lactose Intolerance",
    "symptoms": [77, 13, 176, 4],
    "severity": "medium",
    "description": "Inability to digest lactose",
    "treatments": ["Lactose-free diet","Lactase supplements"],
    "specialty": "Gastroenterologist"
  },
  {
    "id": 1068,
    "name": "Laryngitis",
    "symptoms": [56, 124, 96],
    "severity": "medium",
    "description": "Voice box inflammation",
    "treatments": ["Voice rest","Hydration","Humidifier"],
    "specialty": "ENT Specialist"
  },
  {
    "id": 1069,
    "name": "Lyme Disease",
    "symptoms": [89, 42, 52, 58],
    "severity": "medium",
    "description": "Tick-borne bacterial infection",
    "treatments": ["Antibiotics"],
    "specialty": "Infectious Disease"
  },
  {
    "id": 1070,
    "name": "Macular Degeneration",
    "symptoms": [295, 16],
    "severity": "medium",
    "description": "Vision loss in center of visual field",
    "treatments": ["Anti-VEGF injections","Vitamins"],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 1071,
    "name": "Measles",
    "symptoms": [89, 42, 96, 136, 102],
    "severity": "medium",
    "description": "Highly contagious viral infection",
    "treatments": ["Rest","Hydration","Fever reducers"],
    "specialty": "Pediatrician"
  },
  {
    "id": 1072,
    "name": "Meniere's Disease",
    "symptoms": [57, 161, 128, 214],
    "severity": "medium",
    "description": "Inner ear disorder causing vertigo",
    "treatments": ["Diuretics","Low-salt diet"],
    "specialty": "ENT Specialist"
  },
  {
    "id": 1073,
    "name": "Mononucleosis",
    "symptoms": [52, 56, 42, 58],
    "severity": "medium",
    "description": "Viral infection (Epstein-Barr)",
    "treatments": ["Rest","Hydration","Pain relievers"],
    "specialty": "General Practitioner"
  },
  {
    "id": 1074,
    "name": "Multiple Sclerosis",
    "symptoms": [161, 295, 52, 58],
    "severity": "medium",
    "description": "Autoimmune nerve disease",
    "treatments": ["Disease-modifying therapies","Steroids"],
    "specialty": "Neurologist"
  },
  {
    "id": 1075,
    "name": "Mumps",
    "symptoms": [58, 42, 56],
    "severity": "medium",
    "description": "Viral infection causing swollen glands",
    "treatments": ["Rest","Pain relievers","Vaccination"],
    "specialty": "Pediatrician"
  },
  {
    "id": 1076,
    "name": "Nail Fungus",
    "symptoms": [89, 142],
    "severity": "medium",
    "description": "Fungal nail infection",
    "treatments": ["Antifungal medications","Topical treatments"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1077,
    "name": "Nausea",
    "symptoms": [77, 128, 13],
    "severity": "medium",
    "description": "Feeling of wanting to vomit",
    "treatments": ["Anti-nausea drugs","Ginger","Hydration"],
    "specialty": "General Practitioner"
  },
  {
    "id": 1078,
    "name": "Nosebleed",
    "symptoms": [59],
    "severity": "medium",
    "description": "Bleeding from nose",
    "treatments": ["Pinch nose","Lean forward","Cold compress"],
    "specialty": "ENT Specialist"
  },
  {
    "id": 1079,
    "name": "Obesity",
    "symptoms": [60, 128],
    "severity": "medium",
    "description": "Excessive body weight",
    "treatments": ["Diet","Exercise","Bariatric surgery"],
    "specialty": "Endocrinologist"
  },
  {
    "id": 1080,
    "name": "Osteoarthritis",
    "symptoms": [11, 210, 58],
    "severity": "medium",
    "description": "Joint cartilage breakdown",
    "treatments": ["Pain relievers","Physical therapy","Joint replacement"],
    "specialty": "Rheumatologist"
  },
  {
    "id": 1081,
    "name": "Osteoporosis",
    "symptoms": [61, 210],
    "severity": "medium",
    "description": "Weak and brittle bones",
    "treatments": ["Calcium","Vitamin D","Bisphosphonates"],
    "specialty": "Endocrinologist"
  },
  {
    "id": 1082,
    "name": "Ovarian Cyst",
    "symptoms": [4, 37, 128],
    "severity": "medium",
    "description": "Fluid-filled sac on ovary",
    "treatments": ["Observation","Surgery if large"],
    "specialty": "Gynecologist"
  },
  {
    "id": 1083,
    "name": "Parkinson's Disease",
    "symptoms": [62, 161, 210, 58],
    "severity": "medium",
    "description": "Progressive nervous system disorder",
    "treatments": ["Levodopa","Dopamine agonists"],
    "specialty": "Neurologist"
  },
  {
    "id": 1084,
    "name": "Pelvic Inflammatory Disease",
    "symptoms": [4, 37, 166, 42],
    "severity": "medium",
    "description": "Female reproductive organ infection",
    "treatments": ["Antibiotics"],
    "specialty": "Gynecologist"
  },
  {
    "id": 1085,
    "name": "Peptic Ulcer",
    "symptoms": [4, 77, 13, 129],
    "severity": "medium",
    "description": "Stomach or intestinal ulcer",
    "treatments": ["PPIs","Antibiotics if H. pylori"],
    "specialty": "Gastroenterologist"
  },
  {
    "id": 1086,
    "name": "Peripheral Neuropathy",
    "symptoms": [161, 214, 58],
    "severity": "medium",
    "description": "Nerve damage causing numbness",
    "treatments": ["Pain medications","Physical therapy"],
    "specialty": "Neurologist"
  },
  {
    "id": 1087,
    "name": "Pneumonia (Bacterial)",
    "symptoms": [96, 42, 136, 52, 58],
    "severity": "medium",
    "description": "Lung infection",
    "treatments": ["Antibiotics","Rest","Fluids"],
    "specialty": "Pulmonologist"
  },
  {
    "id": 1088,
    "name": "Poison Ivy",
    "symptoms": [89, 142, 15],
    "severity": "medium",
    "description": "Allergic skin reaction to plant",
    "treatments": ["Topical steroids","Antihistamines"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1089,
    "name": "Polycystic Ovary Syndrome",
    "symptoms": [37, 128, 47],
    "severity": "medium",
    "description": "Hormonal disorder in women",
    "treatments": ["Birth control","Metformin","Lifestyle changes"],
    "specialty": "Gynecologist"
  },
  {
    "id": 1090,
    "name": "Prediabetes",
    "symptoms": [28, 128],
    "severity": "medium",
    "description": "Blood sugar higher than normal",
    "treatments": ["Diet","Exercise","Metformin"],
    "specialty": "Endocrinologist"
  },
  {
    "id": 1091,
    "name": "Prostate Cancer",
    "symptoms": [63, 54],
    "severity": "medium",
    "description": "Cancer of prostate gland",
    "treatments": ["Surgery","Radiation","Hormone therapy"],
    "specialty": "Urologist"
  },
  {
    "id": 1092,
    "name": "Prostatitis",
    "symptoms": [54, 63, 129],
    "severity": "medium",
    "description": "Prostate gland inflammation",
    "treatments": ["Antibiotics","Alpha blockers"],
    "specialty": "Urologist"
  },
  {
    "id": 1093,
    "name": "Psoriasis",
    "symptoms": [89, 15, 142],
    "severity": "medium",
    "description": "Autoimmune skin condition",
    "treatments": ["Topical steroids","Biologics","Light therapy"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1094,
    "name": "Restless Leg Syndrome",
    "symptoms": [64, 51],
    "severity": "medium",
    "description": "Urge to move legs",
    "treatments": ["Dopamine agonists","Gabapentin"],
    "specialty": "Neurologist"
  },
  {
    "id": 1095,
    "name": "Rheumatoid Arthritis",
    "symptoms": [11, 210, 58, 52],
    "severity": "medium",
    "description": "Autoimmune joint inflammation",
    "treatments": ["DMARDs","Biologics","Steroids"],
    "specialty": "Rheumatologist"
  },
  {
    "id": 1096,
    "name": "Rosacea",
    "symptoms": [89, 15],
    "severity": "medium",
    "description": "Facial redness and pimples",
    "treatments": ["Topical metronidazole","Oral antibiotics"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1097,
    "name": "Scabies",
    "symptoms": [142, 89, 15],
    "severity": "medium",
    "description": "Mite infestation causing itching",
    "treatments": ["Permethrin cream","Ivermectin"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1098,
    "name": "Scarlet Fever",
    "symptoms": [89, 42, 56],
    "severity": "medium",
    "description": "Bacterial infection with rash",
    "treatments": ["Antibiotics"],
    "specialty": "Pediatrician"
  },
  {
    "id": 1099,
    "name": "Sciatica",
    "symptoms": [6, 58, 161],
    "severity": "medium",
    "description": "Nerve pain down leg",
    "treatments": ["Physical therapy","Pain relievers","Surgery if severe"],
    "specialty": "Orthopedist"
  },
  {
    "id": 1100,
    "name": "Shingles",
    "symptoms": [89, 129, 142, 15],
    "severity": "medium",
    "description": "Reactivated chickenpox virus",
    "treatments": ["Antivirals","Pain medications"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1101,
    "name": "Sinusitis",
    "symptoms": [65, 214, 94, 136],
    "severity": "medium",
    "description": "Sinus inflammation",
    "treatments": ["Nasal decongestants","Antibiotics if bacterial"],
    "specialty": "ENT Specialist"
  },
  {
    "id": 1102,
    "name": "Sleep Apnea",
    "symptoms": [66, 52, 214],
    "severity": "medium",
    "description": "Breathing stops during sleep",
    "treatments": ["CPAP machine","Weight loss","Surgery"],
    "specialty": "Sleep Specialist"
  },
  {
    "id": 1103,
    "name": "Sprain",
    "symptoms": [210, 58, 89],
    "severity": "medium",
    "description": "Stretched or torn ligament",
    "treatments": ["RICE method","Pain relievers"],
    "specialty": "Orthopedist"
  },
  {
    "id": 1104,
    "name": "Stomach Flu",
    "symptoms": [77, 13, 129, 42, 52],
    "severity": "medium",
    "description": "Viral gastroenteritis",
    "treatments": ["Hydration","Rest","Anti-nausea drugs"],
    "specialty": "General Practitioner"
  },
  {
    "id": 1105,
    "name": "Strep Throat",
    "symptoms": [56, 42, 129],
    "severity": "medium",
    "description": "Bacterial throat infection",
    "treatments": ["Antibiotics"],
    "specialty": "General Practitioner"
  },
  {
    "id": 1106,
    "name": "Stress",
    "symptoms": [279, 214, 52, 267],
    "severity": "medium",
    "description": "Mental or emotional strain",
    "treatments": ["Relaxation techniques","Exercise","Therapy"],
    "specialty": "Psychiatrist"
  },
  {
    "id": 1107,
    "name": "Stroke",
    "symptoms": [67, 161, 295, 68],
    "severity": "medium",
    "description": "Brain blood supply interrupted",
    "treatments": ["Emergency clot-busting drugs","Surgery"],
    "specialty": "Neurologist"
  },
  {
    "id": 1108,
    "name": "Sty",
    "symptoms": [89, 142, 129],
    "severity": "medium",
    "description": "Eyelid infection",
    "treatments": ["Warm compresses","Antibiotic ointment"],
    "specialty": "Ophthalmologist"
  },
  {
    "id": 1109,
    "name": "Sunburn",
    "symptoms": [89, 129, 15],
    "severity": "medium",
    "description": "UV radiation skin damage",
    "treatments": ["Aloe vera","Cool compresses","Pain relievers"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1110,
    "name": "Syphilis",
    "symptoms": [89, 166],
    "severity": "medium",
    "description": "Bacterial STI",
    "treatments": ["Penicillin"],
    "specialty": "Infectious Disease"
  },
  {
    "id": 1111,
    "name": "Tendonitis",
    "symptoms": [210, 58, 89],
    "severity": "medium",
    "description": "Tendon inflammation",
    "treatments": ["Rest","Ice","Physical therapy"],
    "specialty": "Orthopedist"
  },
  {
    "id": 1112,
    "name": "Tinnitus",
    "symptoms": [69],
    "severity": "medium",
    "description": "Ringing in ears",
    "treatments": ["Hearing aids","Sound therapy","CBT"],
    "specialty": "ENT Specialist"
  },
  {
    "id": 1113,
    "name": "Tonsillitis",
    "symptoms": [56, 42, 129],
    "severity": "medium",
    "description": "Inflamed tonsils",
    "treatments": ["Antibiotics if bacterial","Tonsillectomy if recurrent"],
    "specialty": "ENT Specialist"
  },
  {
    "id": 1114,
    "name": "Toothache",
    "symptoms": [70, 129],
    "severity": "medium",
    "description": "Tooth or gum pain",
    "treatments": ["Dental filling","Root canal","Extraction"],
    "specialty": "Dentist"
  },
  {
    "id": 1115,
    "name": "Trichomonas",
    "symptoms": [166, 8, 142],
    "severity": "medium",
    "description": "Parasitic STI",
    "treatments": ["Metronidazole"],
    "specialty": "Gynecologist"
  },
  {
    "id": 1116,
    "name": "Ulcerative Colitis",
    "symptoms": [4, 77, 13, 176],
    "severity": "medium",
    "description": "Inflammatory bowel disease",
    "treatments": ["Anti-inflammatory drugs","Immunosuppressants"],
    "specialty": "Gastroenterologist"
  },
  {
    "id": 1117,
    "name": "Urinary Tract Infection",
    "symptoms": [54, 63, 129],
    "severity": "medium",
    "description": "Bacterial infection of urinary system",
    "treatments": ["Antibiotics","Hydration"],
    "specialty": "Urologist"
  },
  {
    "id": 1118,
    "name": "Uterine Prolapse",
    "symptoms": [71, 4],
    "severity": "medium",
    "description": "Uterus drops into vagina",
    "treatments": ["Pelvic exercises","Pessary","Surgery"],
    "specialty": "Gynecologist"
  },
  {
    "id": 1119,
    "name": "Varicose Veins",
    "symptoms": [72, 58, 210],
    "severity": "medium",
    "description": "Enlarged twisted veins",
    "treatments": ["Compression stockings","Sclerotherapy","Surgery"],
    "specialty": "Vascular Surgeon"
  },
  {
    "id": 1120,
    "name": "Vertigo",
    "symptoms": [57, 128, 161],
    "severity": "medium",
    "description": "Spinning sensation",
    "treatments": ["Vestibular rehabilitation","Medications"],
    "specialty": "ENT Specialist"
  },
  {
    "id": 1121,
    "name": "Vitiligo",
    "symptoms": [73],
    "severity": "medium",
    "description": "Loss of skin pigmentation",
    "treatments": ["Topical steroids","Light therapy"],
    "specialty": "Dermatologist"
  },
  {
    "id": 1122,
    "name": "Whooping Cough",
    "symptoms": [96, 136],
    "severity": "medium",
    "description": "Severe bacterial cough",
    "treatments": ["Antibiotics","Vaccination"],
    "specialty": "Pediatrician"
  },
  {
    "id": 1123,
    "name": "Yeast Infection",
    "symptoms": [142, 166, 8],
    "severity": "medium",
    "description": "Vaginal candida overgrowth",
    "treatments": ["Antifungal cream or pill"],
    "specialty": "Gynecologist"
  }
];

// Total: 1000 symptoms, 400 conditions

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

        // Skip if no symptoms match at all
        if (matchedSymptoms.length === 0) return;

        const matchPercentage = (matchedSymptoms.length / condition.symptoms.length) * 100;

        // NEW IMPROVED MATCHING LOGIC FOR REAL MEDICAL DATA
        // Much more lenient to handle single symptoms properly
        let shouldInclude = false;

        if (selectedSymptoms.length === 1) {
            // For single symptom: include ANY condition that contains it
            shouldInclude = matchedSymptoms.length >= 1;
        } else if (selectedSymptoms.length === 2) {
            // For 2 symptoms: require at least 1 match OR 20% match
            shouldInclude = matchedSymptoms.length >= 1 || matchPercentage >= 20;
        } else {
            // For 3+ symptoms: require at least 2 matches OR 25% match
            shouldInclude = matchedSymptoms.length >= 2 || matchPercentage >= 25;
        }

        if (shouldInclude) {
            // Calculate confidence score with multiple factors
            const relevanceScore = (matchedSymptoms.length / selectedSymptoms.length) * 100;

            // Weighted scoring:
            // - 60% based on how many of the condition's symptoms match
            // - 40% based on how many of the user's symptoms are relevant to this condition
            const confidenceScore = (
                (matchPercentage * 0.6) +
                (relevanceScore * 0.4)
            );

            results.push({
                ...condition,
                matchedSymptoms,
                matchPercentage,
                confidenceScore
            });
        }
    });

    // Sort by confidence score (descending) and then by number of matched symptoms
    results.sort((a, b) => {
        if (Math.abs(b.confidenceScore - a.confidenceScore) > 5) {
            return b.confidenceScore - a.confidenceScore;
        }
        return b.matchedSymptoms.length - a.matchedSymptoms.length;
    });

    // Limit results to top 10 to avoid overwhelming the user
    const topResults = results.slice(0, 10);

    displayResults(topResults);
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

// Search for places using Google Maps Places Service
async function searchPlaces(type, location) {
    return new Promise((resolve, reject) => {
        try {
            // Create a map element (required for PlacesService but not displayed)
            const mapDiv = document.createElement('div');
            const map = new google.maps.Map(mapDiv);

            // Create PlacesService
            const service = new google.maps.places.PlacesService(map);

            // Search request
            const request = {
                location: new google.maps.LatLng(location.lat, location.lng),
                radius: 5000,
                type: type
            };

            service.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    const places = results.map(place => ({
                        name: place.name,
                        type: formatType(type),
                        address: place.vicinity,
                        distance: calculateDistance(location, {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        }),
                        rating: place.rating || null,
                        userRatingsTotal: place.user_ratings_total || 0,
                        placeId: place.place_id,
                        isOpen: place.opening_hours?.open_now,
                        location: {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        }
                    }));
                    resolve(places);
                } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                    resolve([]);
                } else {
                    console.error(`Places API error for ${type}:`, status);
                    reject(new Error(`Places API error: ${status}`));
                }
            });
        } catch (error) {
            console.error(`Error searching for ${type}:`, error);
            reject(error);
        }
    });
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
