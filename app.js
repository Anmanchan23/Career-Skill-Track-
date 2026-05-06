/* App shell: sidebar nav (desktop), bottom nav (mobile), routing */

function Sidebar({ page, goto, taskCounts }) {
  const items = [
    { k: "dashboard", label: "Dashboard",          icon: Ic.dashboard, count: taskCounts.active },
    { k: "market",    label: "Market Analysis",    icon: Ic.market,    count: null },
    { k: "roles",     label: "Stress-Tested Roles", icon: Ic.roles,    count: 5 },
  ];

  const sprintPct = Math.round(((SPRINT_META.current_week - 1) * 33 + 8) );

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">A</div>
        <div className="brand-meta">
          <div className="b1">Amala · Career Track</div>
          <div className="b2">Internal · Amala &amp; Ani</div>
        </div>
      </div>

      <div className="side-section-label">Workspace</div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(it => (
          <button key={it.k} className={`nav-item ${page === it.k ? 'active' : ''}`} onClick={() => goto(it.k)}>
            <span className="ic"><it.icon width="18" height="18"/></span>
            {it.label}
            {it.count != null && <span className="count">{it.count}</span>}
          </button>
        ))}
      </nav>

      <div className="side-section-label">Sprint</div>
      <div className="side-foot" style={{ marginTop: 0, padding: 0 }}>
        <div className="sprint-card">
          <div className="lbl">3-Week Sprint v2</div>
          <div className="ttl">Week {SPRINT_META.current_week} · Cut &amp; Commit</div>
          <div className="meta">May 5 → May 25, 2026</div>
          <div className="sprint-bar"><i style={{ width: sprintPct + '%' }}></i></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: '#8B95A1' }}>
            <span className="mono num">{taskCounts.done}/{taskCounts.total} tasks</span>
            <span className="mono num">{SPRINT_META.hours_logged}/{SPRINT_META.hours_budget * 3}h</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

function BottomNav({ page, goto }) {
  const items = [
    { k: "dashboard", label: "Dashboard", icon: Ic.dashboard },
    { k: "market",    label: "Market",    icon: Ic.market },
    { k: "roles",     label: "Roles",     icon: Ic.roles },
  ];
  return (
    <nav className="bottom-nav">
      {items.map(it => (
        <button key={it.k} className={`bn-item ${page === it.k ? 'active' : ''}`} onClick={() => goto(it.k)}>
          <span className="bn-ic-wrap"><it.icon width="17" height="17"/></span>
          {it.label}
        </button>
      ))}
    </nav>
  );
}

function Topbar({ page }) {
  const labels = {
    dashboard: "Dashboard",
    market: "Market Analysis",
    roles: "Stress-Tested Roles",
  };
  return (
    <div className="topbar">
      <div className="crumb">Career Track <span style={{ color: '#D5D2C9', margin: '0 6px' }}>/</span> <b>{labels[page]}</b></div>
      <div className="spacer"></div>
      <span className="pill"><span className="dot"></span> Synced · Sheets</span>
      <span className="pill" style={{ background: 'transparent' }}>
        <span style={{ width: 22, height: 22, borderRadius: 999, background: 'linear-gradient(135deg, oklch(0.55 0.14 270), oklch(0.6 0.1 195))', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 10.5, fontWeight: 700 }}>AM</span>
        Amala
      </span>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("dashboard");
  const [tasks, setTasks] = useState(SEED_TASKS);
  const [targets] = useState(SEED_TARGETS);
  const [notes, setNotes] = useState(SEED_NOTES);
  const [market, setMarket] = useState(SEED_MARKET);
  const [roles, setRoles] = useState(SEED_ROLES);
  const [currentWeek, setCurrentWeek] = useState(1);
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };

  const addNote = (note) => {
    setNotes(prev => [note, ...prev]);
    showToast("Note saved · synced to Sheets");
  };

  const goto = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const taskCounts = {
    active: tasks.filter(t => t.status !== "done").length,
    done: tasks.filter(t => t.status === "done").length,
    total: tasks.length,
  };

  return (
    <div className="app">
      <Sidebar page={page} goto={goto} taskCounts={taskCounts}/>
      <div className="main">
        <Topbar page={page}/>
        <div className="page">
          {page === "dashboard" && (
            <DashboardPage
              tasks={tasks} setTasks={setTasks}
              targets={targets}
              notes={notes} addNote={addNote}
              market={market} roles={roles}
              goto={goto}
              currentWeek={currentWeek} setCurrentWeek={setCurrentWeek}
            />
          )}
          {page === "market" && <MarketPage market={market} setMarket={setMarket}/>}
          {page === "roles"  && <RolesPage  roles={roles}   setRoles={setRoles}/>}
        </div>
      </div>
      <BottomNav page={page} goto={goto}/>
      {toast && <div className="toast"><Ic.check width="14" height="14"/>{toast}</div>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
