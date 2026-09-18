"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { apiService } from "@/services/apiService";
import { FileText, Pill, Clock, Share2, Upload } from "lucide-react";

export default function PortfolioPage() {
  const [profile, setProfile] = useState<any>(null);
  const [reports, setReports] = useState<any[]>([]);
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [consultations, setConsultations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      apiService.getPatientProfile("p1"),
      apiService.getPatientReports("p1"),
      apiService.getPatientPrescriptions("p1"),
      apiService.getPatientConsultations("p1")
    ]).then(([prof, reps, pres, cons]) => {
      setProfile(prof);
      setReports(reps);
      setPrescriptions(pres);
      setConsultations(cons);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8 text-center text-medical-teal">Loading portfolio...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-medical-dark">My Portfolio</h1>
          <p className="text-medical-teal text-sm mt-1">Manage your health records and sharing</p>
        </div>
        <Button variant="outline" className="border-medical-teal text-medical-teal gap-2">
          <Share2 className="w-4 h-4" /> My Health Data
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card className="border-gray-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Name</span>
                <span className="font-medium text-medical-dark">{profile.name}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Age</span>
                <span className="font-medium text-medical-dark">{profile.age}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">Blood Group</span>
                <span className="font-medium text-triage-high">{profile.bloodGroup}</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">Allergies</span>
                <div className="flex flex-wrap gap-1">
                  {profile.allergies.length > 0 ? profile.allergies.map((a: string) => (
                    <Badge key={a} variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-200 border-none">{a}</Badge>
                  )) : <span className="text-gray-400">None reported</span>}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2"><Pill className="w-4 h-4 text-medical-teal"/> Medications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {profile.medications.map((m: any) => (
                <div key={m.id} className="bg-medical-light rounded p-2 text-sm">
                  <div className="font-medium text-medical-dark">{m.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{m.dosage} • {m.frequency}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card className="border-gray-100 shadow-sm">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Reports</CardTitle>
              <Button size="sm" variant="outline" className="h-8 gap-2 border-medical-teal text-medical-teal">
                <Upload className="w-3 h-3" /> Upload
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reports.map(r => (
                  <div key={r.id} className="border border-gray-100 rounded-lg p-3 hover:border-medical-teal/50 transition-colors cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <div className="bg-medical-light p-2 rounded text-medical-teal group-hover:bg-medical-teal group-hover:text-white transition-colors">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-medical-dark truncate">{r.filename}</div>
                        <div className="text-xs text-gray-500 flex justify-between mt-1">
                          <span>{r.type}</span>
                          <span>{r.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-100 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2"><Clock className="w-4 h-4 text-medical-teal"/> Consultations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-4 before:h-full before:w-px before:bg-gray-200 pl-8">
                {consultations.map(c => (
                  <div key={c.id} className="relative">
                    <div className="absolute -left-9 top-1 w-3 h-3 bg-medical-teal rounded-full border-2 border-white shadow-sm"></div>
                    <div className="text-xs text-medical-teal font-medium mb-0.5">{c.date}</div>
                    <div className="font-medium text-sm text-medical-dark">{c.type} with {c.doctorId === "AI" ? "Aerodava AI" : "Doctor"}</div>
                    <div className="text-sm text-gray-500 mt-1 bg-gray-50 p-2 rounded border border-gray-100">{c.notes}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
