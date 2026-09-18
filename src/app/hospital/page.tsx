"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { apiService } from "@/services/apiService";
import { Users, AlertTriangle, ShieldAlert, TrendingUp, Activity, MapPin } from "lucide-react";
import Link from "next/link";

export default function HospitalCommandDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [trends, setTrends] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      apiService.getHospitalStats(),
      apiService.getHospitalAlerts(),
      apiService.getHospitalTrends()
    ]).then(([s, a, t]) => {
      setStats(s);
      setAlerts(a);
      setTrends(t);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8 text-center text-medical-teal">Loading command center...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-medical-dark">Aerodava Health Command</h1>
          <p className="text-gray-500 text-sm mt-1">Real-time hospital & community monitoring (Demo Data)</p>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-4 sm:p-6 flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600 hidden sm:block"><Users className="w-6 h-6"/></div>
            <div>
              <p className="text-sm font-medium text-gray-500">Active Patients</p>
              <h3 className="text-2xl font-bold text-medical-dark">{stats.activePatients.toLocaleString()}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-4 sm:p-6 flex items-center gap-4">
            <div className="bg-medical-light p-3 rounded-lg text-medical-teal hidden sm:block"><Activity className="w-6 h-6"/></div>
            <div>
              <p className="text-sm font-medium text-gray-500">Doctor Requests</p>
              <h3 className="text-2xl font-bold text-medical-dark">{stats.doctorRequests}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-amber-100 shadow-sm bg-amber-50/20">
          <CardContent className="p-4 sm:p-6 flex items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-lg text-triage-moderate hidden sm:block"><AlertTriangle className="w-6 h-6"/></div>
            <div>
              <p className="text-sm font-medium text-gray-500">AI Escalations</p>
              <h3 className="text-2xl font-bold text-triage-moderate">{stats.aiEscalations}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-red-100 shadow-sm bg-red-50/20">
          <CardContent className="p-4 sm:p-6 flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-lg text-triage-high hidden sm:block"><ShieldAlert className="w-6 h-6"/></div>
            <div>
              <p className="text-sm font-medium text-gray-500">Emergency Alerts</p>
              <h3 className="text-2xl font-bold text-triage-high">{stats.emergencyAlerts}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Escalations Queue */}
        <Card className="border-gray-200 shadow-sm flex flex-col h-full">
          <CardHeader className="border-b bg-gray-50 py-3">
            <CardTitle className="text-base font-semibold text-medical-dark flex items-center justify-between">
              Escalation Queue
              <Badge variant="outline" className="bg-white">{alerts.length} Active</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex-1 overflow-auto max-h-[400px]">
            <div className="divide-y divide-gray-100">
              {alerts.map(alert => (
                <div key={alert.id} className="p-4 hover:bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 w-2.5 h-2.5 rounded-full shrink-0 ${alert.priority === 'HIGH' || alert.priority === 'EMERGENCY' ? 'bg-triage-high animate-pulse' : 'bg-triage-moderate'}`}></div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-medical-dark">{alert.patientId === 'p1' ? 'Patient #A182' : alert.patientId === 'p4' ? 'Patient #A174' : 'Patient #A169'}</span>
                        <Badge variant="outline" className={`text-[10px] h-5 px-1.5 ${alert.type === 'LOGISTICS' ? 'border-amber-400 text-amber-700 bg-amber-50' : ''}`}>{alert.type}</Badge>
                      </div>
                      <div className="text-sm text-gray-600 mt-0.5">{alert.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {alert.type === 'LOGISTICS' ? (
                      <Link href="/demo/drone">
                        <Button size="sm" variant="outline" className="w-full sm:w-auto text-amber-600 border-amber-300 hover:bg-amber-50">Track Drone</Button>
                      </Link>
                    ) : (
                      <Button size="sm" className="w-full sm:w-auto bg-medical-dark hover:bg-medical-teal">Review</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Community Trends */}
        <Card className="border-gray-200 shadow-sm flex flex-col h-full">
          <CardHeader className="border-b bg-gray-50 py-3">
            <CardTitle className="text-base font-semibold text-medical-dark flex items-center justify-between">
              Community Health Trends
              <TrendingUp className="w-4 h-4 text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex flex-col gap-6">
            
            {/* Map Mockup */}
            <div className="bg-gray-100 rounded-xl h-48 border border-gray-200 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0B4A3F_1px,transparent_1px)] [background-size:16px_16px]"></div>
              {/* Fake hotspots */}
              <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-red-500/20 rounded-full animate-ping"></div>
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-triage-high rounded-full border-2 border-white flex items-center justify-center"></div>
              
              <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-amber-500/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-triage-moderate rounded-full border-2 border-white"></div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-500 shadow-sm">
                  Unusual symptom trend detected in Sector 4
                </span>
              </div>
            </div>

            {/* Trends List */}
            <div className="space-y-3">
              {trends.map((t, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="text-sm font-medium text-medical-dark">{t.category}</div>
                  <div className={`flex items-center gap-2 text-sm font-semibold ${t.status === 'warning' ? 'text-triage-moderate' : 'text-gray-500'}`}>
                    {t.trend}
                  </div>
                </div>
              ))}
            </div>
            
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
