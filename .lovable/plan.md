
# Sehatnaama — Pakistan's Multilingual Health Resource

A dignified, bilingual (Urdu + English) health website for Alzheimer's awareness and caregiver support in Pakistan, built around the design system and feature priorities from the brief.

## Design System (locked from brief)
- **Colors:** Deep Teal `#006D6D` (primary), Warm Ivory `#FAFAF0` (bg), Burnt Orange `#B84A00` (accent/urgent), Forest Green `#2D5016`, Deep Navy `#0D1B4B` (text), Pale Teal `#E0F5F5`, Pale Orange `#FFF0E8`.
- **Typography:** Georgia for English headings, Inter for body, Noto Nastaliq Urdu for Urdu content.
- **Tone:** Authoritative, warm, never harsh — no pure white, no pure black.

## Pages & Routes
1. **`/` Home — Language-First Entry Point**
   - Hero with the name "Sehatnaama / صحت نامہ" and tagline "Pakistan's Health Testimony."
   - Six large language buttons (English, اردو, پنجابی, سندھی, سرائیکی, پښتو), each in its own script. Selection persists via localStorage and switches site language (English + Urdu fully built; other scripts shown as "coming soon" with English fallback).
   - Below: featured AI-generated hero image of a Pakistani family with an elder, mission statement, quick links to Symptom Checker, Guide, and Caregiver Diary.

2. **`/about` About Sehatnaama**
   - Why the name, the mission, the gap in Pakistani health resources, AI image of researcher/community.

3. **`/alzheimers` Alzheimer's Guide** (full content from Urdu PDF, rendered bilingually)
   - Sections: What it is, What's happening in the brain, Stages & symptoms (early/middle/late), Sundowning & wandering, Music therapy, Safe home, Caregiver health, Treatment & planning, Meaningful engagement.
   - Pakistan-specific callouts in Pale Orange warning boxes.
   - Citations footer with all 20 references.
   - AI image per major section (caring family scene, brain illustration, safe home, etc.).

4. **`/normal-vs-alzheimers` Normal Ageing vs Alzheimer's**
   - The 10-row comparison table from the questions doc, color-coded green/red.

5. **`/symptom-checker` Interactive Symptom Checker** ⭐ flagship feature
   - 10 yes/no questions across Memory, Language, Daily Function, Judgement, Behaviour domains (sourced from the 30 diagnostic questions).
   - Three-tier result: Normal / Talk to doctor / See neurologist soon.
   - Explicit "This is not a diagnosis" disclaimer.
   - Available in English and Urdu.

6. **`/doctor-letter` Doctor Letter Generator**
   - Short form → generates a print-ready, professionally formatted letter in English or Urdu summarising symptoms and requesting neurological assessment. Browser print button.

7. **`/diagnostic-questions` 30 Diagnostic Questions**
   - Full reference: each question with short answer, full explanation, and "Why this matters for Pakistani families."

8. **`/caregiver-diary` Private Caregiver Diary**
   - localStorage-only journal (never leaves browser — privacy promise prominent).
   - Rotating prompts: "What was hard today?" "One good moment?" "What do you wish someone understood?"
   - Entry list with dates, ability to delete.

9. **`/awareness-quiz` Alzheimer's Awareness Quiz**
   - 10-question multiple choice, score at end with correct answers and links into the guide.

10. **`/research` Research Dashboard**
    - Progress bars for survey responses, interviews, paper status, languages live. Designed to be manually updatable.

11. **`/community` Community**
    - WhatsApp Community CTA, newsletter signup form (UI only, ready for Mailchimp wiring), info on the three sub-groups.

12. **`/contact` Contact** — simple form + email.

## Global UX
- **Header:** Sehatnaama wordmark (English + Urdu lockup), nav links, persistent Language toggle (EN / اردو).
- **Footer:** Mission line, nav, citations note, "Sehatnaama — صحت نامہ" lockup.
- **Bilingual rendering:** Urdu mode flips body to RTL with Nastaliq font; English mode is LTR with Georgia/Inter.
- **Warning/info boxes:** Pale Orange for urgent, Pale Teal for informational, Forest Green for "what to do."
- **Mobile-first responsive** — most Pakistani users on phones.

## AI-Generated Images (via Lovable AI / Nano Banana)
Generated ahead of time and stored in `src/assets/`:
1. Home hero — warm scene of a Pakistani multigenerational family with an elder, soft teal/ivory palette.
2. About — researcher/community illustration.
3. Alzheimer's guide — caring hands holding an elder's hand.
4. Brain science section — stylised neuron/brain illustration in teal.
5. Caregiver section — woman caregiver in a calm domestic scene.
6. Safe home section — illustrated safe Pakistani home interior.
7. Music therapy — elder listening to music with family.
8. Community — WhatsApp/community gathering illustration.

All images use the brand palette and a consistent warm, dignified, illustrative style — never clinical stock photography.

## Out of Scope (stubs/placeholders only)
- Real Mailchimp/Typeform/WhatsApp integrations — UI is built and ready, real wiring left to user.
- Punjabi/Sindhi/Saraiki/Pashto full translations — language buttons present, content English+Urdu only initially.
- No backend/database needed for v1 (diary uses localStorage; research dashboard values hardcoded for manual edits).
