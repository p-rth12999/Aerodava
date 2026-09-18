"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { apiService } from "@/services/apiService";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getAllDoctors().then(data => {
      setDoctors(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8 text-center text-medical-teal">Loading available doctors...</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-medical-dark">Consult a Doctor</h1>
        <p className="text-medical-teal text-sm mt-1">Connect with available clinical professionals</p>
      </div>

      <div className="space-y-4">
        {doctors.map(d => (
          <Card key={d.id} className="border-gray-100 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 gap-4">
                <div className="flex-1 flex items-center gap-4">
                  <Avatar className="h-12 w-12 border border-gray-100">
                    <AvatarFallback className="bg-medical-light text-medical-teal font-medium">
                      {d.name.split(" ")[1]?.[0] || d.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-medical-dark">{d.name}</h3>
                    <div className="text-sm text-gray-500">{d.specialty}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`w-2 h-2 rounded-full ${d.status === "Available" ? "bg-triage-low" : d.status === "Busy" ? "bg-triage-moderate" : "bg-gray-300"}`}></span>
                      <span className="text-xs text-gray-600">{d.availability}</span>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-auto mt-4 sm:mt-0 flex gap-2">
                  <Button variant="outline" className="flex-1 sm:flex-none border-medical-teal text-medical-teal">View Profile</Button>
                  <Button disabled={d.status === "Offline"} className="flex-1 sm:flex-none bg-medical-green hover:bg-medical-teal text-white">
                    Start Consultation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
