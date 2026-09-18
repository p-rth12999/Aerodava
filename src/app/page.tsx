import Link from "next/link";
import { Network, ArrowRight, Activity, ShieldAlert, FileText, Pill, PackagePlus, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F9F8] to-[#E9F0EE] text-medical-dark flex flex-col relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-medical-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-triage-low/10 rounded-full blur-3xl"></div>
      </div>

      <header className="p-6 flex items-center justify-between z-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <Network className="w-8 h-8 text-medical-teal" />
          <span className="font-extrabold text-2xl tracking-tight text-medical-green">AERODAVA</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 font-medium text-sm text-medical-teal">
          <Link href="/architecture" className="hover:text-medical-green transition-colors">Explore Features</Link>
          <Link href="/demo/mesh" className="hover:text-medical-green transition-colors">Human Mesh</Link>
          <Link href="/demo/drone" className="hover:text-medical-green transition-colors">Emergency Logistics</Link>
        </nav>
        <Link href="/patient">
          <Button className="bg-medical-green hover:bg-medical-teal text-white rounded-full px-6 shadow-md transition-transform hover:scale-105">
            Enter Dashboard
          </Button>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10 w-full max-w-5xl mx-auto mt-10 md:mt-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-medical-teal/20 text-medical-teal text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm shadow-sm">
          <Zap className="w-4 h-4 text-amber-500" /> Hack2Heal Prototype
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-medical-dark leading-tight drop-shadow-sm">
          Healthcare, <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-green to-medical-teal">
            beyond reach.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6 font-medium">
          A unified intelligence platform connecting patients to AI-guided triage, clinical experts, and autonomous emergency logistics when conventional access fails.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 w-full sm:w-auto">
          <Link href="/patient" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-medical-dark hover:bg-medical-green text-white px-8 py-7 text-lg rounded-2xl shadow-xl transition-all hover:shadow-medical-teal/20 hover:-translate-y-1">
              Patient Portal <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/doctor" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-medical-teal/30 bg-white/50 backdrop-blur-sm text-medical-teal hover:bg-white px-8 py-7 text-lg rounded-2xl shadow-sm transition-all hover:-translate-y-1">
              Doctor Console
            </Button>
          </Link>
        </div>

        {/* Visual Feature Teasers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full text-left">
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-medical-dark text-lg">AI Triage</h3>
            <p className="text-sm text-gray-500 mt-2">Smart symptom analysis and automatic doctor handoffs for high-risk cases.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-green-50 text-medical-green rounded-2xl flex items-center justify-center mb-4">
              <PackagePlus className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-medical-dark text-lg">Smart Pharmacy</h3>
            <p className="text-sm text-gray-500 mt-2">Auto-fill carts from prescriptions and request emergency mass-dispatch.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-red-50 text-triage-high rounded-2xl flex items-center justify-center mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-medical-dark text-lg">Disaster Logistics</h3>
            <p className="text-sm text-gray-500 mt-2">Autonomous drone delivery and offline mesh networking for critical moments.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
