import { MOCK_PATIENTS, MOCK_DOCTORS, MOCK_REPORTS, MOCK_CONSULTATIONS, MOCK_PRESCRIPTIONS, MOCK_ALERTS, MOCK_TRENDS } from "@/lib/demo-data";

// Artificial delay to simulate network request
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const apiService = {
  getPatientProfile: async (id: string) => {
    await delay(500);
    return MOCK_PATIENTS.find(p => p.id === id);
  },
  getPatientReports: async (patientId: string) => {
    await delay(500);
    return MOCK_REPORTS.filter(r => r.patientId === patientId);
  },
  getPatientConsultations: async (patientId: string) => {
    await delay(500);
    return MOCK_CONSULTATIONS.filter(c => c.patientId === patientId).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },
  getPatientPrescriptions: async (patientId: string) => {
    await delay(500);
    return MOCK_PRESCRIPTIONS.filter(p => p.patientId === patientId);
  },
  getAllDoctors: async () => {
    await delay(500);
    return MOCK_DOCTORS;
  },
  getDoctorById: async (id: string) => {
    await delay(500);
    return MOCK_DOCTORS.find(d => d.id === id);
  },
  getHospitalAlerts: async () => {
    await delay(500);
    return MOCK_ALERTS;
  },
  getHospitalTrends: async () => {
    await delay(500);
    return MOCK_TRENDS;
  },
  getHospitalStats: async () => {
    await delay(500);
    return {
      activePatients: 1248,
      doctorRequests: 31,
      aiEscalations: 8,
      emergencyAlerts: 2
    };
  }
};
