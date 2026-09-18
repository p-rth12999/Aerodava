"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { aiService, AIMessage } from "@/services/aiService";
import { Mic, Send, Paperclip, Loader2, AlertCircle } from "lucide-react";


interface CopilotChatProps {
  mode: "understand" | "guidance";
}

export function CopilotChat({ mode }: CopilotChatProps) {
  const [messages, setMessages] = useState<AIMessage[]>([{
    role: "assistant",
    content: mode === "understand" 
      ? "What would you like to understand? You can upload a document or ask a question."
      : "Hello. I'm your Aerodava Medical Copilot. How can I help you today?"
  }]);
  
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [triage, setTriage] = useState<"LOW" | "MODERATE" | "HIGH">("LOW");
  
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() && !loading) return;
    
    const userMsg: AIMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      let responseContent = "";
      if (mode === "understand") {
        responseContent = await aiService.explainDocument(userMsg.content);
      } else {
        responseContent = await aiService.chatGuidance(updatedMessages);
        
        // Very basic client-side triage parsing for visual demo
        if (responseContent.includes("🔴 HIGH") || responseContent.includes("HIGH risk")) {
          setTriage("HIGH");
        } else if (responseContent.includes("🟡 MODERATE")) {
          setTriage("MODERATE");
        }
      }
      
      setMessages([...updatedMessages, { role: "assistant", content: responseContent }]);
    } catch (e) {
      setMessages([...updatedMessages, { role: "assistant", content: "I'm sorry, I'm having trouble connecting right now." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleMicHold = () => {
    setIsListening(true);
    // Visual simulation of voice recording
    setTimeout(() => {
      setIsListening(false);
      setInput("I've been feeling feverish and tired."); // Golden path demo string
    }, 2000);
  };

  return (
    <div className="flex flex-col h-[70vh] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden relative">
      
      {/* Triage Alert Header (if elevated) */}
      {triage !== "LOW" && (
        <div className={`p-3 text-white text-sm font-medium flex items-center justify-between ${triage === "HIGH" ? "bg-triage-high" : "bg-triage-moderate"}`}>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <span>{triage === "HIGH" ? "Urgent medical evaluation recommended." : "Doctor consultation recommended."}</span>
          </div>
          <Button variant="secondary" size="sm" className="h-8">Contact Doctor</Button>
        </div>
      )}

      {/* Medical disclaimer */}
      <div className="bg-medical-light p-2 text-[10px] text-center text-medical-teal uppercase tracking-widest border-b border-gray-100 font-semibold">
        AI Assistant • Not a substitute for professional medical advice
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 whitespace-pre-wrap text-sm shadow-sm
              ${m.role === "user" 
                ? "bg-medical-green text-white rounded-tr-sm" 
                : "bg-gray-50 border border-gray-100 text-gray-800 rounded-tl-sm"
              }`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl p-4 bg-gray-50 border border-gray-100 text-gray-800 rounded-tl-sm flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-medical-teal" />
              <span className="text-sm text-gray-500">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={endOfMessagesRef} />
      </div>

      {isListening && (
        <div className="absolute inset-x-0 bottom-20 flex justify-center z-10">
          <div className="bg-medical-teal text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse text-sm font-medium">
            <Mic className="w-4 h-4" /> Listening...
          </div>
        </div>
      )}

      <div className="p-4 border-t border-gray-100 bg-white flex items-end gap-2">
        {mode === "understand" && (
          <Button variant="outline" size="icon" className="shrink-0 text-medical-teal border-medical-teal/30">
            <Paperclip className="w-5 h-5" />
          </Button>
        )}
        
        <div className="relative flex-1">
          <Input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={mode === "understand" ? "Ask a question about your report..." : "Describe your symptoms..."}
            className="w-full bg-gray-50 border-gray-200 pr-10"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:text-medical-teal shrink-0 h-8 w-8"
            onPointerDown={handleMicHold}
          >
            <Mic className="w-4 h-4" />
          </Button>
        </div>
        
        <Button onClick={handleSend} disabled={loading || !input.trim()} className="bg-medical-teal hover:bg-medical-green text-white shrink-0">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
