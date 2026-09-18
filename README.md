# AERODAVA

> *The drone was the starting point of Aerodava. Accessible healthcare is now the bigger idea.*

Aerodava is a layered healthcare-access platform designed to seamlessly connect patients, AI assistance, clinical professionals, and emergency logistics into one continuous flow of care.

---

## The Aerodava Journey

Aerodava began in February 2026 during **HackFusion 2026**, where we explored the problem of healthcare accessibility in rural and hard-to-reach regions. Our initial approach was a smart drone-based system solely focused on delivering medical supplies to areas where conventional access was difficult. Although we did not qualify for the next round, the idea stayed with me.

Later that month, I continued developing the same core idea independently for an **international ideathon by CareerPrep Tech**, where Aerodava secured **15th place**. Working on it further made me look beyond the drone itself and question how practical a drone-first healthcare model would be at scale. When considering factors such as cost, maintenance, weather, damage or theft, alongside massive operational and regulatory challenges, a purely drone-based solution was not sustainable for everyday healthcare.

That realization led to the current, much larger evolution of Aerodava for **Hack2Heal 2026**.

## The Evolution

Instead of making drones the center of the system, I repositioned them as an **emergency logistics layer**—a fail-safe activated only for situations such as floods, infrastructure failures, or disasters where conventional transportation becomes impossible. 

The main focus of Aerodava is now **healthcare access and communication**. The original idea of connecting people to physical healthcare has expanded into a broader digital platform covering *understanding, communication, consultation, continuity, and emergency response.*

---

## Features & Significant Changes

The platform has been entirely rebuilt to connect the different stages of care into one unified workflow:

### 1. AI Medical Copilot
- **Symptom Guidance:** Provides conservative, first-step guidance and symptom structuring, ensuring clinical decisions remain strictly with healthcare professionals.
- **Document Understanding:** AI parses complex medical reports and prescriptions, explaining them in simpler, jargon-free language while offering safe, supportive home remedies.

### 2. Connected Clinical Consultation
- **Digital Health Portfolio:** Patients maintain a structured, persistent digital health portfolio containing their medical history, uploaded reports, and past prescriptions.
- **Doctor Console:** When a patient is escalated to a doctor, the AI generates a concise clinical brief, saving time and allowing the doctor to rapidly review the case and issue a structured Care Plan.

### 3. Automated Pharmacy Workflow
- Seamless continuity of care: Once a patient receives a doctor-approved care plan or prescription, they can use that prescription to automatically populate their medicine-access cart in the pharmacy workflow.
- Features primitive medicine availability and targeted combo packs (e.g., First Aid, Cold & Flu).

### 4. Resilient Emergency Infrastructure
- **Disaster Logistics:** When conventional supply chains are blocked, the platform can trigger emergency mass-orders and autonomous drone dispatches to remote health centers.
- **Human Mesh Network:** (Simulation) An offline Bluetooth relay protocol that ensures critical health alerts can reach an internet-connected node even during complete infrastructure blackouts.

---

## 🛠️ Tech Stack & Local Setup

This prototype was built for Hack2Heal 2026 using:
- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS, shadcn/ui
- **Data/Backend:** Fully mocked local data layer for guaranteed 100% reliability during live hackathon demonstrations.

**To run the project locally:**
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000` in your browser.