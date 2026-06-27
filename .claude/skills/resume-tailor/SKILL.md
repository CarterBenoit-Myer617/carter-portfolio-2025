---
name: resume-tailor
description: Generate a tailored .docx resume for Carter from the resume-system master file. Use whenever Carter names a target employer, industry, or pastes a job description and wants a resume version — e.g. "tailor my resume for 686", "make a resume for this Patagonia JD", "snow-outerwear resume", "resume for a sustainability nonprofit". Reads resume-system/master.md + the matching track preset, assembles content, and writes a .docx to resume-system/output/.
---

# Resume Tailor

Turns Carter's master resume content into a polished, employer-tailored `.docx`.

## Inputs (any of)
- An employer name ("686", "Patagonia")
- An industry/track name ("snow-outerwear", "publication")
- A pasted job description

## Files
- Master content: `resume-system/master.md` (single source of truth — never invent content not in it)
- Track presets: `resume-system/tracks/*.md`
- Output: `resume-system/output/<company-or-track>-<role>.docx`
- Tracker: `resume-system/tracker.md`

## Procedure
1. **Pick the track(s).** Match the employer/JD to tracks in `resume-system/tracks/`:
   ROLE: creative-direction (PRIMARY), marketing-coordinator, outdoor-tech-interface ·
   INDUSTRY: snow-outerwear, water-sailing, publication, nonprofit-sustain · STANDALONE: coaching-rowing.
   A real target = one ROLE track × one INDUSTRY track (e.g. creative-direction × snow-outerwear → 686).
   outdoor-tech-interface and coaching-rowing can stand alone. If a JD is pasted, extract its keywords.
2. **Read** `master.md` and the chosen `tracks/<track>.md`.
3. **Assemble** per the track's recipe:
   - Title line + positioning summary for that track
   - Reorder experience; pick the 2–3 emphasized bullets per role from the bullet bank
   - Select the 2–3 featured projects the track names (lead project first)
   - Filter/reorder skills; add the interests line if the recipe says to
   - **★ Add the Prestige Athlete line (master §7b + Rule 10) near the top — every resume except coaching.**
   - If a JD was pasted, mirror its honest keywords (ATS match) — never claim anything untrue
4. **Flag** any `[METRICS]` placeholders still unfilled in your message to Carter so he can add real numbers.
5. **Generate the .docx** using the `anthropic-skills:docx` skill. Layout rules:
   - One page. Clean, modern, ATS-safe (real text, no text-in-images).
   - Header: Name · tailored title · contact line · portfolio URL
   - Sections: Summary · Experience · Featured Projects · Skills · Education
   - Match the spirit of carterbenoitmyer.com (restrained, editorial) without sacrificing ATS readability.
6. **Append a row** to `resume-system/tracker.md` (date, company, role, track, output path, status=drafted).
7. **Report**: which track, which projects/bullets you led with and why, and the unfilled metric placeholders.

## Rules
- Obey master.md §7 design-system rules.
- NEVER put "Visual Freedom Fighter" or "Cultural Preservationist" on the resume.
- NEVER fabricate metrics, roles, or skills. Placeholders only, clearly flagged.
- For TECHNICAL tracks (maritime-hydrodynamics, snowboard-product): obey master.md §7 rule 9 —
  no engineering credentials beyond confirmed CAD/product-design + end-user insight; frame as a
  designer who collaborates with engineers. Respect each track's "honesty dial" note.
- Don't edit master.md during generation — propose master changes separately if content is missing.
