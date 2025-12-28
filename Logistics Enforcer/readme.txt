# 📦 Logistics Enforcer
**"Because your delivery shouldn't be a hostage situation."**

> *Built during the '30 Days, 30 MVPs' Challenge. Powered by Google Gemini.*

## 📖 About The Project
Logistics Enforcer is an AI-powered "Digital Advocate" designed to help users navigate complex logistics failures—from cancelled rides and "hostage" parcels to unresponsive support bots. 

When a service fails, users are often too stressed or "drained" to navigate complex help menus or draft legal notices. This tool automates the heavy lifting, providing instant, legally-grounded drafts for complaints and real-time tactical advice for safety scenarios.

## 🎯 Target Audience
* **Daily Commuters & Students:** Dealing with ride cancellations and wrong location drops.
* **Solo Travelers:** Needing immediate guidance when rides go off-platform.
* **Online Shoppers:** Frustrated by "delivered but missing" notifications and automated support loops.

## ⚡ Key Features
The system operates in two distinct logical modes based on the severity of the input:

### 1. MODE A: Service Failure (The "Digital Advocate")
*Triggered by: Late deliveries, wrong items, refund refusals, support bot loops.*
* **Instant Complaint Drafting:** Generates professional, firm grievances citing relevant Consumer Protection standards.
* **Auto-Escalation:** If the initial support ticket fails, it provides drafts for social media escalation (tagging executives) and formal notices for consumer helplines.
* **Bot Bypass:** Uses specific terminology ("Service Deficiency," "Unfair Trade Practice") designed to trigger human support intervention.

### 2. MODE B: Tactical Advisor (The "Safety" Mode)
*Triggered by: Cancelled rides with driver present, demand for extra offline cash, safety threats.*
* **Safety First Protocol:** Prioritizes physical safety instructions (e.g., "Move to public area," "Share live location") over administrative complaints.
* **De-escalation Scripts:** Provides calm, logical scripts for the user to read aloud to resolve on-ground conflicts without violence.
* **State Persistence:** Locks the AI into "Tactical Mode" during a crisis to prevent it from reverting to standard customer service questions.

## ⚖️ Legal Disclaimer & User Responsibility
**IMPORTANT: Please read before using.**

* **Not Legal Advice:** This tool is an AI drafting assistant, not a law firm. All outputs are suggestions based on general consumer guidelines and do not constitute legal counsel.
* **User-in-the-Loop:** The application **does not** automatically file complaints. It generates text for the user to **review, verify, and send** manually. The user retains full liability for all communications.
* **Anti-Defamation:** Users are strictly warned to verify all facts before using the "Social Escalation" drafts. Making false accusations can lead to legal consequences.
* **Privacy Laws:** The "Tactical Advisor" suggests recording for personal evidence only. Publishing recordings of individuals without consent may violate privacy laws.

## 🚧 Current Limitations (MVP)
* **Context State:** As a prototype, the AI may occasionally lose context during long, complex voice sessions if the threat level is not reiterated.
* **Region Specificity:** Default legal references (e.g., CPA 2019) are optimized for the Indian context.
* **No Direct Integration:** Does not currently connect directly to third-party APIs (Uber/Zomato) for auto-refunding; it relies on manual user submission.

## 🛠️ Tech Stack
* **AI Model:** Google Gemini 1.5 Pro
* **Platform:** Google AI Studio (System Prompt Engineering)
* **Architecture:** Dual-Mode Conditional Logic (Standard vs. Tactical)
*