/* =========================================================
   Mock data — structured to match DB columns for easy
   handoff to Sheety / Stein / Sheets API later.
   Each top-level array is one logical table.
   ========================================================= */

// ---------- TASKS (weekly_tasks) ----------
// Columns: id, title, week, status, priority, est_hours, due_date, category, week_label, notes
const SEED_TASKS = [
  { id: "T-001", title: "Pick the 4 hero projects by recruiter logic, not chronology", week: 1, week_label: "Week 1 — Cut & Commit", status: "done", priority: "high", est_hours: 1, due_date: "2026-05-06", category: "Portfolio", notes: "Oracle Cards, Children's Book, Personal Series, 33 West chosen." },
  { id: "T-002", title: "Captain Baker decision — rebuild scope or cut from portfolio", week: 1, week_label: "Week 1 — Cut & Commit", status: "done", priority: "high", est_hours: 4, due_date: "2026-05-07", category: "Portfolio", notes: "Decision: rebuild. Client confirmed real bakery photos." },
  { id: "T-003", title: "Reach out to 3 past clients for a 2-3 line testimonial quote", week: 1, week_label: "Week 1 — Cut & Commit", status: "in_progress", priority: "high", est_hours: 1, due_date: "2026-05-08", category: "Outreach", notes: "Sent: Captain Baker, Vertex Vega, Cre-Aid. Awaiting replies." },
  { id: "T-004", title: "Audit 4 hero projects against the consistency checklist (a–d)", week: 1, week_label: "Week 1 — Cut & Commit", status: "in_progress", priority: "med", est_hours: 2, due_date: "2026-05-09", category: "Portfolio", notes: "" },
  { id: "T-005", title: "Write the visual signature paragraph (concrete, not 'vibrant & quirky')", week: 1, week_label: "Week 1 — Cut & Commit", status: "todo", priority: "med", est_hours: 1, due_date: "2026-05-10", category: "Positioning", notes: "" },
  { id: "T-006", title: "Rewrite the About — lead with positioning, not credentials", week: 1, week_label: "Week 1 — Cut & Commit", status: "todo", priority: "med", est_hours: 1, due_date: "2026-05-10", category: "Positioning", notes: "" },
  { id: "T-007", title: "Sunday read-through with hero-only deck and new About", week: 1, week_label: "Week 1 — Cut & Commit", status: "todo", priority: "low", est_hours: 0.75, due_date: "2026-05-11", category: "Review", notes: "" },

  { id: "T-008", title: "Behance — publish all 4 projects with covers + 80–120 word context", week: 2, week_label: "Week 2 — Build, Sharply", status: "todo", priority: "high", est_hours: 6, due_date: "2026-05-14", category: "Channels", notes: "" },
  { id: "T-009", title: "Personal site on Framer (Editorial template) + custom domain", week: 2, week_label: "Week 2 — Build, Sharply", status: "todo", priority: "high", est_hours: 6, due_date: "2026-05-15", category: "Channels", notes: "amalartz.com if available." },
  { id: "T-010", title: "LinkedIn rewrite — headline, About, Featured pins", week: 2, week_label: "Week 2 — Build, Sharply", status: "todo", priority: "med", est_hours: 1, due_date: "2026-05-15", category: "Channels", notes: "" },
  { id: "T-011", title: "Fiverr — publish 2 illustration-led gigs (oracle decks, custom portraits)", week: 2, week_label: "Week 2 — Build, Sharply", status: "todo", priority: "med", est_hours: 3, due_date: "2026-05-16", category: "Channels", notes: "Skip generic logo gigs." },
  { id: "T-012", title: "Draft point-of-view post (Indian D2C maximalism thesis)", week: 2, week_label: "Week 2 — Build, Sharply", status: "todo", priority: "med", est_hours: 3, due_date: "2026-05-17", category: "Content", notes: "" },
  { id: "T-013", title: "Friend test — send portfolio to 2 designers + 1 outsider for read-back", week: 2, week_label: "Week 2 — Build, Sharply", status: "todo", priority: "low", est_hours: 0.5, due_date: "2026-05-18", category: "Review", notes: "" },

  { id: "T-014", title: "Submit 5 deeply-tailored applications (Talented, Codesign, Plus Design, Pratham, Plix)", week: 3, week_label: "Week 3 — Five Deep", status: "todo", priority: "high", est_hours: 6, due_date: "2026-05-22", category: "Applications", notes: "" },
  { id: "T-015", title: "Direct LinkedIn outreach to 5 D2C brand managers", week: 3, week_label: "Week 3 — Five Deep", status: "todo", priority: "high", est_hours: 2, due_date: "2026-05-22", category: "Outreach", notes: "" },
  { id: "T-016", title: "Publish point-of-view post on Instagram + LinkedIn", week: 3, week_label: "Week 3 — Five Deep", status: "todo", priority: "high", est_hours: 1, due_date: "2026-05-21", category: "Content", notes: "" },
  { id: "T-017", title: "Send 5 narrow Upwork proposals (illustration-only)", week: 3, week_label: "Week 3 — Five Deep", status: "todo", priority: "med", est_hours: 2.5, due_date: "2026-05-23", category: "Applications", notes: "" },
  { id: "T-018", title: "Confirm 3 references — past client, collaborator, professional", week: 3, week_label: "Week 3 — Five Deep", status: "todo", priority: "med", est_hours: 1, due_date: "2026-05-24", category: "Outreach", notes: "" },
  { id: "T-019", title: "Set salary anchors — full-time, retainer, project minimum", week: 3, week_label: "Week 3 — Five Deep", status: "todo", priority: "low", est_hours: 0.5, due_date: "2026-05-24", category: "Strategy", notes: "₹8–18 LPA range per gap analysis." },
];

// ---------- MONTHLY TARGETS (monthly_targets) ----------
// Columns: id, title, target, achieved, unit, accent, period, blurb
const SEED_TARGETS = [
  { id: "M-001", title: "Tailored applications submitted", target: 5,  achieved: 1, unit: "apps",      accent: "indigo", period: "May 2026", blurb: "Quality > spray. 60–90 min per application." },
  { id: "M-002", title: "Direct D2C brand outreach",       target: 5,  achieved: 0, unit: "messages",  accent: "teal",   period: "May 2026", blurb: "Brand Manager / Head of Brand at named D2Cs." },
  { id: "M-003", title: "Hero portfolio projects shipped", target: 4,  achieved: 2, unit: "projects",  accent: "ink",    period: "May 2026", blurb: "Oracle Cards live; Children's Book live." },
  { id: "M-004", title: "Recruiter screen calls",          target: 1,  achieved: 0, unit: "calls",     accent: "amber",  period: "May 2026", blurb: "Stretch goal. Replies are the leading signal." },
  { id: "M-005", title: "Behance saves & appreciations",   target: 25, achieved: 7, unit: "actions",   accent: "green",  period: "May 2026", blurb: "Non-friend signal only. Filter the inflated stuff." },
];

// ---------- NOTES (quick_notes) ----------
// Columns: id, body, tag, created_at, source_url
const SEED_NOTES = [
  { id: "N-001", body: "Plix dropped a new illustrated wellness shot range — visual lead seems freshly hired. Worth checking who and pinging.", tag: "lead", created_at: "2026-05-04T19:42", source_url: "https://www.instagram.com/plix.life/" },
  { id: "N-002", body: "Talented studio openings page just listed a Senior Brand Designer role. Closes May 30. Tailored note ready in /Drafts.", tag: "lead", created_at: "2026-05-04T11:08", source_url: "https://talented.agency/careers" },
  { id: "N-003", body: "Idea: oracle deck case study should open with the *card back* pattern. The illustrators on Behance who do this read 3x stronger.", tag: "idea", created_at: "2026-05-03T22:15", source_url: "" },
  { id: "N-004", body: "Pickle Yolk Books on Twitter — open call for illustrators for Q3 2026 picture book commissions.", tag: "link", created_at: "2026-05-03T09:30", source_url: "https://x.com/pickleyolkbooks" },
];

// ---------- MARKET ANALYSIS (market_signals) ----------
// Columns: id, title, snippet, date, source, source_url, category, tag
const SEED_MARKET = [
  {
    id: "MK-001",
    title: "Indian D2C brand spend on illustrated content up ~34% YoY",
    snippet: "Indie wellness, F&B, and beauty brands are leading the shift away from stock photography toward commissioned illustration — particularly maximalist and culture-rooted styles. Plix, Subko, and Bombay Sweet Shop cited as category leaders.",
    date: "2026-05-02",
    source: "Pocket Aces D2C Pulse",
    source_url: "#",
    category: "Trend",
    tag: "t-trend",
    saved: true,
  },
  {
    id: "MK-002",
    title: "Senior Brand Designer comp band lifted to ₹14–22 LPA in Mumbai/Bangalore",
    snippet: "Naukri JobSpeak report shows Q1 2026 senior brand designer median compensation up from ₹12 LPA. Top of band reserved for designers with verifiable client outcomes and 5+ years.",
    date: "2026-04-28",
    source: "Naukri JobSpeak",
    source_url: "#",
    category: "Salary",
    tag: "t-salary",
    saved: false,
  },
  {
    id: "MK-003",
    title: "Behance Featured Freelancer program reopens for 2026 cohort",
    snippet: "Adobe-backed program now accepting illustrators with active commission availability. Featured profiles see avg. 3.4x inbound message rate. Application window: May 10 – June 15.",
    date: "2026-04-25",
    source: "Behance Editorial",
    source_url: "#",
    category: "Channel",
    tag: "t-hiring",
    saved: false,
  },
  {
    id: "MK-004",
    title: "Glassdoor lists 5,942 active brand & visual design roles in India",
    snippet: "India design hiring up 18% QoQ. Brand-illustration hybrid roles are the fastest-growing sub-category, particularly at Series A–C consumer companies. Mumbai leads listings, Bangalore second.",
    date: "2026-04-22",
    source: "Glassdoor India",
    source_url: "#",
    category: "Hiring",
    tag: "t-hiring",
    saved: false,
  },
  {
    id: "MK-005",
    title: "Why most D2C identity work in India looks the same — and what to borrow",
    snippet: "Long-form essay arguing the ‘sans-serif + pastel + tiny mascot’ template has saturated the category. Editorial-grade illustration and culture-rooted typography are the next signal of brand sophistication.",
    date: "2026-04-19",
    source: "It's Nice That",
    source_url: "#",
    category: "Strategy",
    tag: "t-strategy",
    saved: true,
  },
  {
    id: "MK-006",
    title: "Talented studio publishes brand book template — illustrator-led process",
    snippet: "Bangalore studio shares their full discovery → mood → identity workflow as a public Figma file. Notable: they explicitly hire illustrators *before* type designers, inverting the agency norm.",
    date: "2026-04-16",
    source: "Talented Agency Blog",
    source_url: "#",
    category: "Process",
    tag: "t-stack",
    saved: false,
  },
  {
    id: "MK-007",
    title: "Indie publishers lean into illustrated covers — 67% of 2025 list illustrated",
    snippet: "Pratham, Tara, Duckbill, and Pickle Yolk all reported majority-illustrated covers in 2025, vs. 41% in 2022. Commission rates for picture-book illustration up to ₹45–80k per spread for senior illustrators.",
    date: "2026-04-12",
    source: "Publishers Weekly India",
    source_url: "#",
    category: "Trend",
    tag: "t-trend",
    saved: false,
  },
  {
    id: "MK-008",
    title: "AI-generated brand visuals: clients asking for 'human-led' clauses",
    snippet: "Survey of 200 Indian D2C brand managers — 62% now include 'no AI-generated illustration' clauses in commission contracts. Proven hand-illustration is becoming a legible differentiator.",
    date: "2026-04-08",
    source: "Mint Lounge",
    source_url: "#",
    category: "Strategy",
    tag: "t-strategy",
    saved: false,
  },
];

// ---------- ROLES (stress_tested_roles) ----------
// Columns: id, title, company, location, comp_range, fit_score, confidence, status,
//          skills:[{name, weight, mastery}], next_step, posted_date
const SEED_ROLES = [
  {
    id: "R-001",
    title: "Senior Brand Illustrator",
    company: "Talented",
    location: "Bangalore · Hybrid",
    comp_range: "₹16–22 LPA",
    fit_score: 92,
    confidence: 4,
    status: "Researching",
    next_step: "Tailor cover note + reference one of their 2025 D2C identities",
    posted_date: "2026-04-29",
    why_fit: "Illustration-led identity work; hire illustrators before type designers. Maximalist work is on-brand for them.",
    skills: [
      { name: "Brand identity systems",   weight: "Must",   mastery: 75 },
      { name: "Editorial illustration",   weight: "Must",   mastery: 88 },
      { name: "Type pairing & rules",     weight: "Must",   mastery: 65 },
      { name: "Client storytelling (STAR)", weight: "Should", mastery: 55 },
      { name: "Motion / Lottie basics",   weight: "Nice",   mastery: 25 },
    ],
  },
  {
    id: "R-002",
    title: "Brand Designer (Identity & Illustration)",
    company: "Codesign",
    location: "Mumbai · Hybrid",
    comp_range: "₹12–18 LPA",
    fit_score: 84,
    confidence: 3,
    status: "Tailoring",
    next_step: "Pick the strongest of 33 West / Birla True White as opener case study",
    posted_date: "2026-04-25",
    why_fit: "Strong illustrated identity portfolio; takes meetings on referral. Work shape matches her sweet spot.",
    skills: [
      { name: "Identity systems",         weight: "Must",   mastery: 75 },
      { name: "Print & packaging",        weight: "Must",   mastery: 70 },
      { name: "Illustration",             weight: "Must",   mastery: 88 },
      { name: "Adobe CC + Figma",         weight: "Must",   mastery: 80 },
      { name: "Project leadership",       weight: "Should", mastery: 50 },
    ],
  },
  {
    id: "R-003",
    title: "Picture Book Illustrator (Freelance)",
    company: "Pratham Books",
    location: "Remote · India",
    comp_range: "₹45–80k / spread",
    fit_score: 88,
    confidence: 5,
    status: "Applying",
    next_step: "Submit Children's Book project as opening sample; flag oracle work as range",
    posted_date: "2026-04-20",
    why_fit: "Already has a published children's book. Pratham's commissioning style favors maximalist + culturally rooted work.",
    skills: [
      { name: "Children's book illustration", weight: "Must", mastery: 90 },
      { name: "Character consistency",        weight: "Must", mastery: 85 },
      { name: "Hindi/regional visual idiom",  weight: "Should", mastery: 60 },
      { name: "Print production hand-off",    weight: "Must", mastery: 70 },
    ],
  },
  {
    id: "R-004",
    title: "Brand Lead — D2C Wellness",
    company: "Plix",
    location: "Mumbai · On-site",
    comp_range: "₹14–20 LPA",
    fit_score: 78,
    confidence: 3,
    status: "Watching",
    next_step: "Identify hiring manager via LinkedIn; warm intro through Behance Featured network",
    posted_date: "2026-04-18",
    why_fit: "Visual culture is illustration-forward. Their last 6 months of campaigns lean exactly into her style.",
    skills: [
      { name: "In-house brand stewardship", weight: "Must",   mastery: 55 },
      { name: "Campaign art direction",     weight: "Must",   mastery: 65 },
      { name: "Cross-functional w/ marketing", weight: "Should", mastery: 50 },
      { name: "Illustration + typography",  weight: "Must",   mastery: 85 },
    ],
  },
  {
    id: "R-005",
    title: "Illustrator (Editorial + Brand)",
    company: "Plus Design",
    location: "Mumbai · Hybrid",
    comp_range: "₹10–16 LPA",
    fit_score: 81,
    confidence: 4,
    status: "Researching",
    next_step: "DM creative director with Oracle Cards link before formal application",
    posted_date: "2026-04-15",
    why_fit: "Editorial-led studio. Their case studies look like Amala's voice three years from now — clear ladder.",
    skills: [
      { name: "Editorial illustration",   weight: "Must",   mastery: 85 },
      { name: "Brand identity",           weight: "Must",   mastery: 70 },
      { name: "Concept development",      weight: "Must",   mastery: 78 },
      { name: "Presenting to clients",    weight: "Should", mastery: 45 },
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
