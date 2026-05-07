/* Dashboard page */
const { useState, useMemo } = React;

const STATUS_LABELS = {
  todo: "To-Do",
  in_progress: "In Progress",
  done: "Done",
  blocked: "Blocked",
};
const STATUS_CLASS = {
  todo: "status-todo",
  in_progress: "status-prog",
  done: "status-done",
  blocked: "status-block",
};

function StatusPill({ status, onChange }) {
  const [open, setOpen] = useState(false);
  const opts = [
    { v: "todo",        label: "To-Do",       cls: "status-todo",  dot: "#6B7280" },
    { v: "in_progress", label: "In Progress", cls: "status-prog",  dot: "oklch(0.58 0.13 245)" },
    { v: "done",        label: "Done",        cls: "status-done",  dot: "oklch(0.62 0.12 150)" },
    { v: "blocked",     label: "Blocked",     cls: "status-block", dot: "oklch(0.6 0.13 20)" },
  ];
  return (
    <div className="menu-wrap" onMouseLeave={() => setOpen(false)}>
      <button className={`status-pill ${STATUS_CLASS[status]}`} onClick={(e) => { e.stopPropagation(); setOpen(!open); }}>
        <span className="dot"></span>
        {STATUS_LABELS[status]}
        <Ic.chevron width="11" height="11"/>
      </button>
      {open && (
        <div className="menu" onClick={(e) => e.stopPropagation()}>
          {opts.map(o => (
            <button key={o.v} className="menu-item" onClick={() => { onChange(o.v); setOpen(false); }}>
              <span className="dot" style={{ background: o.dot }}></span>
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Checkbox({ status, onClick }) {
  const cls = status === "done" ? "done" : status === "in_progress" ? "partial" : "";
  return (
    <button className={`checkbox ${cls}`} onClick={onClick} aria-label="Toggle done">
      {status === "done" && <Ic.check width="11" height="11"/>}
    </button>
  );
}

function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function WeeklyTasksCard({ tasks, setTasks, currentWeek, setCurrentWeek }) {
  const filtered = tasks.filter(t => t.week === currentWeek);
  const done = filtered.filter(t => t.status === "done").length;
  const weeks = [1, 2, 3];

  const updateStatus = (id, status) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status } : t));
  };
  const toggleDone = (id) => {
    setTasks(prev => prev.map(t => {
      if (t.id !== id) return t;
      return { ...t, status: t.status === "done" ? "todo" : "done" };
    }));
  };

  return (
    <div className="card">
      <div className="card-h">
        <div>
          <div className="ttl">Weekly Tasks</div>
          <div className="sub">{filtered.length} tasks · {done} done · {filtered[0]?.week_label || ""}</div>
        </div>
        <div className="right" style={{ gap: 4, background: 'var(--bg-tint)', padding: 3, borderRadius: 8, border: '1px solid var(--line-soft)' }}>
          {weeks.map(w => (
            <button
              key={w}
              onClick={() => setCurrentWeek(w)}
              className="btn btn-sm"
              style={{
                height: 26,
                padding: '0 10px',
                background: currentWeek === w ? '#fff' : 'transparent',
                border: 'none',
                color: currentWeek === w ? 'var(--ink)' : 'var(--ink-3)',
                fontWeight: currentWeek === w ? 600 : 500,
                boxShadow: currentWeek === w ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
              }}
            >
              Week {w}
            </button>
          ))}
        </div>
      </div>
      <div className="card-body">
        {filtered.map(t => (
          <div className="task-row" key={t.id}>
            <Checkbox status={t.status} onClick={() => toggleDone(t.id)}/>
            <div style={{ minWidth: 0 }}>
              <div className={`task-title ${t.status === 'done' ? 'done' : ''}`}>{t.title}</div>
              <div className="task-meta">
                <span className="mono">{t.id}</span>
                <span className="sep"></span>
                <span>{t.category}</span>
                <span className="sep"></span>
                <span>Due {fmtDate(t.due_date)}</span>
                <span className="sep"></span>
                <span>{t.est_hours}h</span>
              </div>
            </div>
            <StatusPill status={t.status} onChange={(v) => updateStatus(t.id, v)}/>
            <button className="btn btn-sm btn-ghost" style={{ padding: '0 6px' }} aria-label="More">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function MonthlyTargetsCard({ targets }) {
  return (
    <div className="card">
      <div className="card-h">
        <div>
          <div className="ttl">Monthly Targets</div>
          <div className="sub">May 2026 · 21 days remaining</div>
        </div>
        <div className="right">
          <span style={{ fontSize: 11.5, color: 'var(--ink-3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Signal &gt; volume</span>
        </div>
      </div>
      <div className="card-body flush">
        {targets.map(m => {
          const pct = Math.min(100, Math.round((m.achieved / m.target) * 100));
          return (
            <div className="target-row" key={m.id}>
              <div className="target-head">
                <div>
                  <div className="name">{m.title}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginTop: 2 }}>{m.blurb}</div>
                </div>
                <div className="num">
                  <b>{m.achieved}</b> <span>/ {m.target} {m.unit}</span>
                </div>
              </div>
              <div className={`pbar ${m.accent === 'ink' ? '' : m.accent}`}>
                <i style={{ width: pct + '%' }}></i>
              </div>
              <div className="target-foot">
                <span>{pct}% complete</span>
                <span className="mono">{m.id}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QuickCapture({ notes, addNote }) {
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("idea");
  const tags = [
    { v: "lead",  label: "Lead" },
    { v: "link",  label: "Link" },
    { v: "idea",  label: "Idea" },
    { v: "other", label: "Other" },
  ];
  const save = () => {
    const text = body.trim();
    if (!text) return;
    addNote({
      id: "N-" + Math.random().toString(36).slice(2, 7).toUpperCase(),
      body: text,
      tag,
      created_at: new Date().toISOString().slice(0, 16),
      source_url: "",
    });
    setBody("");
  };
  return (
    <div className="card">
      <div className="card-h">
        <div>
          <div className="ttl">Quick Capture</div>
          <div className="sub">Drop a link, lead, or stray thought · syncs to Sheets</div>
        </div>
        <div className="right">
          <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>{notes.length} notes</span>
        </div>
      </div>
      <div className="qc-wrap">
        <textarea
          className="qc-textarea"
          placeholder="Paste a link, type a lead, drop an idea…  (⌘ + Enter to save)"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onKeyDown={(e) => { if ((e.metaKey || e.ctrlKey) && e.key === "Enter") save(); }}
        />
        <div className="qc-toolbar">
          {tags.map(t => (
            <button key={t.v} className={`qc-tag ${tag === t.v ? 'active' : ''}`} onClick={() => setTag(t.v)}>
              {t.label}
            </button>
          ))}
          <div style={{ flex: 1 }}></div>
          <button className="btn btn-sm btn-ghost"><Ic.paperclip width="13" height="13"/> Attach</button>
          <button className="btn btn-sm btn-accent" onClick={save} disabled={!body.trim()} style={{ opacity: body.trim() ? 1 : 0.5 }}>
            Save Note
          </button>
        </div>
      </div>
      {notes.slice(0, 3).map(n => (
        <div className="note-row" key={n.id}>
          <span className={`note-tag-chip ${n.tag}`}>{n.tag}</span>
          <div style={{ minWidth: 0 }}>
            <div className="note-body">{n.body}</div>
            <div className="note-meta mono">{new Date(n.created_at).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}</div>
          </div>
          {n.source_url && <a href={n.source_url} target="_blank" rel="noreferrer" className="btn btn-sm btn-ghost"><Ic.external width="13" height="13"/></a>}
        </div>
      ))}
    </div>
  );
}

function MarketSnippet({ market, onOpen }) {
  const top = market.slice(0, 3);
  return (
    <div className="snippet">
      <div className="eyebrow">
        <Ic.market width="13" height="13"/> Market Analysis · Latest
      </div>
      <div className="ttl">3 signals shaping the market right now</div>
      <div className="body">D2C illustrated content spend up 34% YoY, 62% of brand managers now include no-AI-illustration clauses, and 5,942 active listings on Glassdoor India — the market is moving in the right direction.</div>
      <div className="snippet-mini-list">
        {top.map(m => (
          <div className="snippet-mini-row" key={m.id}>
            <span className="lbl">{m.title}</span>
            <span className="v mono">{fmtDate(m.date)}</span>
          </div>
        ))}
      </div>
      <button className="deeplink" onClick={onOpen}>
        View Details <Ic.arrow width="14" height="14"/>
      </button>
    </div>
  );
}

function RolesSnippet({ roles, onOpen }) {
  const sorted = [...roles].sort((a, b) => b.fit_score - a.fit_score).slice(0, 3);
  return (
    <div className="snippet">
      <div className="eyebrow">
        <Ic.roles width="13" height="13"/> Stress-Tested Roles · Top Fit
      </div>
      <div className="ttl">3 roles where the math says go deep</div>
      <div className="body">Pratham Books and Talented both index above 84% fit. Three lanes decided: Brand Illustrator leads at 60% effort, Brand Designer studios at 30%, In-house D2C as 10% hedge.</div>
      <div className="snippet-mini-list">
        {sorted.map(r => (
          <div className="snippet-mini-row" key={r.id}>
            <span className="lbl">{r.company} · <span style={{ color: 'var(--ink-3)' }}>{r.title}</span></span>
            <span className="v mono">{r.fit_score}%</span>
          </div>
        ))}
      </div>
      <button className="deeplink" onClick={onOpen}>
        View Details <Ic.arrow width="14" height="14"/>
      </button>
    </div>
  );
}

function DashboardPage({ tasks, setTasks, targets, notes, addNote, market, roles, goto, currentWeek, setCurrentWeek }) {
  const totalDone = tasks.filter(t => t.status === "done").length;
  const totalActive = tasks.filter(t => t.status === "in_progress").length;
  const sprintPct = Math.round((totalDone / tasks.length) * 100);

  return (
    <div data-screen-label="01 Dashboard">
      <div className="page-h">
        <div>
          <div className="eyebrow">Tuesday · May 5, 2026 · Sprint Day 1</div>
          <h1>Amala's Upskilling &amp; Career Track</h1>
          <div className="sub" style={{ maxWidth: 640 }}>{SPRINT_META.position_statement}</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn"><Ic.filter width="14" height="14"/> May 2026</button>
          <button className="btn btn-primary"><Ic.plus width="14" height="14"/> New Task</button>
        </div>
      </div>

      <div className="win-banner">
        <div className="win-icon"><Ic.trophy width="22" height="22"/></div>
        <div className="win-text">
          <div className="lbl">Last Week's Win · {WEEKLY_WIN.date_range}</div>
          <div className="ttl">{WEEKLY_WIN.text}</div>
          <div className="meta">{WEEKLY_WIN.detail}</div>
        </div>
        <div className="win-cta">
          <button className="btn">Log this week's win</button>
          <button className="btn">View timeline</button>
        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <div className="lbl">Sprint Progress</div>
          <div className="val">{sprintPct}<span style={{ fontSize: 14, color: 'var(--ink-3)', fontWeight: 500 }}>%</span></div>
          <div className="delta">{totalDone} of {tasks.length} tasks done</div>
        </div>
        <div className="stat">
          <div className="lbl">Hours This Week</div>
          <div className="val">{SPRINT_META.hours_logged}<span style={{ fontSize: 14, color: 'var(--ink-3)', fontWeight: 500 }}> / {SPRINT_META.hours_budget}h</span></div>
          <div className="delta">Inside the 15–25 budget</div>
        </div>
        <div className="stat">
          <div className="lbl">Active Tasks</div>
          <div className="val">{totalActive}</div>
          <div className="delta">Across portfolio + outreach</div>
        </div>
        <div className="stat">
          <div className="lbl">Replies Received</div>
          <div className="val">0<span style={{ fontSize: 14, color: 'var(--ink-3)', fontWeight: 500 }}> / 1</span></div>
          <div className="delta">Wk 3 leading signal · 21d left</div>
        </div>
      </div>

      <div className="grid">
        <WeeklyTasksCard tasks={tasks} setTasks={setTasks} currentWeek={currentWeek} setCurrentWeek={setCurrentWeek}/>
        <MonthlyTargetsCard targets={targets}/>
      </div>

      <div style={{ height: 16 }}></div>

      <QuickCapture notes={notes} addNote={addNote}/>

      <div style={{ height: 16 }}></div>

      <div className="grid-2">
        <MarketSnippet market={market} onOpen={() => goto("market")}/>
        <RolesSnippet roles={roles} onOpen={() => goto("roles")}/>
      </div>
    </div>
  );
}

window.DashboardPage = DashboardPage;
