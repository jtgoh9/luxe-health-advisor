export interface PackageCategory {
  name: string;
  tests: string[];
}

export interface Package {
  id: string;
  name: string;
  tier: string;
  price_sgd: number;
  price_display: string;
  best_for: string;
  duration: string;
  highlights: string;
  categories: PackageCategory[];
  not_included: string[];
  add_ons_available: boolean;
  featured?: boolean;
  gender?: string;
}

export interface Provider {
  id: string;
  name: string;
  shortName: string;
  location: string;
  badge: string | null;
  tagline: string;
  about: string;
  features: string[];
  indonesian_note: string;
  packages: Package[];
}

export const PROVIDERS: Provider[] = [
  {
    id: "da-medsuites",
    name: "DA MedSuites",
    shortName: "DA MedSuites",
    location: "Orchard Road, Singapore",
    badge: "featured",
    tagline: "One-stop screening & imaging. Same-day results.",
    about: "Part of Doctor Anywhere, DA MedSuites is Singapore's integrated health screening and medical imaging centre at Orchard Road.",
    features: ["Same-day results", "Non-fasting", "MRI & CT on-site", "Walk-in available", "GP review included"],
    indonesian_note: "Indonesian-language website available",
    packages: [
      {
        id: "da-aspen", name: "Aspen", tier: "Essential", price_sgd: 428, price_display: "SGD 428",
        best_for: "First-time screeners or annual check-up", duration: "Half day",
        highlights: "Comprehensive health assessment with essential tests and personalised recommendations.",
        categories: [
          { name: "Physical Examination", tests: ["Blood pressure", "BMI & body composition", "Vision test", "Hearing test", "Resting ECG", "Urine test", "Stool occult blood test"] },
          { name: "Blood Panel", tests: ["Full blood count", "Cholesterol profile (LDL, HDL, triglycerides)", "Liver function", "Kidney function", "Diabetes screen (fasting glucose, HbA1c)", "Thyroid function (TSH)", "Uric acid"] },
          { name: "Cancer Markers", tests: ["CEA (colorectal cancer)", "AFP (liver cancer)", "CA19-9 (pancreatic cancer)"] },
          { name: "Infection Screening", tests: ["Hepatitis B surface antigen & antibody", "Hepatitis C antibody"] },
          { name: "Included Services", tests: ["Personalised health report", "1-to-1 GP review & consultation", "Refreshments during visit"] }
        ],
        not_included: ["Imaging (X-ray, ultrasound, MRI, CT)", "Cardiac stress test", "Hormone panel"],
        add_ons_available: true
      },
      {
        id: "da-birch", name: "Birch", tier: "Advanced", price_sgd: 628, price_display: "SGD 628",
        best_for: "Ages 35–50 wanting deeper hormonal and cancer insight", duration: "Half–full day",
        highlights: "Adds glaucoma eye exam, detailed hormonal tests, broader tumour markers, and gender-specific imaging choice.",
        categories: [
          { name: "Everything in Aspen, plus:", tests: [] },
          { name: "Enhanced Eye Exam", tests: ["Tonometry (glaucoma risk screening)", "Visual field test"] },
          { name: "Extended Hormonal Panel", tests: ["Free testosterone (M) / Oestradiol (F)", "FSH & LH (fertility/menopause markers)", "DHEA-S (adrenal function)"] },
          { name: "Broader Cancer Markers", tests: ["PSA (prostate, M)", "CA-125 (ovarian cancer, F)", "CA 15-3 (breast cancer, F)"] },
          { name: "Gender-Specific Imaging (choose 1)", tests: ["Treadmill stress test", "Mammogram (F)", "Ultrasound — pelvis/cervix (F) or abdomen/pancreas (M/F)"] }
        ],
        not_included: ["MRI scans", "CT scans", "Cardiac CT angiogram", "Advanced bone profile"],
        add_ons_available: true
      },
      {
        id: "da-cedar", name: "Cedar", tier: "Comprehensive", price_sgd: 898, price_display: "SGD 898",
        best_for: "Ages 40–55 with evolving hormonal and bone health needs", duration: "Full day",
        highlights: "Adds bone & joint health profile, blood group typing, cardiac status, and broader imaging options.",
        categories: [
          { name: "Everything in Birch, plus:", tests: [] },
          { name: "Bone & Joint Profile", tests: ["Calcium & phosphate", "Vitamin D level", "Rheumatoid factor", "Uric acid (gout screen)"] },
          { name: "Enhanced Cardiac Panel", tests: ["High-sensitivity CRP (inflammation marker)", "Lipoprotein(a)", "ApoB / ApoA1 ratio"] },
          { name: "Additional Tests", tests: ["Blood group typing (ABO & Rhesus)", "Testosterone full panel", "Expanded gender-specific imaging"] }
        ],
        not_included: ["MRI scans", "CT scans", "H. Pylori test", "Full micronutrient panel"],
        add_ons_available: true
      },
      {
        id: "da-oak", name: "Oak", tier: "Premium", price_sgd: 1298, price_display: "SGD 1,298",
        best_for: "50+ professionals wanting cardiac & hormonal depth", duration: "Full day",
        highlights: "Expanded cardiac markers, H. Pylori test, full haematological profile, comprehensive hormonal panel.",
        categories: [
          { name: "Everything in Cedar, plus:", tests: [] },
          { name: "Full Haematological Panel", tests: ["Serum iron & TIBC", "Ferritin", "Vitamin B12", "Folic acid"] },
          { name: "Expanded Cardiac Markers", tests: ["NT-proBNP (heart failure marker)", "Troponin I", "Extended lipid fractionation"] },
          { name: "Digestive & Infection", tests: ["H. Pylori antigen (gastritis / ulcer risk)", "Stool culture"] },
          { name: "Full Hormonal Profile", tests: ["Thyroid free T3, T4, TSH", "Full testosterone panel", "Growth hormone (IGF-1)", "Cortisol (adrenal function)"] }
        ],
        not_included: ["MRI scans", "CT scans"],
        add_ons_available: true
      },
      {
        id: "da-pine", name: "Pine", tier: "Elite", price_sgd: 2188, price_display: "SGD 2,188",
        best_for: "Executives wanting advanced imaging and MRI", duration: "Full day",
        highlights: "Adds choice of MRI scan, advanced CT, and COMO Club Privileges.",
        categories: [
          { name: "Everything in Oak, plus:", tests: [] },
          { name: "Advanced Imaging (choose 1 MRI)", tests: ["MRI lumbar spine", "MRI cervical spine", "MRI thoracic spine", "MRI knee", "MRI abdomen & pelvis", "MRI prostate"] },
          { name: "CT Imaging", tests: ["CT coronary calcium scoring", "CT chest (low-dose lung cancer screen)"] },
          { name: "COMO Club Privileges", tests: ["VIP suite upgrade at DA MedSuites", "Complimentary COMO Shambhala wellness session", "14-day COMO Shambhala Anywhere app access", "Premium meal & drinks during visit"] }
        ],
        not_included: ["Colonoscopy", "Gastroscopy", "LucenceINSIGHT cancer DNA test"],
        add_ons_available: true, featured: true
      },
      {
        id: "da-sequoia", name: "Sequoia", tier: "Ultimate", price_sgd: 4988, price_display: "SGD 4,988",
        best_for: "Most comprehensive — CT angiogram, full-body MRI, scopes, DNA cancer screen", duration: "Full day",
        highlights: "CT coronary angiogram, full-body MRI, gastroscopy or colonoscopy, and LucenceINSIGHT™ multi-cancer DNA test.",
        categories: [
          { name: "Everything in Pine, plus:", tests: [] },
          { name: "Coronary Assessment", tests: ["CT coronary angiogram (CTCA)"] },
          { name: "Full Body Imaging", tests: ["Full body MRI (head to pelvis)"] },
          { name: "Digestive Tract Assessment", tests: ["Gastroscopy (stomach & upper GI)", "Colonoscopy (colon & lower GI)"] },
          { name: "Genetic Cancer Screening", tests: ["LucenceINSIGHT™ Multi-Cancer Early Detection"] }
        ],
        not_included: [],
        add_ons_available: true
      }
    ]
  },
  {
    id: "parkway-shenton",
    name: "Parkway Shenton",
    shortName: "Parkway",
    location: "Mount Elizabeth, Novena, Gleneagles",
    badge: "ultra-premium",
    tagline: "IHH Healthcare network. Private lounge. Bahasa Indonesia staff.",
    about: "Part of IHH Healthcare — one of the world's largest private hospital networks.",
    features: ["IHH Healthcare network", "1,500+ specialist access", "Bahasa Indonesia staff", "Mandarin staff", "MyHealth360 app"],
    indonesian_note: "Bahasa Indonesia & Mandarin concierge staff available",
    packages: [
      {
        id: "ps-screen-prime", name: "Screen Prime", tier: "Essential", price_sgd: 585, price_display: "SGD 585",
        best_for: "Young professionals, first health screen", duration: "Half day",
        highlights: "Health check for young professionals. Designed to screen for common diseases.",
        categories: [
          { name: "Physical Assessment", tests: ["Blood pressure", "BMI", "Visual acuity", "Resting ECG", "Urinalysis"] },
          { name: "Blood Panel", tests: ["Full blood count", "Lipid profile", "Liver function", "Kidney function", "Fasting glucose", "HbA1c (diabetes)", "Thyroid (TSH)"] },
          { name: "Cancer Markers", tests: ["CEA", "CA19-9", "AFP"] },
          { name: "Infection", tests: ["Hepatitis B & C screen", "Syphilis"] }
        ],
        not_included: ["Cardiac stress test", "Imaging", "Advanced hormonal panel", "Bone density"],
        add_ons_available: true
      },
      {
        id: "ps-screen-classic", name: "Screen Classic", tier: "Advanced", price_sgd: 958, price_display: "SGD 958",
        best_for: "Busy professionals wanting cancer and cardiac screening", duration: "Half–full day",
        highlights: "Quality health check with basic cancer screening and optional imaging.",
        categories: [
          { name: "Everything in Screen Prime, plus:", tests: [] },
          { name: "Enhanced Cancer Markers", tests: ["PSA (prostate, M)", "CA-125 (ovarian, F)", "CA 15-3 (breast, F)", "CA72-4 (gastric cancer)"] },
          { name: "Optional Imaging (add-on)", tests: ["Chest X-ray", "Ultrasound abdomen", "Mammogram (F)"] },
          { name: "Cardiac", tests: ["High-sensitivity CRP", "Cardiac risk assessment"] }
        ],
        not_included: ["Treadmill stress test", "MRI", "CT", "Advanced hormonal panel"],
        add_ons_available: true
      },
      {
        id: "ps-screen-executive", name: "Screen Executive", tier: "Comprehensive", price_sgd: 1740, price_display: "SGD 1,740",
        best_for: "Senior professionals 40+, cardiac and cancer focus", duration: "Full day",
        highlights: "Detailed health check with full cancer screening, cardiac stress test, and gender-specific tests.",
        categories: [
          { name: "Everything in Screen Classic, plus:", tests: [] },
          { name: "Cardiac Assessment", tests: ["Treadmill ECG stress test", "Echocardiogram", "NT-proBNP (heart failure)", "Troponin I"] },
          { name: "Full Hormonal Panel", tests: ["Testosterone / Oestradiol", "FSH, LH", "Thyroid free T3, T4, TSH", "Cortisol"] },
          { name: "Advanced Imaging", tests: ["Ultrasound abdomen & pelvis", "Chest X-ray", "Mammogram + ultrasound breast (F)", "Ultrasound prostate (M)"] },
          { name: "Gender-Specific", tests: ["Pap smear (F)", "PSA total & free (M)", "Bone density (DEXA) — optional"] }
        ],
        not_included: ["MRI", "CT coronary angiogram", "Colonoscopy", "DNA cancer test"],
        add_ons_available: true
      },
      {
        id: "ps-screen-senior", name: "Screen Senior Executive", tier: "Premium", price_sgd: 2688, price_display: "SGD 2,688",
        best_for: "50+ wanting advanced ultrasound and biomarker depth", duration: "Full day",
        highlights: "Full suite with advanced ultrasound options and ageing biomarker tests.",
        categories: [
          { name: "Everything in Screen Executive, plus:", tests: [] },
          { name: "Ageing Biomarker Panel", tests: ["Adrenal function test (DHEA-S, cortisol)", "Pituitary function (growth hormone IGF-1)", "Sex hormone full panel"] },
          { name: "Advanced Ultrasound", tests: ["Ultrasound carotid artery (stroke risk)", "Ultrasound thyroid", "Advanced pelvic / abdominal ultrasound"] },
          { name: "Extended Nutrition Panel", tests: ["Vitamin B12, B6", "Vitamin D (25-OH)", "Zinc & selenium", "Homocysteine"] }
        ],
        not_included: ["CT coronary angiogram", "Full body MRI", "Colonoscopy"],
        add_ons_available: true
      },
      {
        id: "ps-screen-senior-comp",
        name: "Screen Senior Comprehensive",
        tier: "Elite",
        price_sgd: 6388,
        price_display: "SGD 6,388",
        best_for: "Seniors 60+ — functional decline, high-risk diseases, digestive tract cancers",
        duration: "Full day",
        highlights: "Comprehensive health check for seniors. Screens for functional decline, high-risk diseases and digestive tract cancers.",
        categories: [
          { name: "Everything in Screen Senior Executive, plus:", tests: [] },
          { name: "Digestive Tract Cancer Screening", tests: ["Colonoscopy (colon cancer)", "CEA + CA19-9 (colorectal / pancreatic)", "H. Pylori test (gastric cancer risk)"] },
          { name: "Functional Decline Assessment", tests: ["Frailty index assessment", "Cognitive screening (MMSE)", "Bone density (DEXA)", "Fall risk assessment"] },
          { name: "Advanced Cardiac & Vascular", tests: ["CT coronary calcium scoring", "Carotid intima-media thickness", "ABI (peripheral artery disease)"] }
        ],
        not_included: ["Full body MRI", "Gastroscopy", "LucenceINSIGHT DNA cancer test"],
        add_ons_available: true
      },
      {
        id: "ps-screen-excelsior", name: "Screen Excelsior", tier: "Ultra VIP", price_sgd: 12388, price_display: "From SGD 12,388",
        best_for: "Ultra HNW — bespoke, fully concierged, same-day results", duration: "Full day (4–6 hours)",
        highlights: "Bespoke all-inclusive screening. Private lounge. Gourmet dining. Limo transfers included.",
        categories: [
          { name: "Comprehensive Diagnostics", tests: ["Full blood panel (all markers)", "Advanced cardiac: CT coronary angiogram OR echocardiogram", "Full tumour marker panel + multi-cancer DNA screening", "Full imaging: MRI and/or CT (tailored)", "Full gynaecological screen (F) or prostate screen (M)"] },
          { name: "Same-Day Specialist Consultations", tests: ["Cardiologist review", "Oncologist review", "Endocrinologist review", "Radiologist report walk-through"] },
          { name: "Concierge Experience", tests: ["Private lounge at Mount Elizabeth Hospital", "Gourmet dining & curated F&B", "Dedicated care manager", "Return limo transfer included", "Preferred language support (BI, Mandarin, English)"] },
          { name: "Post-Screening", tests: ["Comprehensive personalised health report", "Specialist referral coordination (IHH 1,500+ network)", "Digital records via MyHealth360 app", "Priority follow-up appointments"] }
        ],
        not_included: [],
        add_ons_available: true, featured: true
      }
    ]
  },
  {
    id: "raffles-medical",
    name: "Raffles Medical",
    shortName: "Raffles",
    location: "Raffles Hospital, Holland V, Shaw Centre",
    badge: "most-trusted",
    tagline: "Singapore's most recognised brand for Indonesian medical tourists.",
    about: "Singapore's most trusted private healthcare brand, with dedicated international patient services.",
    features: ["Most recognised brand", "International patient centre", "Gender-specific packages", "Multiple locations", "Raffles Hospital base"],
    indonesian_note: "Dedicated international patient services at Raffles Hospital",
    packages: [
      {
        id: "rm-classic", name: "Raffles Classic 2025", tier: "Essential", price_sgd: 398, price_display: "SGD 398",
        best_for: "Annual check-up, first-time screeners", duration: "Half day",
        highlights: "Key health indicators. Physical exam, lab analysis, post-exam review with doctor.",
        categories: [
          { name: "Physical Examination", tests: ["Blood pressure & pulse", "BMI & body composition", "Vision & colour vision", "Resting ECG", "Urinalysis (dipstick)", "Stool occult blood"] },
          { name: "Blood Panel", tests: ["Full blood count + differential", "ESR", "Fasting glucose & HbA1c", "Lipid profile", "Liver function", "Kidney function", "Thyroid (TSH)"] },
          { name: "Infection Markers", tests: ["Hepatitis B (surface antigen + antibody)", "Hepatitis C antibody", "Syphilis VDRL"] },
          { name: "Included", tests: ["Post-exam physician review", "Personalised health report"] }
        ],
        not_included: ["Tumour markers", "Imaging", "Cardiac stress test", "Hormonal panel"],
        add_ons_available: true
      },
      {
        id: "rm-plus", name: "Raffles Plus 2025", tier: "Advanced", price_sgd: 578, price_display: "SGD 578",
        best_for: "40+ wanting cancer marker coverage added to basics", duration: "Half day",
        highlights: "Adds tumour markers for more in-depth cancer risk assessment.",
        categories: [
          { name: "Everything in Raffles Classic, plus:", tests: [] },
          { name: "Tumour Markers", tests: ["CEA", "AFP", "CA19-9", "CA72-4", "PSA total (M)", "CA-125 (F)", "CA 15-3 (F)", "Beta-HCG"] }
        ],
        not_included: ["Imaging", "Cardiac stress test", "Hormonal panel", "Bone density"],
        add_ons_available: true
      },
      {
        id: "rm-executive-m", name: "Raffles Executive (Men)", tier: "Comprehensive", price_sgd: 988, price_display: "SGD 988",
        best_for: "Men 40+ — cardiovascular risk, prostate, cancer screen", duration: "Full day",
        highlights: "Cardiovascular disease and cancer screening including prostate.",
        categories: [
          { name: "Everything in Raffles Plus, plus:", tests: [] },
          { name: "Radiology", tests: ["Chest X-ray", "Ultrasound abdomen & pelvis", "Ultrasound prostate"] },
          { name: "Cardiac Assessment", tests: ["Treadmill ECG stress test", "High-sensitivity CRP", "Fibrinogen"] },
          { name: "Men's Health", tests: ["Free testosterone", "PSA free / total ratio", "DHEA-S"] }
        ],
        not_included: ["MRI", "CT angiogram", "Colonoscopy"],
        add_ons_available: true, gender: "Male"
      },
      {
        id: "rm-executive-f", name: "Raffles Executive (Ladies)", tier: "Comprehensive", price_sgd: 1088, price_display: "SGD 1,088",
        best_for: "Women 40+ — cardiovascular, breast, ovarian, cervical", duration: "Full day",
        highlights: "Heart disease and cancer screening including breast and ovarian. Includes mammogram, pap smear.",
        categories: [
          { name: "Everything in Raffles Plus, plus:", tests: [] },
          { name: "Women's Imaging", tests: ["Mammogram (digital)", "Ultrasound breast", "Ultrasound pelvis", "Chest X-ray"] },
          { name: "Cardiac", tests: ["Treadmill ECG stress test", "High-sensitivity CRP"] },
          { name: "Women's Health", tests: ["Pap smear", "HPV screening (add-on)", "Oestradiol, FSH, LH", "DHEA-S", "Progesterone"] }
        ],
        not_included: ["MRI", "CT angiogram", "Colonoscopy"],
        add_ons_available: true, gender: "Female"
      }
    ]
  },
  {
    id: "healthway",
    name: "Healthway Health Screening",
    shortName: "Healthway",
    location: "Multiple centres across Singapore",
    badge: null,
    tagline: "Comfort-focused. Multiple centres. Indonesian language website.",
    about: "Part of Healthway Medical Group — one of Singapore's largest private healthcare networks.",
    features: ["Multiple centres", "Indonesian-language website", "Non-clinical atmosphere", "Corporate wellness expertise", "Flexible add-ons"],
    indonesian_note: "Full Indonesian-language website: healthwayhealthscreening.com/id",
    packages: [
      {
        id: "hw-core", name: "Core", tier: "Essential", price_sgd: 428, price_display: "SGD 428",
        best_for: "Essential baseline screening for preventive care", duration: "Half day",
        highlights: "Focused, essential health assessment covering major organ systems.",
        categories: [
          { name: "Physical Examination", tests: ["Blood pressure", "BMI", "Vision test", "Resting ECG", "Urinalysis"] },
          { name: "Blood Panel", tests: ["Full blood count", "Cholesterol profile", "Liver function", "Kidney function", "Fasting glucose", "HbA1c", "Thyroid (TSH)", "Uric acid"] },
          { name: "Infection", tests: ["Hepatitis B & C screen"] },
          { name: "Basic Cancer", tests: ["CEA", "AFP", "CA19-9"] }
        ],
        not_included: ["Extended tumour markers", "Imaging", "Cardiac stress test", "Hormonal panel"],
        add_ons_available: true
      },
      {
        id: "hw-ember", name: "Ember", tier: "Advanced", price_sgd: 578, price_display: "SGD 578",
        best_for: "Core essentials + one focused area of concern", duration: "Half day",
        highlights: "A personalised step up from Core. Includes one focused diagnostic test of your choice.",
        categories: [
          { name: "Everything in Core, plus:", tests: [] },
          { name: "Choose 1 Focused Diagnostic", tests: ["Ultrasound abdomen", "Treadmill stress test", "Chest X-ray", "Mammogram (F)", "Ultrasound prostate (M)", "Cardiac markers (hs-CRP, homocysteine)"] }
        ],
        not_included: ["Multiple imaging tests", "MRI", "CT"],
        add_ons_available: true
      },
      {
        id: "hw-eunoia", name: "Eunoia", tier: "Comprehensive", price_sgd: 748, price_display: "SGD 748",
        best_for: "Adults 30–50 wanting a multi-layered health view", duration: "Full day",
        highlights: "Extended markers, two selected diagnostic tests, and a broader view of overall health.",
        categories: [
          { name: "Everything in Ember, plus:", tests: [] },
          { name: "Extended Blood Markers", tests: ["Iron studies (ferritin, serum iron)", "Vitamin B12", "Vitamin D", "Free testosterone (M) / Oestradiol (F)", "PSA (M) / CA-125 (F)"] },
          { name: "Two Diagnostic Tests (choose 2)", tests: ["Chest X-ray", "Ultrasound abdomen", "Treadmill stress test", "Mammogram (F)", "Ultrasound prostate (M)", "Bone density (DEXA)"] }
        ],
        not_included: ["MRI", "CT", "Colonoscopy", "Advanced cardiac CT"],
        add_ons_available: true
      }
    ]
  }
];
