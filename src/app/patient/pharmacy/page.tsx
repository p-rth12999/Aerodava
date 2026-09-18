"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Pill, PackagePlus, Search, ShoppingCart, Cross, Navigation, PackageSearch, Plus, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function PharmacyPage() {
  const [cart, setCart] = useState<{name: string, qty: number}[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setCart([
        { name: "Salbutamol 100mcg INH", qty: 1 },
        { name: "Prednisolone 40mg", qty: 2 }
      ]);
    }, 1500);
  };

  const addToCart = (item: string) => {
    setCart([...cart, { name: item, qty: 1 }]);
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-medical-dark flex items-center gap-2">
            <PackagePlus className="w-8 h-8 text-medical-teal" /> Medical Delivery
          </h1>
          <p className="text-gray-500 mt-1 font-medium">Order medicines, upload prescriptions, or trigger emergency dispatches.</p>
        </div>
        <Button variant="outline" className="border-medical-teal text-medical-teal gap-2 bg-white h-12 rounded-xl">
          <ShoppingCart className="w-5 h-5" />
          Cart ({cart.length})
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Upload & Emergency */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Smart Upload */}
          <Card className="border-medical-teal/20 shadow-md bg-gradient-to-br from-white to-medical-light overflow-hidden rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 font-bold text-medical-dark mb-4">
                <FileTextIcon className="w-5 h-5 text-medical-teal" /> Auto-fill from Prescription
              </div>
              
              {!uploadSuccess ? (
                <div 
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${isUploading ? 'border-medical-teal bg-medical-teal/5' : 'border-gray-200 hover:border-medical-teal/50 hover:bg-gray-50'}`}
                  onClick={handleUpload}
                >
                  {isUploading ? (
                    <div className="flex flex-col items-center animate-pulse">
                      <Search className="w-8 h-8 text-medical-teal mb-3" />
                      <p className="font-semibold text-medical-dark">Scanning Document...</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Upload className="w-8 h-8 text-gray-400 mb-3" />
                      <p className="font-medium text-medical-dark">Tap to Upload Rx</p>
                      <p className="text-xs text-gray-500 mt-1">AI will automatically add medicines to cart.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                  <CheckCircle2 className="w-8 h-8 text-triage-low mx-auto mb-2" />
                  <p className="font-bold text-triage-low">Prescription Processed</p>
                  <p className="text-xs text-green-700 mt-1">2 medicines added to cart automatically.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Emergency Mass Orders */}
          <Card className="border-triage-high/30 shadow-md bg-red-50/50 rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 font-bold text-triage-high mb-2">
                <Navigation className="w-5 h-5" /> Emergency Dispatch
              </div>
              <p className="text-sm text-gray-600 mb-4">
                In disaster situations, authorize mass drone dispatches of medical supply crates to cut-off areas.
              </p>
              <Link href="/demo/drone" className="block">
                <Button className="w-full bg-triage-high hover:bg-red-700 text-white rounded-xl shadow-lg">
                  Request Drone Airdrop
                </Button>
              </Link>
            </CardContent>
          </Card>

        </div>

        {/* Right Column: Store */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input className="w-full pl-10 h-12 rounded-xl bg-white border-gray-200 shadow-sm text-base" placeholder="Search for medicines, combinations, first aid..." />
          </div>

          <div>
            <h2 className="text-lg font-bold text-medical-dark mb-4 flex items-center gap-2">
              <PackageSearch className="w-5 h-5 text-medical-teal" /> Suggested Combos & Packs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="bg-red-100 p-2 rounded-lg text-red-600"><Cross className="w-6 h-6" /></div>
                  <Badge variant="secondary" className="bg-gray-100">Essential</Badge>
                </div>
                <h3 className="font-bold text-medical-dark">Standard First Aid Kit</h3>
                <p className="text-xs text-gray-500 mt-1 mb-4">Bandages, Antiseptic, Gauze, Tape, Scissors.</p>
                <Button variant="outline" size="sm" className="w-full rounded-lg text-medical-teal border-medical-teal/30 hover:bg-medical-light" onClick={() => addToCart("First Aid Kit")}>
                  <Plus className="w-4 h-4 mr-1"/> Add to Cart
                </Button>
              </div>

              <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Pill className="w-6 h-6" /></div>
                  <Badge variant="secondary" className="bg-gray-100">Popular</Badge>
                </div>
                <h3 className="font-bold text-medical-dark">Cold & Flu Relief Pack</h3>
                <p className="text-xs text-gray-500 mt-1 mb-4">Paracetamol, Cough Syrup, Vitamin C, Lozenges.</p>
                <Button variant="outline" size="sm" className="w-full rounded-lg text-medical-teal border-medical-teal/30 hover:bg-medical-light" onClick={() => addToCart("Cold & Flu Pack")}>
                  <Plus className="w-4 h-4 mr-1"/> Add to Cart
                </Button>
              </div>

            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-medical-dark mb-4 mt-8 flex items-center gap-2">
              <Pill className="w-5 h-5 text-medical-teal" /> Primitive Medicines
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Paracetamol 500mg", use: "Fever / Headache" },
                { name: "Ibuprofen 400mg", use: "Pain / Inflammation" },
                { name: "Cetirizine 10mg", use: "Allergies" },
                { name: "Aspirin 75mg", use: "Heart / Pain" }
              ].map(med => (
                <div key={med.name} className="bg-white border border-gray-100 p-3 rounded-xl flex flex-col justify-between hover:border-medical-teal/40 transition-colors cursor-pointer" onClick={() => addToCart(med.name)}>
                  <div>
                    <div className="font-semibold text-sm text-medical-dark leading-tight">{med.name}</div>
                    <div className="text-[10px] text-gray-500 mt-1">{med.use}</div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <div className="w-6 h-6 rounded-full bg-medical-light text-medical-teal flex items-center justify-center">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Temporary icon since FileText is missing above
function FileTextIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}
