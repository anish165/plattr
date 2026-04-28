
// Plattr — Consultant Directory + Profile Pages (Design System v2)

function DirectoryPage({ onViewConsultant, initialFilter }) {
  const [search, setSearch] = React.useState("");
  const [selCats, setSelCats] = React.useState(initialFilter ? [initialFilter] : []);
  const [selCity, setSelCity] = React.useState("");
  const [selType, setSelType] = React.useState("");

  const toggleCat = (c) => setSelCats(prev => prev.includes(c) ? prev.filter(x=>x!==c) : [...prev, c]);

  const filtered = CONSULTANTS.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = !q || c.name.toLowerCase().includes(q) || c.bio.toLowerCase().includes(q) || c.tags.some(t=>t.toLowerCase().includes(q)) || c.expertise.toLowerCase().includes(q);
    const matchCat = selCats.length===0 || selCats.some(s=>c.tags.some(t=>t.toLowerCase().includes(s.toLowerCase()))||c.expertise.toLowerCase().includes(s.toLowerCase()));
    const matchCity = !selCity || c.city===selCity;
    const matchType = !selType || c.projectTypes.includes(selType);
    return matchSearch && matchCat && matchCity && matchType;
  });

  const clearAll = () => { setSearch(""); setSelCats([]); setSelCity(""); setSelType(""); };
  const selectSty = { width:"100%",padding:"9px 12px",border:"1px solid var(--border)",borderRadius:"10px",fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",background:"white",outline:"none" };

  return (
    <div style={{minHeight:"100vh",background:"var(--bg)",paddingTop:68}}>
      {/* Header */}
      <div style={{background:"rgb(26,26,26)",padding:"60px 24px 52px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{fontFamily:"var(--font-body)",fontSize:"22.4px",fontWeight:600,letterSpacing:"1.792px",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"}}>Consultant Directory</div>
          <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(36px,4vw,56px)",fontWeight:700,color:"white",letterSpacing:"-1.5px",margin:"0 0 18px",lineHeight:1.1}}>Find your hospitality expert.</h1>
          <p style={{fontFamily:"var(--font-body)",fontSize:"17px",color:"rgba(255,255,255,0.6)",margin:"0 0 36px",maxWidth:520,lineHeight:"28px"}}>Browse {CONSULTANTS.length} vetted consultants across India. Filter by expertise, city, and project type.</p>
          {/* Search */}
          <div style={{position:"relative",maxWidth:560,background:"white",borderRadius:"24px",boxShadow:"var(--shadow-search)",display:"flex",alignItems:"center",padding:"6px 6px 6px 20px"}}>
            <svg style={{flexShrink:0,opacity:0.4}} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by name, expertise, or keyword…"
              style={{flex:1,border:"none",outline:"none",fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text)",padding:"8px 12px",background:"transparent"}} />
            <button onClick={()=>{}} style={{background:"var(--accent)",border:"none",borderRadius:"16px",padding:"10px 22px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"white",whiteSpace:"nowrap",flexShrink:0}}>Search</button>
          </div>
          {/* Popular filters */}
          <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"18px"}}>
            {CATEGORIES.slice(0,5).map(c=>(
              <button key={c} onClick={()=>toggleCat(c)} style={{background:selCats.includes(c)?"var(--accent-light)":"rgba(255,255,255,0.1)",border:`1px solid ${selCats.includes(c)?"var(--accent)":"rgba(255,255,255,0.2)"}`,borderRadius:"9999px",padding:"6px 16px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:500,color:selCats.includes(c)?"var(--accent)":"rgba(255,255,255,0.7)",transition:"all 0.15s"}}>{c}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:1200,margin:"0 auto",padding:"32px 24px",display:"grid",gridTemplateColumns:"260px 1fr",gap:"28px",alignItems:"start"}}>
        {/* Sidebar */}
        <aside style={{position:"sticky",top:"88px"}}>
          <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",padding:"24px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
              <span style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:"16px",color:"var(--text)"}}>Filters</span>
              {(selCats.length||selCity||selType) ? <button onClick={clearAll} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--accent)"}}>Clear all</button> : null}
            </div>
            <FilterSection title="Expertise">
              {CATEGORIES.map(c => (
                <label key={c} style={{display:"flex",alignItems:"center",gap:"8px",padding:"5px 0",cursor:"pointer"}}>
                  <input type="checkbox" checked={selCats.includes(c)} onChange={()=>toggleCat(c)} style={{accentColor:"var(--accent)",width:15,height:15,cursor:"pointer"}} />
                  <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)"}}>{c}</span>
                </label>
              ))}
            </FilterSection>
            <FilterSection title="City">
              <select value={selCity} onChange={e=>setSelCity(e.target.value)} style={selectSty}>
                <option value="">All cities</option>
                {CITIES.map(c=><option key={c}>{c}</option>)}
              </select>
            </FilterSection>
            <FilterSection title="Project type" last>
              <select value={selType} onChange={e=>setSelType(e.target.value)} style={selectSty}>
                <option value="">All types</option>
                {PROJECT_TYPES.map(t=><option key={t}>{t}</option>)}
              </select>
            </FilterSection>
          </div>
        </aside>

        {/* Results */}
        <main>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
            <span style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)"}}><strong style={{color:"var(--text)",fontFamily:"var(--font-display)"}}>{filtered.length}</strong> consultants found</span>
          </div>
          {filtered.length === 0 ? (
            <div style={{textAlign:"center",padding:"80px 24px",background:"var(--surface)",borderRadius:"20px",border:"1px solid var(--border)"}}>
              <div style={{fontSize:"48px",marginBottom:"16px"}}>🔍</div>
              <h3 style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:600,color:"var(--text)",marginBottom:"10px"}}>No consultants match your filters</h3>
              <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)",marginBottom:"20px"}}>Try broadening your search or submit a custom request.</p>
              <button onClick={clearAll} style={{background:"var(--accent)",border:"none",borderRadius:"16px",padding:"11px 28px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"white"}}>Clear filters</button>
            </div>
          ) : (
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"20px"}}>
              {filtered.map(c => <ConsultantCard key={c.id} consultant={c} onClick={()=>onViewConsultant(c.slug)} />)}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function FilterSection({ title, children, last }) {
  return (
    <div style={{borderBottom:last?"none":"1px solid var(--border)",paddingBottom:last?"0":"18px",marginBottom:last?"0":"18px"}}>
      <div style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"12px",color:"var(--text3)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"12px"}}>{title}</div>
      {children}
    </div>
  );
}

// ——— PROFILE PAGE ———
function ProfilePage({ slug, onBack, onNavigate, authUser, onAuthOpen }) {
  const consultant = CONSULTANTS.find(c=>c.slug===slug) || CONSULTANTS[0];
  const [enquiryOpen, setEnquiryOpen] = React.useState(false);
  const avatarBg = AVATAR_COLORS[consultant.id % AVATAR_COLORS.length];

  return (
    <div style={{minHeight:"100vh",background:"var(--bg)",paddingTop:68}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"24px 24px 0"}}>
        <button onClick={onBack} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",display:"flex",alignItems:"center",gap:"6px",padding:0,transition:"color 0.15s"}}
          onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"} onMouseLeave={e=>e.currentTarget.style.color="var(--text2)"}>← Back to consultants</button>
      </div>

      <div style={{maxWidth:1100,margin:"0 auto",padding:"24px",display:"grid",gridTemplateColumns:"1fr 340px",gap:"28px",alignItems:"start"}}>
        <div>
          {/* Header */}
          <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",padding:"32px",marginBottom:"20px",boxShadow:"var(--shadow-sm)"}}>
            <div style={{display:"flex",gap:"24px",alignItems:"flex-start"}}>
              <div style={{width:80,height:80,borderRadius:"50%",background:avatarBg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:"var(--font-display)",fontWeight:700,fontSize:"26px",color:"white"}}>{consultant.initials}</div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"}}>
                  <div>
                    <h1 style={{fontFamily:"var(--font-display)",fontSize:"32px",fontWeight:700,color:"var(--text)",letterSpacing:"-0.5px",margin:"0 0 6px"}}>{consultant.name}</h1>
                    <div style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"var(--accent)",fontWeight:500,marginBottom:"8px"}}>{consultant.expertise}</div>
                    <div style={{display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap"}}>
                      <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text3)"}}>📍 {consultant.city}</span>
                      <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text3)"}}>🗓 {consultant.yearsExp} yrs experience</span>
                      <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text3)"}}>💬 {consultant.enquiries} enquiries</span>
                    </div>
                  </div>
                  {consultant.featured && <span style={{background:"var(--accent-light)",color:"var(--accent)",borderRadius:"9999px",padding:"5px 14px",fontSize:"12px",fontWeight:600,fontFamily:"var(--font-body)"}}>⭐ Featured</span>}
                </div>
                <p style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"var(--text2)",lineHeight:"26px",margin:"18px 0 0",fontStyle:"italic"}}>"{consultant.tagline}"</p>
              </div>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"22px",paddingTop:"22px",borderTop:"1px solid var(--border)"}}>
              {consultant.tags.map(t=><span key={t} style={{background:"var(--accent-light)",borderRadius:"9999px",padding:"5px 14px",fontSize:"13px",fontFamily:"var(--font-body)",fontWeight:500,color:"var(--accent)"}}>{t}</span>)}
            </div>
          </div>

          <ProfileSection title="About">
            {consultant.bio.split("\n\n").map((p,i)=><p key={i} style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"var(--text2)",lineHeight:"26px",margin:"0 0 16px"}}>{p}</p>)}
          </ProfileSection>

          <ProfileSection title="Services">
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"14px"}}>
              {consultant.services.map((s,i)=>(
                <div key={i} style={{background:"var(--bg2)",borderRadius:"14px",padding:"18px"}}>
                  <div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:"16px",color:"var(--text)",marginBottom:"7px"}}>{s.name}</div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",lineHeight:"22px"}}>{s.desc}</div>
                </div>
              ))}
            </div>
          </ProfileSection>

          <ProfileSection title="Portfolio" last>
            {consultant.portfolio.map((p,i)=>(
              <div key={i} style={{border:"1px solid var(--border)",borderRadius:"16px",overflow:"hidden",background:"var(--surface)",marginBottom:"14px",display:"grid",gridTemplateColumns:"200px 1fr",boxShadow:"var(--shadow-sm)"}}>
                <div style={{background:`repeating-linear-gradient(45deg,var(--bg2) 0,var(--bg2) 7px,var(--bg) 7px,var(--bg) 14px)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px",gap:"4px"}}>
                  <span style={{fontFamily:"var(--font-body)",fontSize:"11px",color:"var(--text3)",textAlign:"center"}}>project images</span>
                  <span style={{fontFamily:"var(--font-body)",fontSize:"11px",color:"var(--text3)"}}>{p.images} photos</span>
                </div>
                <div style={{padding:"22px"}}>
                  <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:"8px",gap:"8px"}}>
                    <h3 style={{fontFamily:"var(--font-display)",fontSize:"18px",fontWeight:600,color:"var(--text)",margin:0}}>{p.name}</h3>
                    <span style={{background:"var(--accent-light)",borderRadius:"9999px",padding:"3px 10px",fontSize:"12px",fontFamily:"var(--font-body)",fontWeight:500,color:"var(--accent)",whiteSpace:"nowrap"}}>{p.type}</span>
                  </div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)",marginBottom:"10px"}}>📍 {p.location}</div>
                  <p style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",lineHeight:"22px",margin:0}}>{p.desc}</p>
                </div>
              </div>
            ))}
          </ProfileSection>
        </div>

        {/* Sidebar */}
        <aside style={{position:"sticky",top:"88px",display:"flex",flexDirection:"column",gap:"16px"}}>
          <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",padding:"24px",boxShadow:"var(--shadow-sm)"}}>
            <h3 style={{fontFamily:"var(--font-display)",fontSize:"20px",fontWeight:700,color:"var(--text)",marginBottom:"8px"}}>Work with {consultant.name.split(" ")[0]}</h3>
            <p style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",lineHeight:"22px",marginBottom:"20px"}}>Send a brief note about your project — they'll respond within 24 hours.</p>
            <button onClick={()=>authUser?setEnquiryOpen(true):onAuthOpen("signup")} style={{width:"100%",padding:"13px",background:"var(--cta)",border:"none",borderRadius:"16px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:500,color:"white",transition:"background 0.15s",marginBottom:"10px"}}
              onMouseEnter={e=>e.currentTarget.style.background="var(--cta-hover)"} onMouseLeave={e=>e.currentTarget.style.background="var(--cta)"}>
              {authUser?"Send Enquiry":"Sign in to Contact"}
            </button>
            {!authUser && <p style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)",textAlign:"center",margin:0}}>Free account required to contact consultants.</p>}
          </div>

          <div style={{background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:"20px",padding:"20px"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
              {[["📋",consultant.services.length,"Services"],["🗂",consultant.portfolio.length,"Projects"],["💬",consultant.enquiries,"Enquiries"],["📍",consultant.city,"Based in"]].map(([icon,val,label])=>(
                <div key={label} style={{textAlign:"center"}}>
                  <div style={{fontSize:"20px",marginBottom:"2px"}}>{icon}</div>
                  <div style={{fontFamily:"var(--font-display)",fontSize:"20px",fontWeight:700,color:"var(--text)"}}>{val}</div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",padding:"20px"}}>
            <div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:"15px",color:"var(--text)",marginBottom:"14px"}}>Similar consultants</div>
            {CONSULTANTS.filter(c=>c.id!==consultant.id&&c.city===consultant.city).slice(0,2).map(c=>(
              <ConsultantCard key={c.id} consultant={c} onClick={()=>window.scrollTo(0,0)} compact />
            ))}
          </div>
        </aside>
      </div>

      {enquiryOpen && <EnquiryModal consultant={consultant} onClose={()=>setEnquiryOpen(false)} />}
    </div>
  );
}

function ProfileSection({ title, children, last }) {
  return (
    <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",padding:"28px",marginBottom:last?"0":"16px",boxShadow:"var(--shadow-sm)"}}>
      <h2 style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,color:"var(--text)",marginBottom:"20px",paddingBottom:"16px",borderBottom:"1px solid var(--border)"}}>{title}</h2>
      {children}
    </div>
  );
}

function EnquiryModal({ consultant, onClose }) {
  const [form, setForm] = React.useState({name:"",phone:"",city:"",type:"",desc:""});
  const [sent, setSent] = React.useState(false);
  const set = (k,v) => setForm(f=>({...f,[k]:v}));
  const inputStyle = {width:"100%",padding:"11px 14px",border:"1px solid var(--border)",borderRadius:"12px",fontFamily:"var(--font-body)",fontSize:"14px",background:"white",color:"var(--text)",outline:"none",boxSizing:"border-box"};

  return (
    <div style={{position:"fixed",inset:0,zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(26,26,26,0.6)",backdropFilter:"blur(6px)"}} onClick={onClose}>
      <div style={{background:"var(--bg)",borderRadius:"24px",padding:"36px",width:"100%",maxWidth:"480px",boxShadow:"0 32px 80px rgba(0,0,0,0.2)"}} onClick={e=>e.stopPropagation()}>
        {sent ? (
          <div style={{textAlign:"center",padding:"20px 0"}}>
            <div style={{fontSize:"48px",marginBottom:"16px"}}>✅</div>
            <h3 style={{fontFamily:"var(--font-display)",fontSize:"24px",fontWeight:700,color:"var(--text)",marginBottom:"10px"}}>Enquiry sent!</h3>
            <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)",lineHeight:"24px",marginBottom:"24px"}}>{consultant.name} will get back to you within 24 hours.</p>
            <button onClick={onClose} style={{background:"var(--accent)",border:"none",borderRadius:"16px",padding:"12px 32px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:500,color:"white"}}>Done</button>
          </div>
        ) : (
          <>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"}}>
              <h3 style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,color:"var(--text)",margin:0}}>Contact {consultant.name.split(" ")[0]}</h3>
              <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",fontSize:"22px",color:"var(--text3)",padding:0,lineHeight:1}}>×</button>
            </div>
            <form onSubmit={e=>{e.preventDefault();setSent(true);}} style={{display:"flex",flexDirection:"column",gap:"14px"}}>
              <div><label style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:500,color:"var(--text2)",display:"block",marginBottom:"5px"}}>Your name</label><input required style={inputStyle} value={form.name} onChange={e=>set("name",e.target.value)} placeholder="Rahul Mehta" /></div>
              <div><label style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:500,color:"var(--text2)",display:"block",marginBottom:"5px"}}>Phone</label><input required style={inputStyle} value={form.phone} onChange={e=>set("phone",e.target.value)} placeholder="+91 98765 43210" /></div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
                <div><label style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:500,color:"var(--text2)",display:"block",marginBottom:"5px"}}>City</label><input style={inputStyle} value={form.city} onChange={e=>set("city",e.target.value)} placeholder="Mumbai" /></div>
                <div><label style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:500,color:"var(--text2)",display:"block",marginBottom:"5px"}}>Project type</label><select style={inputStyle} value={form.type} onChange={e=>set("type",e.target.value)}><option value="">Select…</option>{PROJECT_TYPES.map(t=><option key={t}>{t}</option>)}</select></div>
              </div>
              <div><label style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:500,color:"var(--text2)",display:"block",marginBottom:"5px"}}>Tell them about your project</label><textarea required style={{...inputStyle,height:"90px",resize:"vertical"}} value={form.desc} onChange={e=>set("desc",e.target.value)} placeholder="E.g. Looking to open a 40-cover café in Bandra, planning to launch in Q3 2026…" /></div>
              <button type="submit" style={{padding:"13px",background:"var(--cta)",border:"none",borderRadius:"16px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:500,color:"white",marginTop:"4px"}}
                onMouseEnter={e=>e.currentTarget.style.background="var(--cta-hover)"} onMouseLeave={e=>e.currentTarget.style.background="var(--cta)"}>Send Enquiry</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { DirectoryPage, ProfilePage });
