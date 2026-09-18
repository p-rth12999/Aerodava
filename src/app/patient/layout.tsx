import Link from "next/link";
import { Home, MessageSquare, User, Stethoscope, AlertCircle, Pill } from "lucide-react";

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-medical-light text-medical-dark pb-20 md:pb-0">
      <header className="bg-white border-b border-gray-100 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/patient" className="font-bold text-xl text-medical-green tracking-tight">AERODAVA</Link>
          <div className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 font-medium">Demo Mode</div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-6">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-100 flex justify-around p-3 z-50">
        <Link href="/patient" className="flex flex-col items-center text-medical-teal hover:text-medical-green">
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-1">Home</span>
        </Link>
        <Link href="/patient/copilot" className="flex flex-col items-center text-medical-teal hover:text-medical-green">
          <MessageSquare className="w-5 h-5" />
          <span className="text-[10px] mt-1">Copilot</span>
        </Link>
        <Link href="/patient/portfolio" className="flex flex-col items-center text-medical-teal hover:text-medical-green">
          <User className="w-5 h-5" />
          <span className="text-[10px] mt-1">Health</span>
        </Link>
        <Link href="/patient/pharmacy" className="flex flex-col items-center text-medical-teal hover:text-medical-green">
          <Pill className="w-5 h-5" />
          <span className="text-[10px] mt-1">Store</span>
        </Link>
        <Link href="/patient/doctors" className="flex flex-col items-center text-medical-teal hover:text-medical-green">
          <Stethoscope className="w-5 h-5" />
          <span className="text-[10px] mt-1">Doctors</span>
        </Link>
      </nav>
    </div>
  );
}
