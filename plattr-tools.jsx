
// Plattr — Interactive Tools (5 calculators)

const TOOL_LIST = [
  { id:"startup", label:"Startup Cost", icon:"🏗", desc:"Estimate your total capex" },
  { id:"breakeven", label:"Break-even", icon:"📉", desc:"Covers needed per month" },
  { id:"menu", label:"Menu Pricing", icon:"📋", desc:"Price bands from food cost" },
  { id:"location", label:"Location Score", icon:"📍", desc:"Rate any shortlisted site" },
  { id:"kitchen", label:"Kitchen Planner", icon:"👨‍🍳", desc:"Space and zone guide" },
];

// Benchmark data (Mumbai & Bangalore)
const CAPEX_DATA = {
  "Mumbai": {
    "Dine-in":    { base: 35, perCover: 1.8 },  // lakhs
    "Cloud Kitchen": { base: 12, perCover: 0 },
    "QSR":        { base: 18, perCover: 0.6 },
    "Café":       { base: 22, perCover: 0.9 },
  },
  "Bangalore": {
    "Dine-in":    { base: 28, perCover: 1.5 },
    "Cloud Kitchen": { base: 10, perCover: 0 },
    "QSR":        { base: 15, perCover: 0.5 },
    "Café":       { base: 18, perCover: 0.75 },
  },
};

function ToolsPage({ onNavigate }) {
  const [activeTool, setActiveTool] = React.useState("startup");

  return (
    <div style={{minHeight:"100vh",background:"var(--bg)",paddingTop:64}}>
      {/* Header */}
      <div style={{background:"var(--text)",padding:"56px 24px 48px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"12px"}}>Free Tools</div>
          <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(32px,4vw,50px)",fontWeight:700,color:"white",letterSpacing:"-0.03em",margin:"0 0 14px",lineHeight:1.1}}>Make smarter decisions<br />before you commit.</h1>
          <p style={{fontFamily:"var(--font-body)",fontSize:"17px",color:"rgba(255,255,255,0.55)",maxWidth:520,margin:0,lineHeight:1.6}}>Five browser-based calculators pre-loaded with Mumbai and Bangalore industry benchmarks.</p>
        </div>
      </div>

      <div style={{maxWidth:1100,margin:"0 auto",padding:"32px 24px",display:"grid",gridTemplateColumns:"220px 1fr",gap:"28px",alignItems:"start"}}>
        {/* Tool nav */}
        <aside style={{position:"sticky",top:"88px"}}>
          <div style={{background:"white",border:"1px solid var(--border)",borderRadius:"14px",overflow:"hidden"}}>
            {TOOL_LIST.map(t => (
              <button key={t.id} onClick={()=>setActiveTool(t.id)} style={{
                display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"16px 18px",
                background:activeTool===t.id?"var(--accent-light)":"white",
                border:"none",borderLeft:activeTool===t.id?"3px solid var(--accent)":"3px solid transparent",
                cursor:"pointer",textAlign:"left",transition:"all 0.15s",
                borderBottom:"1px solid var(--bg2)"
              }}>
                <span style={{fontSize:"22px"}}>{t.icon}</span>
                <div>
                  <div style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"14px",color:activeTool===t.id?"var(--accent)":"var(--text)"}}>{t.label}</div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>{t.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Active tool */}
        <main>
          {activeTool === "startup"   && <StartupCostTool onNavigate={onNavigate} />}
          {activeTool === "breakeven" && <BreakEvenTool onNavigate={onNavigate} />}
          {activeTool === "menu"      && <MenuPricingTool onNavigate={onNavigate} />}
          {activeTool === "location"  && <LocationScoreTool onNavigate={onNavigate} />}
          {activeTool === "kitchen"   && <KitchenPlannerTool onNavigate={onNavigate} />}
        </main>
      </div>
    </div>
  );
}

// ——— Shared tool chrome ———
function ToolCard({ title, subtitle, children, result }) {
  return (
    <div style={{background:"white",border:"1px solid var(--border)",borderRadius:"16px",overflow:"hidden"}}>
      <div style={{padding:"28px 28px 0"}}>
        <h2 style={{fontFamily:"var(--font-display)",fontSize:"24px",fontWeight:700,color:"var(--text)",marginBottom:"6px",letterSpacing:"-0.02em"}}>{title}</h2>
        <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)",marginBottom:"28px",lineHeight:1.55}}>{subtitle}</p>
        <hr style={{border:"none",borderTop:"1px solid var(--bg2)",margin:"0 -28px 28px"}} />
      </div>
      <div style={{padding:"0 28px 28px"}}>{children}</div>
      {result && (
        <div style={{borderTop:"1px solid var(--border)",background:"var(--bg2)",padding:"28px"}}>
          {result}
        </div>
      )}
    </div>
  );
}

function FieldRow({ label, hint, children }) {
  return (
    <div style={{marginBottom:"20px"}}>
      <label style={{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"var(--text)",display:"block",marginBottom:"4px"}}>{label}</label>
      {hint && <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)",marginBottom:"8px"}}>{hint}</div>}
      {children}
    </div>
  );
}

const selectStyle = { padding:"10px 14px", border:"1px solid var(--border)", borderRadius:"9px", fontFamily:"var(--font-body)", fontSize:"15px", color:"var(--text)", background:"white", outline:"none", width:"100%" };
const inputNumStyle = { padding:"10px 14px", border:"1px solid var(--border)", borderRadius:"9px", fontFamily:"var(--font-body)", fontSize:"15px", color:"var(--text)", background:"white", outline:"none", width:"100%", boxSizing:"border-box" };

function ResultBox({ label, value, sub, highlight }) {
  return (
    <div style={{background:highlight?"var(--accent)":"white",border:`1px solid ${highlight?"var(--accent)":"var(--border)"}`,borderRadius:"12px",padding:"20px",textAlign:"center"}}>
      <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:highlight?"rgba(255,255,255,0.8)":"var(--text3)",marginBottom:"6px",fontWeight:500}}>{label}</div>
      <div style={{fontFamily:"var(--font-display)",fontSize:"28px",fontWeight:700,color:highlight?"white":"var(--text)",letterSpacing:"-0.02em",lineHeight:1}}>{value}</div>
      {sub && <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:highlight?"rgba(255,255,255,0.7)":"var(--text3)",marginTop:"4px"}}>{sub}</div>}
    </div>
  );
}

function ToolCTA({ onNavigate }) {
  return (
    <div style={{marginTop:"20px",padding:"16px 20px",background:"var(--accent-light)",border:"1px solid rgba(196,113,74,0.2)",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"}}>
      <div>
        <div style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"14px",color:"var(--text)",marginBottom:"2px"}}>Want expert help interpreting these numbers?</div>
        <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text2)"}}>A consultant can pressure-test your assumptions before you commit.</div>
      </div>
      <button onClick={()=>onNavigate("directory")} style={{background:"var(--accent)",border:"none",borderRadius:"9px",padding:"9px 18px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"white",whiteSpace:"nowrap"}}>Find a Consultant →</button>
    </div>
  );
}

// ——— TOOL 1: Startup Cost ———
function StartupCostTool({ onNavigate }) {
  const [city, setCity] = React.useState("Mumbai");
  const [format, setFormat] = React.useState("Dine-in");
  const [covers, setCovers] = React.useState(40);
  const [computed, setComputed] = React.useState(null);

  const calculate = () => {
    const data = CAPEX_DATA[city]?.[format] || CAPEX_DATA["Mumbai"]["Dine-in"];
    const base = data.base;
    const extra = data.perCover * (format === "Dine-in" || format === "Café" ? covers : 0);
    const low = Math.round((base + extra) * 0.85);
    const high = Math.round((base + extra) * 1.2);
    const breakdown = {
      "Interior & Fitout": Math.round((base + extra) * 0.38),
      "Kitchen Equipment": Math.round((base + extra) * 0.28),
      "Licences & Deposits": Math.round((base + extra) * 0.12),
      "Technology (POS, etc.)": Math.round((base + extra) * 0.06),
      "Pre-opening Expenses": Math.round((base + extra) * 0.10),
      "Working Capital Buffer": Math.round((base + extra) * 0.06),
    };
    setComputed({ low, high, breakdown });
  };

  return (
    <ToolCard title="Startup Cost Estimator" subtitle="Estimate your total capex range based on city, format, and size. Benchmarks sourced from Mumbai and Bangalore projects (2024–2026)."
      result={computed && (
        <div>
          <div style={{marginBottom:"20px"}}>
            <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)",marginBottom:"12px",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:600}}>Estimated Total Capex</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginBottom:"16px"}}>
              <ResultBox label="Conservative estimate" value={`₹${computed.low}L`} sub="Lower bound" />
              <ResultBox label="Realistic estimate" value={`₹${computed.high}L`} sub="Upper bound" highlight />
            </div>
          </div>
          <div style={{marginBottom:"20px"}}>
            <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)",marginBottom:"12px",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:600}}>Typical breakdown</div>
            <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
              {Object.entries(computed.breakdown).map(([k,v]) => (
                <div key={k} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 14px",background:"white",borderRadius:"8px",border:"1px solid var(--border)"}}>
                  <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)"}}>{k}</span>
                  <span style={{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:600,color:"var(--text)"}}>₹{v}L</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{background:"rgba(196,113,74,0.08)",borderRadius:"8px",padding:"12px 14px",fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text2)",lineHeight:1.55}}>
            ⚠️ These are indicative ranges based on {city} benchmarks. Actual costs vary by location within the city, vendor selection, and fitout complexity. Always get 3+ contractor quotes.
          </div>
          <ToolCTA onNavigate={onNavigate} />
        </div>
      )}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
        <FieldRow label="City" hint="Benchmarks available for Mumbai & Bangalore">
          <select style={selectStyle} value={city} onChange={e=>setCity(e.target.value)}>
            <option>Mumbai</option>
            <option>Bangalore</option>
          </select>
        </FieldRow>
        <FieldRow label="Format">
          <select style={selectStyle} value={format} onChange={e=>setFormat(e.target.value)}>
            {["Dine-in","Cloud Kitchen","QSR","Café"].map(f=><option key={f}>{f}</option>)}
          </select>
        </FieldRow>
      </div>
      {(format === "Dine-in" || format === "Café") && (
        <FieldRow label="Seating capacity" hint="Number of covers (seats)">
          <input type="range" min={10} max={200} step={5} value={covers} onChange={e=>setCovers(+e.target.value)} style={{width:"100%",accentColor:"var(--accent)"}} />
          <div style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",marginTop:"6px",textAlign:"center"}}><strong>{covers}</strong> covers</div>
        </FieldRow>
      )}
      <button onClick={calculate} style={{width:"100%",padding:"13px",background:"var(--accent)",border:"none",borderRadius:"10px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:600,color:"white",marginTop:"8px"}}>Calculate Estimate</button>
    </ToolCard>
  );
}

// ——— TOOL 2: Break-even ———
function BreakEvenTool({ onNavigate }) {
  const [fixed, setFixed] = React.useState(3);
  const [ticket, setTicket] = React.useState(450);
  const [variable, setVariable] = React.useState(35);
  const [result, setResult] = React.useState(null);

  const calculate = () => {
    const contribution = ticket * (1 - variable / 100);
    if (contribution <= 0) { setResult({ error: true }); return; }
    const coversPerMonth = Math.ceil((fixed * 100000) / contribution);
    const coversPerDay = Math.ceil(coversPerMonth / 26);
    const revenueBreakeven = fixed * 100000 / (1 - variable / 100);
    setResult({ coversPerMonth, coversPerDay, revenueBreakeven: Math.round(revenueBreakeven / 100000 * 10) / 10, contribution: Math.round(contribution) });
  };

  return (
    <ToolCard title="Break-even Estimator" subtitle="How many covers do you need to serve each month before you stop losing money? Inputs are fixed costs, average ticket, and variable cost percentage."
      result={result && !result.error && (
        <div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"14px",marginBottom:"16px"}}>
            <ResultBox label="Covers / month" value={result.coversPerMonth.toLocaleString()} sub="to break even" highlight />
            <ResultBox label="Covers / day" value={result.coversPerDay} sub="(26 trading days)" />
            <ResultBox label="Revenue needed" value={`₹${result.revenueBreakeven}L`} sub="per month" />
          </div>
          <div style={{background:"white",borderRadius:"10px",border:"1px solid var(--border)",padding:"16px",marginBottom:"16px"}}>
            <div style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"14px",color:"var(--text)",marginBottom:"8px"}}>Contribution margin per cover</div>
            <div style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,color:"var(--accent)"}}>₹{result.contribution}</div>
            <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)",marginTop:"4px"}}>= ₹{ticket} ticket × {100-variable}% retained after variable costs</div>
          </div>
          <ToolCTA onNavigate={onNavigate} />
        </div>
      )}>
      <FieldRow label="Monthly fixed costs (₹ lakhs)" hint="Rent, salaries, utilities, licenses — costs that don't change with covers">
        <input type="number" style={inputNumStyle} value={fixed} onChange={e=>setFixed(+e.target.value)} min={0.5} step={0.5} />
      </FieldRow>
      <FieldRow label="Average ticket size (₹)" hint="Average spend per cover, per visit">
        <input type="number" style={inputNumStyle} value={ticket} onChange={e=>setTicket(+e.target.value)} min={100} step={50} />
      </FieldRow>
      <FieldRow label="Variable cost %" hint="Food cost + direct labour + packaging as % of revenue. Industry benchmark: 28–40%">
        <input type="range" min={15} max={70} step={1} value={variable} onChange={e=>setVariable(+e.target.value)} style={{width:"100%",accentColor:"var(--accent)"}} />
        <div style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",marginTop:"6px",textAlign:"center"}}><strong>{variable}%</strong> <span style={{color:variable>40?"#C44A6E":"var(--text3)"}}>{variable>40?"— high, review COGS":variable<30?"— very lean":"— within typical range"}</span></div>
      </FieldRow>
      <button onClick={calculate} style={{width:"100%",padding:"13px",background:"var(--accent)",border:"none",borderRadius:"10px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:600,color:"white",marginTop:"8px"}}>Calculate Break-even</button>
    </ToolCard>
  );
}

// ——— TOOL 3: Menu Pricing ———
function MenuPricingTool({ onNavigate }) {
  const [foodCost, setFoodCost] = React.useState(32);
  const [margin, setMargin] = React.useState(65);
  const [result, setResult] = React.useState(null);

  const calculate = () => {
    const multiplier = 100 / foodCost;
    const bands = [
      { dish:"Appetiser / starter", cost: 80, price: Math.round(80 * multiplier / 10) * 10 },
      { dish:"Main course", cost: 180, price: Math.round(180 * multiplier / 10) * 10 },
      { dish:"Dessert", cost: 60, price: Math.round(60 * multiplier / 10) * 10 },
      { dish:"Beverage (soft)", cost: 20, price: Math.round(20 * multiplier / 10) * 10 },
    ];
    setResult({ multiplier: Math.round(multiplier * 10) / 10, bands, gp: 100 - foodCost });
  };

  return (
    <ToolCard title="Menu Pricing Calculator" subtitle="Set your food cost percentage and target margin — get recommended price bands for each dish category based on industry benchmarks."
      result={result && (
        <div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginBottom:"20px"}}>
            <ResultBox label="Recommended multiplier" value={`${result.multiplier}×`} sub="on ingredient cost" highlight />
            <ResultBox label="Gross profit per cover" value={`${result.gp}%`} sub="before labour & rent" />
          </div>
          <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)",marginBottom:"10px",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:600}}>Indicative price bands</div>
          <div style={{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"16px"}}>
            {result.bands.map(b=>(
              <div key={b.dish} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 16px",background:"white",borderRadius:"8px",border:"1px solid var(--border)"}}>
                <div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text)",fontWeight:500}}>{b.dish}</div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>Ingredient cost: ₹{b.cost}</div>
                </div>
                <div style={{fontFamily:"var(--font-display)",fontSize:"20px",fontWeight:700,color:"var(--accent)"}}>₹{b.price}</div>
              </div>
            ))}
          </div>
          <ToolCTA onNavigate={onNavigate} />
        </div>
      )}>
      <FieldRow label="Target food cost %" hint="Ingredient cost as % of menu price. Industry norm: 28–35% for restaurants, 20–28% for cafés">
        <input type="range" min={20} max={55} step={1} value={foodCost} onChange={e=>setFoodCost(+e.target.value)} style={{width:"100%",accentColor:"var(--accent)"}} />
        <div style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",marginTop:"6px",textAlign:"center"}}><strong>{foodCost}%</strong> food cost</div>
      </FieldRow>
      <FieldRow label="Target gross margin %" hint="This is auto-calculated from your food cost % above">
        <div style={{padding:"12px 16px",background:"var(--bg2)",borderRadius:"9px",fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)"}}>
          <strong style={{color:"var(--text)"}}>{100 - foodCost}%</strong> gross margin
        </div>
      </FieldRow>
      <button onClick={calculate} style={{width:"100%",padding:"13px",background:"var(--accent)",border:"none",borderRadius:"10px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:600,color:"white",marginTop:"8px"}}>Get Price Bands</button>
    </ToolCard>
  );
}

// ——— TOOL 4: Location Scorecard ———
const LOCATION_FACTORS = [
  { id:"footfall", label:"Footfall & visibility", hint:"Street traffic, pedestrian count, visibility from road", weight:20 },
  { id:"rent", label:"Rent-to-revenue ratio", hint:"Is the rent achievable at realistic revenue? (<10% is good)", weight:20 },
  { id:"competition", label:"Competition density", hint:"How saturated is the catchment? Fewer competitors = higher score", weight:15 },
  { id:"parking", label:"Parking & accessibility", hint:"Easy vehicle access, nearby parking", weight:15 },
  { id:"demographics", label:"Target demographic match", hint:"Does the local population match your guest profile?", weight:15 },
  { id:"supply", label:"Supplier access", hint:"Distance from suppliers, delivery access", weight:10 },
  { id:"lease", label:"Lease terms & tenure", hint:"Favourable rent escalation, minimum 3-year term", weight:5 },
];

function LocationScoreTool({ onNavigate }) {
  const [scores, setScores] = React.useState({});
  const [result, setResult] = React.useState(null);

  const setScore = (id, val) => setScores(s => ({ ...s, [id]: val }));

  const calculate = () => {
    let total = 0, maxPossible = 0;
    const breakdown = LOCATION_FACTORS.map(f => {
      const s = scores[f.id] || 0;
      const weighted = (s / 5) * f.weight;
      total += weighted;
      maxPossible += f.weight;
      return { ...f, score: s, weighted: Math.round(weighted * 10) / 10 };
    });
    const pct = Math.round((total / maxPossible) * 100);
    const verdict = pct >= 75 ? "Strong location — proceed with due diligence" : pct >= 55 ? "Decent — negotiate hard on rent and lease terms" : "Weak — significant risks. Consider alternatives.";
    const color = pct >= 75 ? "#4A9C6A" : pct >= 55 ? "#C4A84A" : "#C44A6E";
    setResult({ pct, verdict, color, breakdown });
  };

  const allScored = LOCATION_FACTORS.every(f => scores[f.id]);

  return (
    <ToolCard title="Location Evaluation Scorecard" subtitle="Rate a shortlisted location across 7 key factors. Each factor is weighted by its importance to long-term success."
      result={result && (
        <div>
          <div style={{display:"flex",alignItems:"center",gap:"20px",marginBottom:"24px"}}>
            <div style={{width:80,height:80,borderRadius:"50%",border:`4px solid ${result.color}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <span style={{fontFamily:"var(--font-display)",fontSize:"24px",fontWeight:700,color:result.color}}>{result.pct}</span>
            </div>
            <div>
              <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)",marginBottom:"4px",fontWeight:500}}>Location score</div>
              <div style={{fontFamily:"var(--font-display)",fontSize:"18px",fontWeight:700,color:result.color,lineHeight:1.3}}>{result.verdict}</div>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"16px"}}>
            {result.breakdown.map(f=>(
              <div key={f.id} style={{display:"grid",gridTemplateColumns:"1fr 60px 48px",alignItems:"center",gap:"10px",padding:"8px 12px",background:"white",borderRadius:"8px",border:"1px solid var(--border)"}}>
                <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text)"}}>{f.label}</span>
                <div style={{background:"var(--bg2)",borderRadius:"4px",height:"8px",overflow:"hidden"}}><div style={{width:`${f.score/5*100}%`,height:"100%",background:result.color,borderRadius:"4px"}} /></div>
                <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text2)",textAlign:"right"}}>{f.score}/5</span>
              </div>
            ))}
          </div>
          <ToolCTA onNavigate={onNavigate} />
        </div>
      )}>
      <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
        {LOCATION_FACTORS.map(f => (
          <div key={f.id}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"4px"}}>
              <div>
                <span style={{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"var(--text)"}}>{f.label}</span>
                <span style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--accent)",marginLeft:"8px"}}>weight: {f.weight}%</span>
              </div>
              <span style={{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:600,color:"var(--text)"}}>{scores[f.id] || "—"}/5</span>
            </div>
            <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)",marginBottom:"8px"}}>{f.hint}</div>
            <div style={{display:"flex",gap:"8px"}}>
              {[1,2,3,4,5].map(n=>(
                <button key={n} onClick={()=>setScore(f.id,n)} style={{
                  flex:1,padding:"8px 0",border:`1px solid ${scores[f.id]===n?"var(--accent)":"var(--border)"}`,borderRadius:"8px",
                  background:scores[f.id]===n?"var(--accent-light)":"white",cursor:"pointer",
                  fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:scores[f.id]===n?700:400,
                  color:scores[f.id]===n?"var(--accent)":"var(--text2)",transition:"all 0.1s"
                }}>{n}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={calculate} disabled={!allScored} style={{width:"100%",padding:"13px",background:"var(--accent)",border:"none",borderRadius:"10px",cursor:allScored?"pointer":"not-allowed",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:600,color:"white",marginTop:"20px",opacity:allScored?1:0.5}}>
        {allScored ? "Calculate Score" : `Score all ${LOCATION_FACTORS.length} factors to continue`}
      </button>
    </ToolCard>
  );
}

// ——— TOOL 5: Kitchen Planner ———
const KITCHEN_DATA = {
  "North Indian": { base: 180, zoneBreakdown: { "Main cooking line": 30, "Tandoor station": 15, "Prep area": 25, "Cold storage": 15, "Dishwashing": 10, "Dry storage": 5 } },
  "South Indian": { base: 150, zoneBreakdown: { "Dosa/tawa station": 25, "Curry line": 20, "Prep area": 25, "Cold storage": 15, "Dishwashing": 10, "Dry storage": 5 } },
  "Continental": { base: 200, zoneBreakdown: { "Hot line": 30, "Pastry/cold section": 20, "Prep area": 22, "Cold storage": 15, "Dishwashing": 8, "Dry storage": 5 } },
  "Café / Bakery": { base: 120, zoneBreakdown: { "Espresso bar": 20, "Bakery line": 30, "Prep area": 20, "Cold storage": 15, "Dishwashing": 10, "Dry storage": 5 } },
  "Multi-cuisine": { base: 220, zoneBreakdown: { "Main hot line": 30, "Live station": 15, "Prep area": 25, "Cold storage": 15, "Dishwashing": 10, "Dry storage": 5 } },
};

function KitchenPlannerTool({ onNavigate }) {
  const [cuisine, setCuisine] = React.useState("North Indian");
  const [covers, setCovers] = React.useState(50);
  const [result, setResult] = React.useState(null);

  const calculate = () => {
    const data = KITCHEN_DATA[cuisine];
    const totalSqft = Math.round(data.base + covers * 1.2);
    const zones = Object.entries(data.zoneBreakdown).map(([name, pct]) => ({
      name, pct, sqft: Math.round(totalSqft * pct / 100)
    }));
    setResult({ totalSqft, zones, totalSqm: Math.round(totalSqft * 0.093) });
  };

  return (
    <ToolCard title="Kitchen Area Planner" subtitle="Get a recommended kitchen size and zone breakdown based on your cuisine type and number of covers."
      result={result && (
        <div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginBottom:"20px"}}>
            <ResultBox label="Recommended kitchen area" value={`${result.totalSqft} sqft`} sub={`≈ ${result.totalSqm} sqm`} highlight />
            <ResultBox label="Cuisine type" value={cuisine.split(" ")[0]} sub={`for ${covers} covers`} />
          </div>
          <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)",marginBottom:"10px",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:600}}>Zone breakdown</div>
          <div style={{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"16px"}}>
            {result.zones.map(z=>(
              <div key={z.name} style={{display:"grid",gridTemplateColumns:"1fr 60px 80px",alignItems:"center",gap:"10px",padding:"10px 14px",background:"white",borderRadius:"8px",border:"1px solid var(--border)"}}>
                <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text)"}}>{z.name}</span>
                <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)",textAlign:"right"}}>{z.pct}%</span>
                <span style={{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:600,color:"var(--accent)",textAlign:"right"}}>{z.sqft} sqft</span>
              </div>
            ))}
          </div>
          <div style={{background:"rgba(196,113,74,0.08)",borderRadius:"8px",padding:"12px 14px",fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text2)",lineHeight:1.55,marginBottom:"16px"}}>
            💡 These are planning guidelines. A kitchen designer will adapt this to your actual space, FSSAI compliance requirements, and utility constraints.
          </div>
          <ToolCTA onNavigate={onNavigate} />
        </div>
      )}>
      <FieldRow label="Cuisine type">
        <select style={selectStyle} value={cuisine} onChange={e=>setCuisine(e.target.value)}>
          {Object.keys(KITCHEN_DATA).map(c=><option key={c}>{c}</option>)}
        </select>
      </FieldRow>
      <FieldRow label="Number of covers (seats)" hint="How many guests you plan to seat simultaneously">
        <input type="range" min={10} max={150} step={5} value={covers} onChange={e=>setCovers(+e.target.value)} style={{width:"100%",accentColor:"var(--accent)"}} />
        <div style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",marginTop:"6px",textAlign:"center"}}><strong>{covers}</strong> covers</div>
      </FieldRow>
      <button onClick={calculate} style={{width:"100%",padding:"13px",background:"var(--accent)",border:"none",borderRadius:"10px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:600,color:"white",marginTop:"8px"}}>Generate Kitchen Plan</button>
    </ToolCard>
  );
}

Object.assign(window, { ToolsPage });
