/* Stress-Tested Roles page */

function Stars({ value, onChange }) {
  const [hover, setHover] = useState(0);
  const display = hover || value;
  return (
    <div className="stars" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map(n => (
        <span key={n} className={`star ${n <= display ? 'filled' : ''}`}
              onMouseEnter={() => setHover(n)} onClick={() => onChange(n)}>
          {Ic.star(n <= display, { width: 18, height: 18 })}
        </span>
      ))}
    </div>
  );
}

function SkillRow({ skill }) {
  const masteryLabel = skill.mastery >= 80 ? "Strong" : skill.mastery >= 60 ? "Solid" : skill.mastery >= 40 ? "Building" : "Gap";
  const weightCls = skill.weight === "Must" ? { background: 'var(--ink)', color: '#fff', border: 'none' }
                  : skill.weight === "Should" ? { background: 'var(--bg-tint)', color: 'var(--ink-2)' }
                  : { background: 'transparent', color: 'var(--ink-3)' };
  return (
    <div className="skill">
      <div style={{ width: 18, display: 'grid', placeItems: 'center' }}>
        <Checkbox status={skill.mastery >= 75 ? "done" : skill.mastery >= 40 ? "in_progress" : "todo"} onClick={() => {}}/>
      </div>
      <div>
        <div className="name">{skill.name}</div>
        <div className="meta">
          <span className="tag" style={{ ...weightCls, padding: '1px 7px', fontSize: 10, marginRight: 6 }}>{skill.weight}</span>
          {masteryLabel} · {skill.mastery}% mastery
        </div>
      </div>
      <div className="skill-meter">
        <i style={{ width: skill.mastery + '%', background: skill.mastery >= 75 ? 'var(--green)' : skill.mastery >= 40 ? 'var(--ink)' : 'var(--amber)' }}></i>
      </div>
    </div>
  );
}

function RoleCard({ role, onConfidence }) {
  const fitColor = role.fit_score >= 85 ? 'var(--green)' : role.fit_score >= 75 ? 'var(--ink)' : 'var(--amber)';
  const overall = Math.round(role.skills.reduce((s, sk) => s + sk.mastery, 0) / role.skills.length);
  return (
    <div className="role-card">
      <div className="role-head">
        <div>
          <div className="org">{role.company} · {role.location}</div>
          <div className="ttl">{role.title}</div>
          <div className="tags">
            <span className="tag">{role.comp_range}</span>
            <span className="tag">{role.status}</span>
            <span className="tag mono" style={{ fontSize: 10.5 }}>{role.id}</span>
          </div>
        </div>
        <div className="role-fit">
          <div className="lbl">Fit Score</div>
          <div className="val" style={{ color: fitColor }}>{role.fit_score}<small>%</small></div>
          <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 2 }}>Skills avg {overall}%</div>
        </div>
      </div>

      <div className="role-body">
        <div className="role-grid">
          <div>
            <div className="role-section-h">Skill Gap Checklist</div>
            <div>
              {role.skills.map((s, i) => <SkillRow key={i} skill={s}/>)}
            </div>
            <div style={{ marginTop: 14, padding: 12, background: 'var(--bg)', border: '1px solid var(--line-soft)', borderRadius: 8 }}>
              <div style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: 4 }}>Why this fits</div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.55 }}>{role.why_fit}</div>
            </div>
          </div>

          <div>
            <div className="role-section-h">Confidence Rating</div>
            <div className="conf-block">
              <div className="conf-row">
                <span className="conf-label">How comfortable do I feel?</span>
                <span className="mono num" style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{role.confidence}/5</span>
              </div>
              <Stars value={role.confidence} onChange={(v) => onConfidence(role.id, v)}/>
              <input
                type="range" min="0" max="100" value={role.confidence * 20}
                className="conf-slider"
                onChange={(e) => onConfidence(role.id, Math.max(1, Math.round(e.target.value / 20)))}
              />
              <div className="conf-cap">
                {role.confidence >= 4 ? "Apply this week — confidence is real." :
                 role.confidence === 3 ? "Tailor carefully. One specific reference point will close the gap." :
                 "Watch and prep. Don't apply until skills meter rises."}
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <div className="role-section-h">Next Step</div>
              <div style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.5 }}>{role.next_step}</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
                <button className="btn btn-sm btn-accent"><Ic.check width="13" height="13"/> Apply</button>
                <button className="btn btn-sm">Tailor cover</button>
                <button className="btn btn-sm btn-ghost">Snooze</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RolesPage({ roles, setRoles }) {
  const [sort, setSort] = useState("fit");

  const sorted = useMemo(() => {
    const a = [...roles];
    if (sort === "fit")        a.sort((x, y) => y.fit_score - x.fit_score);
    if (sort === "confidence") a.sort((x, y) => y.confidence - x.confidence);
    if (sort === "recent")     a.sort((x, y) => y.posted_date.localeCompare(x.posted_date));
    return a;
  }, [roles, sort]);

  const setConfidence = (id, value) => {
    setRoles(prev => prev.map(r => r.id === id ? { ...r, confidence: value } : r));
  };

  const avgFit = Math.round(roles.reduce((s, r) => s + r.fit_score, 0) / roles.length);
  const avgConf = (roles.reduce((s, r) => s + r.confidence, 0) / roles.length).toFixed(1);

  return (
    <div data-screen-label="03 Stress-Tested Roles">
      <div className="page-h">
        <div>
          <div className="eyebrow">5 roles · stress-tested against the positioning</div>
          <h1>Stress-Tested Roles</h1>
          <div className="sub">Each role is mapped against required skills, current mastery, and how comfortable I'd feel walking into the interview today.</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn"><Ic.filter width="14" height="14"/> Filter</button>
          <button className="btn btn-primary"><Ic.plus width="14" height="14"/> Add Role</button>
        </div>
      </div>

      <div className="stats" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="stat">
          <div className="lbl">Average fit</div>
          <div className="val">{avgFit}<span style={{ fontSize: 14, color: 'var(--ink-3)', fontWeight: 500 }}>%</span></div>
          <div className="delta up">↑ Up from 71% in v1</div>
        </div>
        <div className="stat">
          <div className="lbl">Average confidence</div>
          <div className="val">{avgConf}<span style={{ fontSize: 14, color: 'var(--ink-3)', fontWeight: 500 }}> / 5</span></div>
          <div className="delta">Sharper position closed gaps</div>
        </div>
        <div className="stat">
          <div className="lbl">Roles ready to apply</div>
          <div className="val">{roles.filter(r => r.confidence >= 4).length}<span style={{ fontSize: 14, color: 'var(--ink-3)', fontWeight: 500 }}> / {roles.length}</span></div>
          <div className="delta">Confidence ≥ 4</div>
        </div>
      </div>

      <div className="filter-bar">
        <span style={{ fontSize: 12, color: 'var(--ink-3)', marginRight: 4 }}>Sort by</span>
        <button className={`chip ${sort === 'fit' ? 'active' : ''}`} onClick={() => setSort("fit")}>Fit score</button>
        <button className={`chip ${sort === 'confidence' ? 'active' : ''}`} onClick={() => setSort("confidence")}>Confidence</button>
        <button className={`chip ${sort === 'recent' ? 'active' : ''}`} onClick={() => setSort("recent")}>Recently posted</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {sorted.map(r => (
          <RoleCard key={r.id} role={r} onConfidence={setConfidence}/>
        ))}
      </div>
    </div>
  );
}

window.RolesPage = RolesPage;
