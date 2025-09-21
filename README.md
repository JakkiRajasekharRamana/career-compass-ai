# 🚀 CareerCompass AI: Personalized Career & Skills Advisor

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Built with](https://img.shields.io/badge/Built%20With-Google%20Cloud-4285F4.svg)](https://cloud.google.com/vertex-ai)

---

## 📖 Overview

**CareerCompass AI** is a Google Cloud-powered application that leverages **Generative AI** to provide personalized career guidance. Students and graduates in India can discover suitable career paths, understand skill gaps, and follow learning roadmaps based on their **skills, interests, and education**.

---

## 🎯 Problem Statement & Impact

- Only **42.6% of Indian graduates** are fully employable.  
- **68% of students** have access to career counseling; **25% have none**.  
- **85% of students** already use AI tools like ChatGPT for informal career guidance.  

**Solution:** CareerCompass AI provides **scalable, personalized, data-driven career guidance**, improving employability and leveraging India’s digital infrastructure.

---

## 🌟 Key Features

- **AI Chat Advisor:** Conversational LLM (Gemini/Gemma) to clarify goals and refine suggestions.  
- **Career Path Mapping:** Matches user profiles to relevant careers with explanations.  
- **Skill Gap Analysis:** Identifies missing technical & non-technical skills.  
- **Learning Roadmap:** Personalized steps including courses, projects, certifications.  
- **Interactive Visualization:** Skill radar charts & career network maps.  
- **Multimodal Input (Future):** Resume upload or LinkedIn profile analysis.

---

## 🛠 Technology Stack

| Component               | Technology/Service                              |
|-------------------------|------------------------------------------------|
| **Generative AI**       | Google Gemini (PaLM) / Gemma via Vertex AI    |
| **Backend**             | Cloud Run / Cloud Functions                   |
| **Database & Storage**  | Firestore, Cloud SQL, BigQuery                 |
| **Vector Search / RAG** | Vertex AI Matching Engine / Firestore + Annoy |
| **Frontend/UI**         | React / Flutter                                |
| **APIs/Integrations**   | Coursera, EdX, NPTEL, Google Jobs API         |
| **Monitoring & Security** | Cloud Logging, Firebase Auth                  |

---

## 🏗 Architecture

**High-Level Flow:**  
1. User submits profile via web or mobile UI.  
2. Backend (Cloud Run) constructs prompts and calls Gemini API.  
3. AI generates career recommendations, skill gaps, and learning roadmap.  
4. Data retrieved from Firestore/BigQuery or RAG system.  
5. Frontend displays results interactively.

---

## ⚡ Implementation (MVP)

1. Set up **Vertex AI & Gemini API**.  
2. Build **basic web form / chat interface**.  
3. Connect backend to Gemini API for career advice.  
4. Integrate skill datasets (O*NET, Indian portals).  
5. Refine AI prompts & JSON output format.  
6. Test with sample profiles.  
7. Iteratively add advanced features: skill visualization, multi-turn chat, resume input.

---

## 🔮 Future Enhancements

- Adaptive personalization using user feedback  
- Multilingual support for Indian languages  
- Mobile apps with push notifications  
- Social/mentorship integration  
- Real-time job feeds  
- Gamification of skill milestones  
- Enterprise features for colleges/placement cells  

---

## 📂 Data Sources

- **O*NET Database** (~967 occupations, 231 skills)  
- **India National Career Service (NCS) portal**  
- **Kaggle career datasets**  
- **Coursera, EdX, NPTEL course APIs**  
- **India Skills Report, WEF Jobs Report**  
- **Stack Overflow Developer Survey**

---

## 🚀 Getting Started

1. Clone the repository:  
```bash
git clone https://github.com/JakkiRajasekharRamana/careercompass-ai.git
cd careercompass-ai
