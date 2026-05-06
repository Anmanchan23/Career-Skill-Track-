/* Market Analysis page */

function MarketThumb({ tag, category }) {
  // Distinct generative-feeling SVG per category (no figurative drawing)
  const glyphs = {
    "t-trend": (
      <svg viewBox="0 0 240 96" preserveAspectRatio="none">
        <path d="M0 70 Q 30 60 50 55 T 100 35 T 150 25 T 240 10" stroke="oklch(0.45 0.14 270)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M0 80 Q 30 75 50 65 T 100 50 T 150 45 T 240 35" stroke="oklch(0.45 0.14 270)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
        {[40, 80, 120, 160, 200].map((x, i) => (
          <circle key={i} cx={x} cy={70 - i * 10} r="3" fill="oklch(0.45 0.14 270)"/>
        ))}
      </svg>
    ),
    "t-salary": (
      <svg viewBox="0 0 240 96" preserveAspectRatio="none">
        {[20, 50, 80, 110, 140, 170, 200].map((x, i) => (
          <rect key={i} x={x} y={80 - (i * 7 + 15)} width="14" height={i * 7 + 15} fill="oklch(0.62 0.12 150)" opacity={0.3 + i * 0.1}/>
        ))}
      </svg>
    ),
    "t-hiring": (
      <svg viewBox="0 0 240 96" preserveAspectRatio="none">
        <circle cx="180" cy="48" r="36" stroke="oklch(0.7 0.13 70)" strokeWidth="2" fill="none" opacity="0.4"/>
        <circle cx="180" cy="48" r="22" stroke="oklch(0.7 0.13 70)" strokeWidth="2" fill="none" opacity="0.6"/>
        <circle cx="180" cy="48" r="9"  fill="oklch(0.7 0.13 70)"/>
        <path d="M30 70 L160 50" stroke="oklch(0.7 0.13 70)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "t-stack": (
      <svg viewBox="0 0 240 96" preserveAspectRatio="none">
        {[0, 1, 2, 3].map(i => (
          <rect key={i} x={50 + i * 12} y={20 + i * 4} width="120" height="56" rx="6" stroke="oklch(0.58 0.09 195)" strokeWidth="1.5" fill="none" opacity={0.3 + i * 0.15}/>
        ))}
      </svg>
    ),
    "t-strategy": (
      <svg viewBox="0 0 240 96" preserveAspectRatio="none">
        <path d="M20 70 Q 80 20 120 50 T 220 30" stroke="oklch(0.6 0.13 20)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="20" cy="70" r="4" fill="oklch(0.6 0.13 20)"/>
        <circle cx="220" cy="30" r="4" fill="oklch(0.6 0.13 20)"/>
        <path d="M120 50 L120 90" stroke="oklch(0.6 0.13 20)" strokeWidth="1" strokeDasharray="2 4" opacity="0.5"/>
      </svg>
    ),
  };

  return (
    <div className={`market-thumb ${tag}`}>
      <span className="pill">{category}</span>
      {glyphs[tag] || glyphs["t-trend"]}
    </div>
  );
}

function MarketCard({ item, onSave }) {
  return (
    <div className="market-card">
      <MarketThumb tag={item.tag} category={item.category}/>
      <div className="market-body">
        <div className="market-meta">
          <span className="src">{item.source}</span>
          <span style={{ color: '#D5D2C9' }}>·</span>
          <span className="mono">{new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
        </div>
        <div className="ttl">{item.title}</div>
        <div className="snip">{item.snippet}</div>
        <div className="foot">
          <a className="source-link" href={item.source_url} target="_blank" rel="noreferrer">Read source ↗</a>
          <button className={`save-btn ${item.saved ? 'saved' : ''}`} onClick={onSave} aria-label="Save">
            <Ic.bookmark width="14" height="14"/>
          </button>
        </div>
      </div>
    </div>
  );
}

function MarketPage({ market, setMarket }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const cats = useMemo(() => {
    const counts = {};
    market.forEach(m => { counts[m.category] = (counts[m.category] || 0) + 1; });
    return [{ label: "All", n: market.length }, ...Object.entries(counts).map(([label, n]) => ({ label, n }))];
  }, [market]);

  const filtered = market.filter(m => {
    if (filter !== "All" && m.category !== filter) return false;
    if (search && !(m.title + m.snippet + m.source).toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const toggleSave = (id) => {
    setMarket(prev => prev.map(m => m.id === id ? { ...m, saved: !m.saved } : m));
  };

  return (
    <div data-screen-label="02 Market Analysis">
      <div className="page-h">
        <div>
          <div className="eyebrow">Live signal feed · Updated 14 min ago</div>
          <h1>Current Market Analysis</h1>
          <div className="sub">Trends, comp data, and stack shifts shaping Indian D2C and indie publishing right now.</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn"><Ic.bookmark width="14" height="14"/> Saved · {market.filter(m => m.saved).length}</button>
          <button className="btn btn-primary"><Ic.plus width="14" height="14"/> Add Signal</button>
        </div>
      </div>

      <div className="filter-bar">
        <div className="filter-search">
          <Ic.search width="15" height="15"/>
          <input placeholder="Search signals, sources, keywords…" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
        {cats.map(c => (
          <button key={c.label} className={`chip ${filter === c.label ? 'active' : ''}`} onClick={() => setFilter(c.label)}>
            {c.label} <span className="count">{c.n}</span>
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 14 }}>
        {filtered.map(m => (
          <MarketCard key={m.id} item={m} onSave={() => toggleSave(m.id)}/>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ padding: 60, textAlign: 'center', color: 'var(--ink-3)', fontSize: 14, background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 12 }}>
          No signals match. Try a different filter or search term.
        </div>
      )}
    </div>
  );
}

window.MarketPage = MarketPage;
