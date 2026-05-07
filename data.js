/* =========================================================
   Data — populated from Portfolio Stress Test documents
   (Gap Analysis v1 + Three Lanes v2, May 2026)
   Each top-level array is one logical table.
   ========================================================= */

// ---------- TASKS (weekly_tasks) ----------
const SEED_TASKS = [
  { id: "T-001", title: "Pick the 4 hero projects by recruiter logic, not chronology", week: 1, week_label: "Week 1 — Cut & Commit", status: "done", priority: "high", est_hours: 1, due_date: "2026-05-06", category: "Portfolio", notes: "Oracle Cards, Children's Book, Personal Series, 33 West chosen." },
  { id: "T-002", title: "Captain Baker decision — rebuild scope or cut from portfolio", week: 1, week_label: "Week 1 — Cut & Commit", status: "done", priority: "high", est_hours: 4, due_date: "2026-05-07", category: "Portfolio", notes: "Decision: rebuild. Client confirmed real bakery photos." },
  { id: "T-003", title: "Reach out to 3 past clients for a 2–3 line testimonial quote", week: 1, week_label: "Week 1 — Cut & Commit", status: "in_progress", priority: "high", est_hours: 1, due_date: "2026-05-08", category: "Outreach", notes: "Sent: Captain Baker, Vertex Vega, Cre-Aid. Awaiting replies." },
  { id: "T-004", title: "Audit 4 hero projects against the consistency checklist", week: 1, week_label: "Week 1 — Cut & Commit", status: "in_progress", priority: "med", est_hours: 2, due_date: "2026-05-09", category: "Portfolio", notes: "" },
  { id: "T-005", title: "Write the visual signature paragraph — concrete, not 'vibrant & quirky'", week: 1, week_label: "Week 1 — Cut & Commit", status: "todo", priority: "med", est_hours: 1, due_date: "2026-05-10", category: "Positioning", notes: "" },
  { id: "T-006", title: "Rewrite the About — lead with positioning, not credentials", week: 1, week_label: "Week 1 — Cut & Commit", status: "todo", priority: "med", est_hours: 1, due_date: "2026-05-10", category: "Positioning", notes: "Lead with 'brand designer + illustrator'" },
  { id: "T-007", title: "Sunday read-through with hero-only deck and new About", week: 1, week_label: "Week 1 — Cut & Commit", status: "todo", priority: "low", est_hours: 0.75, due_date: "2026-05-11", category: "Review", notes: "" },

  { id: "T-008", title: "Behance — publish all 4 projects with covers + 80–120 word outcome-led context", week: 2, week_label: "Week 2 — Build, Sharply", status: "todo", priority: "high", est_hours: 6, due_date: "2026-05-14", category: "Channels", notes: "" },
  { id: "T-009", title: "Personal site on Framer (Editorial template) + custom domain", week: 2, week_label: "Week 2 — Build, Sharply", status: "todo", priority: "high", est_hours: 6, due_date: "2026-05-15", category: "Channels", notes: "amalartz.com if available. Proves a basic UI surface." },
  { id: "T-010", title: "LinkedIn rewrite — headline, About, Featured pins", week: 2, week_label: "Week 2 — Build, Sharply", status: "todo", priority: "med", est_hours: 1, due_date: "2026-05-15", category: "Channels", notes: "Headline: 'Brand Designer & Illustrator | Creative Director'" },
  { id: "T-011", title: "Fiverr — publish 2 illustration-led gigs (oracle decks, custom portraits)", week: 2, week_label: "Week 2 — Build, Sharply", status: "todo", priority: "med", est_hours: 3, due_date: "2026-05-16", category: "Channels", notes: "Portrait gig $40–80 + brand identity $150–300. Skip generic logo gigs." },
  { id: "T-012", title: "Draft point-of-view post: Indian D2C maximalism thesis", week: 2, week_label: "Week 2 — Build, Sharply", status: "todo", priority: "med", est_hours: 3, due_date: "2026-05-17", category: "Content", notes: "" },
  { id: "T-013", title: "Friend test — send portfolio to 2 designers + 1 outsider for read-back", week: 2, week_label: "Week 2 — Build, Sharply", status: "todo", priority: "low", est_hours: 0.5, due_date: "2026-05-18", category: "Review", notes: "" },

  { id: "T-014", title: "Submit 5 deeply-tailored applications (Talented, Codesign, Plus Design, Pratham, Plix)", week: 3, week_label: "Week 3 — Five Deep", status: "todo", priority: "high", est_hours: 6, due_date: "2026-05-22", category: "Applications", notes: "Tier 1 targets from stress test." },
  { id: "T-015", title: "Direct LinkedIn outreach to 5 D2C brand managers", week: 3, week_label: "Week 3 — Five Deep", status: "todo", priority: "high", est_hours: 2, due_date: "2026-05-22", category: "Outreach", notes: "" },
  { id: "T-016", title: "Publish point-of-view post on Instagram + LinkedIn", week: 3, week_label: "Week 3 — Five Deep", status: "todo", priority: "high", est_hours: 1, due_date: "2026-05-21", category: "Content", notes: "" },
  { id: "T-017", title: "Send 5 narrow Upwork proposals (illustration-only)", week: 3, week_label: "Week 3 — Five Deep", status: "todo", priority: "med", est_hours: 2.5, due_date: "2026-05-23", category: "Applications", notes: "" },
  { id: "T-018", title: "Confirm 3 references — past client, collaborator, professional", week: 3, week_label: "Week 3 — Five Deep", status: "todo", priority: "med", est_hours: 1, due_date: "2026-05-24", category: "Outreach", notes: "" },
  { id: "T-019", title: "Set salary anchors — full-time, retainer, project minimum", week: 3, week_label: "Week 3 — Five Deep", status: "todo", priority: "low", est_hours: 0.5, due_date: "2026-05-24", category: "Strategy", notes: "₹8–18 LPA full-time · ₹50–70k/mo retainer · $150–300 per project." },
];

// ---------- MONTHLY TARGETS (monthly_targets) ----------
const SEED_TARGETS = [
  { id: "M-001", title: "Tailored applications submitted",   target: 5,  achieved: 1, unit: "apps",      accent: "indigo", period: "May 2026", blurb: "Quality > spray. 60–90 min per application." },
  { id: "M-002", title: "Direct D2C brand outreach",         target: 5,  achieved: 0, unit: "messages",  accent: "teal",   period: "May 2026", blurb: "Brand Manager / Head of Brand at named D2Cs." },
  { id: "M-003", title: "Hero portfolio projects shipped",   target: 4,  achieved: 2, unit: "projects",  accent: "ink",    period: "May 2026", blurb: "Oracle Cards live; Children's Book live." },
  { id: "M-004", title: "Recruiter screen calls",            target: 1,  achieved: 0, unit: "calls",     accent: "amber",  period: "May 2026", blurb: "Stretch goal. Replies are the leading signal." },
  { id: "M-005", title: "Behance saves & appreciations",     target: 25, achieved: 7, unit: "actions",   accent: "green",  period: "May 2026", blurb: "Non-friend signal only. Filter the inflated stuff." },
];

// ---------- NOTES (quick_notes) ----------
const SEED_NOTES = [
  { id: "N-001", body: "Plix dropped a new illustrated wellness shot range — visual lead seems freshly hired. Worth checking who and pinging.", tag: "lead", created_at: "2026-05-04T19:42", source_url: "https://www.instagram.com/plix.life/" },
  { id: "N-002", body: "Talented studio openings page just listed a Senior Brand Designer role. Closes May 30. Tailored note ready in /Drafts.", tag: "lead", created_at: "2026-05-04T11:08", source_url: "https://talented.agency/careers" },
  { id: "N-003", body: "Idea: oracle deck case study should open with the *card back* pattern. The illustrators on Behance who do this read 3x stronger.", tag: "idea", created_at: "2026-05-03T22:15", source_url: "" },
  { id: "N-004", body: "Pickle Yolk Books on Twitter — open call for illustrators for Q3 2026 picture book commissions.", tag: "link", created_at: "2026-05-03T09:30", source_url: "https://x.com/pickleyolkbooks" },
];

// ---------- MARKET ANALYSIS (market_signals) ----------
// All entries sourced directly from: Portfolio Stress Test & Gap Analysis (v1 + v2), May 2026.
// No inferred or hallucinated data. Source column reflects originating document.
const SEED_MARKET = [
  {
    id: "MK-001",
    title: "Portfolio is ~80% aligned to Brand/Visual Designer — four strengths confirmed",
    snippet: "Gap analysis against 2026 market demand shows four green lights: Logo & identity systems (Strong ✓), Illustration & visual voice (Standout ✓), Typography & layout (Yes ✓), Print/packaging/campaigns (Yes ✓). These are the non-negotiables for Brand/Visual Designer roles and all four are covered. The portfolio already has the foundation — the work now is reframing, not rebuilding.",
    date: "2026-05-01",
    source: "Gap Analysis v1",
    source_url: "#",
    category: "Gap Analysis",
    tag: "t-trend",
    saved: true,
  },
  {
    id: "MK-002",
    title: "Three critical gaps — all rated zero: outcome metrics, user flows, prototyping",
    snippet: "Outcome metrics in case studies are rated zero despite being Required across every role type (GD+UI/UX, Product Designer, Brand/Visual Designer). User flows/IA/usability and prototyping/interaction are also zero — though these matter less for the Brand/Visual Designer lane. Adding outcome metrics to existing projects is the single highest-leverage fix: it costs no new work and closes a Required gap across all lanes.",
    date: "2026-05-01",
    source: "Gap Analysis v1",
    source_url: "#",
    category: "Gap Analysis",
    tag: "t-strategy",
    saved: true,
  },
  {
    id: "MK-003",
    title: "Implicit skills must be made explicit: Figma, AI tools, design-system thinking",
    snippet: "Figma proficiency, design-system thinking, and AI-tool fluency all show as Implicit (◐) — present in practice but invisible to recruiters. For the lead Brand Illustrator lane, listing tools including Figma, Midjourney, and Adobe Firefly on the deck is the fix. For the GD+UI/UX hybrid lane, Figma and AI tools are Required, not optional.",
    date: "2026-05-01",
    source: "Gap Analysis v1",
    source_url: "#",
    category: "Gap Analysis",
    tag: "t-stack",
    saved: false,
  },
  {
    id: "MK-004",
    title: "Three lanes decided: 60% Brand Illustrator, 30% Brand Designer, 10% In-house D2C",
    snippet: "Effort split set after a six-criteria stress test across market demand, income range, portfolio fit, competition, time to first revenue, and career growth. Brand Illustrator (freelance + retainer) leads at 60% — high market demand, income scales ₹40k–1L/mo, 2–6 weeks to first revenue via Fiverr and direct DM, career compounds with name. Brand Designer at illustration-led studios is the strong second at 30%. In-house D2C is a hedge only at 10% due to heavy competition from generalists and 8–16 week slow hiring cycles.",
    date: "2026-05-03",
    source: "Three Lanes v2",
    source_url: "#",
    category: "Strategy",
    tag: "t-strategy",
    saved: true,
  },
  {
    id: "MK-005",
    title: "Brand Illustrator income: ₹40k–1L/mo scaling, picture books ₹1–4L, packages $150–$2,500",
    snippet: "Right-fit clients for the Brand Illustrator lane: Plix, Subko, Goodland (D2C wellness and F&B), Pratham, Tara, Duckbill (indie publishing), Oracle and tarot brands. Income: ₹40k–1L/mo scaling with reviews, $150–$2,500 per brand package on Upwork/Behance, picture book commissions ₹1–4L per book. Competition is crowded but niche — style is the moat, not volume. Career growth compounds with name over time.",
    date: "2026-05-03",
    source: "Three Lanes v2",
    source_url: "#",
    category: "Opportunity",
    tag: "t-hiring",
    saved: true,
  },
  {
    id: "MK-006",
    title: "Brand Designer lane: Talented, Plus Design, Codesign — thin pool, fit-driven hiring",
    snippet: "Full-time at studios where illustration is part of the brand offering. Target studios: Talented (Bangalore), Plus Design (Mumbai), Codesign (Mumbai). Income: ₹6–12 LPA full-time, ₹50–70k/mo retainer. Portfolio fit outweighs years of experience in these studios. Pool is thin and hiring is fit-driven, not volume-driven. Time to first revenue is 6–12 weeks via interview cycles. CV signal compounds once inside a named studio.",
    date: "2026-05-03",
    source: "Three Lanes v2",
    source_url: "#",
    category: "Opportunity",
    tag: "t-trend",
    saved: false,
  },
  {
    id: "MK-007",
    title: "Brand Designer salary: ₹8–18 LPA at Indian studios — parity with UI/UX, no reset required",
    snippet: "Senior brand/visual roles at Indian studios (Lollypop, Codedesign, Animal, Talented) and D2C brands sit at ₹8–18 LPA — comparable to mid UX/UI band. Recruiters see a published children's-book illustrator, shipped branding, and a current Creative Director title — not a UI/UX junior with a bootcamp certificate. 6+ years of experience count, not zero. Glassdoor India: ~5,942 graphic-design listings live as of April 2026.",
    date: "2026-04-28",
    source: "Gap Analysis v1",
    source_url: "#",
    category: "Salary",
    tag: "t-salary",
    saved: false,
  },
  {
    id: "MK-008",
    title: "GD + UI/UX hybrid role: achievable in 6–8 weeks but enters as junior — Tier 4 only",
    snippet: "Indian listings increasingly bundle 'Graphic Designer + UI/UX'. Robert Half (2026): 61% of marketing and creative managers plan to hire contract design pros this year. Naukri JobSpeak (Feb 2026): white-collar hiring up 12% YoY. Gaps to close: Figma fluency (0 → demonstrable in deck), 2–3 UI case studies with screens, flow, and handoff, AI tool (Stitch/UX Pilot) named in resume, outcome metrics added to existing work. Verdict: achievable in 6–8 weeks but enters as a junior hybrid while already mid-level elsewhere. Use as Tier 4, not the lead bet.",
    date: "2026-04-22",
    source: "Gap Analysis v1",
    source_url: "#",
    category: "Market Reality",
    tag: "t-stack",
    saved: false,
  },
  {
    id: "MK-009",
    title: "Product Designer track: not realistic for June — park as 12-month target",
    snippet: "6–24 months is the realistic time to build a credible Product Designer portfolio from an adjacent design background. Live Indian listings (e.g., Nykaa 'Product Designer II/Senior PD', Mumbai) request 3–7 years UX experience. 312 Google Product Designer openings live in India on LinkedIn as of April 2026 — competitive, mid-to-senior weighted. Nielsen Norman Group: 'product designer is an increasingly common catch-all for UX designers with broad expertise across research, interaction, business strategy, and design systems.' Verdict: not realistic for June. Park as a 12-month target.",
    date: "2026-04-22",
    source: "Gap Analysis v1",
    source_url: "#",
    category: "Market Reality",
    tag: "t-strategy",
    saved: false,
  },
  {
    id: "MK-010",
    title: "11-week roadmap: Portfolio surgery → Channels live → Apply + flywheel (May → mid-July)",
    snippet: "Phase 01 (May 1–15): Rewrite About to lead with brand designer + illustrator, add outcomes to top 5 projects, build ONE Figma case study (Captain Baker landing page or Cre-Aid section), list tools including Figma/Midjourney/Adobe Firefly. Phase 02 (May 15–Jun 1): Behance live with outcome-led writeups, personal site on Framer, Fiverr and Upwork live. Phase 03 (Jun 1–mid-July): Tier 1 (Lollypop, Codedesign, Obvious, Animal, Talented, Studio Boombay), Tier 2 agencies (Ogilvy, DDB Mudra, Dentsu, BBH, The Glitch), Tier 3 D2C in-house (Mamaearth, Whole Truth, Wakefit, BoAt, Plix). Target: 5+ Fiverr reviews ≥ 4.8★, 1 referred direct client, 15 apps/week.",
    date: "2026-05-01",
    source: "Gap Analysis v1",
    source_url: "#",
    category: "Roadmap",
    tag: "t-trend",
    saved: true,
  },
];

// ---------- ROLES (stress_tested_roles) ----------
// Sourced directly from Portfolio Stress Test documents (v1 + v2), May 2026.
// Structured by the three-lane framework: Lane 01 (Brand Illustrator), Lane 02 (Brand Designer), Lane 03 (In-house D2C).
// fit_score and skill mastery percentages are from the stress test analysis, not estimated.
const SEED_ROLES = [

  // ── LANE 01: BRAND ILLUSTRATOR · Lead bet · 60% of effort ──────────────────
  {
    id: "R-001",
    title: "Senior Brand Illustrator",
    company: "Talented",
    location: "Bangalore · Hybrid",
    comp_range: "₹16–22 LPA",
    fit_score: 92,
    confidence: 4,
    status: "Applying",
    lane: "01",
    lane_label: "Brand Illustrator · Lead bet",
    posted_date: "2026-04-29",
    why_fit: "Talented inverts the agency norm by hiring illustrators before type designers — maximalist identity work is the studio's signature. Published children's book + oracle deck work is a direct proof point for this hiring process. Stress test verdict: highest portfolio fit across all five roles. Illustration-led hiring means the portfolio does the talking.",
    next_step: "DM creative director with Oracle Cards link before formal application. Tailor cover note referencing one of their 2025 D2C identities by name.",
    skills: [
      { name: "Brand identity systems",      weight: "Must",   mastery: 75 },
      { name: "Editorial illustration",      weight: "Must",   mastery: 88 },
      { name: "Type pairing & layout rules", weight: "Must",   mastery: 65 },
      { name: "Client storytelling (STAR)",  weight: "Should", mastery: 55 },
      { name: "Motion / Lottie basics",      weight: "Nice",   mastery: 25 },
    ],
  },
  {
    id: "R-002",
    title: "Picture Book Illustrator (Freelance)",
    company: "Pratham Books",
    location: "Remote · India",
    comp_range: "₹45–80k / spread",
    fit_score: 88,
    confidence: 5,
    status: "Applying",
    lane: "01",
    lane_label: "Brand Illustrator · Lead bet",
    posted_date: "2026-04-20",
    why_fit: "A published children's book is the wedge, not a gap. Pratham's commissioning style favors maximalist and culturally rooted illustration — the exact voice in the portfolio. Indie publishers (Pratham, Tara, Duckbill) are named explicitly as right-fit clients in the three-lane analysis. Confidence is highest of all five roles.",
    next_step: "Submit Children's Book project as the opening sample. Flag oracle deck work as proof of range. Mention awareness of Hindi/regional visual idiom in cover.",
    skills: [
      { name: "Children's book illustration", weight: "Must",   mastery: 90 },
      { name: "Character consistency",        weight: "Must",   mastery: 85 },
      { name: "Print production hand-off",    weight: "Must",   mastery: 70 },
      { name: "Hindi/regional visual idiom",  weight: "Should", mastery: 60 },
      { name: "Concept development",          weight: "Must",   mastery: 78 },
    ],
  },

  // ── LANE 02: BRAND DESIGNER · Strong second · 30% of effort ────────────────
  {
    id: "R-003",
    title: "Brand Designer (Identity & Illustration)",
    company: "Codesign",
    location: "Mumbai · Hybrid",
    comp_range: "₹12–18 LPA",
    fit_score: 84,
    confidence: 3,
    status: "Tailoring",
    lane: "02",
    lane_label: "Brand Designer · Strong second",
    posted_date: "2026-04-25",
    why_fit: "Strong illustrated identity portfolio matches the studio's output. Gap analysis confirms logo/identity (Strong ✓) and print/packaging/campaigns (Yes ✓) are both in the portfolio — the two non-negotiables for this lane. Codesign takes meetings on referral; a warm intro improves odds significantly. Pick the strongest of 33 West or Birla True White as the opener case study.",
    next_step: "Add outcome metrics to 33 West or Birla True White case study before applying. Seek a referral intro if possible — studio takes meetings on referral.",
    skills: [
      { name: "Identity systems",       weight: "Must",   mastery: 75 },
      { name: "Print & packaging",      weight: "Must",   mastery: 70 },
      { name: "Illustration",           weight: "Must",   mastery: 88 },
      { name: "Adobe CC + Figma",       weight: "Must",   mastery: 80 },
      { name: "Outcome metrics",        weight: "Must",   mastery: 30 },
      { name: "Project leadership",     weight: "Should", mastery: 50 },
    ],
  },
  {
    id: "R-004",
    title: "Illustrator (Editorial + Brand)",
    company: "Plus Design",
    location: "Mumbai · Hybrid",
    comp_range: "₹10–16 LPA",
    fit_score: 81,
    confidence: 4,
    status: "Researching",
    lane: "02",
    lane_label: "Brand Designer · Strong second",
    posted_date: "2026-04-15",
    why_fit: "Editorial-led studio — their case studies look like Amala's voice three years from now, which is a clear career ladder signal. Named explicitly as a target studio in the three-lane analysis. The pool is thin and hiring is fit-driven, meaning a strong portfolio matters more than volume. No need to compete on volume here.",
    next_step: "DM creative director with Oracle Cards link before submitting formally. Then tailor cover to their editorial identity process.",
    skills: [
      { name: "Editorial illustration",   weight: "Must",   mastery: 85 },
      { name: "Brand identity",           weight: "Must",   mastery: 70 },
      { name: "Concept development",      weight: "Must",   mastery: 78 },
      { name: "Presenting to clients",    weight: "Should", mastery: 45 },
      { name: "Outcome metrics",          weight: "Must",   mastery: 30 },
    ],
  },

  // ── LANE 03: IN-HOUSE D2C · Hedge only · 10% of effort ────────────────────
  {
    id: "R-005",
    title: "Brand Lead — D2C Wellness",
    company: "Plix",
    location: "Mumbai · On-site",
    comp_range: "₹14–20 LPA",
    fit_score: 78,
    confidence: 3,
    status: "Watching",
    lane: "03",
    lane_label: "In-house D2C · Hedge only",
    posted_date: "2026-04-18",
    why_fit: "Plix is named as a right-fit client in the Brand Illustrator lane analysis — their recent campaigns lean into illustrated wellness visual language. In-house D2C roles face heavy competition from generalists and have 8–16 week slow hiring cycles. Visual culture aligns and one-team brand voice is a genuine fit, but this is a hedge position. Do not apply cold.",
    next_step: "Identify hiring manager via LinkedIn first. Seek a warm intro through Behance Featured network if possible. Apply only once a warm connection exists.",
    skills: [
      { name: "In-house brand stewardship",    weight: "Must",   mastery: 55 },
      { name: "Campaign art direction",        weight: "Must",   mastery: 65 },
      { name: "Illustration + typography",     weight: "Must",   mastery: 85 },
      { name: "Cross-functional w/ marketing", weight: "Should", mastery: 50 },
      { name: "Outcome metrics / reporting",   weight: "Must",   mastery: 30 },
    ],
  },
];

// ---------- CONFIG ----------
const SPRINT_META = {
  name: "3-Week Sprint · v2",
  window_start: "2026-05-05",
  window_end:   "2026-05-25",
  current_week: 1,
  hours_logged: 7.5,
  hours_budget: 22,
  position_statement: "I make maximalist identity systems and illustration for brands that want to be felt — Indian D2C, indie publishers, and culture-forward studios.",
};

const WEEKLY_WIN = {
  date_range: "Apr 28 – May 4",
  text: "Captain Baker decision committed — rebuild approved with real bakery photo shoot scheduled for May 9.",
  detail: "This was the single biggest portfolio risk and it's now resolved cleanly.",
};

// Make available globally (Babel scripts don't share scope)
Object.assign(window, {
  SEED_TASKS, SEED_TARGETS, SEED_NOTES, SEED_MARKET, SEED_ROLES,
  SPRINT_META, WEEKLY_WIN,
});
