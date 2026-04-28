
// Plattr — Interactive Tools (Design System v2)

const TOOL_LIST = [
  { id:"startup",   label:"Startup Cost",   icon:"🏗", desc:"Estimate your total capex" },
  { id:"breakeven", label:"Break-even",      icon:"📉", desc:"Covers needed per month" },
  { id:"menu",      label:"Menu Pricing",    icon:"📋", desc:"Price bands from food cost" },
  { id:"location",  label:"Location Score",  icon:"📍", desc:"Rate any shortlisted site" },
  { id:"kitchen",   label:"Kitchen Planner", icon:"👨‍🍳", desc:"Space and zone guide" },
];

const CAPEX_DATA = {
  "Mumbai":    { "Dine-in":{ base:35,perCover:1.8 }, "Cloud Kitchen":{ base:12,perCover:0 }, "QSR":{ base:18,perCover:0.6 }, "Café":{ base:22,perCover:0.9 } },
  "Bangalore": { "Dine-in":{ base:28,perCover:1.5 }, "Cloud Kitchen":{ base:10,perCover:0 }, "QSR":{ base:15,perCover:0.5 }, "Café":{ base:18,perCover:0.75 } },
};

function ToolsPage({ onNavigate }) {
  const [activeTool, setActiveTool] = React.useState("startup");
  return (
    <div style={{minHeight:"100vh",background:"var(--bg)",paddingTop:68}}>
      <div style={{background:"rgb(26,26,26)",padding:"60px 24px 52px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{fontFamily:"var(--font-body)",fontSize:"22.4px",fontWeight:600,letterSpacing:"1.792px",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"}}>Free Tools</div>
          <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(32px,4vw,54px)",fontWeight:700,color:"white",letterSpacing:"-1.5px",margin:"0 0 14px",lineHeight:1.1}}>Make smarter decisions<br/>before you commit.</h1>
          <p style={{fontFamily:"var(--font-body)",fontSize:"17px",color:"rgba(255,255,255,0.6)",maxWidth:500,margin:0,lineHeight:"28px"}}>Five browser-based calculators pre-loaded with Mumbai and Bangalore industry benchmarks.</p>
        </div>
      </div>

      <div style={{maxWidth:1100,margin:"0 auto",padding:"36px 24px",display:"grid",gridTemplateColumns:"220px 1fr",gap:"28px",alignItems:"start"}}>
        <aside style={{position:"sticky",top:"88px"}}>
          <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",overflow:"hidden",boxShadow:"var(--shadow-sm)"}}>
            {TOOL_LIST.map((t,i) => (
              <button key={t.id} onClick={()=>setActiveTool(t.id)} style={{
                display:"flex",alignItems:"center",gap:"12px",width:"100%",padding:"16px 18px",
                background:activeTool===t.id?"var(--accent-light)":"var(--surface)",
                border:"none",borderLeft:activeTool===t.id?"3px solid var(--accent)":"3px solid transparent",
                cursor:"pointer",textAlign:"left",transition:"all 0.15s",
                borderBottom:i<TOOL_LIST.length-1?"1px solid var(--border)":"none"
              }}>
                <span style={{fontSize:"22px"}}>{t.icon}</span>
                <div>
                  <div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:"15px",color:activeTool===t.id?"var(--accent)":"var(--text)"}}>{t.label}</div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)",marginTop:"2px"}}>{t.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </aside>
        <main>
          {activeTool==="startup"   && <StartupCostTool   onNavigate={onNavigate} />}
          {activeTool==="breakeven" && <BreakEvenTool      onNavigate={onNavigate} />}
          {activeTool==="menu"      && <MenuPricingTool    onNavigate={onNavigate} />}
          {activeTool==="location"  && <LocationScoreTool  onNavigate={onNavigate} />}
          {activeTool==="kitchen"   && <KitchenPlannerTool onNavigate={onNavigate} />}
        </main>
      </div>
    </div>
  );
}

// ——— Shared chrome ———
function ToolCard({ title, subtitle, children, result }) {
  return (
    <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",overflow:"hidden",boxShadow:"var(--shadow-sm)"}}>
      <div style={{padding:"32px 32px 0"}}>
        <h2 style={{fontFamily:"var(--font-display)",fontSize:"26px",fontWeight:700,color:"var(--text)",marginBottom:"8px",letterSpacing:"-0.5px"}}>{title}</h2>
        <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)",marginBottom:"28px",lineHeight:"24px"}}>{subtitle}</p>
        <hr style={{border:"none",borderTop:"1px solid var(--border)",margin:"0 -32px 28px"}} />
      </div>
      <div style={{padding:"0 32px 32px"}}>{children}</div>
      {result && <div style={{borderTop:"1px solid var(--border)",background:"var(--bg2)",padding:"28px 32px"}}>{result}</div>}
    </div>
  );
}

function FieldRow({ label, hint, children }) {
  return (
    <div style={{marginBottom:"22px"}}>
      <label style={{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"var(--text)",display:"block",marginBottom:"4px"}}>{label}</label>
      {hint && <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)",marginBottom:"8px"}}>{hint}</div>}
      {children}
    </div>
  );
}

const selectSty = { padding:"11px 14px",border:"1px solid var(--border)",borderRadius:"12px",fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text)",background:"white",outline:"none",width:"100%" };
const inputSty  = { padding:"11px 14px",border:"1px solid var(--border)",borderRadius:"12px",fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text)",background:"white",outline:"none",width:"100%",boxSizing:"border-box" };

function ResultBox({ label, value, sub, highlight }) {
  return (
    <div style={{background:highlight?"var(--accent)":"white",border:`1px solid ${highlight?"var(--accent)":"var(--border)"}`,borderRadius:"16px",padding:"20px",textAlign:"center",boxShadow:highlight?"0 4px 16px rgba(45,123,79,0.2)":"none"}}>
      <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:highlight?"rgba(255,255,255,0.8)":"var(--text3)",marginBottom:"6px",fontWeight:500}}>{label}</div>
      <div style={{fontFamily:"var(--font-display)",fontSize:"32px",fontWeight:700,color:highlight?"white":"var(--text)",letterSpacing:"-0.5px",lineHeight:1}}>{value}</div>
      {sub && <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:highlight?"rgba(255,255,255,0.7)":"var(--text3)",marginTop:"5px"}}>{sub}</div>}
    </div>
  );
}

function ToolCTA({ onNavigate }) {
  return (
    <div style={{marginTop:"20px",padding:"18px 20px",background:"var(--accent-light)",border:"1px solid rgba(45,123,79,0.15)",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"}}>
      <div>
        <div style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"14px",color:"var(--text)",marginBottom:"2px"}}>Want expert help interpreting these numbers?</div>
        <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text2)"}}>A consultant can pressure-test your assumptions before you commit.</div>
      </div>
      <button onClick={()=>onNavigate("directory")} style={{background:"var(--accent)",border:"none",borderRadius:"16px",padding:"10px 20px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:500,color:"white",whiteSpace:"nowrap",transition:"background 0.15s"}}
        onMouseEnter={e=>e.currentTarget.style.background="var(--accent-dark)"} onMouseLeave={e=>e.currentTarget.style.background="var(--accent)"}>Find a Consultant →</button>
    </div>
  );
}

function CalcBtn({ children, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{width:"100%",padding:"13px",background:"var(--accent)",border:"none",borderRadius:"16px",cursor:disabled?"not-allowed":"pointer",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:500,color:"white",marginTop:"8px",opacity:disabled?0.5:1,transition:"background 0.15s"}}
      onMouseEnter={e=>{if(!disabled)e.currentTarget.style.background="var(--accent-dark)"}}
      onMouseLeave={e=>e.currentTarget.style.background="var(--accent)"}>
      {children}
    </button>
  );
}

// ——— TOOL 1: Startup Cost ———
function StartupCostTool({ onNavigate }) {
  const [city,setCity]=React.useState("Mumbai"); const [format,setFormat]=React.useState("Dine-in"); const [covers,setCovers]=React.useState(40); const [computed,setComputed]=React.useState(null);
  const calculate = () => {
    const data=(CAPEX_DATA[city]||CAPEX_DATA["Mumbai"])[format]||CAPEX_DATA["Mumbai"]["Dine-in"];
    const extra=data.perCover*(format==="Dine-in"||format==="Café"?covers:0);
    const mid=data.base+extra; const low=Math.round(mid*0.85); const high=Math.round(mid*1.2);
    const bd={"Interior & Fitout":Math.round(mid*0.38),"Kitchen Equipment":Math.round(mid*0.28),"Licences & Deposits":Math.round(mid*0.12),"Technology (POS, etc.)":Math.round(mid*0.06),"Pre-opening Expenses":Math.round(mid*0.10),"Working Capital Buffer":Math.round(mid*0.06)};
    setComputed({low,high,bd});
  };
  return (
    <ToolCard title="Startup Cost Estimator" subtitle="Estimate your total capex range based on city, format, and size. Benchmarks from Mumbai and Bangalore projects (2024–2026)."
      result={computed && <>
        <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)",marginBottom:"12px",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:600}}>Estimated Total Capex</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginBottom:"20px"}}>
          <ResultBox label="Conservative" value={`₹${computed.low}L`} sub="Lower bound" />
          <ResultBox label="Realistic estimate" value={`₹${computed.high}L`} sub="Upper bound" highlight />
        </div>
        <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)",marginBottom:"10px",textTransform:"uppercase",letterSpacing:"0.08em",fontWeight:600}}>Typical breakdown</div>
        {Object.entries(computed.bd).map(([k,v])=>(
          <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"10px 14px",background:"white",borderRadius:"10px",border:"1px solid var(--border)",marginBottom:"8px"}}>
            <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)"}}>{k}</span>
            <span style={{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:600,color:"var(--text)"}}>₹{v}L</span>
          </div>
        ))}
        <div style={{background:"rgba(45,123,79,0.06)",borderRadius:"10px",padding:"12px 14px",fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text2)",lineHeight:"22px",marginTop:"10px",marginBottom:0}}>
          ⚠️ Indicative ranges based on {city} benchmarks. Get 3+ contractor quotes before committing.
        </div>
        <ToolCTA onNavigate={onNavigate} />
      </>}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
        <FieldRow label="City" hint="Benchmarks: Mumbai & Bangalore"><select style={selectSty} value={city} onChange={e=>setCity(e.target.value)}><option>Mumbai</option><option>Bangalore</option></select></FieldRow>
        <FieldRow label="Format"><select style={selectSty} value={format} onChange={e=>setFormat(e.target.value)}>{["Dine-in","Cloud Kitchen","QSR","Café"].map(f=><option key={f}>{f}</option>)}</select></FieldRow>
      </div>
      {(format==="Dine-in"||format==="Café")&&<FieldRow label="Seating capacity" hint="Number of covers (seats)"><input type="range" min={10} max={200} step={5} value={covers} onChange={e=>setCovers(+e.target.value)} style={{width:"100%",accentColor:"var(--accent)"}}/><div style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",marginTop:"6px",textAlign:"center"}}><strong>{covers}</strong> covers</div></FieldRow>}
      <CalcBtn onClick={calculate}>Calculate Estimate</CalcBtn>
    </ToolCard>
  );
}

// ——— TOOL 2: Break-even ———
function BreakEvenTool({ onNavigate }) {
  const [fixed,setFixed]=React.useState(3); const [ticket,setTicket]=React.useState(450); const [variable,setVariable]=React.useState(35); const [result,setResult]=React.useState(null);
  const calculate = () => {
    const contribution=ticket*(1-variable/100);
    if(contribution<=0){setResult({error:true});return;}
    const coversPerMonth=Math.ceil((fixed*100000)/contribution);
    setResult({coversPerMonth,coversPerDay:Math.ceil(coversPerMonth/26),revenueBreakeven:Math.round(fixed*100000/(1-variable/100)/100000*10)/10,contribution:Math.round(contribution)});
  };
  return (
    <ToolCard title="Break-even Estimator" subtitle="How many covers do you need each month before you stop losing money?"
      result={result&&!result.error&&<>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"14px",marginBottom:"16px"}}>
          <ResultBox label="Covers / month" value={result.coversPerMonth.toLocaleString()} sub="to break even" highlight />
          <ResultBox label="Covers / day" value={result.coversPerDay} sub="(26 trading days)" />
          <ResultBox label="Revenue needed" value={`₹${result.revenueBreakeven}L`} sub="per month" />
        </div>
        <div style={{background:"white",borderRadius:"12px",border:"1px solid var(--border)",padding:"16px",marginBottom:"16px"}}>
          <div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:"15px",color:"var(--text)",marginBottom:"6px"}}>Contribution margin per cover</div>
          <div style={{fontFamily:"var(--font-display)",fontSize:"28px",fontWeight:700,color:"var(--accent)"}}>₹{result.contribution}</div>
          <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)",marginTop:"4px"}}>= ₹{ticket} ticket × {100-variable}% retained after variable costs</div>
        </div>
        <ToolCTA onNavigate={onNavigate} />
      </>}>
      <FieldRow label="Monthly fixed costs (₹ lakhs)" hint="Rent, salaries, utilities — costs that don't change with covers"><input type="number" style={inputSty} value={fixed} onChange={e=>setFixed(+e.target.value)} min={0.5} step={0.5} /></FieldRow>
      <FieldRow label="Average ticket size (₹)" hint="Average spend per cover, per visit"><input type="number" style={inputSty} value={ticket} onChange={e=>setTicket(+e.target.value)} min={100} step={50} /></FieldRow>
      <FieldRow label="Variable cost %" hint="Food cost + direct labour as % of revenue. Benchmark: 28–40%"><input type="range" min={15} max={70} step={1} value={variable} onChange={e=>setVariable(+e.target.value)} style={{width:"100%",accentColor:"var(--accent)"}}/><div style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",marginTop:"6px",textAlign:"center"}}><strong>{variable}%</strong> <span style={{color:variable>40?"#C44A6E":"var(--text3)"}}>{variable>40?"— high, review COGS":variable<30?"— very lean":"— within typical range"}</span></div></FieldRow>
      <CalcBtn onClick={calculate}>Calculate Break-even</CalcBtn>
    </ToolCard>
  );
}

// ——— TOOL 3: Menu Pricing ———
function MenuPricingTool({ onNavigate }) {
  const [foodCost,setFoodCost]=React.useState(32); const [result,setResult]=React.useState(null);
  const calculate = () => {
    const mult=100/foodCost;
    const bands=[{dish:"Appetiser / starter",cost:80},{dish:"Main course",cost:180},{dish:"Dessert",cost:60},{dish:"Beverage (soft)",cost:20}].map(b=>({...b,price:Math.round(b.cost*mult/10)*10}));
    setResult({multiplier:Math.round(mult*10)/10,bands,gp:100-foodCost});
  };
  return (
    <ToolCard title="Menu Pricing Calculator" subtitle="Set your food cost percentage and get recommended price bands by dish category."
      result={result&&<>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginBottom:"20px"}}>
          <ResultBox label="Recommended multiplier" value={`${result.multiplier}×`} sub="on ingredient cost" highlight />
          <ResultBox label="Gross profit" value={`${result.gp}%`} sub="before labour & rent" />
        </div>
        {result.bands.map(b=>(
          <div key={b.dish} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 16px",background:"white",borderRadius:"12px",border:"1px solid var(--border)",marginBottom:"8px"}}>
            <div>
              <div style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text)",fontWeight:500}}>{b.dish}</div>
              <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>Ingredient cost: ₹{b.cost}</div>
            </div>
            <div style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,color:"var(--accent)"}}>₹{b.price}</div>
          </div>
        ))}
        <ToolCTA onNavigate={onNavigate} />
      </>}>
      <FieldRow label="Target food cost %" hint="Ingredient cost as % of menu price. Industry norm: 28–35% for restaurants, 20–28% for cafés"><input type="range" min={20} max={55} step={1} value={foodCost} onChange={e=>setFoodCost(+e.target.value)} style={{width:"100%",accentColor:"var(--accent)"}}/><div style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",marginTop:"6px",textAlign:"center"}}><strong>{foodCost}%</strong> food cost → <strong>{100-foodCost}%</strong> gross margin</div></FieldRow>
      <CalcBtn onClick={calculate}>Get Price Bands</CalcBtn>
    </ToolCard>
  );
}

// ——— TOOL 4: Location Scorecard ———
const LOCATION_FACTORS = [
  { id:"footfall",     label:"Footfall & visibility",        hint:"Street traffic, pedestrian count, visibility from road",                    weight:20 },
  { id:"rent",         label:"Rent-to-revenue ratio",         hint:"Is rent achievable at realistic revenue? (<10% is good)",                   weight:20 },
  { id:"competition",  label:"Competition density",           hint:"How saturated is the catchment?",                                           weight:15 },
  { id:"parking",      label:"Parking & accessibility",       hint:"Easy vehicle access, nearby parking",                                        weight:15 },
  { id:"demographics", label:"Target demographic match",      hint:"Does local population match your guest profile?",                            weight:15 },
  { id:"supply",       label:"Supplier access",               hint:"Distance from suppliers, delivery access",                                   weight:10 },
  { id:"lease",        label:"Lease terms & tenure",          hint:"Favourable rent escalation, minimum 3-year term",                           weight:5  },
];

function LocationScoreTool({ onNavigate }) {
  const [scores,setScores]=React.useState({}); const [result,setResult]=React.useState(null);
  const setScore=(id,val)=>setScores(s=>({...s,[id]:val}));
  const calculate=()=>{
    let total=0,max=0;
    const bd=LOCATION_FACTORS.map(f=>{const s=scores[f.id]||0;const w=(s/5)*f.weight;total+=w;max+=f.weight;return{...f,score:s};});
    const pct=Math.round((total/max)*100);
    const verdict=pct>=75?"Strong location — proceed with due diligence":pct>=55?"Decent — negotiate hard on rent and lease terms":"Weak — significant risks. Consider alternatives.";
    const color=pct>=75?"var(--accent)":pct>=55?"#D67729":"#C44A6E";
    setResult({pct,verdict,color,bd});
  };
  const allScored=LOCATION_FACTORS.every(f=>scores[f.id]);
  return (
    <ToolCard title="Location Evaluation Scorecard" subtitle="Rate a shortlisted location across 7 key factors, each weighted by its importance to long-term success."
      result={result&&<>
        <div style={{display:"flex",alignItems:"center",gap:"20px",marginBottom:"24px"}}>
          <div style={{width:80,height:80,borderRadius:"50%",border:`4px solid ${result.color}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <span style={{fontFamily:"var(--font-display)",fontSize:"26px",fontWeight:700,color:result.color}}>{result.pct}</span>
          </div>
          <div>
            <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"4px"}}>Location score</div>
            <div style={{fontFamily:"var(--font-display)",fontSize:"18px",fontWeight:700,color:result.color,lineHeight:1.3}}>{result.verdict}</div>
          </div>
        </div>
        {result.bd.map(f=>(
          <div key={f.id} style={{display:"grid",gridTemplateColumns:"1fr 60px 48px",alignItems:"center",gap:"10px",padding:"9px 12px",background:"white",borderRadius:"10px",border:"1px solid var(--border)",marginBottom:"8px"}}>
            <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text)"}}>{f.label}</span>
            <div style={{background:"var(--bg2)",borderRadius:"4px",height:"7px",overflow:"hidden"}}><div style={{width:`${f.score/5*100}%`,height:"100%",background:result.color,borderRadius:"4px"}} /></div>
            <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text2)",textAlign:"right"}}>{f.score}/5</span>
          </div>
        ))}
        <ToolCTA onNavigate={onNavigate} />
      </>}>
      {LOCATION_FACTORS.map(f=>(
        <div key={f.id} style={{marginBottom:"18px"}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:"4px"}}>
            <span style={{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"var(--text)"}}>{f.label} <span style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--accent)",fontWeight:400}}>({f.weight}%)</span></span>
            <span style={{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:600,color:"var(--text)"}}>{scores[f.id]||"—"}/5</span>
          </div>
          <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)",marginBottom:"8px"}}>{f.hint}</div>
          <div style={{display:"flex",gap:"8px"}}>
            {[1,2,3,4,5].map(n=>(
              <button key={n} onClick={()=>setScore(f.id,n)} style={{flex:1,padding:"8px 0",border:`1px solid ${scores[f.id]===n?"var(--accent)":"var(--border)"}`,borderRadius:"10px",background:scores[f.id]===n?"var(--accent-light)":"white",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:scores[f.id]===n?700:400,color:scores[f.id]===n?"var(--accent)":"var(--text2)",transition:"all 0.1s"}}>{n}</button>
            ))}
          </div>
        </div>
      ))}
      <CalcBtn onClick={calculate} disabled={!allScored}>{allScored?"Calculate Score":`Score all ${LOCATION_FACTORS.length} factors to continue`}</CalcBtn>
    </ToolCard>
  );
}

// ——— TOOL 5: Kitchen Planner ———
const KITCHEN_DATA = {
  "North Indian": { base:180,zones:{"Main cooking line":30,"Tandoor station":15,"Prep area":25,"Cold storage":15,"Dishwashing":10,"Dry storage":5} },
  "South Indian": { base:150,zones:{"Dosa/tawa station":25,"Curry line":20,"Prep area":25,"Cold storage":15,"Dishwashing":10,"Dry storage":5} },
  "Continental":  { base:200,zones:{"Hot line":30,"Pastry/cold section":20,"Prep area":22,"Cold storage":15,"Dishwashing":8,"Dry storage":5} },
  "Café / Bakery":{ base:120,zones:{"Espresso bar":20,"Bakery line":30,"Prep area":20,"Cold storage":15,"Dishwashing":10,"Dry storage":5} },
  "Multi-cuisine":{ base:220,zones:{"Main hot line":30,"Live station":15,"Prep area":25,"Cold storage":15,"Dishwashing":10,"Dry storage":5} },
};

function KitchenPlannerTool({ onNavigate }) {
  const [cuisine,setCuisine]=React.useState("North Indian"); const [covers,setCovers]=React.useState(50); const [result,setResult]=React.useState(null);
  const calculate=()=>{
    const d=KITCHEN_DATA[cuisine]; const total=Math.round(d.base+covers*1.2);
    const zones=Object.entries(d.zones).map(([n,p])=>({name:n,pct:p,sqft:Math.round(total*p/100)}));
    setResult({total,sqm:Math.round(total*0.093),zones});
  };
  return (
    <ToolCard title="Kitchen Area Planner" subtitle="Get a recommended kitchen size and zone breakdown based on cuisine type and seating."
      result={result&&<>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginBottom:"20px"}}>
          <ResultBox label="Recommended area" value={`${result.total} sqft`} sub={`≈ ${result.sqm} sqm`} highlight />
          <ResultBox label="Cuisine" value={cuisine.split(" ")[0]} sub={`for ${covers} covers`} />
        </div>
        {result.zones.map(z=>(
          <div key={z.name} style={{display:"grid",gridTemplateColumns:"1fr 60px 80px",alignItems:"center",gap:"10px",padding:"10px 14px",background:"white",borderRadius:"10px",border:"1px solid var(--border)",marginBottom:"8px"}}>
            <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text)"}}>{z.name}</span>
            <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)",textAlign:"right"}}>{z.pct}%</span>
            <span style={{fontFamily:"var(--font-display)",fontSize:"16px",fontWeight:700,color:"var(--accent)",textAlign:"right"}}>{z.sqft} sqft</span>
          </div>
        ))}
        <div style={{background:"rgba(45,123,79,0.06)",borderRadius:"10px",padding:"12px 14px",fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text2)",lineHeight:"22px",marginTop:"10px",marginBottom:0}}>
          💡 These are planning guidelines. A kitchen designer will adapt this to your actual space and FSSAI requirements.
        </div>
        <ToolCTA onNavigate={onNavigate} />
      </>}>
      <FieldRow label="Cuisine type"><select style={selectSty} value={cuisine} onChange={e=>setCuisine(e.target.value)}>{Object.keys(KITCHEN_DATA).map(c=><option key={c}>{c}</option>)}</select></FieldRow>
      <FieldRow label="Number of covers" hint="Seats you plan to fill simultaneously"><input type="range" min={10} max={150} step={5} value={covers} onChange={e=>setCovers(+e.target.value)} style={{width:"100%",accentColor:"var(--accent)"}}/><div style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",marginTop:"6px",textAlign:"center"}}><strong>{covers}</strong> covers</div></FieldRow>
      <CalcBtn onClick={calculate}>Generate Kitchen Plan</CalcBtn>
    </ToolCard>
  );
}

Object.assign(window, { ToolsPage });
