// AI Abstraction Layer for AERODAVA MVP
// Fully mocked for Hack2Heal visual prototype (No API key required)

export interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Artificial delay for realistic typing/thinking simulation
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const aiService = {
  // Mode A: Document Understanding
  explainDocument: async (documentText: string, context: string = "English") => {
    await delay(1500);
    
    return `### Simple Summary
Your blood report shows most values are normal, but your eosinophil count is slightly elevated. This often happens with allergies or recent mild infections.

### Important Values
- **Eosinophils**: 6.2% (Slightly High)
- **Hemoglobin**: 14.5 g/dL (Normal)
- **WBC Count**: 7,500 /mcL (Normal)

### What Changed / What Matters
The slight elevation in eosinophils might explain your recent allergic symptoms or persistent cough. All other critical parameters are completely stable.

### terms Explained
- **Eosinophils**: A type of disease-fighting white blood cell. They most often indicate an allergic reaction.

### 🌿 Supportive Home Remedies
While you wait for your doctor's advice, here are some safe, supportive home remedies for your cough and allergy symptoms:
1. **Steam Inhalation:** Use plain water steam 2-3 times a day to soothe your airways.
2. **Warm Salt Water Gargle:** Helps reduce throat irritation.
3. **Hydration:** Drink plenty of warm fluids (herbal teas, warm water with honey) to thin out any mucus.
*Note: These are supportive measures and do not replace prescribed medication.*

### Questions You Could Ask Your Doctor
- Do I need allergy testing based on this report?
- Should I start taking antihistamines?`;
  },

  // Mode B: Guidance Chat (Keyword-based for Golden Path Demo)
  chatGuidance: async (messages: AIMessage[]) => {
    await delay(1200);
    
    const lastMsg = messages[messages.length - 1].content.toLowerCase();

    // Trigger 1: Red flags (Triage Escalation)
    if (lastMsg.includes("difficulty breathing") || lastMsg.includes("breathing") || lastMsg.includes("chest pain") || lastMsg.includes("severe")) {
      return `### What you told me
You have a fever, cough, and are experiencing difficulty breathing.

### Possible urgency
🔴 HIGH. Difficulty breathing can be a warning sign that requires prompt medical assessment.

### What you can do now
Please sit upright, rest, and avoid any physical exertion.

### What to monitor
Monitor your breathing rate and any chest discomfort.

### When to contact a doctor
You should seek medical evaluation immediately. I am escalating your profile to the doctor queue.`;
    }

    // Trigger 2: Follow up question (Middle of the flow)
    if (lastMsg.includes("days") || lastMsg.includes("yesterday") || lastMsg.includes("yes")) {
      return "I understand. Are you having any difficulty breathing or chest pain along with the fever?";
    }

    // Default/Initial greeting trigger
    if (lastMsg.includes("fever") || lastMsg.includes("tired") || lastMsg.includes("cough")) {
       return "I can help you understand this better. How long have you been experiencing these symptoms? Do you also have a cough?";
    }

    // Generic fallback
    return "Could you provide a few more details about how you are feeling? For instance, when did this start, and do you have a fever or any pain?";
  },

  // Handoff to Doctor
  generateConsultationSummary: async (patientContext: string, chatTranscript: string) => {
    await delay(1000);
    
    return `Patient: Aarav, 42
Primary concern: Persistent cough & fever
Duration: 2 days
Reported symptoms:
• Dry cough
• Mild fever
• Difficulty breathing

Red flags: Difficulty breathing — Yes

Relevant history: Previous asthma consultation (2023)

Patient's question: "I've been feeling feverish and tired... I have difficulty breathing."

AI recommendation: 🔴 Urgent Doctor review recommended. Escalation active.`;
  }
};
