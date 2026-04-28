
// Plattr — Nav + Footer + Auth Modal (Design System v2)

const NAV_LINKS = [
  { label: "Consultants", page: "directory" },
  { label: "Resources",   page: "resources" },
  { label: "Tools",       page: "tools" },
  { label: "News",        page: "news" },
];

function PlattrLogo({ onClick }) {
  return (
    <button onClick={onClick} style={{background:"none",border:"none",cursor:"pointer",padding:0,display:"flex",alignItems:"center",gap:"8px"}}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="14" fill="#E9F7EE"/>
        <path d="M9 15 Q15 8 21 15 Q15 22 9 15Z" fill="#2D7B4F"/>
        <circle cx="15" cy="15" r="3" fill="#2D7B4F"/>
      </svg>
      <span style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"22px",color:"var(--text)",letterSpacing:"-0.02em"}}>Plattr</span>
    </button>
  );
}

function Nav({ currentPage, onNavigate, authUser, onAuthOpen, onAuthLogout }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:100,
      background:"#FFFFFF",
      borderBottom:`1px solid ${scrolled ? "var(--border)" : "var(--border)"}`,
      boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      transition:"box-shadow 0.2s ease"
    }}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px",height:68,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <PlattrLogo onClick={() => onNavigate("home")} />

        {/* Desktop links */}
        <div style={{display:"flex",alignItems:"center",gap:"36px",flex:1,justifyContent:"center"}}>
          {NAV_LINKS.map(l => (
            <button key={l.page} onClick={() => onNavigate(l.page)} style={{
              background:"none",border:"none",cursor:"pointer",padding:"4px 0",
              fontFamily:"var(--font-body)",fontSize:"16px",fontWeight:400,
              color: currentPage === l.page ? "var(--accent)" : "var(--text)",
              borderBottom: currentPage === l.page ? "2px solid var(--accent)" : "2px solid transparent",
              transition:"color 0.15s"
            }}
            onMouseEnter={e => e.currentTarget.style.color="var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.color= currentPage === l.page ? "var(--accent)" : "var(--text)"}
            >{l.label}</button>
          ))}
        </div>

        {/* Auth */}
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          {authUser ? (
            <>
              <span style={{fontSize:"14px",color:"var(--text2)",fontFamily:"var(--font-body)"}}>Hi, {authUser.name.split(" ")[0]}</span>
              <button onClick={onAuthLogout} style={{background:"none",border:"1px solid var(--border)",borderRadius:"12px",padding:"8px 18px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)"}}>Sign out</button>
            </>
          ) : (
            <>
              <button onClick={() => onAuthOpen("login")} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"16px",fontWeight:400,color:"var(--text)",padding:"8px 12px",transition:"color 0.15s"}}
                onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"}
                onMouseLeave={e=>e.currentTarget.style.color="var(--text)"}>Sign in</button>
              <button onClick={() => onAuthOpen("signup")} style={{background:"var(--accent)",border:"none",borderRadius:"12px",padding:"10px 20px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"#fff",transition:"background 0.15s"}}
                onMouseEnter={e=>e.currentTarget.style.background="var(--accent-dark)"}
                onMouseLeave={e=>e.currentTarget.style.background="var(--accent)"}>
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer style={{background:"rgb(26,26,26)",color:"rgba(255,255,255,0.7)",padding:"72px 24px 40px",marginTop:"0"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"56px",marginBottom:"56px"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"18px"}}>
              <svg width="26" height="26" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="14" fill="rgba(45,123,79,0.3)"/>
                <path d="M9 15 Q15 8 21 15 Q15 22 9 15Z" fill="#2D7B4F"/>
                <circle cx="15" cy="15" r="3" fill="#2D7B4F"/>
              </svg>
              <span style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"20px",color:"white",letterSpacing:"-0.02em"}}>Plattr</span>
            </div>
            <p style={{fontSize:"15px",lineHeight:1.75,color:"rgba(255,255,255,0.55)",maxWidth:"260px",fontFamily:"var(--font-body)"}}>
              India's hospitality ecosystem platform. Connecting restaurateurs with vetted consultants, knowledge, and tools.
            </p>
            <div style={{display:"flex",gap:"14px",marginTop:"24px"}}>
              {["𝕏","in","◎"].map(s => (
                <button key={s} style={{width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,0.08)",border:"none",cursor:"pointer",color:"rgba(255,255,255,0.6)",fontFamily:"var(--font-body)",fontSize:"14px",transition:"background 0.15s"}}
                  onMouseEnter={e=>e.currentTarget.style.background="rgba(45,123,79,0.4)"}
                  onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.08)"}>{s}</button>
              ))}
            </div>
          </div>
          {[
            { title:"Platform", links:["Consultants","Resources","Tools","News"] },
            { title:"Company",  links:["About","Contact","Careers","Blog"] },
            { title:"Legal",    links:["Privacy Policy","Terms of Service","Cookie Policy"] },
          ].map(col => (
            <div key={col.title}>
              <div style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"13px",color:"rgba(255,255,255,0.9)",marginBottom:"18px",textTransform:"uppercase",letterSpacing:"0.08em"}}>{col.title}</div>
              {col.links.map(l => (
                <div key={l} style={{marginBottom:"12px"}}>
                  <button onClick={() => col.title==="Platform" && onNavigate(l.toLowerCase())} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"15px",color:"rgba(255,255,255,0.55)",padding:0,transition:"color 0.15s"}}
                    onMouseEnter={e=>e.currentTarget.style.color="rgba(255,255,255,0.9)"}
                    onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.55)"}>{l}</button>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:"28px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"rgba(255,255,255,0.4)"}}>© 2026 Plattr. All rights reserved.</span>
          <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"rgba(255,255,255,0.4)"}}>Made with care in India 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
}

function AuthModal({ mode, onClose, onSuccess }) {
  const [tab, setTab] = React.useState(mode || "login");
  const [role, setRole] = React.useState("founder");
  const [form, setForm] = React.useState({ name:"", email:"", password:"", phone:"", city:"", stage:"exploring", expertise:"", years:"", bio:"" });
  const [loading, setLoading] = React.useState(false);
  const [step, setStep] = React.useState(1);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tab === "signup" && role === "consultant" && step === 1) { setStep(2); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onSuccess({ name: form.name || "Guest", email: form.email, role }); }, 900);
  };

  const inputStyle = { width:"100%", padding:"11px 14px", border:"1px solid var(--border)", borderRadius:"12px", fontFamily:"var(--font-body)", fontSize:"15px", background:"white", color:"var(--text)", outline:"none", boxSizing:"border-box", transition:"border-color 0.15s" };
  const labelStyle = { fontFamily:"var(--font-body)", fontSize:"13px", fontWeight:500, color:"var(--text2)", display:"block", marginBottom:"6px" };

  return (
    <div style={{position:"fixed",inset:0,zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(26,26,26,0.6)",backdropFilter:"blur(6px)"}} onClick={onClose}>
      <div style={{background:"var(--bg)",borderRadius:"24px",padding:"40px",width:"100%",maxWidth:"440px",boxShadow:"0 32px 80px rgba(0,0,0,0.2)"}} onClick={e=>e.stopPropagation()}>
        <div style={{display:"flex",borderBottom:"1px solid var(--border)",marginBottom:"28px"}}>
          {["login","signup"].map(t => (
            <button key={t} onClick={() => { setTab(t); setStep(1); }} style={{flex:1,background:"none",border:"none",cursor:"pointer",padding:"10px",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:tab===t?600:400,color:tab===t?"var(--text)":"var(--text3)",borderBottom:tab===t?"2px solid var(--accent)":"2px solid transparent",marginBottom:"-1px",textTransform:"capitalize",transition:"color 0.15s"}}>
              {t === "login" ? "Sign in" : "Create account"}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          {tab === "signup" && step === 1 && (
            <>
              <div style={{marginBottom:"20px"}}>
                <label style={labelStyle}>I am a…</label>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
                  {["founder","consultant"].map(r => (
                    <button type="button" key={r} onClick={() => setRole(r)} style={{padding:"12px",border:`2px solid ${role===r?"var(--accent)":"var(--border)"}`,borderRadius:"12px",background:role===r?"var(--accent-light)":"white",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:role===r?600:400,color:role===r?"var(--accent)":"var(--text2)",textTransform:"capitalize",transition:"all 0.15s"}}>
                      {r === "founder" ? "🍽 Founder" : "💼 Consultant"}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{marginBottom:"14px"}}><label style={labelStyle}>Full name</label><input style={inputStyle} required value={form.name} onChange={e=>set("name",e.target.value)} placeholder="Rahul Mehta" /></div>
              <div style={{marginBottom:"14px"}}><label style={labelStyle}>Email</label><input style={inputStyle} type="email" required value={form.email} onChange={e=>set("email",e.target.value)} placeholder="you@example.com" /></div>
              <div style={{marginBottom:"14px"}}><label style={labelStyle}>Phone</label><input style={inputStyle} type="tel" value={form.phone} onChange={e=>set("phone",e.target.value)} placeholder="+91 98765 43210" /></div>
              <div style={{marginBottom:"14px"}}><label style={labelStyle}>City</label><select style={inputStyle} value={form.city} onChange={e=>set("city",e.target.value)} required><option value="">Select city</option>{CITIES.map(c=><option key={c}>{c}</option>)}</select></div>
              {role === "founder" && (
                <div style={{marginBottom:"20px"}}><label style={labelStyle}>Where are you in your journey?</label>
                  <select style={inputStyle} value={form.stage} onChange={e=>set("stage",e.target.value)}>
                    <option value="exploring">Exploring / Early research</option>
                    <option value="planning">Planning / Concept stage</option>
                    <option value="ready">Ready to launch</option>
                    <option value="operating">Already operating</option>
                  </select>
                </div>
              )}
            </>
          )}
          {tab === "signup" && role === "consultant" && step === 2 && (
            <>
              <div style={{marginBottom:"8px",fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>Step 2 of 2 — Professional details</div>
              <div style={{marginBottom:"14px"}}><label style={labelStyle}>Primary expertise</label><select style={inputStyle} value={form.expertise} onChange={e=>set("expertise",e.target.value)} required><option value="">Select expertise</option>{CATEGORIES.map(c=><option key={c}>{c}</option>)}</select></div>
              <div style={{marginBottom:"14px"}}><label style={labelStyle}>Years of experience</label><input style={inputStyle} type="number" min="1" max="40" value={form.years} onChange={e=>set("years",e.target.value)} placeholder="8" /></div>
              <div style={{marginBottom:"14px"}}><label style={labelStyle}>Portfolio link <span style={{color:"var(--text3)"}}>(optional)</span></label><input style={inputStyle} value={form.portfolio} onChange={e=>set("portfolio",e.target.value)} placeholder="linkedin.com/in/..." /></div>
              <div style={{marginBottom:"16px"}}><label style={labelStyle}>Brief bio</label><textarea style={{...inputStyle,height:"90px",resize:"vertical"}} value={form.bio} onChange={e=>set("bio",e.target.value)} placeholder="Tell founders about your background and approach..." /></div>
              <div style={{background:"var(--accent-light)",border:"1px solid rgba(45,123,79,0.2)",borderRadius:"10px",padding:"12px 14px",marginBottom:"16px",fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--accent-dark)"}}>
                Your application will be reviewed within 48 hours before your profile goes live.
              </div>
            </>
          )}
          {tab === "login" && (
            <>
              <div style={{marginBottom:"14px"}}><label style={labelStyle}>Email</label><input style={inputStyle} type="email" required value={form.email} onChange={e=>set("email",e.target.value)} placeholder="you@example.com" /></div>
              <div style={{marginBottom:"20px"}}><label style={labelStyle}>Password</label><input style={inputStyle} type="password" required value={form.password} onChange={e=>set("password",e.target.value)} placeholder="••••••••" /></div>
            </>
          )}
          <button type="submit" disabled={loading} style={{width:"100%",padding:"13px",background:"var(--accent)",border:"none",borderRadius:"16px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:600,color:"white",transition:"background 0.15s",opacity:loading?0.7:1}}
            onMouseEnter={e=>{if(!loading)e.currentTarget.style.background="var(--accent-dark)"}}
            onMouseLeave={e=>e.currentTarget.style.background="var(--accent)"}>
            {loading ? "Just a moment…" : tab === "login" ? "Sign in" : role === "consultant" && step === 1 ? "Continue →" : role === "consultant" ? "Submit Application" : "Create Account"}
          </button>
          <div style={{marginTop:"16px",textAlign:"center"}}>
            <button type="button" onClick={() => { setTab(tab==="login"?"signup":"login"); setStep(1); }} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--accent)"}}>
              {tab === "login" ? "New here? Create an account" : "Already have an account? Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Consultant avatar colors
const AVATAR_COLORS = ["#2D7B4F","#D67729","#4A7EC4","#9B59B6","#E74C3C","#16A085","#C0392B","#2980B9"];

function ConsultantCard({ consultant, onClick, compact }) {
  const avatarBg = AVATAR_COLORS[consultant.id % AVATAR_COLORS.length];
  return (
    <div onClick={onClick} style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",padding:compact?"18px":"24px",cursor:"pointer",transition:"all 0.2s",boxShadow:"none",display:"flex",flexDirection:"column",gap:"12px"}}
      onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--shadow-card)";e.currentTarget.style.transform="translateY(-3px)"}}
      onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="translateY(0)"}}>
      <div style={{display:"flex",alignItems:"flex-start",gap:"14px"}}>
        <div style={{width:compact?44:52,height:compact?44:52,borderRadius:"50%",background:avatarBg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:"var(--font-display)",fontWeight:700,fontSize:compact?15:18,color:"white"}}>
          {consultant.initials}
        </div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"8px"}}>
            <div>
              <div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:compact?15:18,color:"var(--text)",marginBottom:"2px"}}>{consultant.name}</div>
              <div style={{fontFamily:"var(--font-body)",fontSize:13,color:"var(--text2)"}}>{consultant.expertise}</div>
            </div>
            {consultant.featured && <span style={{background:"var(--accent-light)",color:"var(--accent)",borderRadius:"9999px",padding:"3px 10px",fontSize:"11px",fontWeight:600,fontFamily:"var(--font-body)",whiteSpace:"nowrap"}}>Featured</span>}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"8px",marginTop:"6px"}}>
            <span style={{fontFamily:"var(--font-body)",fontSize:13,color:"var(--text3)"}}>📍 {consultant.city}</span>
            <span style={{color:"var(--border)"}}>·</span>
            <span style={{fontFamily:"var(--font-body)",fontSize:13,color:"var(--text3)"}}>{consultant.yearsExp} yrs exp</span>
          </div>
        </div>
      </div>
      {!compact && <p style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",lineHeight:1.65,margin:0}}>{consultant.tagline}</p>}
      {!compact && (
        <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
          {consultant.tags.slice(0,3).map(t=>(
            <span key={t} style={{background:"var(--accent-light)",borderRadius:"9999px",padding:"4px 12px",fontSize:"12px",fontFamily:"var(--font-body)",fontWeight:500,color:"var(--accent)"}}>{t}</span>
          ))}
        </div>
      )}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"10px",borderTop:"1px solid var(--border)"}}>
        <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>{consultant.enquiries} enquiries</span>
        <span style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"var(--accent)"}}>View Profile →</span>
      </div>
    </div>
  );
}

Object.assign(window, { Nav, Footer, AuthModal, ConsultantCard, PlattrLogo, AVATAR_COLORS });
