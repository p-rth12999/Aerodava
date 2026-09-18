"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Map, AlertTriangle, Navigation, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function DroneDemo() {
  const [status, setStatus] = useState(0);

  const statuses = [
    "Requested",
    "Approved",
    "Dispatched",
    "In Transit",
    "Arrived",
    "Delivered"
  ];

  useEffect(() => {
    if (status > 1 && status < statuses.length - 1) {
      const timer = setTimeout(() => {
        setStatus(s => s + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status, statuses.length]);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-medical-dark">Emergency Logistics</h1>
          <p className="text-medical-teal mt-1">Autonomous dispatch when conventional access is blocked</p>
        </div>
        <Link href="/hospital">
          <Button variant="outline">&larr; Command Center</Button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-red-200 bg-red-50/50 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-triage-high font-bold uppercase tracking-wider text-sm border-b border-red-100 pb-2">
                <AlertTriangle className="w-4 h-4" /> Condition Red
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Road Access</span>
                  <Badge variant="destructive" className="bg-red-500 hover:bg-red-600">BLOCKED</Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Ground Delivery</span>
                  <Badge variant="outline" className="text-red-500 border-red-500">UNAVAILABLE</Badge>
                </div>
                <div className="flex justify-between items-center text-sm font-semibold pt-2 border-t border-red-100">
                  <span className="text-medical-dark">Emergency Logistics</span>
                  <Badge className="bg-triage-moderate hover:bg-amber-600 text-white">ACTIVATED</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-medical-dark flex items-center gap-2">
                <Package className="w-5 h-5 text-medical-teal" /> Medical Package
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-gray-500">Contents</div>
                  <div className="font-medium text-medical-dark">Emergency medical supplies, Prescription-linked package</div>
                </div>
                <div>
                  <div className="text-gray-500">Destination</div>
                  <div className="font-medium text-medical-dark">Remote Health Centre (Zone 4)</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-500">Distance</div>
                  <div className="font-medium">12.4 km</div>
                </div>
              </div>

              {status === 0 && (
                <Button className="w-full bg-medical-dark hover:bg-medical-teal text-white mt-4" onClick={() => setStatus(1)}>
                  Approve Dispatch
                </Button>
              )}
              {status === 1 && (
                <Button className="w-full bg-medical-green hover:bg-medical-teal text-white mt-4" onClick={() => setStatus(2)}>
                  Launch Drone
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
            <div className="bg-gray-100 p-3 border-b flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <Map className="w-4 h-4" /> Aerial Route Visualization
              </div>
              <div className="text-xs font-mono bg-white px-2 py-1 rounded border shadow-sm">
                STATUS: <span className="text-medical-teal font-bold">{statuses[status].toUpperCase()}</span>
              </div>
            </div>
            
            <div className="flex-1 bg-slate-50 relative min-h-[400px]">
              {/* Map grid background */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>
              
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="w-full max-w-lg relative h-32 flex items-center">
                  
                  {/* Origin */}
                  <div className="absolute left-0 z-10 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-medical-dark border-2 border-white shadow"></div>
                    <span className="text-[10px] font-bold mt-2 uppercase tracking-wide text-gray-500">Warehouse</span>
                  </div>

                  {/* Destination */}
                  <div className="absolute right-0 z-10 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-triage-moderate border-2 border-white shadow"></div>
                    <span className="text-[10px] font-bold mt-2 uppercase tracking-wide text-gray-500">Target</span>
                  </div>

                  {/* Route Line */}
                  <div className="absolute left-2 right-2 border-t-2 border-dashed border-gray-300"></div>

                  {/* Drone */}
                  {status >= 2 && (
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 transition-all duration-3000 ease-linear z-20 flex flex-col items-center"
                      style={{ 
                        left: status === 2 ? '5%' : status === 3 ? '50%' : status >= 4 ? '95%' : '0%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="bg-white p-2 rounded-full shadow-lg border border-gray-200 text-medical-green animate-bounce">
                        <Navigation className="w-5 h-5" />
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Status Timeline */}
              <div className="absolute bottom-0 inset-x-0 bg-white/80 backdrop-blur border-t p-4 flex justify-between">
                {statuses.map((s, idx) => (
                  <div key={idx} className={`text-xs font-semibold uppercase tracking-wider flex flex-col items-center gap-1 ${idx <= status ? 'text-medical-teal' : 'text-gray-300'}`}>
                    <div className={`w-2 h-2 rounded-full ${idx <= status ? 'bg-medical-teal' : 'bg-gray-300'}`}></div>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
