"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopilotChat } from "@/components/chat/CopilotChat";

function CopilotContent() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "understand" ? "understand" : "guidance";
  const [mode, setMode] = useState<"understand" | "guidance">(initialMode);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold text-medical-dark">Aerodava Copilot</h1>
        <p className="text-medical-teal text-sm mt-1">Understand your health. Know what to do next.</p>
      </div>

      <Tabs value={mode} onValueChange={(v) => setMode(v as "understand" | "guidance")} className="w-full">
        <TabsList className="w-full grid grid-cols-2 mb-4 bg-gray-100">
          <TabsTrigger value="guidance" className="data-[state=active]:bg-white data-[state=active]:text-medical-green data-[state=active]:shadow-sm">Guidance Mode</TabsTrigger>
          <TabsTrigger value="understand" className="data-[state=active]:bg-white data-[state=active]:text-medical-green data-[state=active]:shadow-sm">Understand Mode</TabsTrigger>
        </TabsList>
      </Tabs>

      <CopilotChat mode={mode} />
    </div>
  );
}

export default function CopilotPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-medical-teal">Loading copilot...</div>}>
      <CopilotContent />
    </Suspense>
  );
}
