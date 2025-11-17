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
  },
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
  }
];

// Total: 60 common conditions

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

    // Limit results to top 5 for cleaner UI
    const topResults = results.slice(0, 5);

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
