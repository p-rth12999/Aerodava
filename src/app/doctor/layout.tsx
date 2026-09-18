import Link from "next/link";
import { Users, FileText, ClipboardList, Activity } from "lucide-react";

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar for Desktop */}
      <aside className="w-64 bg-medical-dark text-gray-300 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-700">
          <span className="font-bold text-xl text-white tracking-tight">Doctor Console</span>
        </div>
        <nav className="flex-1 py-4 space-y-1 px-3">
          <Link href="/doctor" className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/10 text-white">
            <Users className="w-5 h-5" /> Queue
          </Link>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 opacity-50 cursor-not-allowed">
            <ClipboardList className="w-5 h-5" /> Care Plans
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 opacity-50 cursor-not-allowed">
            <FileText className="w-5 h-5" /> Prescriptions
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 opacity-50 cursor-not-allowed">
            <Activity className="w-5 h-5" /> Alerts
          </div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-10 shrink-0">
          <div className="md:hidden font-bold text-lg text-medical-dark">Doctor Console</div>
          <div className="flex-1 md:hidden"></div>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-700">Dr. Ananya Sharma</div>
            <div className="w-8 h-8 rounded-full bg-medical-teal text-white flex items-center justify-center text-sm font-bold">AS</div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 sm:p-6 w-full max-w-6xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
