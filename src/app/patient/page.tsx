"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, UserRound, PhoneCall, Pill, Stethoscope, AlertTriangle } from "lucide-react";
import { apiService } from "@/services/apiService";

export default function PatientHome() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In MVP, assuming patient "p1" (Aarav) is the current user
    apiService.getPatientProfile("p1").then(data => {
      setProfile(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8 text-center text-medical-teal">Loading your dashboard...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-medical-dark">Good morning, {profile?.name}</h1>
        <p className="text-medical-teal text-lg mt-1">How can Aerodava help you today?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/patient/copilot">
          <Card className="hover:shadow-md transition-shadow border-medical-teal/20 h-full flex flex-col justify-center bg-medical-green text-white">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Talk to Aerodava</h3>
                <p className="text-white/80 text-sm">Ask questions, analyze symptoms</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/patient/copilot?mode=understand">
          <Card className="hover:shadow-md transition-shadow border-medical-teal/20 h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-medical-light p-3 rounded-full text-medical-teal">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-medical-dark text-lg">Understand a Report</h3>
                <p className="text-gray-500 text-sm">Upload tests to get clear explanations</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/patient/doctors">
          <Card className="hover:shadow-md transition-shadow border-medical-teal/20 h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-medical-light p-3 rounded-full text-medical-teal">
                <Stethoscope className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-medical-dark text-lg">Talk to a Doctor</h3>
                <p className="text-gray-500 text-sm">Consult with available clinicians</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/patient/emergency">
          <Card className="hover:shadow-md transition-shadow border-triage-high/20 bg-triage-high/5 h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="bg-triage-high/10 p-3 rounded-full text-triage-high">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-triage-high text-lg">Emergency Help</h3>
                <p className="text-triage-high/80 text-sm">Alert hospital, activate drone delivery</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-medical-dark border-b pb-2">Health Snapshot</h3>
          <div className="space-y-3">
            {profile?.medications.map((m: any) => (
              <div key={m.id} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                <Pill className="w-5 h-5 text-medical-teal" />
                <div>
                  <div className="text-sm font-medium">{m.name}</div>
                  <div className="text-xs text-gray-500">{m.dosage} • {m.frequency}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-medical-dark border-b pb-2">Recent Activity</h3>
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {/* Hardcoded recent activity for visual demo layout */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-medical-teal text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-100 bg-white shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900 text-sm">AI consultation completed</div>
                  <time className="font-caveat font-medium text-medical-teal text-xs">Today</time>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-medical-light text-medical-teal shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <FileText className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-100 bg-white shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900 text-sm">Blood report uploaded</div>
                  <time className="font-caveat font-medium text-medical-teal text-xs">Yesterday</time>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-medical-light text-medical-teal shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-100 bg-white shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900 text-sm">Doctor consultation completed</div>
                  <time className="font-caveat font-medium text-medical-teal text-xs">2 days ago</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
