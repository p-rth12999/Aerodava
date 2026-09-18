"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Activity, MapPin, CheckCircle, PackageOpen } from "lucide-react";
import Link from "next/link";

export default function EmergencyPage() {
  const [status, setStatus] = useState<"idle" | "requesting" | "dispatched">("idle");

  const handleEmergency = () => {
    setStatus("requesting");
    setTimeout(() => {
      setStatus("dispatched");
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-triage-high flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" /> Emergency Assistance
        </h1>
        <p className="text-gray-600 text-sm mt-1">Activate emergency workflows when conventional access fails.</p>
      </div>

      {status === "idle" && (
        <Card className="border-triage-high/30 bg-red-50/50">
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="font-semibold text-medical-dark text-lg mb-4">What is happening?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Severe breathing difficulty", "Chest pain", "Serious injury", "Medicine emergency"].map(type => (
                  <Button key={type} variant="outline" className="justify-start h-auto py-3 px-4 border-gray-200 hover:border-triage-high hover:bg-red-50">
                    <span className="text-left whitespace-normal">{type}</span>
                  </Button>
                ))}
              </div>
            </div>

            <Button size="lg" className="w-full bg-triage-high hover:bg-red-700 text-white h-14 text-lg" onClick={handleEmergency}>
              Request Emergency Assistance
            </Button>
            
            <div className="text-center">
              <Link href="/demo/mesh" className="text-sm text-medical-teal hover:underline font-medium">
                Simulate Offline Alert (Human Mesh) &rarr;
              </Link>
            </div>
          </CardContent>
        </Card>
      )}

      {status === "requesting" && (
        <Card className="border-triage-high border-2 shadow-lg">
          <CardContent className="p-12 flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 bg-triage-high rounded-full animate-ping opacity-20 scale-150"></div>
              <div className="bg-triage-high p-4 rounded-full text-white relative">
                <Activity className="w-10 h-10 animate-pulse" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-medical-dark">Sending Emergency Request</h3>
              <p className="text-gray-500 mt-2">Connecting to nearest healthcare center...</p>
            </div>
          </CardContent>
        </Card>
      )}

      {status === "dispatched" && (
        <Card className="border-triage-low border-2 shadow-sm bg-green-50/30">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center gap-3 text-triage-low mb-6 border-b border-green-100 pb-4">
              <CheckCircle className="w-8 h-8" />
              <div>
                <h3 className="font-semibold text-xl text-medical-dark">Emergency Request Confirmed</h3>
                <p className="text-sm">Help is on the way</p>
              </div>
            </div>
            
            <div className="space-y-4 bg-white p-4 rounded-lg border border-gray-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-medical-dark">Location</div>
                  <div className="text-sm text-gray-600">[Demo Location, Zone 4]</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-medical-dark">Responding Hospital</div>
                  <div className="text-sm text-gray-600">City General Medical Center</div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <PackageOpen className="w-8 h-8 text-triage-moderate" />
                <div>
                  <div className="text-sm font-bold text-triage-moderate">EMERGENCY LOGISTICS ACTIVATED</div>
                  <div className="text-xs text-amber-700">Road access blocked. Drone dispatched.</div>
                </div>
              </div>
              <Link href="/demo/drone">
                <Button size="sm" className="bg-triage-moderate hover:bg-amber-600 text-white">Track Delivery</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
