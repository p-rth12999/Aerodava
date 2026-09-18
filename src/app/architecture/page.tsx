import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Stethoscope, Pill, ShieldAlert, Bot, FileText, CheckCircle2 } from "lucide-react";

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[#F7F9F8] text-medical-dark p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-12">
        
        <div>
          <Link href="/">
            <Button variant="ghost" className="mb-6 -ml-4 text-medical-teal hover:text-medical-green bg-white/50"><ArrowLeft className="w-4 h-4 mr-2"/> Back to Home</Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-medical-dark tracking-tight">Explore Aerodava</h1>
          <p className="text-xl text-gray-500 mt-4 leading-relaxed max-w-3xl">
            Aerodava combines AI understanding, human clinical decisions, and resilient infrastructure. The platform is divided into three core pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Section 1: AI Assistance & Triage */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-medical-teal/5 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <Stethoscope className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">1. Patient-Doctor AI Assistance</h3>
            <p className="text-gray-600 mb-6 relative z-10 leading-relaxed text-sm">
              Quick AI responses for initial symptom assessment. Automatically alerts and hands over the context to a human doctor if a severe condition is detected.
            </p>
            <ul className="space-y-3 text-sm font-medium text-medical-dark relative z-10">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-medical-teal shrink-0" /> Immediate symptom triage</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-medical-teal shrink-0" /> Red-flag anomaly detection</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-medical-teal shrink-0" /> Seamless clinical handoff</li>
            </ul>
          </div>

          {/* Section 2: Prescription Explainer & Remedies */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-medical-teal/5 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 bg-green-100 text-medical-green rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">2. Prescription & Report Explainer</h3>
            <p className="text-gray-600 mb-6 relative z-10 leading-relaxed text-sm">
              Simplifies complex medical documents. Translates doctor prescriptions into plain language and generates supportive home remedy suggestions alongside medical treatment.
            </p>
            <ul className="space-y-3 text-sm font-medium text-medical-dark relative z-10">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-medical-teal shrink-0" /> Upload PDF / Image parsing</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-medical-teal shrink-0" /> Jargon-free translations</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-medical-teal shrink-0" /> Safe, supportive home remedies</li>
            </ul>
          </div>

          {/* Section 3: Medical Delivery */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-medical-teal/5 relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 bg-amber-100 text-triage-moderate rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <Pill className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">3. Medical Delivery Interface</h3>
            <p className="text-gray-600 mb-6 relative z-10 leading-relaxed text-sm">
              Order medicines effortlessly. Upload a prescription to auto-fill your cart, order primitive first aid combos, or request mass emergency drone dispatches during disasters.
            </p>
            <ul className="space-y-3 text-sm font-medium text-medical-dark relative z-10">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-medical-teal shrink-0" /> Auto-fill from prescription</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-medical-teal shrink-0" /> Primitive medicine combos</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-medical-teal shrink-0" /> Emergency drone dispatch</li>
            </ul>
          </div>

        </div>

        <section className="bg-medical-dark text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <ShieldAlert className="w-8 h-8 text-triage-moderate" /> Built for Resilience
              </h2>
              <p className="text-gray-300 leading-relaxed">
                When conventional systems fail, Aerodava's <strong>Human Mesh Network</strong> and <strong>Drone Logistics</strong> ensure that critical alerts and medical packages continue to move. This isn't just an app; it's a decentralized healthcare access layer.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <Link href="/demo/drone">
                <Button className="w-full bg-medical-green hover:bg-white hover:text-medical-dark px-8 py-6 rounded-xl font-semibold transition-all">
                  View Drone Dispatch
                </Button>
              </Link>
              <Link href="/patient/pharmacy">
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 rounded-xl font-semibold transition-all">
                  Open Pharmacy
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
