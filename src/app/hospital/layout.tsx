import Link from "next/link";
import { LayoutDashboard, Users, Activity, BarChart2, ShieldAlert } from "lucide-react";

export default function HospitalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar for Desktop */}
      <aside className="w-64 bg-medical-dark text-gray-300 hidden md:flex flex-col border-r border-gray-800">
        <div className="h-16 flex items-center px-6 bg-medical-dark/50">
          <span className="font-bold text-xl text-white tracking-tight">Aerodava Command</span>
        </div>
        <nav className="flex-1 py-4 space-y-1 px-3">
          <Link href="/hospital" className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/10 text-white">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 opacity-50 cursor-not-allowed">
            <Users className="w-5 h-5" /> Patients
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 opacity-50 cursor-not-allowed">
            <Activity className="w-5 h-5" /> Doctors
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 opacity-50 cursor-not-allowed">
            <BarChart2 className="w-5 h-5" /> Analytics
          </div>
          <Link href="/demo/drone" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-amber-400">
            <ShieldAlert className="w-5 h-5" /> Drone Logistics
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-10 shrink-0">
          <div className="md:hidden font-bold text-lg text-medical-dark flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-medical-teal" /> Aerodava Command
          </div>
          <div className="flex-1 md:hidden"></div>
          <div className="flex items-center gap-3">
            <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-semibold animate-pulse">2 Active Alerts</div>
            <div className="w-8 h-8 rounded bg-medical-dark text-white flex items-center justify-center text-xs font-bold">HQ</div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6 w-full max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
