
// Plattr — Nav + Footer + Auth Modal

const NAV_LINKS = [
  { label: "Consultants", page: "directory" },
  { label: "Resources", page: "resources" },
  { label: "Tools", page: "tools" },
  { label: "News", page: "news" },
];

function PlattrLogo({ onClick }) {
  return (
    <button onClick={onClick} style={{background:"none",border:"none",cursor:"pointer",padding:0,display:"flex",alignItems:"center",gap:"8px"}}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke="var(--accent)" strokeWidth="2"/>
        <path d="M8 14 Q14 8 20 14 Q14 20 8 14Z" fill="var(--accent)" opacity="0.9"/>
        <circle cx="14" cy="14" r="2.5" fill="var(--accent)"/>
      </svg>
      <span style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"20px",color:"var(--text)",letterSpacing:"-0.02em"}}>Plattr</span>
    </button>
  );
}

function Nav({ currentPage, onNavigate, authUser, onAuthOpen, onAuthLogout }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:100,
      background: scrolled ? "rgba(252,249,244,0.97)" : "rgba(252,249,244,0.92)",
      backdropFilter:"blur(12px)",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition:"all 0.2s ease"
    }}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <PlattrLogo onClick={() => onNavigate("home")} />

        {/* Desktop links */}
        <div style={{display:"flex",alignItems:"center",gap:"32px",flex:1,justifyContent:"center"}}>
          {NAV_LINKS.map(l => (
            <button key={l.page} onClick={() => onNavigate(l.page)} style={{
              background:"none",border:"none",cursor:"pointer",padding:"4px 0",
              fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:500,
              color: currentPage === l.page ? "var(--accent)" : "var(--text2)",
              borderBottom: currentPage === l.page ? "2px solid var(--accent)" : "2px solid transparent",
              transition:"color 0.15s"
            }}>{l.label}</button>
          ))}
        </div>

        {/* Auth */}
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          {authUser ? (
            <>
              <span style={{fontSize:"14px",color:"var(--text2)",fontFamily:"var(--font-body)"}}>Hi, {authUser.name.split(" ")[0]}</span>
              <button onClick={onAuthLogout} style={{background:"none",border:"1px solid var(--border)",borderRadius:"8px",padding:"7px 16px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)"}}>Sign out</button>
            </>
          ) : (
            <>
              <button onClick={() => onAuthOpen("login")} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:500,color:"var(--text2)",padding:"7px 12px"}}>Sign in</button>
              <button onClick={() => onAuthOpen("signup")} style={{background:"var(--accent)",border:"none",borderRadius:"8px",padding:"8px 18px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:600,color:"#fff",transition:"opacity 0.15s"}}
                onMouseEnter={e=>e.target.style.opacity=0.88} onMouseLeave={e=>e.target.style.opacity=1}>
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
    <footer style={{background:"var(--text)",color:"rgba(255,255,255,0.55)",padding:"64px 24px 40px",marginTop:"80px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"48px",marginBottom:"48px"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"16px"}}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="var(--accent)" strokeWidth="2"/>
                <path d="M8 14 Q14 8 20 14 Q14 20 8 14Z" fill="var(--accent)" opacity="0.9"/>
                <circle cx="14" cy="14" r="2.5" fill="var(--accent)"/>
              </svg>
              <span style={{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"18px",color:"white",letterSpacing:"-0.02em"}}>Plattr</span>
            </div>
            <p style={{fontSize:"14px",lineHeight:1.7,color:"rgba(255,255,255,0.5)",maxWidth:"260px",fontFamily:"var(--font-body)"}}>
              India's hospitality ecosystem platform. Connecting restaurateurs with the consultants, knowledge, and tools they need to succeed.
            </p>
          </div>
          <div>
            <div style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"13px",color:"rgba(255,255,255,0.8)",marginBottom:"16px",textTransform:"uppercase",letterSpacing:"0.08em"}}>Platform</div>
            {["Consultants","Resources","Tools","News"].map(l => (
              <div key={l} style={{marginBottom:"10px"}}>
                <button onClick={() => onNavigate(l.toLowerCase())} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",color:"rgba(255,255,255,0.5)",padding:0,transition:"color 0.15s"}}
                  onMouseEnter={e=>e.target.style.color="rgba(255,255,255,0.85)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.5)"}>{l}</button>
              </div>
            ))}
          </div>
          <div>
            <div style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"13px",color:"rgba(255,255,255,0.8)",marginBottom:"16px",textTransform:"uppercase",letterSpacing:"0.08em"}}>Company</div>
            {["About","Contact","Careers","Blog"].map(l => (
              <div key={l} style={{marginBottom:"10px"}}>
                <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"rgba(255,255,255,0.5)"}}>{l}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"13px",color:"rgba(255,255,255,0.8)",marginBottom:"16px",textTransform:"uppercase",letterSpacing:"0.08em"}}>Legal</div>
            {["Privacy Policy","Terms of Service","Cookie Policy"].map(l => (
              <div key={l} style={{marginBottom:"10px"}}>
                <span style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"rgba(255,255,255,0.5)"}}>{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:"24px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontFamily:"var(--font-body)",fontSize:"13px"}}>© 2026 Plattr. All rights reserved.</span>
          <span style={{fontFamily:"var(--font-body)",fontSize:"13px"}}>Made with care for India's F&B founders.</span>
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
    if (tab === "signup" && role === "consultant" && step === 1) {
      setStep(2); return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess({ name: form.name || "Guest", email: form.email, role });
    }, 900);
  };

  const inputStyle = { width:"100%", padding:"10px 14px", border:"1px solid var(--border)", borderRadius:"8px", fontFamily:"var(--font-body)", fontSize:"14px", background:"white", color:"var(--text)", outline:"none", boxSizing:"border-box" };
  const labelStyle = { fontFamily:"var(--font-body)", fontSize:"13px", fontWeight:500, color:"var(--text2)", display:"block", marginBottom:"6px" };

  return (
    <div style={{position:"fixed",inset:0,zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(20,16,12,0.55)",backdropFilter:"blur(4px)"}} onClick={onClose}>
      <div style={{background:"var(--bg)",borderRadius:"16px",padding:"40px",width:"100%",maxWidth:"440px",boxShadow:"0 24px 80px rgba(0,0,0,0.2)"}} onClick={e=>e.stopPropagation()}>
        {/* Tabs */}
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
              {/* Role selector */}
              <div style={{marginBottom:"20px"}}>
                <label style={labelStyle}>I am a…</label>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
                  {["founder","consultant"].map(r => (
                    <button type="button" key={r} onClick={() => setRole(r)} style={{padding:"12px",border:`2px solid ${role===r?"var(--accent)":"var(--border)"}`,borderRadius:"10px",background:role===r?"var(--accent-light)":"white",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:role===r?600:400,color:role===r?"var(--accent)":"var(--text2)",textTransform:"capitalize",transition:"all 0.15s"}}>
                      {r === "founder" ? "🍽 Founder / Restaurateur" : "💼 Consultant"}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{marginBottom:"16px"}}><label style={labelStyle}>Full name</label><input style={inputStyle} required value={form.name} onChange={e=>set("name",e.target.value)} placeholder="Rahul Mehta" /></div>
              <div style={{marginBottom:"16px"}}><label style={labelStyle}>Email</label><input style={inputStyle} type="email" required value={form.email} onChange={e=>set("email",e.target.value)} placeholder="you@example.com" /></div>
              <div style={{marginBottom:"16px"}}><label style={labelStyle}>Phone</label><input style={inputStyle} type="tel" value={form.phone} onChange={e=>set("phone",e.target.value)} placeholder="+91 98765 43210" /></div>
              <div style={{marginBottom:"16px"}}>
                <label style={labelStyle}>City</label>
                <select style={inputStyle} value={form.city} onChange={e=>set("city",e.target.value)} required>
                  <option value="">Select city</option>
                  {CITIES.map(c=><option key={c}>{c}</option>)}
                </select>
              </div>
              {role === "founder" && (
                <div style={{marginBottom:"24px"}}>
                  <label style={labelStyle}>Where are you in your journey?</label>
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
              <div style={{marginBottom:"6px",fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>Step 2 of 2 — Professional details</div>
              <div style={{marginBottom:"16px"}}>
                <label style={labelStyle}>Primary expertise</label>
                <select style={inputStyle} value={form.expertise} onChange={e=>set("expertise",e.target.value)} required>
                  <option value="">Select expertise</option>
                  {CATEGORIES.map(c=><option key={c}>{c}</option>)}
                </select>
              </div>
              <div style={{marginBottom:"16px"}}><label style={labelStyle}>Years of experience</label><input style={inputStyle} type="number" min="1" max="40" value={form.years} onChange={e=>set("years",e.target.value)} placeholder="8" /></div>
              <div style={{marginBottom:"16px"}}><label style={labelStyle}>Portfolio link <span style={{color:"var(--text3)"}}>(optional)</span></label><input style={inputStyle} value={form.portfolio} onChange={e=>set("portfolio",e.target.value)} placeholder="linkedin.com/in/..." /></div>
              <div style={{marginBottom:"24px"}}>
                <label style={labelStyle}>Brief bio <span style={{color:"var(--text3)"}}>(200–500 words)</span></label>
                <textarea style={{...inputStyle,height:"100px",resize:"vertical"}} value={form.bio} onChange={e=>set("bio",e.target.value)} placeholder="Tell founders about your background and approach..." />
              </div>
              <div style={{background:"var(--accent-light)",border:"1px solid var(--accent)",borderRadius:"8px",padding:"12px 14px",marginBottom:"20px",fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--accent-dark)"}}>
                Your application will be reviewed before your profile goes live. We'll get back to you within 48 hours.
              </div>
            </>
          )}

          {tab === "login" && (
            <>
              <div style={{marginBottom:"16px"}}><label style={labelStyle}>Email</label><input style={inputStyle} type="email" required value={form.email} onChange={e=>set("email",e.target.value)} placeholder="you@example.com" /></div>
              <div style={{marginBottom:"24px"}}><label style={labelStyle}>Password</label><input style={inputStyle} type="password" required value={form.password} onChange={e=>set("password",e.target.value)} placeholder="••••••••" /></div>
            </>
          )}

          <button type="submit" disabled={loading} style={{width:"100%",padding:"12px",background:"var(--accent)",border:"none",borderRadius:"10px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"15px",fontWeight:600,color:"white",transition:"opacity 0.15s",opacity:loading?0.7:1}}>
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

// Consultant card used in directory + home
function ConsultantCard({ consultant, onClick, compact }) {
  const initials = consultant.initials;
  const colors = ["#C4714A","#4A7EC4","#4AC48A","#C4A84A","#A44AC4","#4AC4B8","#C44A6E","#8AC44A"];
  const bg = colors[consultant.id % colors.length];

  return (
    <div onClick={onClick} style={{background:"white",border:"1px solid var(--border)",borderRadius:"14px",padding:compact?"20px":"24px",cursor:"pointer",transition:"all 0.2s",display:"flex",flexDirection:"column",gap:"12px"}}
      onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.08)";e.currentTarget.style.transform="translateY(-2px)"}}
      onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="translateY(0)"}}>
      <div style={{display:"flex",alignItems:"flex-start",gap:"14px"}}>
        <div style={{width:compact?44:52,height:compact?44:52,borderRadius:"50%",background:bg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:"var(--font-body)",fontWeight:700,fontSize:compact?16:18,color:"white",letterSpacing:"-0.02em"}}>
          {initials}
        </div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"8px"}}>
            <div>
              <div style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:compact?14:15,color:"var(--text)",marginBottom:"2px"}}>{consultant.name}</div>
              <div style={{fontFamily:"var(--font-body)",fontSize:13,color:"var(--accent)",fontWeight:500}}>{consultant.expertise}</div>
            </div>
            {consultant.featured && <span style={{background:"var(--accent-light)",color:"var(--accent)",borderRadius:"6px",padding:"3px 8px",fontSize:"11px",fontWeight:600,fontFamily:"var(--font-body)",whiteSpace:"nowrap"}}>Featured</span>}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"8px",marginTop:"6px"}}>
            <span style={{fontFamily:"var(--font-body)",fontSize:13,color:"var(--text3)"}}>📍 {consultant.city}</span>
            <span style={{color:"var(--border)"}}>·</span>
            <span style={{fontFamily:"var(--font-body)",fontSize:13,color:"var(--text3)"}}>{consultant.yearsExp} yrs exp</span>
          </div>
        </div>
      </div>
      {!compact && <p style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",lineHeight:1.6,margin:0}}>{consultant.tagline}</p>}
      {!compact && (
        <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
          {consultant.tags.slice(0,3).map(t=>(
            <span key={t} style={{background:"var(--bg2)",borderRadius:"6px",padding:"3px 9px",fontSize:"12px",fontFamily:"var(--font-body)",color:"var(--text2)"}}>{t}</span>
          ))}
        </div>
      )}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"8px",borderTop:"1px solid var(--bg2)"}}>
        <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>{consultant.enquiries} enquiries</span>
        <span style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"var(--accent)"}}>View Profile →</span>
      </div>
    </div>
  );
}

Object.assign(window, { Nav, Footer, AuthModal, ConsultantCard, PlattrLogo });
