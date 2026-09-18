"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { apiService } from "@/services/apiService";
import { Bot, User, Stethoscope, CheckCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function DoctorDashboard() {
  const [activePatientId, setActivePatientId] = useState<string | null>("p1");
  const [patient, setPatient] = useState<any>(null);
  const [planSent, setPlanSent] = useState(false);

  // Hardcoded queue for demo script
  const queue = [
    { id: "p1", name: "Patient #A182", reason: "Breathing difficulty", priority: "HIGH" },
    { id: "p4", name: "Patient #A174", reason: "Persistent fever", priority: "MODERATE" },
    { id: "p2", name: "Patient #A169", reason: "Report explanation", priority: "NORMAL" }
  ];

  useEffect(() => {
    if (activePatientId) {
      apiService.getPatientProfile(activePatientId).then(p => {
        setPatient(p);
        setPlanSent(false);
      });
    }
  }, [activePatientId]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      {/* Left Column: Queue */}
      <div className="w-full lg:w-80 shrink-0 space-y-4">
        <h2 className="text-lg font-semibold text-medical-dark">Consultation Queue</h2>
        <div className="space-y-3">
          {queue.map(q => (
            <Card 
              key={q.id} 
              className={`cursor-pointer transition-all ${activePatientId === q.id ? 'ring-2 ring-medical-teal border-transparent' : 'hover:border-medical-teal/50'} ${q.priority === 'HIGH' ? 'border-l-4 border-l-triage-high' : q.priority === 'MODERATE' ? 'border-l-4 border-l-triage-moderate' : 'border-l-4 border-l-gray-300'}`}
              onClick={() => setActivePatientId(q.id)}
            >
              <CardContent className="p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-sm text-medical-dark">{q.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{q.reason}</div>
                  </div>
                  <Badge variant="outline" className={`text-[10px] ${q.priority === 'HIGH' ? 'text-triage-high border-triage-high' : q.priority === 'MODERATE' ? 'text-triage-moderate border-triage-moderate' : 'text-gray-500'}`}>
                    {q.priority}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Right Column: Active Consultation */}
      <div className="flex-1 min-w-0 flex flex-col gap-4">
        {patient ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-gray-200 shadow-sm">
                <CardHeader className="bg-gray-50 pb-2 pt-3 px-4 border-b">
                  <CardTitle className="text-sm flex items-center gap-2"><User className="w-4 h-4"/> Patient Profile</CardTitle>
                </CardHeader>
                <CardContent className="p-4 text-sm space-y-3">
                  <div className="flex justify-between"><span className="text-gray-500">Name</span> <span className="font-medium">{patient.name}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Age / Blood</span> <span className="font-medium">{patient.age} • {patient.bloodGroup}</span></div>
                  <div>
                    <span className="text-gray-500 block mb-1">Conditions</span>
                    <div className="flex gap-1">{patient.conditions.length ? patient.conditions.map((c: string) => <Badge key={c} variant="secondary">{c}</Badge>) : 'None'}</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-triage-moderate/50 bg-amber-50/30 shadow-sm">
                <CardHeader className="bg-amber-50 pb-2 pt-3 px-4 border-b border-amber-100">
                  <CardTitle className="text-sm flex items-center gap-2 text-triage-moderate"><Bot className="w-4 h-4"/> AI Consultation Brief</CardTitle>
                </CardHeader>
                <CardContent className="p-4 text-xs font-medium space-y-2 text-medical-dark">
                  {activePatientId === "p1" ? (
                    <>
                      <div className="grid grid-cols-3"><span className="text-gray-500">Primary concern:</span><span className="col-span-2">Persistent cough & fever</span></div>
                      <div className="grid grid-cols-3"><span className="text-gray-500">Duration:</span><span className="col-span-2">2 days</span></div>
                      <div className="grid grid-cols-3">
                        <span className="text-gray-500">Symptoms:</span>
                        <ul className="col-span-2 list-disc pl-4 text-triage-high">
                          <li>Difficulty breathing</li>
                          <li>Dry cough</li>
                        </ul>
                      </div>
                      <div className="grid grid-cols-3 pt-2 border-t border-amber-100"><span className="text-gray-500">Recommendation:</span><span className="col-span-2 text-triage-high">Urgent clinical review</span></div>
                    </>
                  ) : (
                    <div className="text-gray-500">No urgent flags detected. Routine review recommended.</div>
                  )}
                </CardContent>
              </Card>
            </div>

            <Card className="flex-1 flex flex-col border-gray-200 shadow-sm overflow-hidden">
              <CardHeader className="bg-gray-50 pb-2 pt-3 px-4 border-b flex-row justify-between items-center">
                <CardTitle className="text-sm flex items-center gap-2"><Stethoscope className="w-4 h-4"/> Care Plan & Prescription</CardTitle>
              </CardHeader>
              <CardContent className="p-4 flex flex-col gap-4 flex-1">
                {planSent ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
                    <CheckCircle className="w-12 h-12 text-triage-low" />
                    <div>
                      <div className="text-lg font-semibold text-medical-dark">Care Plan Sent</div>
                      <div className="text-sm text-gray-500">The patient has received your instructions and prescription.</div>
                    </div>
                    <Button variant="outline" onClick={() => setPlanSent(false)}>Create New Plan</Button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase">Clinical Note / Instructions</label>
                      <Textarea placeholder="Type assessment and patient instructions here..." className="min-h-[100px] resize-none" defaultValue={activePatientId === "p1" ? "Patient presenting with acute exacerbation of asthma. Needs immediate nebulization and oral steroids. Monitor SpO2 closely." : ""} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase">Medication</label>
                      <Textarea placeholder="Prescribe medication..." className="min-h-[60px] resize-none" defaultValue={activePatientId === "p1" ? "Salbutamol 100mcg INH SOS\nPrednisolone 40mg PO OD x 5 days" : ""} />
                    </div>
                    <div className="flex justify-end gap-3 mt-auto pt-4">
                      <Button variant="outline" className="border-medical-teal text-medical-teal">Add Clinical Note Only</Button>
                      <Button className="bg-medical-green hover:bg-medical-teal text-white" onClick={() => setPlanSent(true)}>Approve & Send to Patient</Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
            Select a patient from the queue to view details.
          </div>
        )}
      </div>
    </div>
  );
}
