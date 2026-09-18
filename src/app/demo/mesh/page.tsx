"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Radio, Server, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MeshDemo() {
  const [step, setStep] = useState(0);

  const steps = [
    "Alert Created",
    "Stored Locally (No Internet)",
    "Nearby Node Found (BLE)",
    "Packet Relayed",
    "Health Worker Device Reached",
    "Internet Connection Restored",
    "Aerodava Server Synchronized"
  ];

  const handleSimulate = () => {
    setStep(1);
  };

  useEffect(() => {
    if (step > 0 && step < steps.length) {
      const timer = setTimeout(() => {
        setStep(s => s + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [step, steps.length]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-medical-dark">Human Mesh Simulation</h1>
          <p className="text-medical-teal mt-1">Testing device-to-device relay for offline environments</p>
        </div>
        <Link href="/patient/emergency">
          <Button variant="outline">&larr; Back</Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-medical-teal/20 shadow-sm">
          <CardContent className="p-8 flex flex-col items-center justify-center text-center space-y-6 min-h-[400px]">
            {step === 0 ? (
              <>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                  <Radio className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-medical-dark">Offline Mode Active</h3>
                  <p className="text-sm text-gray-500 mt-2 max-w-sm">
                    When conventional connectivity fails, emergency health alerts can securely hop between nearby devices via Bluetooth until they reach an internet-connected node.
                  </p>
                </div>
                <Button className="bg-medical-teal hover:bg-medical-green text-white w-full max-w-xs" onClick={handleSimulate}>
                  Simulate Offline Alert
                </Button>
              </>
            ) : (
              <div className="w-full space-y-8 relative">
                
                <div className="flex justify-between items-center relative z-10 px-4">
                  <div className={`flex flex-col items-center gap-2 transition-all ${step >= 1 ? 'text-medical-green' : 'text-gray-300'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-medical-green bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Patient</span>
                  </div>
                  
                  <div className={`flex flex-col items-center gap-2 transition-all ${step >= 3 ? 'text-triage-moderate' : 'text-gray-300'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-triage-moderate bg-amber-50' : 'border-gray-200 bg-gray-50'}`}>
                      <Radio className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Relay</span>
                  </div>
                  
                  <div className={`flex flex-col items-center gap-2 transition-all ${step >= 6 ? 'text-medical-dark' : 'text-gray-300'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${step >= 6 ? 'border-medical-dark bg-gray-100' : 'border-gray-200 bg-gray-50'}`}>
                      <Server className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Server</span>
                  </div>
                </div>

                {/* Progress bar background */}
                <div className="absolute top-6 left-12 right-12 h-0.5 bg-gray-200 -z-0">
                  <div 
                    className="h-full bg-medical-teal transition-all duration-1000 ease-in-out"
                    style={{ width: `${Math.min(100, (step / 6) * 100)}%` }}
                  ></div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 text-left font-mono text-xs">
                  <div className="font-semibold text-gray-500 mb-2 font-sans uppercase">Packet Status</div>
                  <div>ID: <span className="text-medical-dark">SOS-1842</span></div>
                  <div>Encryption: <span className="text-triage-low">Enabled (AES-256)</span></div>
                  <div>Hops: <span className="text-medical-dark">{Math.max(0, step - 2)}</span></div>
                  <div className="mt-2 pt-2 border-t border-gray-200 font-semibold text-medical-teal">
                    &gt; {steps[Math.min(step - 1, steps.length - 1)]}
                  </div>
                </div>

                {step >= steps.length && (
                  <Button variant="outline" className="w-full" onClick={() => setStep(0)}>Reset Simulation</Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-medical-dark text-gray-300 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-white font-semibold text-lg mb-4">How it works</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center shrink-0 text-white">1</div>
                  <p>When the user requests emergency help without internet, the alert is encrypted and stored locally.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center shrink-0 text-white">2</div>
                  <p>The app constantly scans for nearby devices running the Aerodava protocol via Bluetooth Low Energy (BLE).</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center shrink-0 text-white">3</div>
                  <p>The encrypted packet hops silently from device to device (Human Mesh) until one of them detects an active internet connection.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center shrink-0 text-white">4</div>
                  <p>The internet-connected node instantly forwards the SOS to the Aerodava Command Server.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
