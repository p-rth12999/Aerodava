export const MOCK_DOCTORS = [
  { id: "d1", name: "Dr. Ananya Sharma", specialty: "General Medicine", status: "Available", availability: "Available Now" },
  { id: "d2", name: "Dr. Rahul Mehta", specialty: "General Medicine", status: "Busy", availability: "Available in 15 min" },
  { id: "d3", name: "Dr. Priya Joshi", specialty: "Pediatrics", status: "Offline", availability: "Available tomorrow" },
  { id: "d4", name: "Dr. Vikram Singh", specialty: "Cardiology", status: "Available", availability: "Available Now" },
  { id: "d5", name: "Dr. Sneha Patel", specialty: "Pulmonology", status: "Available", availability: "Available Now" },
];

export const MOCK_PATIENTS = [
  {
    id: "p1",
    name: "Aarav",
    age: 42,
    bloodGroup: "O+",
    allergies: ["Penicillin"],
    emergencyContact: "+91 9876543210",
    conditions: ["Asthma"],
    medications: [
      { id: "m1", name: "Salbutamol Inhaler", dosage: "100mcg", frequency: "As needed", startDate: "2023-01-15" }
    ],
    sharedWith: ["d1"] // Doctor IDs
  },
  { id: "p2", name: "Mira", age: 28, bloodGroup: "A+", allergies: [], emergencyContact: "+91 9876543211", conditions: [], medications: [], sharedWith: [] },
  { id: "p3", name: "Kiran", age: 55, bloodGroup: "B+", allergies: ["Sulfa drugs"], emergencyContact: "+91 9876543212", conditions: ["Hypertension"], medications: [{ id: "m2", name: "Amlodipine", dosage: "5mg", frequency: "Daily", startDate: "2020-05-10" }], sharedWith: ["d4"] },
  { id: "p4", name: "Arjun", age: 34, bloodGroup: "O-", allergies: [], emergencyContact: "+91 9876543213", conditions: [], medications: [], sharedWith: ["d2"] },
  { id: "p5", name: "Riya", age: 8, bloodGroup: "AB+", allergies: ["Peanuts"], emergencyContact: "+91 9876543214", conditions: [], medications: [], sharedWith: ["d3"] },
];

export const MOCK_REPORTS = [
  { id: "r1", patientId: "p1", filename: "CBC_Blood_Test.pdf", type: "Blood Report", date: "2026-09-10", summary: "Elevated eosinophils, likely allergic response. Other values normal." },
  { id: "r2", patientId: "p1", filename: "Chest_XRay_Report.pdf", type: "Imaging", date: "2025-11-20", summary: "Clear lungs, no active infiltrates." },
  { id: "r3", patientId: "p2", filename: "Vitamin_D_B12.pdf", type: "Blood Report", date: "2026-08-15", summary: "Vitamin D deficiency detected (12 ng/mL). B12 normal." },
  { id: "r4", patientId: "p3", filename: "Lipid_Profile.pdf", type: "Blood Report", date: "2026-09-01", summary: "Borderline high LDL cholesterol." },
  { id: "r5", patientId: "p3", filename: "ECG_Resting.pdf", type: "Cardiology", date: "2026-09-02", summary: "Normal sinus rhythm." },
  { id: "r6", patientId: "p4", filename: "Liver_Function.pdf", type: "Blood Report", date: "2026-07-10", summary: "All enzymes within normal range." },
  { id: "r7", patientId: "p5", filename: "Allergy_Panel.pdf", type: "Lab Report", date: "2024-04-12", summary: "Severe peanut allergy confirmed." },
  { id: "r8", patientId: "p1", filename: "Spirometry.pdf", type: "Pulmonary", date: "2026-02-18", summary: "Mild obstructive pattern, reversible with bronchodilator." },
];

export const MOCK_CONSULTATIONS = [
  { id: "c1", patientId: "p1", doctorId: "d1", date: "2026-09-12", type: "General consultation", notes: "Patient reported mild wheezing. Advised to continue inhaler." },
  { id: "c2", patientId: "p1", doctorId: "AI", date: "2026-09-03", type: "AI Copilot consultation", notes: "User asked about cough duration. Assessed as low risk." },
  { id: "c3", patientId: "p2", doctorId: "d2", date: "2026-08-20", type: "Follow up", notes: "Prescribed Vitamin D supplements." },
  { id: "c4", patientId: "p3", doctorId: "d4", date: "2026-09-05", type: "Cardio Check", notes: "ECG normal, BP well controlled on Amlodipine." },
  { id: "c5", patientId: "p3", doctorId: "AI", date: "2026-09-01", type: "Report explanation", notes: "Explained Lipid profile results to user." },
  { id: "c6", patientId: "p5", doctorId: "d3", date: "2026-06-15", type: "Pediatric review", notes: "Growth parameters normal. Epipen prescription renewed." },
  { id: "c7", patientId: "p4", doctorId: "AI", date: "2026-07-11", type: "Report explanation", notes: "Explained LFT results." },
  { id: "c8", patientId: "p1", doctorId: "d5", date: "2026-02-20", type: "Specialist review", notes: "Asthma action plan updated." },
  { id: "c9", patientId: "p2", doctorId: "AI", date: "2026-08-16", type: "AI Copilot consultation", notes: "User reported fatigue. Suggested checking Vitamin levels." },
  { id: "c10", patientId: "p4", doctorId: "d1", date: "2026-01-10", type: "General consultation", notes: "Routine checkup. No issues." },
];

export const MOCK_PRESCRIPTIONS = [
  { id: "pr1", patientId: "p1", doctorId: "d1", date: "2026-09-12", medicine: "Salbutamol", dosage: "100mcg", frequency: "SOS", duration: "Ongoing", instructions: "Use during acute breathlessness" },
  { id: "pr2", patientId: "p2", doctorId: "d2", date: "2026-08-20", medicine: "Cholecalciferol", dosage: "60,000 IU", frequency: "Weekly", duration: "8 weeks", instructions: "Take with milk after meals" },
  { id: "pr3", patientId: "p3", doctorId: "d4", date: "2026-09-05", medicine: "Amlodipine", dosage: "5mg", frequency: "Daily", duration: "Ongoing", instructions: "Take in the morning" },
  { id: "pr4", patientId: "p3", doctorId: "d4", date: "2026-09-05", medicine: "Atorvastatin", dosage: "10mg", frequency: "Daily", duration: "3 months", instructions: "Take at night" },
  { id: "pr5", patientId: "p5", doctorId: "d3", date: "2026-06-15", medicine: "Epinephrine Auto-injector", dosage: "0.15mg", frequency: "SOS", duration: "Emergency", instructions: "Use immediately for anaphylaxis" },
];

export const MOCK_ALERTS = [
  { id: "a1", patientId: "p1", type: "ESCALATION", priority: "HIGH", description: "Potential urgent symptoms: Breathing difficulty", status: "Pending" },
  { id: "a2", patientId: "p4", type: "ESCALATION", priority: "MODERATE", description: "Persistent fever", status: "Reviewing" },
  { id: "a3", patientId: "p2", type: "LOGISTICS", priority: "EMERGENCY", description: "Emergency supply requested to Remote Health Centre", status: "Dispatched" }
];

export const MOCK_TRENDS = [
  { category: "Respiratory symptoms", trend: "↑ 11%", status: "warning" },
  { category: "Fever reports", trend: "↑ 18%", status: "warning" },
  { category: "GI symptoms", trend: "→ Stable", status: "normal" },
  { category: "Allergic reactions", trend: "↓ 5%", status: "normal" }
];
